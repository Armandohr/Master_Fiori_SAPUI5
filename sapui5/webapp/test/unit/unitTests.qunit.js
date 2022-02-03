//@ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use extrict";

    sap.ui.require([
        "logaligroup/sapui5/test/unit/AllTests"
    ], function () {
        QUnit.start();
    })
});