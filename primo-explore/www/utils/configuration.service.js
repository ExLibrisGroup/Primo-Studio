/**
 * Created by shoulm on 06/02/2018.
 */
class ConfigurationService{
    constructor($location){
        let queryParams= $location.search();
        let url= queryParams['url'] || 'http://primo-demo.exlibrisgroup.com:1701';
        let view= queryParams['vid'] || 'NORTH'
        this._config={'view': view,
            'url': url,
            'dirName': 'MOCK',
            installedFeatures: []
        };
    }

    get config(){
        return this._config;
    }

    set config(config){
        this._config= config;
    }
}

ConfigurationService.$inject = ['$location']

module.exports = {
    name: 'configurationService',
    service: ConfigurationService
}