sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("gbi.controller.Details", {

        onInit: function () {

            this.router = sap.ui.core.UIComponent.getRouterFor(this);
            this.router.attachRoutePatternMatched(this.onRouteMatched, this);

        },
        onRouteMatched: function (oEvent) {
            var oParameters = oEvent.getParameters();
            var sEntityPath = "gbi>/" + oParameters.arguments.entity;
            this.getView().bindElement(sEntityPath);
        },
        formatCurrency: function (value) {
            var d = ".";
            var t = ",";
            var c = 2;
            var p = "$";
            c = isNaN(c = Math.abs(c)) ? 2 : c;
            var s = value < 0 ? "-" : "";
            var i = parseInt(value = Math.abs(+value || 0).toFixed(2)) + "";
            var j = (j = i.length) > 3 ? j % 3 : 0;
            return p + s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(value - i).toFixed(2).slice(2) : "");
        },
        date: function(date){
            return new Date(date).toLocaleDateString();
        },
        handleListItemPress: function (oItem) {

            var entity = oItem.getSource().getBindingContext("gbi").getPath().split("'");

            this.router.navTo("Orders", {
                from: "Master",
                entity: entity[1]
            });
        },
        imageURL: function(){
            return "http://h06.cob.csuchico.edu:8000/gbi-student-288/gbi/Parcial/Imagen/Imagen";
        }
    });
});