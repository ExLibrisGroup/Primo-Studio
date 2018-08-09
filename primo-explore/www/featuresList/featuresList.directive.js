/**
 * Created by shoulm on 11/02/2018.
 */
class FeaturesList{

    constructor(featuresService, iframeService, configurationService, ngDialog, analytics, $scope){
        this.featuresService= featuresService;
        this.iframeService= iframeService;
        this.configurationService= configurationService;
        this.ngDialog = ngDialog;
        this.analytics = analytics;
        this.$scope = $scope;
        this.analytics.pageView();
        this.selectedFilterField = 'all';
        this.searchTerm = '';
        this.filterOptions = [{key:'what', displayName: 'Title'}, {key:'hook', displayName: 'Hook'}, {key:'who', displayName: 'Contributor'}];

        this.filerPredicateBinded = this.filterPredicate.bind(this);

        this.inProgress = {};
        this.features = [];
        this.featuresService.fetchFeaturesData().then((data)=>{
            this.features = data;
            this.features = _.filter(this.features, (feature)=> {
                if (feature.systemExclusive) {
                    if (this.configurationService.config.ve) {
                        return feature.systemExclusive.toLowerCase() === "ve";
                    } else {
                        return feature.systemExclusive.toLowerCase() === "primo";
                    }
                } else {
                    return true;
                }
            })
        })
    }

    $onInit() {
        this.$scope.$watchGroup([() => this.selectedFilterField, () => this.searchTerm], () => {
            this.analytics.trackEvent('Addons', 'filterChange', this.selectedFilterField + " - " + this.searchTerm);
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
        this.analytics.trackEvent('Addons', 'addFeature', addOn.npmid + " - " + featureConfigData);
    }

    removeFeature(npmid, hook){
        this.inProgress[npmid] = true;
        this.featuresService.removeFeature(npmid, hook).then((resp)=>{
            this.inProgress[npmid] = false;
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            this.inProgress[npmid] = false;
        });
        this.analytics.trackEvent('Addons', 'removeFeature', npmid);
    }

    getFeatures(){
        return this.features;
    }

    isFeatureInstalled(npmid){
        return this.configurationService.config.installedFeatures.indexOf(npmid) > -1;
    }

    filterPredicate(value, index, array){
        if (!this.searchTerm){
            return true;
        }
        let filterTerm = this.searchTerm.toLowerCase();
        let fieldsToFilterBy = this.selectedFilterField === 'all'? this.filterOptions.map((value)=>value.key) : [this.selectedFilterField];
        for (let field of fieldsToFilterBy){
            if(!value[field]){
               continue;
            }
            if (value[field].toLowerCase().indexOf(filterTerm) > -1){
                return true;
            }
        }
        return false;
    }
}

FeaturesList.$inject=['featuresService', 'iframeService', 'configurationService', 'ngDialog', 'Analytics', '$scope'];

module.exports = {
    name: 'prmFeaturesList',
    config: {
        controller: FeaturesList,
        templateUrl: '/featuresList/features-list.html'
    }
}