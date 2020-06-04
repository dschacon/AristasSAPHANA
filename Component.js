sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/odata/ODataModel"
], function (UIComponent, ODataModel) {
    "use strict";
    return UIComponent.extend("gbi.Component", {
        metadata: {
            rootView: "gbi.view.App",

            routing: {

                config: {
                    viewType: "XML",
                    viewPath: "gbi.view",
                    targetControl: "splitApp",
                    clearTarget: true,
                    transition: "slide"
                },

                routes: [{
                        pattern: "",
                        name: "SalesOrganizations",
                        view: "salesorgs",
                        targetAggregation: "masterPages"
                    },
                    {
                        pattern:"{entity}",
                        name:"Customers",
                        view:"Customers",
                        targetAggregation:"masterPages"
                    },
                    {
                        pattern: "Ordenes/{entity}",
                        name: "Details",
                        view: "Details",
                        targetAggregation: "detailPages"
                    }
                ]
            }
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();

            var oModel = new ODataModel("http://h06.cob.csuchico.edu:8000/gbi-student-288/gbi/services/gbi.xsodata");
            this.setModel(oModel, 'gbi');
        }
    });
});