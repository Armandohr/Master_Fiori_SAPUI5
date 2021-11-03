// @ts-nocheck
sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel',
    "./controller/HelloDialog"

], function (UIComponent, Models, ResourceModel, HelloDialog) {

    return UIComponent.extend("logaligroup.sapui5.Component", {

        metadata: {
            "rootView": {
                "viewName": "logaligroup.sapui5.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },
        
        init: function () {
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model on the view
            this.setModel(Models.createRecipient());
            //set i18n model on the view
            var i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
            this.setModel(i18nModel, "i18n");

            this._helloDialog = new HelloDialog(this.getRootControl());
            
        },

        exit: function () {
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            this._helloDialog.open();
        }
    });
});