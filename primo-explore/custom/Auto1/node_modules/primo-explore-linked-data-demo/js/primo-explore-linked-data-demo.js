

    app.config(['$sceDelegateProvider',function($sceDelegateProvider) {
            var urlWhitelist = $sceDelegateProvider.resourceUrlWhitelist();
    urlWhitelist.push( 'http://id.loc.gov**' );
    $sceDelegateProvider.resourceUrlWhitelist(urlWhitelist);
    }]);


    app.controller('FullViewAfterController', ['$http', '$mdDialog','$window',function ($http, $mdDialog, $window) {
        var vm = this;
        vm.uri = vm.parentCtrl.item.pnx.links.uri;
        /*vm.local17 = ['$$VFolklore$$Uhttp://id.loc.gov/authorities/subjects/sh85050104.json$$Tsubjects',
         '$$VFairy tales$$Uhttp://id.loc.gov/authorities/subjects/sh85046925.json$$Tsubjects'];*/
        vm.terms = [];

        window.callback = function (data) {
            var  displayedFields = data.filter(function(element){
                return element['@type'] &&

                    element['@type'].indexOf('http://www.loc.gov/mads/rdf/v1#Topic') > -1 &&
                    (element['@type'].indexOf('http://www.loc.gov/mads/rdf/v1#Authority') > -1 ||
                    element['@type'].indexOf('http://www.loc.gov/mads/rdf/v1#Variant') > -1) ;
            });


            var typeToLabelIdentifier = {
                'http://www.loc.gov/mads/rdf/v1#Authority' : 'http://www.loc.gov/mads/rdf/v1#authoritativeLabel',
                'http://www.loc.gov/mads/rdf/v1#Variant': 'http://www.loc.gov/mads/rdf/v1#variantLabel'
            };
            displayedFields.forEach(function(entry){
                var term = {};
                var label = [];
                if(entry['http://www.loc.gov/mads/rdf/v1#authoritativeLabel'] &&
                    entry['http://www.loc.gov/mads/rdf/v1#authoritativeLabel'][0]['@language'] === "en") {
                    label.push(entry['http://www.loc.gov/mads/rdf/v1#authoritativeLabel'][0]['@value']);
                }
                if(entry['http://www.loc.gov/mads/rdf/v1#variantLabel'] &&
                    entry['http://www.loc.gov/mads/rdf/v1#variantLabel'][0]['@language'] === "en") {
                    label.push(entry['http://www.loc.gov/mads/rdf/v1#variantLabel'][0]['@value']);
                }

                var link = entry['@id'];
                label.forEach(function(elm){
                    term.label = elm;
                    term.externalLinkURL = link;
                    var searchObject = {};

                    searchObject.vid = vm.parentCtrl.fullViewService.$state.params.vid;
                    searchObject.query = vm.type+',exact,'+ elm +',AND' ;
                    searchObject.scope = vm.parentCtrl.fullViewService.$state.params.search_scope;
                    searchObject.facet = '';
                    searchObject.mode = 'advanced';
                    term.linkURL = "exploreMain.search("+JSON.stringify(searchObject)+")";

                    vm.terms.push(term);
                })



            })
        }

        //for each $$U get url

        //

        vm.ld={};

        vm.$onInit = function () {
            var links = vm.uri;
            var c = undefined;
            var typeToIndexedField = {subject: 'sub'};
            var entryParsed = [];
            if(links) {
                vm.title = 'Related Subject Terms';
                links.forEach(function (entry) {
                    var parsed = vm.parseLocalField(entry);
                    if(parsed){
                        parsed.link.forEach(function (link) {
                            if (link.indexOf('.loc.') > -1) {
                                //entryParsed.push(parsedEntry);
                                var url = link + '.jsonp';
                                //vm.type = typeToIndexedField[entryParsed[0].type] ? typeToIndexedField[entryParsed[0].type] : entryParsed[0].type;
                                vm.type = typeToIndexedField[parsed.type[0]] ? typeToIndexedField[parsed.type[0]] : parsed.type[0];

                                $http.jsonp(url,{jsonpCallbackParam: 'callback'}).then(
                                    function(response){
                                        callback(response.data);
                                    }
                                    );

                            }
                        });

                    }

                });
            }


        };


        vm.parseLocalField = function(link){
            let splitted = link.split('$$');
            let values = {};
            let mapping = {
                A: 'type',
                V: 'label',
                U: 'link'
            };
            if (splitted.length > 1) {
                splitted.forEach(function(element){
                    element = element.replace('U(uri) ','U');
                    let code = element.substring(0,1);
                    let value = element.substring(1);
                    if(mapping[code]){
                        if(values[mapping[code]]){
                            let links = values[mapping[code]];
                            //links.push(values[mapping[code]]);
                            links.push(value);
                            values[mapping[code]] = links;
                        }else{
                            values[mapping[code]] = [value];
                        }

                    }
                })
            }
            if(values.type[0] === 'subject'){
                return values;
            }
            return undefined;

        }

        vm.closeFullViewDialog= function(){
            $mdDialog.hide();
        }

    }]);

    app.component('prmFullViewAfter', {
        bindings: { parentCtrl: '<' },
        controller: 'FullViewAfterController',
        template: `
        <div class="full-view-section loc-subjects" ng-if="$ctrl.terms.length > 0" flex>
             <div class="layout-full-width full-view-section-content">
                 <div>
                    <div class="section-head">    
                        <div layout="row" layout-align="center center" class="layout-align-center-center layout-row">
                            <h2 class="section-title md-title light-text">{{$ctrl.title}}</h2>
                            <md-divider flex="" class="md-primoExplore-theme flex"></md-divider>
                        </div>
                    </div>
                    <div class="section-body">
                
                        <div class="spaced-rows">
                            <div style="padding-top:1em;" ng-repeat="item in $ctrl.terms">
                                <a class="arrow-link" ui-sref="{{item.linkURL}}" (click)="$ctrl.closeFullViewDialog()">
                                    <span>{{item.label}}</span>                                                                
                                </a>
                        </div>
                    </div>
                 </div>
        
            </div>
        </div>` // the values should be deep links to nui search($$Tsubject)
    });





   
