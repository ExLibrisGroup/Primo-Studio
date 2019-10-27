var modRewrite = require('connect-modrewrite');
var fs = require('fs')
var Promise = require("bluebird");
var concat = require('concat-stream');
var config = require('./config');
var glob = require('glob');
Promise.promisifyAll(glob);
var Response = require('http-response-object');

module.exports.getCustimazationObject = function (vid,appName,isVe) {


    var basedir = appName+'/custom';
    var ignored = ['img', 'css', 'custom'];
    var base_path = 'custom/';
    var customizationObject = {
        viewJs: '',
        centralJs: '',
        viewCss: '',
        centralCss: '',
        favIcon: '',
        libraryLogo: '',
        resourceIcons: '',
        viewSvg: '',
        centralSvg: '',
        staticHtml: ''
    };

    var promises = [];
    var packages = glob.sync(base_path + "*", {cwd:appName,ignore:'**/README.md'});

    var isInherited = packages.indexOf(base_path + 'CENTRAL_PACKAGE') > -1;
    if(vid !== ''){
        var viewPackage = base_path + vid;
    }
    if(vid === '') {
        var viewPackage = packages.filter((package) => package !== base_path + 'CENTRAL_PACKAGE');
    }

    viewPackage = viewPackage || viewPackage[0];
    console.log('ppp'+viewPackage);
    if(viewPackage.length ===0 ){
        viewPackage = '';
    }
    //js

    if(viewPackage !== '' && viewPackage !== 'CENTRAL_PACKAGE') {
        customizationObject.viewJs = glob.sync(viewPackage + "/js/custom.js", {cwd: appName});
    }
    if (isInherited) {
        customizationObject.centralJs = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/js/custom.js", {cwd:appName});
    }

    //css


    customizationObject.viewCss = glob.sync(viewPackage + "/css/custom1.css", {cwd:appName});

    if (isInherited) {
        customizationObject.centralCss = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/css/custom1.css", {cwd:appName});
    }

    //svg

    customizationObject.viewSvg = glob.sync(viewPackage + "/img/custom-ui.svg", {cwd:appName})[0];

    if (isInherited) {
        customizationObject.centralSvg = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/img/custom-ui.svg", {cwd:appName});
    }

    //images

    customizationObject.favIcon = glob.sync(viewPackage + "/img/favicon.ico", {cwd:appName});


    if (isInherited && customizationObject.favIcon === '') {
        customizationObject.favIcon = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/img/favicon.ico", {cwd:appName})
    }
    customizationObject.libraryLogo = glob.sync(viewPackage + "/img/library-logo.png", {cwd:appName})[0];
    if (isInherited && (!customizationObject.libraryLogo || customizationObject.libraryLogo === '')) {
        customizationObject.libraryLogo = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/img/library-logo.png", {cwd:appName})[0];
    }

    var paths = glob.sync(viewPackage + "/img/icon_**.png", {cwd:appName});
    customizationObject.resourceIcons = {};
    for (path of paths) {
        var pathFixed = path.substring(path.indexOf('/img/icon_') + 10, path.indexOf('.png'));
        customizationObject.resourceIcons[pathFixed] = path;
    }


    if (isInherited) {
        var paths = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/img/icon_**.png", {cwd:appName});

        for (path of paths) {
            var pathFixed = path.substring(path.indexOf('/img/icon_') + 10, path.indexOf('.png'));
            if (!customizationObject.resourceIcons[pathFixed]) {
                customizationObject.resourceIcons[pathFixed] = path;
            }
        }


    }


    //html
    var homePaths = glob.sync(viewPackage + "/html/home_**.html", {cwd:appName});
    var emailPaths = glob.sync(viewPackage + "/html/email_**.html", {cwd:appName});

    if(homePaths && homePaths.length > 0){ // for August 2016 version
        customizationObject.staticHtml = {};
        customizationObject.staticHtml.homepage = {};
        for (path of homePaths) {

            var pathFixed = path.substring(path.indexOf('/html/home_')+11, path.indexOf('.html'));
            customizationObject.staticHtml.homepage[pathFixed] = path;
        }

        customizationObject.staticHtml.email = {};
        for (path of emailPaths) {

            var pathFixed = path.substring(path.indexOf('/html/email_')+12, path.indexOf('.tmpl.html'));
            customizationObject.staticHtml.email[pathFixed] = path;
        }


        if (isInherited) {
            var paths = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/html/home_**.html", {cwd:appName});

            for (path of paths) {
                var pathFixed = path.substring(path.indexOf('/html/home_')+11, path.indexOf('.html'));
                if (!customizationObject.staticHtml.homepage[pathFixed]) {
                    customizationObject.staticHtml.homepage[pathFixed] = path;
                }

            }

            paths = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/html/email_**.html", {cwd:appName});

            for (path of paths) {
                var pathFixed = path.substring(path.indexOf('/html/email_')+12, path.indexOf('.html'));
                if (!customizationObject.staticHtml.email[pathFixed]) {
                    customizationObject.staticHtml.email[pathFixed] = path;
                }

            }


        }

    }else{ // starting November 2016 version
        var paths = glob.sync(viewPackage + "/html/**/*.html", {cwd:appName});
        if(!paths || paths.length ===0){
            paths = glob.sync(viewPackage + "/html/*.html", {cwd:appName});
        }
        var staticHtmlRes = {};
        staticHtmlRes = getHtmlCustomizations(paths,viewPackage,staticHtmlRes, isVe);

        if (isInherited) {
            var paths = glob.sync(base_path + 'CENTRAL_PACKAGE' + "/html/**/*.html", {cwd:appName});
            staticHtmlRes = getHtmlCustomizations(paths,'custom/CENTRAL_PACKAGE',staticHtmlRes, isVe);
        }
        customizationObject.staticHtml = staticHtmlRes;
    }
    function getLanguage(entry, isVe) {
        var numberOfCharsForLang = isVe ? 2 : 5;
        var start;
        if (entry.indexOf('.tmpl.html') > -1) {
            // if email template html
            start = entry.indexOf('.tmpl.html')-numberOfCharsForLang;
        } else {
            start = entry.indexOf('.html')-numberOfCharsForLang;
        }
        var res = entry.substring(start,start+numberOfCharsForLang);
        return res;
    }
    function getHtmlCustomizations(paths,path,staticDict, isVe){
        var patternString = path+'/html/';

        var re = new RegExp(patternString, "g");
        var res =  paths
            .map(e => e.replace(re,''));


        res.forEach((e)=> {
            var lang = getLanguage(e, isVe);
            var dirName = e.replace('_'+lang+'.tmpl', '_'+lang);
            dirName = dirName.replace('_'+lang+'.html','');
            if (dirName.indexOf('/') > -1) {
                var sepIndex = dirName.indexOf('/');
                dirName = dirName.substr(0, sepIndex);
            }
            if(!staticDict[dirName]) {
                staticDict[dirName] = {};
            }
            staticDict[dirName][lang] = path+ '/html/'+e;
            if(lang ==='en_US' || lang === 'en') {
                staticDict[dirName]['default'] = path+ '/html/'+e;
            }


        });

        return staticDict;
    }







    return customizationObject;


};


module.exports.proxy_function = function (viewForProxy,urlForProxy) {
    var proxyServer = urlForProxy || config.PROXY_SERVER;

    console.log('noam 2222' + viewForProxy + urlForProxy);



    return modRewrite([
        '/primo_library/libweb/webservices/rest/(.*) ' + proxyServer + '/primo_library/libweb/webservices/rest/$1 [PL]',
        '/primaws/rest/(.*) ' + proxyServer + '/primaws/rest/$1 [PL]',
        '/primo_library/libweb/primoExploreLogin ' + proxyServer + '/primo_library/libweb/primoExploreLogin [PL]',
        '/primaws/suprimaLogin ' + proxyServer + '/primaws/suprimaLogin [PL]',
        '/primaws/suprimaExtLogin ' + proxyServer + '/primaws/suprimaExtLogin [RL]',

        '/primo-explore/index.html ' + proxyServer + '/primo-explore/index.html [PL]',
        '/discovery/index.html ' + proxyServer + '/discovery/index.html [PL]',
        '/primo-explore/custom/(.*) /custom/$1 [L]',
        '/discovery/custom/(.*) /custom/$1 [L]',
        '/primo-explore/(.*) ' + proxyServer + '/primo-explore/$1 [PL]',
        '/discovery/(.*) ' + proxyServer + '/discovery/$1 [PL]',
        '.*primoExploreJwt=.* /index.html [L]',
        '^[^\\.]*$ /index.html [L]',

    ]);


};
