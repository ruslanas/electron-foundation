import '../styles/main.scss';

import 'angular';
import 'angular-route';

import { AboutController } from "./controllers/AboutController";

export default angular.module('electron.foundation', ['ngRoute'])

    .controller('AboutController', ["$log", AboutController])

    .config(['$routeProvider', '$compileProvider', '$logProvider',
        function (
            $routeProvider,
            $compileProvider: ng.ICompileProvider,
            $logProvider: ng.ILogProvider
        ) {
            $logProvider.debugEnabled(true);
            $compileProvider.debugInfoEnabled(false);

            (<any>$compileProvider).commentDirectivesEnabled(false);
            (<any>$compileProvider).cssClassDirectivesEnabled(false);

            $routeProvider.when('/', {
                templateUrl: 'templates/about.html',
                controller: 'AboutController',
                controllerAs: 'app'
            });
        }]);
