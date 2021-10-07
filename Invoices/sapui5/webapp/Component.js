sap.ui.define([
    "sap/ui/core/UIComponent",
    "kfc/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     */

    function (UIComponent, models, ResourceModel) {
        'use strict';

        return UIComponent.extend("kfc.sapui5.Component", {

            metadata : {

                manifest: "json"

            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on the view 
                this.setModel(models.createRecipient());

                // set i18n model on the view
                var i18nModel = new ResourceModel({ bundleName: "kfc.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });

    });