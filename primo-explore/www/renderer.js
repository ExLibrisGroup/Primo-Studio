const material_module = require('angular-material');
const angular = require('angular');





let app = angular.module('devenv', [material_module])


/*----------------directives---------------*/
const serverComponent = require('./appserver');
app.component(serverComponent.name, serverComponent.config );

const configurationForm = require('./configurationForm/configurationForm.directive');
app.component(configurationForm.name, configurationForm.config);

const colorTheme= require('./colorTheme/colorTheme.directive');
app.component(colorTheme.name, colorTheme.config);


/*-----------------services------------ */
const iframeService= require('./utils/iframe.service')
app.service(iframeService.name, iframeService.service);

const configurationService= require('./utils/configuration.service');
app.service(configurationService.name, configurationService.service);

