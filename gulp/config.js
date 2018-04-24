'use strict';

let customModuleFile =  'custom.module.js';
let customFile =  'custom.js';
let customCssFile =  'custom1.css';
let mainFile = 'main.js';

let browserify;
let view;
let ve;
let useScss;
let reinstallNodeModules;


function setView(_view) {
    view = _view;
}

function setUseScss(_useScss) {
	useScss = _useScss;
}

function getUseScss() {
	return useScss;
}

function setProxy(_proxy) {
    this.PROXY_SERVER = _proxy;
}
function getProxy(){
    return PROXY_SERVER;
}
function getVe() {
    return ve;
}

function setVe(_ve) {
    ve = _ve;
}
function getBrowserify() {
    return browserify;
}

function setBrowserify(_browserify) {
    browserify = _browserify;
}

function setReinstallNodeModules(_reinstallNodeModules) {
	reinstallNodeModules = _reinstallNodeModules;
}

function getReinstallNodeModules() {
	return reinstallNodeModules;
}

function getView(){
    return view;
}

function customPath() {
    return viewJsDir()+'/'+customFile;
}

function customModulePath() {
    return viewJsDir()+'/'+customModuleFile;
}

function viewHtmlDir() {
    return `primo-explore/custom/${view}/html`;
}

function viewJsDir() {
    return `primo-explore/custom/${view}/js`;
}

function mainPath() {
    return viewJsDir()+'/*.js';
}

function mainJsPath() {
    return viewJsDir()+'/main.js';
}

function customCssMainPath() {
    return viewCssDir()+'/*.css';
}
function customColorsPath(){
    return `colors.json.txt`;
}

function viewRootDir() {
	return `primo-explore/custom/${view}`;
}

function viewCssDir() {
    return `primo-explore/custom/${view}/css`;
}
function customScssDir() {
		return `primo-explore/custom/${view}/scss`;
}
function customScssMainPath() {
		return customScssDir() + "/main.scss";
}
function customCssPath() {
    return `primo-explore/custom/${view}/css/custom1.css`;
}

function customNpmModuleRootDir() {
	return `primo-explore/custom/${view}/node_modules`;
}

function customNpmJsCustomPath() {
    return `primo-explore/custom/${view}/node_modules/primo-explore*/js/custom.js`;
}

function customNpmJsModulePath() {
    return `primo-explore/custom/${view}/node_modules/primo-explore*/js/custom.module.js`;
}


function customNpmJsPath() {
    return `primo-explore/custom/${view}/node_modules/primo-explore*/js/*.js`;
}


function customNpmCssPath() {
    return `primo-explore/custom/${view}/node_modules/primo-explore*/css/*.css`;
}



var SERVERS = {
    local: 'http://localhost:8002'
};

/**
 * The URL to your sandbox or production Primo instance.
 * For SSL environments (https), the port number (443) must be included.
 *
 * Examples:
 *   var PROXY_SERVER = 'http://abc-primo.hosted.exlibrisgroup.com'
 *   var PROXY_SERVER = 'https://abc-primo.hosted.exlibrisgroup.com:443'
 */
    var PROXY_SERVER = 'http://primo-demo.exlibrisgroup.com:1701';


let buildParams = {
    customModuleFile: customModuleFile,
    customFile: customFile,
    customCssFile: customCssFile,
    customPath: customPath,
    customModulePath: customModulePath,
    mainPath: mainPath,
    mainJsPath: mainJsPath,
		viewRootDir: viewRootDir,
    viewJsDir: viewJsDir,
    viewHtmlDir: viewHtmlDir,
    viewCssDir: viewCssDir,
		customScssDir: customScssDir,
		customScssMainPath: customScssMainPath,
    customCssPath: customCssPath,
		customNpmModuleRootDir: customNpmModuleRootDir,
    customNpmJsPath: customNpmJsPath,
    customNpmJsCustomPath: customNpmJsCustomPath,
    customNpmJsModulePath: customNpmJsModulePath,
    customNpmCssPath: customNpmCssPath,
    customCssMainPath: customCssMainPath,
    customColorsPath: customColorsPath
};

module.exports = {
    buildParams: buildParams,
    PROXY_SERVER: PROXY_SERVER,
    setView: setView,
		setUseScss: setUseScss,
		getUseScss: getUseScss,
    setProxy: setProxy,
		getReinstallNodeModules: getReinstallNodeModules,
		setReinstallNodeModules: setReinstallNodeModules,
    proxy: getProxy,
    view: getView,
    getBrowserify: getBrowserify,
    setBrowserify: setBrowserify,
    getVe: getVe,
    setVe: setVe
};
