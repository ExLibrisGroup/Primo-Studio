/**
 * Created by shoulm on 08/02/2018.
 */
class FeaturesService{
    constructor($http, configurationService){
       this.$http = $http;
       this.configurationService = configurationService;
       this.featuresJsonURL= 'https://raw.githubusercontent.com/ShoulM/PrimoFeaturesJSON/master/features.json';
    }

    fetchFeaturesData(){
        return this.$http.get(this.featuresJsonURL).then((data)=>{
            return data.data;
        }, (err)=>{
            console.log('oops something went wrong while fetching features data: ' + err);
        });
    }

    addFeature(npmid, hook, featureConfigData){
        console.log('adding feature with npm id: ' + npmid);
        var config = {
            data: {
                id: npmid,
                hook: hook,
            }
        };
        if (featureConfigData){
            config['data']['featureConfig'] = featureConfigData.map(this.mapFeatureConfigData);
        }
        return this.$http.post('/feature',config).then((resp)=>{
            console.log('feature installed');
            this.configurationService.config.installedFeatures.push(npmid);
            return resp;
        }, (err)=>{
            console.log('something went wrong when installing feature:' + err.message);
        });
    }

    mapFeatureConfigData(form){
        let formFieldsObject = {};
        for (let field of form){
            formFieldsObject[field.key] = field.value();
        }
        return formFieldsObject;
    }

    removeFeature(npmid, hook){
        console.log('uninstalling feature with npm id: ' + npmid);
        let config= this.configurationService.config;
        config['id'] = npmid;
        config['hook'] = hook;
        var data = {params: config};
        return this.$http.get('/remove_feature',data).then((resp)=>{
            console.log('feature uninstalled');
            let index = this.configurationService.config.installedFeatures.indexOf(npmid);
            if (index !== -1){
                this.configurationService.config.installedFeatures.splice(index, 1);
            }
            return resp;
        }, (err)=>{
            console.log('something went wrong when uninstalling feature:' + err.message);
        });
    }
}
FeaturesService.$inject= ['$http', 'configurationService'];

module.exports = {
    name: 'featuresService',
    service: FeaturesService
}