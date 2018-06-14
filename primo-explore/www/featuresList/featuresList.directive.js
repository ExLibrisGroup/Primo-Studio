/**
 * Created by shoulm on 11/02/2018.
 */
class FeaturesList{

    constructor(featuresService, iframeService, configurationService, ngDialog){
        this.featuresService= featuresService;
        this.iframeService= iframeService;
        this.configurationService= configurationService;
        this.ngDialog = ngDialog;

        this.inProgress = {};
        this.features = [];
        this.featuresService.fetchFeaturesData().then((data)=>{
            this.features = data;
        })
    }

    selectFeature(addOn){
        if(addOn.config){
            let addOnConfigFromSubmitCallback = this.addFeature.bind(this, addOn);
            let dialogOptions = this.ngDialog.open({
                data: {featureConfigFromSubmitCallback: addOnConfigFromSubmitCallback, config: addOn.config},
                template: `
                <prm-feature-configuration-form 
                    form-fields-config="ngDialogData.config" on-submit="ngDialogData.featureConfigFromSubmitCallback">
                </prm-feature-configuration-form>`,
                plain: true
            });
            this.closeDialog = dialogOptions.close;
        }
        else{
            this.addFeature(addOn);
        }
    }


    addFeature(addOn, featureConfigData){
        let npmid= addOn.npmid;
        if (this.closeDialog){ //close open config dialog
            this.closeDialog();
            this.closeDialog = undefined;
        }
        this.inProgress[npmid] = true;
        this.featuresService.addFeature(addOn, featureConfigData).then((resp)=>{
            this.inProgress[npmid] = false;
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            this.inProgress[npmid] = false;
        });
    }

    removeFeature(npmid, hook){
        this.inProgress[npmid] = true;
        this.featuresService.removeFeature(npmid, hook).then((resp)=>{
            this.inProgress[npmid] = false;
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            this.inProgress[npmid] = false;
        });
    }

    getFeatures(){
        return this.features;
    }

    isFeatureInstalled(npmid){
        return this.configurationService.config.installedFeatures.indexOf(npmid) > -1;
    }

}

FeaturesList.$inject=['featuresService', 'iframeService', 'configurationService', 'ngDialog'];

module.exports = {
    name: 'prmFeaturesList',
    config: {
        controller: FeaturesList,
        templateUrl: '/featuresList/features-list.html'
    }
}