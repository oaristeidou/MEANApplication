/**
 * Created by odyssefs on 10/3/15.
 */

var islandControllers = angular.module('islandControllers', ['uiGmapgoogle-maps']);

islandControllers.controller('IslandsCtrl', function ($scope, $http) {
    $http.get('islands.json').success(function (data) {
        $scope.islands = data;
    });
    $scope.reverse = true;
    $scope.sortField = 'name';


});

islandControllers.controller('IslandDetailCtrl', function ($scope, $routeParams, $http) {
    $http.get('islands.json').success(function (data) {
        $scope.island = data.filter(function (entry) {
            return entry.name === $routeParams.islandName;
        })[0];
    });
    $scope.windowOptions = {
        visible: false
    };
    $scope.onClick = function () {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };
    $scope.closeClick = function () {
        $scope.windowOptions.visible = false;
    };
});

