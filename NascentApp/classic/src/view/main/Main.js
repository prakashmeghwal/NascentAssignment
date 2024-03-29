/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NascentApp.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'NascentApp.view.main.MainController',
		'NascentApp.view.main.MainModel',
		'NascentApp.view.main.List',
		'NascentApp.view.Login.UserInformation'
	],

	controller: 'main',
	viewModel: 'main',
	plugins: 'viewport',
	ui: 'navigation',

	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list',
		items: [{
				xtype: 'button',
				text: 'Logout',
				margin: '10 0',
				handler: 'onClickButton'
			}
		]
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [{
			title: 'User List',
			iconCls: 'fa-home',
			// The following grid shares a store with the classic version's grid as well!
			items: [{
					xtype: 'mainlist'
				}
			]
		}, {

			title: 'Users Information',
			iconCls: 'fa-user',
			items: [{
					xtype: 'userInformation',
					bind: {
						values: '{record}'
					}
				}
			]
		}
	]
});
