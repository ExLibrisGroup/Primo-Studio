/**
 * Created by shoulm on 07/02/2018.
 */
class PrmConfigurationForm{
    constructor(iframeService, configurationService, $location){
        this.iframeService = iframeService;
        this.configurationService = configurationService;
        if ($location.search()['url'] && $location.search()['vid']){
            this.start();
        }
    }

    get config(){
        return this.configurationService.config;
    }

    start(){
        this.configurationService.start().then(()=>{
            this.iframeService.up = true;
        });
    }

    stop(){
        var _this = this;
        _this.iframeService.up = false;
    }

    isUp(){
        return this.iframeService.isUp();
    }

}
PrmConfigurationForm.$inject= ['iframeService', 'configurationService', '$location'];

module.exports = {
    name: 'prmConfigurationForm',
    config: {
        controller: PrmConfigurationForm,
        templateUrl: '/configurationForm/configuration-form.html'
    }
}
