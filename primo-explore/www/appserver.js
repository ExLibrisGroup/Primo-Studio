/*const Promise = require('bluebird');
 const fs = Promise.promisifyAll(require('fs'))
 const fstream = require('fstream')
 const path = require('path')
 const unzip = require('unzip')*/
const template = require('lodash/template');
/*const rimrafAsync = Promise.promisify(require('rimraf'));
 const streamToPromise = require('./streamToPromise');
 var gulp = require('gulp');*/




class Server {
    constructor($mdToast,$http,$sce, $location, configurationService, iframeService, featuresService) {
        console.log('constructor running');
        this.$mdToast = $mdToast;
        this.$http = $http;
        this.$sce = $sce;
        this.$location= $location;
        this.configurationService = configurationService;
        this.iframeService = iframeService;
        this.featuresService= featuresService;

        this.features = [];

        this.featuresService.fetchFeaturesData().then((data)=>{
            this.features = data;
        })
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



    addFeature(npmid){
        console.log('adding feature');
        let config= this.config;
        config['id']= npmid;
        var data = {params: config};
        this.$http.get('/feature',data).then((resp)=>{
            console.log('feature installed');
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            console.log('something went wrong when installing feature:' + err.message);
        });

    }

    getFeatures(){
        return this.features;
    }
}
Server.$inject= ['$mdToast', '$http', '$sce', '$location', 'configurationService', 'iframeService', 'featuresService'];


module.exports = {
    name: 'server',
    config: {
        controller: Server,
        templateUrl: 'server.html'

    }
}
