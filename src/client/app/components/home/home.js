import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

const home = angular.module('myApp.home', [
    uiRouter
])
    .config(['$stateProvider','$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home></home>',
                // component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    }])

    .component('home', homeComponent)

    .name; // 返回模块名方便其他模块引用

export default home;