/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'NascentApp.Application',

    name: 'NascentApp',

    requires: [
        // This will automatically load all classes in the NascentApp namespace
        // so that application classes do not need to require each other.
        'NascentApp.*'
    ],

    // The name of the initial view to create.
    // mainView: 'NascentApp.view.main.Main'
});
