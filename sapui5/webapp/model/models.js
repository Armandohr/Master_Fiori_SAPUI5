sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';

    return {
        createRecipient: function () {
            const oData = {
                recipient: {
                    name: "World"
                }
            }
            return new JSONModel(oData);
        }
    }
});