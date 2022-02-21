sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.tasa.module2.controller.View1", {
            onInit: function () {
                let oModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(oModel);
                // this.router = this.getOwnerComponent().getRouter();
                // this.router.getRoute("VistaDetalle").attachPatternMatched(this._onObjectMatched, this);
                let params =  this.getOwnerComponent().getComponentData().startupParameters;
                console.log(params);
            },

            // _onObjectMatched:function(oEvent){
            //     let sObjectId =  oEvent.getParameter("arguments").objectId,
            //     oModel = this.getView().getModel();
            //     oModel.setProperty("/sObjectId",sObjectId);
            // }
        });
    });
