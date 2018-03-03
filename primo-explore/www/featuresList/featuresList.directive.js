/**
 * Created by shoulm on 11/02/2018.
 */
class FeaturesList{
    constructor(featuresService, iframeService, configurationService){
        this.featuresService= featuresService;
        this.iframeService= iframeService;
        this.configurationService= configurationService;

        this.features = [];
        this.featuresService.fetchFeaturesData().then((data)=>{
            console.log(data);
            
            this.features = data;
        })
    }

    addFeature(npmid, hook){
        this.featuresService.addFeature(npmid, hook).then((resp)=>{
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{

        });
    }

    removeFeature(npmid, hook){
        this.featuresService.removeFeature(npmid, hook).then((resp)=>{
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{

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