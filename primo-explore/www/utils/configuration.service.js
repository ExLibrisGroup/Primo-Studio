/**
 * Created by shoulm on 06/02/2018.
 */
class ConfigurationService{
    constructor($http, $location, $cookies){
        this.$http = $http;
        this.$location = $location;
        this.$cookies = $cookies;
        let queryParams= $location.search();
        let url= queryParams['url'] || 'http://primo-demo.exlibrisgroup.com:1701';
        let view= queryParams['vid'] || 'NORTH';
        let isVe = queryParams['ve'] || 'false';
        let dirName = queryParams['dirName'];
        this._config={'view': view,
            'url': url,
            'dirName': dirName,
            've': isVe === 'true',
            installedFeatures: []
        };
    }

    start(){
        var _this = this;
        var config={params: this.config};
        this.$cookies.put('urlForProxy', this.config.url);
        this.$cookies.put('viewForProxy', this.config.view);
        this.$cookies.put('ve', this.config.ve);
        this.$cookies.put('dirName', this.config.dirName);
        return this.$http.get('/start',config).then(function(resp){
            if(resp.status === 200){
                let dirName = resp.data.dirName;
                _this.config.dirName = dirName;
                _this.$cookies.put('dirName', dirName);
                let searchParams = {'dirName': dirName, 'url': _this.config.url, 'vid': _this.config.view, 've': _this.config.ve.toString()};
                _this.$location.search(searchParams);
                _this.config.installedFeatures = resp.data.installedFeatures;
                console.log('created new directory: '+ _this.config.dirName);
            }
            return resp;
        });
    }

    get config(){
        return this._config;
    }

    set config(config){
        this._config= config;
    }
}

ConfigurationService.$inject = ['$http', '$location', '$cookies']

module.exports = {
    name: 'configurationService',
    service: ConfigurationService
}