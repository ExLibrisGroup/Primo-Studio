/**
 * Created by shoulm on 06/02/2018.
 */
class ConfigurationService{
    constructor(){
        this._config={"view":"NORTH",
            "url": "http://primo-demo.exlibrisgroup.com:1701",
            "dirName": "MOCK",
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

module.exports = {
    name: 'configurationService',
    service: ConfigurationService
}