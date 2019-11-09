/**
 * This view is an example list of people.
 */
Ext.define('NascentApp.view.main.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'mainlist',

	requires: [
		'NascentApp.store.UserInfo'
	],

	title: 'User Information',

	store: 'UserInfo',

	columns: [{
			text: 'User Name',
			dataIndex: 'userName'
		}, {
			text: 'Name',
			dataIndex: 'firstName'
		}, {
			text: 'Email',
			dataIndex: 'emailID',
			flex: 1
		}, {
			text: 'DoB',
			dataIndex: 'dob',
			flex: 1
		}
	],

	listeners: {
		select: 'onItemSelected'
	}
});
