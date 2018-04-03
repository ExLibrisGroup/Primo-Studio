const shorthash= require('shorthash');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');
const npmi= require('npmi');


function createNewUserId(){
     var d = new Date();
     var n = d.getTime();
     console.log('created new user id: ' + shorthash.unique(n.toString()));
     return shorthash.unique(n.toString());
}

function getUserId(req){
    let cookies= parseCookies(req);
    return cookies['dirName'];
}

function getUserCustomDir(userId){
    return `primo-explore/custom/${userId}`;
}

function promiseSerial(funcs, param) {
    return funcs.reduce((promise, func) =>
            promise.then(result => func(param).then(Array.prototype.concat.bind(result))),
        Promise.resolve([]));
}

function sendErrorResponse(res, err){
    console.log(err.message);
    res.status(500).send(err);
}

function parseCookies (request) {
    var list = {},
        rc = request.headers.cookie;

    rc && rc.split(';').forEach(function( cookie ) {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURIComponent(parts.join('='));
    });

    return list;
}

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);

function getRequestBody(request){
    return new Promise((resolve, reject)=>{
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            // at this point, `body` has the entire request body stored in it as a string
            resolve(body);
        });
    });

}


function getUserInstalledFeaturesList(userFeaturesManifest){
    let installedFeaturesList = [];
    for(let hook in userFeaturesManifest){
        console.log('found hook : '+ hook);
        console.log(userFeaturesManifest[hook]);
        installedFeaturesList = installedFeaturesList.concat(userFeaturesManifest[hook]);
    }
    return installedFeaturesList;
}

function dashSeparatedToCamelCase(input) {
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
}

function camelCaseToDashSeparated(input){
    return input.replace(/\W+/g, '-')
        .replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
}

function unwrapJs(content){
    let startRegExp = /\([\s]*?function[\s]*?\(\)[\s]*?{/;
    let endRegExp = /}[\s]*?\)[\s]*?\([\s]*?\)[\s]*?;/;
    content = content.replace(startRegExp, '');
    content = content.replace(endRegExp, '');
    return content;

}

function npmInstallWithPromise(installPath, npmId){
    return new Promise((resolve, reject)=>{
        npmi({path: installPath, name: npmId}, (err, result)=>{
            if (err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    });
}

function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}

function fixManuallyAddedComponents(content, userManifest){
    let componentRegex = /app.component[\s]*?\([\s]*?['|"](prm.*?After)['|"]/g;
    let controllerRegex = /controller[\s]*?:[\s]*?['|"](.*)['|"]/g;
    let match;
    let addedString = 'AppStoreGenerated';

    //fix components
    do {
        match = componentRegex.exec(content);
        if (match) {
            let componentName = match[1];
            let hookName = camelCaseToDashSeparated(componentName);
            let newComponentName = componentName + addedString;
            content = content.replace(new RegExp(componentName, 'g'), newComponentName);
            if (!userManifest[hookName]){
                userManifest[hookName] = [];
            }
            userManifest[hookName].push(camelCaseToDashSeparated(newComponentName));
        }
    } while (match);

    //fix controllers
    do {
        match = controllerRegex.exec(content);
        if (match) {
            let controllerName = match[1];
            let newControllerName = controllerName + addedString;
            content = content.replace(new RegExp(controllerName, 'g'), newControllerName);
        }
    } while (match);

    return content;
}

function combineObjectsWithArrayValues(objA, objB) {
    for (let key in objB) {
        if(objA[key]){
            objA[key] = objA[key].concat(objB[key]);
        }
        else{
            objA[key] = objB[key];
        }
    }
    return objA;
}

module.exports={
    promiseSerial: promiseSerial,
    createNewUserId: createNewUserId,
    getUserId: getUserId,
    getUserCustomDir: getUserCustomDir,
    sendErrorResponse: sendErrorResponse,
    parseCookies: parseCookies,
    getRequestBody: getRequestBody,
    getUserInstalledFeaturesList: getUserInstalledFeaturesList,
    getDirectories: getDirectories,
    dashSeparatedToCamelCase: dashSeparatedToCamelCase,
    unwrapJs: unwrapJs,
    npmInstallWithPromise: npmInstallWithPromise,
    fixManuallyAddedComponents: fixManuallyAddedComponents,
    combineObjectsWithArrayValues: combineObjectsWithArrayValues
}