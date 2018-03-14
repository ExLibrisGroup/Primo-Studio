/**
 * Created by shoulm on 07/02/2018.
 */
class PrmConfigurationForm{
    constructor(iframeService, configurationService){
        this.iframeService = iframeService;
        this.configurationService = configurationService;
        if (this.config.url && this.configurationService.config.view){
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
PrmConfigurationForm.$inject= ['iframeService', 'configurationService'];

module.exports = {
    name: 'prmConfigurationForm',
    config: {
        controller: PrmConfigurationForm,
        templateUrl: '/configurationForm/configuration-form.html'
    }
}
