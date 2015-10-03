/**
 * Created by odyssefs on 10/3/15.
 */

var islandControllers = angular.module('islandControllers', []);

islandControllers.controller('IslandsCtrl', function ($scope, $http) {
    $http.get('islands.json').success(function (data) {
        $scope.islands = data;
    });
    $scope.reverse = true;
    $scope.sortField = 'name';
});

