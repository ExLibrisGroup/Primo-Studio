/**
 * Created by shoulm on 07/02/2018.
 */
class PrmConfigurationForm{
    constructor($http, iframeService, configurationService, $cookies){
        this.$http = $http;
        this.iframeService = iframeService;
        this.configurationService = configurationService;
        this.$cookies= $cookies;
    }

    get config(){
        return this.configurationService.config;
    }

    start(){
        var _this = this;
        var config={params: this.config};
        this.$cookies.put('urlForProxy', this.config.url);
        this.$cookies.put('viewForProxy', this.config.view);
        this.$http.get('/start',config).then(function(resp){
            if(resp.status === 200){
                _this.config.dirName = resp.data.dirName;
                _this.config.installedFeatures= resp.data.installedFeatures;
                console.log('created new directory: '+ _this.config.dirName);
                _this.iframeService.up = true;
            }

        });
    }

    isUp(){
        return this.iframeService.isUp();
    }

}
PrmConfigurationForm.$inject= ['$http', 'iframeService', 'configurationService', '$cookies'];

module.exports = {
    name: 'prmConfigurationForm',
    config: {
        controller: PrmConfigurationForm,
        templateUrl: '/configurationForm/configuration-form.html'
    }
}
