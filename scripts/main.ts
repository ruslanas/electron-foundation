require('../styles/main.scss');

require('angular');
require('angular-route');

import { HomeController } from "./controllers/HomeController";

angular.module('electron.foundation', ['ngRoute'])
    .controller('HomeController', ["$log", HomeController])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            template: `<h1 ng-bind="app.title"></h1>`,
            controller: 'HomeController',
            controllerAs: 'app'
        });
    }]);
