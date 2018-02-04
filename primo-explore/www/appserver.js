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
    constructor($mdToast,$http,$sce, $location) {
        console.log('constructor running');
        this.$mdToast = $mdToast;
        this.up = false;
        this.$http = $http;
        this.$sce = $sce;
        this.$location= $location;
        //this.startServer();
        //this.up = true;
        this.config={"view":"NORTH",
            "url": "http://primo-demo.exlibrisgroup.com:1701",
            "dirName": "MOCK"
        }
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
        this.colors = {
            "primary": "#53738C",
            "secondary" : "#A9CDD6",
            "backgroundColor" : "white",
            "links": "#5C92BD",
            "warning": "tomato",
            "positive": "#0f7d00",
            "negative": "gray",
            "notice": "#e08303"
        };
    }

    get nuiIframeElement(){
        if (!this._nuiIFrameElement){
            let iframeElement= document.getElementById('primo-explore-iframe');
            this._nuiIFrameElement= iframeElement;
        }
        return this._nuiIFrameElement;
    }

    refreshNuiIFrame(){
        if (!this.nuiIframeElement){
            return;
        }
        this.nuiIframeElement.src = this.nuiIframeElement.src;
    }

    getConfig(){
        return this.config;
    }
    createTheme(){
        var _this = this;
        var config={data: {
            colors: this.colors,
            conf: this.config
            }
        };
        this.$http.post('/colors',config).then((resp)=>{
            if(resp.status === 200){
                console.log('theme created');
                this.refreshNuiIFrame();
            }

        });
    }

    restart(){
        var _this = this;
        var config={params:
        this.config
        };
        this.$http.get('/restart',config).then(function(resp){
            if(resp.status === 200){
            }

        });
    }
    start(){
        var _this = this;
        var config={params:
        this.config
        };
        this.$http.get('/start',config).then(function(resp){
            if(resp.status === 200){
                _this.config.dirName = resp.data.dirName;
                console.log('created new directory: '+ _this.config.dirName);
                _this.up = true;
            }

        });



    }
    addFeature(npmid){
        this.config={"id":npmid,"dirName":this.config.dirName};
        var config={params:
        this.config
        };
        this.$http.get('/feature',config).then(function(resp){

        });

    }
    chooseZip() {
        /*let files = dialog.showOpenDialog(remote.getCurrentWindow(),
            {
                filters: [{ name: 'Development Package', extensions: ['zip'] }],
                properties: ['openFile']
            }
        )
        if (files) {
            this.zipFile = files[0]
            this.displayZipFile = path.basename(this.zipFile)
        }*/


    }

        getIframeUrl(){
            return this.$sce.trustAsResourceUrl(this.$location.protocol + '://' + this.$location.host + ':8003/primo-explore/search/?vid='+this.config.view+'&dirName='+this.config.dirName+'&url='+this.config.url);
        }
        isUp(){
            return this.up;
        }
        getUrl() {
            if(this.up){
                return 'http://localhost:8004//primo-explore/search/?vid=NORTH';
            }
                
            return '';
        }
        startServer() {
             /*if(!process.cwd().includes("primo-explore-devenv")) {
            process.chdir("primo-explore-devenv");
        }*/
       
            
            /*console.log(`New directory: ${process.cwd()}`);
            let confObj = JSON.parse('{"view":"NORTH","url": "http://primo-demo.exlibrisgroup.com:1701"}')
            process.argv = ["","", "","--view=" + confObj.view];*/
            /*delete require.cache[require.resolve('./primo-explore-devenv/gulpfile')]
            require('./primo-explore-devenv/gulpfile');
            if (gulp.tasks.run) {
                console.log('gulpfile contains task!');
                gulp.task('prun', ['run'], (cb) => {
                    let toast = this.$mdToast.simple()
                        .textContent('Server was started');
                    this.$mdToast.show(toast);
                    cb();
                })
                gulp.start('prun');
                this.up = true;
            }*/

        }



    getFeatures(){
        return this.features;
    }
    getColors(){
        return this.colors;
    }

        uploadPackage() {
            let confObj = JSON.parse(this.configurationJson)
            //         {"view":"NORTH",
            // "url": "http://primo-demo.exlibrisgroup.com:1701"}
            let readStream = fs.createReadStream(this.zipFile);
            let writeStream = fstream.Writer({
                path: path.resolve(__dirname, 'tmp'),
                type: 'Directory'
            });
            let p1 = rimrafAsync('tmp')
                .then(
                () => {
                    let zipStream = readStream
                        .pipe(unzip.Parse())
                        .pipe(writeStream)
                    return streamToPromise(zipStream)
                });
            let p2 = rimrafAsync("primo-explore-devenv/primo-explore/custom/" + confObj.view);
            let p3 = fs.readFileAsync("primo-explore-devenv/gulp/config.js.tmpl", { encoding: 'utf-8' })
                .then((content) => {
                    let compiled = template(content, { interpolate: /<%=([\s\S]+?)%>/g });
                    return compiled({ 'proxyServer': confObj.url });

                })
                .then((compiledContent) => {
                    return fs.writeFileAsync("primo-explore-devenv/gulp/config.js", compiledContent, { encoding: 'utf-8' })

                });


            Promise.join(p1, p2, p3).then(() => {
                return fs.renameAsync("tmp/VIEW_CODE", "primo-explore-devenv/primo-explore/custom/" + confObj.view);
            })
                .then(() => {
                    let toast = this.$mdToast.simple()
                        .textContent('Package was uploaded');
                    this.$mdToast.show(toast);

                })





        }
    }
    console.log('in');
    //Server.$inject = ['$mdToast'];


module.exports = {
    name: 'server',
    config: {
        controller: Server,
        templateUrl: 'server.html'

    }
}
