const material_module = require('angular-material');
const angular = require('angular');
const ngCookies= require('angular-cookies');





let app = angular.module('devenv', [material_module, ngCookies])


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


/*-----------------services------------ */
const iframeService= require('./utils/iframe.service');
app.service(iframeService.name, iframeService.service);

const configurationService= require('./utils/configuration.service');
app.service(configurationService.name, configurationService.service);

const featuesService= require('./utils/features.service');
app.service(featuesService.name, featuesService.service);

const fileUploaderService = require('./utils/fileUploader.service');
app.service(fileUploaderService.name, fileUploaderService.service);
