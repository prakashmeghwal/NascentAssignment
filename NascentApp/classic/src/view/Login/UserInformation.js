/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('NascentApp.view.Login.UserInformation', {
	extend: 'Ext.form.Panel',
	xtype: 'userInformation',
	title: 'User Information',
	bodyPadding: 10,
	scrollable: true,
	fieldDefaults: {
		labelAlign: "right",
		labelWidth: 115,
		msgTarget: ' side '
	},
	items: [{
			xtype: 'fieldset',
			title: 'User Info',
			defaultType: 'textfield',
			defaults: {
				anchor: '100 %'
			},

			items: [{
					xtype: 'displayfield',
					fieldLabel: 'User ID',
					name: 'userName'
				}
			]
		}, {
			xtype: 'fieldset',
			title: 'Contact Information ',
			defaultType: 'textfield',
			defaults: {
				anchor: ' 100 % '
			},
			items: [{
					xtype: 'displayfield',
					fieldLabel: 'First Name',
					name: 'firstName',
					allowBlank: false
				}, {
					xtype: 'displayfield',
					fieldLabel: 'Last Name',
					name: 'lastName'
				}, {
					xtype: 'displayfield',
					fieldLabel: 'Company',
					name: 'companyName '
				}, {
					xtype: 'displayfield',
					fieldLabel: 'Email',
					name: 'emailID'
				}, {
					xtype: 'displayfield',
					fieldLabel: 'Date of Birth ',
					name: 'dob'
				}
			]
		}
	]
});
