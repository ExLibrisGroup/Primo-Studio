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
    constructor($mdToast,$http,$sce, $location, configurationService, iframeService) {
        console.log('constructor running');
        this.$mdToast = $mdToast;
        this.$http = $http;
        this.$sce = $sce;
        this.$location= $location;
        this.configurationService = configurationService;
        this.iframeService = iframeService;

        this.features = [
            {
                face : 'https://avatars1.githubusercontent.com/u/8035487?s=460&v=4',
                what: 'Linked data',
                who: 'Noam Amit',
                when: '3:08PM',
                notes: "Adding an linked data widget to the Primo full view",
                linkGit: "https://github.com/ExLibrisGroup/primo-explore-linked-data-demo",
                npmid: "primo-explore-linked-data-demo"
            },
            {
                face : 'https://avatars1.githubusercontent.com/u/8035487?s=460&v=4',
                notes: 'Search Bar Demo',
                who: 'Noam Amit',
                what: "Demo from Eluna",
                linkGit: "https://github.com/noamamit92/primo-explore-search-bar-demo",
                npmid: "primo-explore-search-bar-demo"
            },
            {
                face : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXqD0HzChZD5uBY-xTjHpVWdiSu_EhkqokwF91P73xSZcZ4Klxg',
                what: 'Google Maps in Locations',
                who: 'Noam Amit',
                when: '3:08PM',
                notes: "Integrating a Google maps iframe to each location item based on the callNumber",
                linkGit: "https://github.com/noamamit92/primo-explore-location-item-after-google-maps-demo",
                npmid: "primo-explore-location-item-after-protractor-demo"
            },
            {
                face : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMmvgnyOTSLXKKifrhwmwZLmjsdq_9qsjf5hPAecOYp-jJEbc',
                what: 'Google Maps in Locations',
                who: 'Noam Amit',
                when: '3:08PM',
                notes: "Integrating a Google maps iframe to each location item based on the callNumber",
                linkGit: "https://github.com/noamamit92/primo-explore-location-item-after-google-maps-demo",
                npmid: "https://github.com/noamamit92/primo-explore-location-item-after-google-maps-demo"
            },
            {
                face : 'http://documents.el-una.org/images/ELUNASm.jpg',
                what: 'Google Maps in Locations',
                who: 'Noam Amit',
                when: '3:08PM',
                notes: "Integrating a Google maps iframe to each location item based on the callNumber",
                linkGit: "https://github.com/noamamit92/primo-explore-location-item-after-google-maps-demo",
                npmid: "https://github.com/noamamit92/primo-explore-location-item-after-google-maps-demo"
            },
        ];
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

    start(){
        var _this = this;
        var config={params: this.configurationService.config};
        this.$http.get('/start',config).then(function(resp){
            if(resp.status === 200){
                _this.configurationService.config.dirName = resp.data.dirName;
                console.log('created new directory: '+ _this.configurationService.config.dirName);
                _this.iframeService.up = true;
            }

        });
    }

    addFeature(npmid){
        this.config={"id":npmid,"dirName":this.configurationService.config.dirName};
        var config={params: this.configurationService.config};
        this.$http.get('/feature',config).then((resp)=>{
            console.log('feature installed');
            this.refreshNuiIFrame();
        }, (err)=>{
            console.log('something went wrong when installing feature:' + err.message);
        });

    }

    getFeatures(){
        return this.features;
    }
}
Server.$inject= ['$mdToast', '$http', '$sce', '$location', 'configurationService', 'iframeService'];


module.exports = {
    name: 'server',
    config: {
        controller: Server,
        templateUrl: 'server.html'

    }
}
