const template = require('lodash/template');

class Server {
    constructor($http, $scope, configurationService, iframeService, analytics) {
        console.log('constructor running');
        var self = this;
        this.$http = $http;
        this.$scope = $scope;
        this.configurationService = configurationService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.analytics.pageView();

        this.tabs = [
            { name: 'Theme', icon: 'palette' },
            { name: 'Images', icon: 'image' },
            // { name: 'Icons', icon: 'image' },
            { name: 'Addons', icon: 'gift' },
            { name: 'Editor', icon: 'curly_brackets' },
            { name: 'Download', icon: 'cloud_download' },
            { name: 'UploadPackage', icon: 'cloud_upload' }
        ]
        this.selectedTab = 'Theme';
        this.sidenavCollapsed = false;
        this.sidenavAnimating = false;
        this.expandTab = false;
    }

    $onInit() {
        this.$scope.$on('expandTab', ((event, data) => {
            this.expandTab = data;
        }));
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
        this.analytics.trackPage("/");
    }

    selectTab(tab){
        this.selectedTab = tab;
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;
        }
        this.analytics.trackEvent('tabs', 'change', tab);
    }

    toggleSidenav(){
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;                  
        } else {
            this.sidenavCollapsed = true;            
        }
    }
}
Server.$inject= ['$http', '$scope', 'configurationService', 'iframeService', 'Analytics'];


module.exports = {
    name: 'server',
    config: {
        controller: Server,
        templateUrl: 'server.html'

    }
}
