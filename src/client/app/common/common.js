import angular from 'angular';
import Navbar from './navbar/navbar';

const common = angular.module('myApp.common', [
    Navbar
])
    .name; // 返回模块名方便其他模块引用

export default common;
