const angular = require('angular');
const ngCookies= require('angular-cookies');
const angularAnimate = require('angular-animate');
const angularFormly = require('angular-formly');
const angularFormlyBootstrapTemplate = require('angular-formly-templates-bootstrap');
const angularDialog = require('ng-dialog');


let app = angular.module('devenv', [ngCookies, 'ngAnimate', angularFormly, angularFormlyBootstrapTemplate, 'ngDialog'])
app.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
}])


/*----------------directives---------------*/
const serverComponent = require('./appserver');
app.component(serverComponent.name, serverComponent.config );

const configurationForm = require('./configurationForm/configurationForm.directive');
app.component(configurationForm.name, configurationForm.config);

const colorTheme= require('./colorTheme/colorTheme.directive');
app.component(colorTheme.name, colorTheme.config);

const editImages= require('./editImages/editImages.directive');
app.component(editImages.name, editImages.config);

const featuresList= require('./featuresList/featuresList.directive');
app.component(featuresList.name, featuresList.config);

const downloadPackage= require('./downloadPackage/downloadPackage.directive');
app.component(downloadPackage.name, downloadPackage.config);

const busySpinner= require('./busySpinner/busySpinner.directive');
app.component(busySpinner.name, busySpinner.config);

const uploadPackage= require('./uploadPackage/uploadPackage.directive');
app.component(uploadPackage.name, uploadPackage.config);

const featureConfigurationForm= require('./featureConfigurationForm/featureConfigurationForm.directive');
app.component(featureConfigurationForm.name, featureConfigurationForm.config);

/*-----------------services------------ */
const iframeService= require('./utils/iframe.service');
app.service(iframeService.name, iframeService.service);

const configurationService= require('./utils/configuration.service');
app.service(configurationService.name, configurationService.service);

const featuesService= require('./utils/features.service');
app.service(featuesService.name, featuesService.service);

const fileUploaderService = require('./utils/fileUploader.service');
app.service(fileUploaderService.name, fileUploaderService.service);

const colorThemeService = require('./colorTheme/colorTheme.service');
app.service(colorThemeService.name, colorThemeService.service);
