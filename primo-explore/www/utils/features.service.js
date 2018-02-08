/**
 * Created by shoulm on 08/02/2018.
 */
class FeaturesService{
    constructor($http){
       this.$http = $http;
       this.featuresJsonURL= 'https://raw.githubusercontent.com/ShoulM/PrimoFeaturesJSON/master/features.json';
    }

    fetchFeaturesData(){
        return this.$http.get(this.featuresJsonURL).then((data)=>{
            return data.data;
        }, (err)=>{
            console.log('oops something went wrong while fetching features data: ' + err);
        });
    }
}
FeaturesService.$inject= ['$http'];

module.exports = {
    name: 'featuresService',
    service: FeaturesService
}