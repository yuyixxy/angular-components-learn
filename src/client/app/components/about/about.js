import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';

const about = angular.module('myApp.about', [
    uiRouter
])
    .config(['$stateProvider','$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $stateProvider
            .state('about', {
                url: '/about',
                template: '<about></about>',
                // component: 'about'
            });
        $urlRouterProvider.otherwise('/');
    }])

    .component('about', aboutComponent)

    .name; // 返回模块名方便其他模块引用

export default about;