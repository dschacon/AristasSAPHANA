sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.salesorgs", {

        onInit: function () {
            this.router = sap.ui.core.UIComponent.getRouterFor(this);
        },

        handleListItemPress: function (oItem) {

            var entity = oItem.getSource().getBindingContext("gbi").getPath().split("/");
            this.router.navTo("Customers", {
                from: "Master",
                entity: entity[1]
            });
            //location.reload();
        }
    });
});