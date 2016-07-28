import angular from 'angular';
import Home from './home/home';
import About from './about/about';

const components = angular.module('myApp.components', [
    Home,
    About
])
    .name; // 返回模块名方便其他模块引用

export default components;
