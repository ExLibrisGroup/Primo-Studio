const template = require('lodash/template');

class Server {

   

    constructor($http, configurationService, iframeService) {
        console.log('constructor running');
        this.$http = $http;
        this.configurationService = configurationService;
        this.iframeService = iframeService;
        this.tabs = [
            { name: 'Theme', icon: 'palette' },
            { name: 'Images', icon: 'image' },
            { name: 'Features', icon: 'github' },
            { name: 'Download', icon: 'cloud_download' }
        ]
        this.selectedTab = 'Theme'
        
    }

    get config(){
        return this.configurationService.config;
    }

    isUp(){
        return this.iframeService.isUp();
    }

    getIframeUrl(){
        return this.iframeService.getIframeUrl();
    }

    restart(){
        var _this = this;
        var config={params: this.configurationService.config};
        this.$http.get('/restart',config).then((resp)=>{
            if(resp.status === 200){
                this.iframeService.refreshNuiIFrame();
            }
        });
    }

    selectTab(tab){
        this.selectedTab = tab
    }
}
Server.$inject= ['$http', 'configurationService', 'iframeService'];


module.exports = {
    name: 'server',
    config: {
        controller: Server,
        templateUrl: 'server.html'

    }
}
