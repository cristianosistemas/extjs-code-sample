Ext.define('plugins.locale.LocaleManager', function() {
    var clients = [];

    var _locales = {};
    var _locale = '';
    var _properties = {};

    /**
     * Load properties file for localizing components
     */
    function loadPropertiesFile() {
        var d = new plugins.locale.delegate.LocaleDelegate(loadPropertiesFileResultHandler, loadPropertiesFileFaultHandler, this);
        var rec = _locales.findRecord('id', _locale);
        d.loadPropertiesFile(rec.get('url'));
    }

    /**
     * Load localization properties file result handler
     *
     * @param result:Object
     */
    function loadPropertiesFileResultHandler(result) {
        var initialLoad = _properties.length ? false : true;

        _properties = result;

        updateClients();

        Ext.util.Cookies.set('locale', _locale);

        this.fireEvent(plugins.locale.event.LocaleEvent.LOCALE_CHANGED, {});

        if(initialLoad)
            this.fireEvent(plugins.locale.event.LocaleEvent.LOCALE_MANAGER_READY, {});
    }

    /**
     * Load localization properties file fault handler
     */
    function loadPropertiesFileFaultHandler() {
        //dispatch fault event
    }

    /**
     * Go over and update all localized components in the application
     */
    function updateClients() {
        var len = clients.length;
        for(var i=0; i<len; i++) {
            var c = clients[i];

            try {
                //c.getClient()[c.getMethod()].call(c.getClient(), eval('_properties.' + c.getKey()));
                c.client[c.method].call(c.client, eval('_properties.' + c.key));
            } catch(e) {
                continue;
            }
        }
    }

    return {
        extend: 'Ext.app.Controller',
        singleton: true,

        requires: [
            'plugins.locale.event.LocaleEvent',
            'plugins.locale.delegate.LocaleDelegate'
        ],

        /**
         * Get store of available locales
         *
         * @return {plugins.locale.store.LocalesStore}
         */
        getLocales: function() {
            return _locales;
        },

        /**
         * Set store of available locales
         *
         * @param value:plugins.locale.store.LocalesStore
         */
        setLocales: function(value) {
            _locales = value;

            this.fireEvent(plugins.locale.event.LocaleEvent.LOCALES_CHANGED, {});
        },

        /**
         * Get the currently selected locale
         *
         * @return {string}
         */
        getLocale: function() {
            return _locale;
        },

        /**
         * Set the current locale
         *
         * @param value:String
         */
        setLocale: function(value) {
            _locale = value;

            loadPropertiesFile.call(this);
        },

        /**
         * Get loaded locales object
         *
         * @return {{}}
         */
        getProperties: function() {
            return _properties;
        },

        /**
         * Get id of last loaded locale
         * @return {string}
         */
        getPersistedLocale: function() {
            return Ext.util.Cookies.get('locale');
        },

        /**
         * Register a client component for localization
         *
         * @param client:plugins.model.ClientModel
         */
        registerClient: function(client) {
            clients.push(client);
        }
    }
});