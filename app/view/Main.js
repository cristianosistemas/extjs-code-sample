/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Application Main view, created by viewport, contains all sub views
 */
Ext.define("ExtJSCodeSample.view.Main", {
    extend: 'Ext.Container',
    alias: 'widget.mainView',

    requires: [
        'ExtJSCodeSample.view.header.HeaderView',
        'ExtJSCodeSample.view.crud.CRUDView',
        'ExtJSCodeSample.view.socket.SocketView'
    ],

    layout: {
        type: 'vbox'
    },

    items: [{
            xtype: 'container',
            width: '100%',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'crudView',
                hidden: true
            },{
                xtype: 'socketView',
                hidden: true
            }]
        }]
});