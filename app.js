/**
 * Created by odyssefs on 10/3/15.
 */
var islandApp = angular.module('islandApp', ['ngRoute', 'islandControllers']);

islandApp.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'island-list.html',
            controller: 'IslandsCtrl'
        }).
        when('/:islandName', {
            templateUrl: 'island-details.html',
            controller: 'IslandDetailCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});