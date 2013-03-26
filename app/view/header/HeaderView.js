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
Ext.define("ExtJSCodeSample.view.header.HeaderView", {
    extend: 'Ext.Container',
    alias: 'widget.headerView',

    requires: [
        'ExtJSCodeSample.controls.Marquee'
    ],

    layout: {
        type: 'hbox',
        padding: 10
    },

    items: [{
        xtype: 'panel',
        width: 100,
        height: '100%',
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        items: [{
            xtype: 'container',
            plugins: [
                { ptype: 'localization', method: 'update', key: 'header.logo' }
            ]
        }]
    },{
        xtype: 'container',
        width: 10
    },{
        xtype: 'container',
        name: 'navigationContainer',
        flex: 1,
        height: '100%',
        hidden: true,
        padding: '18 0 0 0',
        items: [{
            xtype: 'button',
            action: 'nav',
            name: 'crud',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.crud' }
            ]
        },{
            xtype: 'button',
            action: 'nav',
            name: 'socket',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.sockets' }
            ]
        },{
            xtype: 'button',
            action: 'nav',
            name: 'map',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.maps' }
            ]
        }]
    },{
        xtype: 'container',
        flex: 1
    },{
        xtype: 'marquee',
        name: 'userInfo',
        padding: '4 0 0 0'
    },{
        xtype: 'container',
        width: 10
    },{
        xtype: 'combobox',
        valueField: 'id',
        displayField: 'label',
        name: 'locales',
        width: 100,
        editable: false,
        forceSelection: true
    }]
});