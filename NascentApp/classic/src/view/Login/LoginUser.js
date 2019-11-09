/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NascentApp.view.Login.LoginUser', {
	extend: 'Ext.Container',
	xtype: 'loginform',
	requires: [
		'NascentApp.view.Login.LoginformController',
		'Ext.plugin.Viewport'
	],
	layout: 'center',
	plugins: 'viewport',
	items: {
		xtype: 'form',
		title: 'Login',
		frame: true,
		autoShow: true,
		width: 320,
		height: 250,
		bodyPadding: 10,
		controller: 'loginformcontroller',
		defaultType: 'textfield',

		items: [{
				allowBlank: false,
				fieldLabel: 'User ID',
				name: 'userId',
				emptyText: 'user id',
				msgTarget: 'under'
			}, {
				allowBlank: false,
				fieldLabel: 'Password',
				name: 'password',
				emptyText: 'password',
				inputType: 'password'
			}, {
				xtype: 'checkbox',
				fieldLabel: 'Remember me',
				name: 'remember'
			}
		],

		buttons: [{
				text: 'Register',
				listeners: {
					click: 'onRagisterUserBtnClick'
				}
			}, {
				text: 'Login',
				listeners: {
					click: 'onLogin'
				}
			}
		]
	}
});
