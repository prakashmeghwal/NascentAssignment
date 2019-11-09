/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('NascentApp.view.Login.LoginformController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.loginformcontroller',

	onLogin: function (sender, record) {
		debugger
		var me = this,
		Userdata = me.getView().getForm().getValues(),
		userStore = Ext.getStore('UserInfo'),
		record = userStore.findRecord('userName', Userdata.userId);
		if (me.getView().getForm().isValid()) {
			if (!Ext.isEmpty(record) && record.get('password') == Userdata.password) {
				Ext.Msg.alert('Success!', 'You are successfully logged in.', function (btn) {
					if (btn == "ok") {
						localStorage.setItem("TutorialLoggedIn", true);
						localStorage.setItem("LoggedInData", record.getData());
						me.getView().destroy();
						var mainView = Ext.create({
								xtype: 'app-main'
							});
						mainView.getViewModel().setData({
							name: record.get('firstName') + ' ' + record.get('lastName'),
							record: record.getData()
						})
					}
				});
			} else {
				Ext.Msg.alert('Oops!', 'Entered Email/Password is not correct.', function (btn) {
					if (btn == "ok") {
						form.reset();
					}
				});
			}
		} else {
			Ext.Msg.alert('Oops!', 'Please enter correct values or fill required fields.', '');
		}
	},

	onRagisterUser: function (sender, record) {
		debugger
		var userInfoStore = Ext.getStore('UserInfo'),
		record;
		if (this.getView().getForm().isValid()) {
			record = userInfoStore.add(this.getView().getForm().getValues());
			Ext.Msg.alert('Success!', 'You are successfully regitered.', btn => {
				if (btn == "ok") {
					this.getView().getForm().reset();
				}
			})
		}

	},
	onRagisterUserBtnClick: function (sender, record) {
		debugger
		this.getView().destroy();

		// Add the Login Window
		Ext.create({
			xtype: 'register'
		});
	},
	onLoginFromRegister: function (sender, record) {
		debugger
		this.getView().destroy();
		Ext.create({
			xtype: 'loginform'
		});
	},
	onClearUser: function () {
		this.getView().reset()
	}
});
