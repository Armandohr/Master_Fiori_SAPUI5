sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        'use strict';

        return Controller.extend("logaligroup.sapui5.controller.HelloPanel", {

            onInit: function () {

            },

            onShowHello: function() {
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");
                const sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },

            onOpenDialog: function() {
                this.getOwnerComponent().openHelloDialog();
            }
        });
    });