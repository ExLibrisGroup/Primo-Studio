/**
 * Created by shoulm on 11/02/2018.
 */
class FeaturesList{
    constructor(featuresService, iframeService){
        this.featuresService= featuresService;
        this.iframeService= iframeService;

        this.features = [];
        this.featuresService.fetchFeaturesData().then((data)=>{
            this.features = data;
        })
    }

    addFeature(npmid){
        this.featuresService.addFeature(npmid).then((resp)=>{
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{

        });
    }

    getFeatures(){
        return this.features;
    }

}

FeaturesList.$inject=['featuresService', 'iframeService'];

module.exports = {
    name: 'prmFeaturesList',
    config: {
        controller: FeaturesList,
        templateUrl: '/featuresList/features-list.html'
    }
}