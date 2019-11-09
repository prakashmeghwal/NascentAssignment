/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NascentApp.view.Login.Register', {
	extend: 'Ext.Container',
	xtype: 'register',
	requires: [
		'NascentApp.view.Login.LoginformController',
		'Ext.plugin.Viewport'
	],
	layout: 'center',
	plugins: 'viewport',
	items: {
		xtype: 'form',
		frame: true,
		title: 'Register',
		bodyPadding: 10,
		reference: 'registrationform',
		scrollable: true,
		width: 355,
		controller: 'loginformcontroller',
		fieldDefaults: {
			labelAlign: "right",
			labelWidth: 115,
			msgTarget: 'side'
		},

		items: [{
				xtype: 'fieldset',
				title: 'User Info',
				defaultType: 'textfield',
				defaults: {
					anchor: '100%'
				},

				items: [{
						allowBlank: false,
						fieldLabel: 'User ID',
						name: 'userName',
						emptyText: 'user id'
					}, {
						allowBlank: false,
						fieldLabel: 'Password',
						name: 'password',
						emptyText: 'password',
						inputType: 'password',
						maxLength: 15,
						minLength: 8
					}
				]
			}, {
				xtype: 'fieldset',
				title: 'Contact Information',
				defaultType: 'textfield',
				defaults: {
					anchor: '100%'
				},

				items: [{
						fieldLabel: 'First Name',
						emptyText: 'First Name',
						name: 'firstName',
						allowBlank: false,
						type: 'text'
					}, {
						fieldLabel: 'Last Name',
						emptyText: 'Last Name',
						name: 'lastName',
						allowBlank: false,
						type: 'text'
					}, {
						fieldLabel: 'Company',
						name: 'companyName',
						allowBlank: false,
						type: 'text'
					}, {
						fieldLabel: 'Email',
						name: 'emailID',
						allowBlank: false,
						vtype: 'email'
					}, {
						xtype: 'datefield',
						fieldLabel: 'Date of Birth',
						name: 'dob',
						allowBlank: false,
						maxValue: new Date()
					}
				]
			}
		],

		buttons: [{
				text: 'Register',
				formBind: true,
				listeners: {
					click: 'onRagisterUser'
				}
			}, {
				text: 'Login',
				listeners: {
					click: 'onLoginFromRegister'
				}
			}, {
				xtype: 'button',
				text: 'Clear',
				handler: 'onClearUser'
			}
		]
	}
});
