const material_module = require('angular-material');
const angular = require('angular');
const serverComponent = require('./appserver');




let app = angular.module('devenv', [material_module])


app.component(serverComponent.name, serverComponent.config )



