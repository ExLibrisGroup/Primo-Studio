/**
 * Created by shoulm on 11/02/2018.
 */
class FeaturesList{

    constructor(featuresService, iframeService, configurationService){
        this.featuresService= featuresService;
        this.iframeService= iframeService;
        this.configurationService= configurationService;

        this.inProgress = {};
        this.features = [];
        this.featuresService.fetchFeaturesData().then((data)=>{
            this.features = data;
        })
    }


    addFeature(npmid, hook){
        this.inProgress[npmid] = true;
        this.featuresService.addFeature(npmid, hook).then((resp)=>{
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

FeaturesList.$inject=['featuresService', 'iframeService', 'configurationService'];

module.exports = {
    name: 'prmFeaturesList',
    config: {
        controller: FeaturesList,
        templateUrl: '/featuresList/features-list.html'
    }
}