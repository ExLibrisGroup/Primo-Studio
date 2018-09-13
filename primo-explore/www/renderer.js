const angular = require('angular');
const ngCookies= require('angular-cookies');
const angularAnimate = require('angular-animate');
const angularFormly = require('angular-formly');
const angularFormlyBootstrapTemplate = require('angular-formly-templates-bootstrap');
const angularDialog = require('ng-dialog');
const ngFileUpload = require('ng-file-upload');
const lodash = require('lodash');
const angularGoogleAnalytics = require('angular-google-analytics');
const TRACK_ID = "UA-123598696-1";


let app = angular.module('devenv', [ngCookies, 'ngAnimate', angularFormly, angularFormlyBootstrapTemplate,
    'ngDialog', 'ngFileUpload', 'angular-google-analytics']);
app.config(['$locationProvider', 'AnalyticsProvider', function($locationProvider, AnalyticsProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    AnalyticsProvider
        .setAccount(TRACK_ID)
        .logAllCalls(true)
        .trackUrlParams(true);
}]);
//
//
// /*----------------directives---------------*/
// const serverComponent = require('./appserver');
// app.component(serverComponent.name, serverComponent.config );
//
// const configurationForm = require('./configurationForm/configurationForm.directive');
// app.component(configurationForm.name, configurationForm.config);
//
// const colorTheme= require('./colorTheme/colorTheme.directive');
// app.component(colorTheme.name, colorTheme.config);
//
// const editImages= require('./editImages/editImages.directive');
// app.component(editImages.name, editImages.config);
//
// const iconsPicker= require('./iconsPicker/iconsPicker.directive');
// app.component(iconsPicker.name, iconsPicker.config);
//
// const features-list= require('./features-list/features-list.directive');
// app.component(features-list.name, features-list.config);
//
// const editor-tab= require('./editor-tab/editor-tab.directive');
// app.component(editor-tab.name, editor-tab.config);
//
// const downloadPackage= require('./downloadPackage/downloadPackage.directive');
// app.component(downloadPackage.name, downloadPackage.config);
//
// const busySpinner= require('./busySpinner/busySpinner.directive');
// app.component(busySpinner.name, busySpinner.config);
//
// const uploadPackage= require('./uploadPackage/uploadPackage.directive');
// app.component(uploadPackage.name, uploadPackage.config);
//
// const feature-configuration-form= require('./feature-configuration-form/feature-configuration-form.directive');
// app.component(feature-configuration-form.name, feature-configuration-form.config);
//
// const code-editor= require('./code-editor/code-editor.directive');
// app.component(code-editor.name, code-editor.config);
//
// const fileTree= require('./fileTree/fileTree.directive');
// app.component(fileTree.name, fileTree.config);
//
// /*-----------------services------------ */
// const iframeService= require('./utils/iframe.service');
// app.service(iframeService.name, iframeService.service);
//
// const configurationService= require('./utils/configuration.service');
// app.service(configurationService.name, configurationService.service);
//
// const featuesService= require('./utils/features.service');
// app.service(featuesService.name, featuesService.service);
//
// const fileUploaderService = require('./utils/fileUploader.service');
// app.service(fileUploaderService.name, fileUploaderService.service);
//
// const colorThemeService = require('./colorTheme/colorTheme.service');
// app.service(colorThemeService.name, colorThemeService.service);
//
// const iconsPickerService = require('./iconsPicker/iconsPicker.service');
// app.service(iconsPickerService.name, iconsPickerService.service);
//
// const editorService = require('./editor-tab/editor.service');
// app.service(editorService.name, editorService.service);
