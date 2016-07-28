import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';

const navbar = angular.module('common.navbar', [
    uiRouter
])
    .component('navbar', navbarComponent)

    .name; // 返回模块名方便其他模块引用

export default navbar;
