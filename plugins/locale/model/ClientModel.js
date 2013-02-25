Ext.define('plugins.locale.model.ClientModel', function() {
   return {
       extend: 'Ext.data.Model',

       fields: [
           {name: 'client', type: 'object'},
           {name: 'method', type: 'string'},
           {name: 'key', type: 'string'}
       ]
   }
});