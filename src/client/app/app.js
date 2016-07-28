import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Common from './common/common';
import Components from './components/components';
import 'normalize.css';

const app = angular.module('myApp', [
    uiRouter,
    Common,
    Components
])
    .config(['$locationProvider', ($locationProvider) => {
        "ngInject";
        $locationProvider.html5Mode(true).hashPrefix('!');
    }])
    
    .component('app', AppComponent);

export default app;
