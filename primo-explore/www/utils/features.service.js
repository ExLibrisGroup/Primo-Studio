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

    addFeature(npmid){
        console.log('adding feature');
        let config= this.configurationService.config;
        config['id']= npmid;
        var data = {params: config};
        return this.$http.get('/feature',data).then((resp)=>{
            console.log('feature installed');
            return resp;
        }, (err)=>{
            console.log('something went wrong when installing feature:' + err.message);
        });
    }
}
FeaturesService.$inject= ['$http', 'configurationService'];

module.exports = {
    name: 'featuresService',
    service: FeaturesService
}