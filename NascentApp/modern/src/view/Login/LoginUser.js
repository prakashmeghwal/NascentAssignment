/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NascentApp.view.Login.LoginUser', {
	extend: 'Ext.form.Panel',
	xtype: 'loginform',
	requires: [
		'NascentApp.view.Login.LoginformController'
	],
	controller: 'loginformcontroller',
	title: 'Login',
	autoShow: true,
	bodyPadding: 20,
	width: 320,
	autoSize: true,

	items: [{
			xtype: 'textfield',
			allowBlank: false,
			required: true,
			label: 'User ID',
			name: 'user',
			placeholder: 'User id'
		}, {
			xtype: 'passwordfield',
			allowBlank: false,
			required: true,
			label: 'Password',
			name: 'pass',
			placeholder: 'Password'
		}, {
			xtype: 'checkbox',
			boxLabel: 'Remember me',
			name: 'remember'
		}
	],

	buttons: [{
			text: 'Login',
			handler: 'onLogin'
		}
	]
});
