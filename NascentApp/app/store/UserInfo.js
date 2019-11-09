Ext.define('NascentApp.store.UserInfo', {
	extend: 'Ext.data.Store',

	alias: 'store.userInfo',

	model: 'NascentApp.model.UserInfo',
	data: [{
			companyName: "Aplite Info Solutions Pvt Ltd",
			dob: "11/20/2019",
			emailID: "prakash@aplite.com",
			firstName: "Prakash",
			lastName: "Meghwal",
			password: "admin",
			userName: "admin"
		}
	]
});
