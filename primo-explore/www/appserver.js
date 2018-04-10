const template = require('lodash/template');

class Server {
    constructor($http, configurationService, iframeService) {
        console.log('constructor running');
        var self = this;
        this.$http = $http;
        this.configurationService = configurationService;
        this.iframeService = iframeService;
        this.tabs = [
            { name: 'Theme', icon: 'palette' },
            { name: 'Images', icon: 'image' },
            { name: 'Addons', icon: 'gift' },
            { name: 'Download', icon: 'cloud_download' },
            {name: 'UploadPackage', icon: 'cloud_upload' }
        ]
        this.selectedTab = 'Theme';
        this.sidenavCollapsed = false;
        this.sidenavAnimating = false;

    }

    get appTitle(){
        return 'Primo Studio';
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
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;
        } 
    }

    toggleSidenav(){
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;                  
        } else {
            this.sidenavCollapsed = true;            
        }
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
