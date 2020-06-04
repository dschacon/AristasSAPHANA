sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Customers", {

        onInit: function () {

            this.router = sap.ui.core.UIComponent.getRouterFor(this);
            this.router.attachRoutePatternMatched(this.onRouteMatched, this);

        },
        handleListItemPress: function (oItem) {

            var entity = oItem.getSource().getBindingContext("gbi").getPath().split("/");

            this.router.navTo("Details", {
                from: "Customer",
                entity: entity[1]
            });
        },
        onRouteMatched: function (oEvent) {
            var oParameters = oEvent.getParameters();
            
            if (oParameters.name !== "Customers") {
                return;
            }

            var sEntityPath = oParameters.arguments.entity;
            this.getView().bindElement("gbi>/" + sEntityPath);
        },
        handleNavButtonPress: function()
        {
            this.router.navTo("SalesOrganizations",
            {
                from: "Customers"
            });
            location.reload();
        }
    });
});