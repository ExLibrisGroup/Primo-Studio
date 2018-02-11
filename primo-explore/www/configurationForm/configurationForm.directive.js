/**
 * Created by shoulm on 07/02/2018.
 */
class PrmConfigurationForm{
    constructor($http, iframeService, configurationService){
        this.$http = $http;
        this.iframeService = iframeService;
        this.configurationService = configurationService;
    }

    get config(){
        return this.configurationService.config;
    }

    start(){
        var _this = this;
        var config={params: this.config};
        this.$http.get('/start',config).then(function(resp){
            if(resp.status === 200){
                _this.config.dirName = resp.data.dirName;
                console.log('created new directory: '+ _this.config.dirName);
                _this.iframeService.up = true;
            }

        });
    }

}
PrmConfigurationForm.$inject= ['$http', 'iframeService', 'configurationService'];

module.exports = {
    name: 'prmConfigurationForm',
    config: {
        controller: PrmConfigurationForm,
        templateUrl: '/configurationForm/configuration-form.html'
    }
}
