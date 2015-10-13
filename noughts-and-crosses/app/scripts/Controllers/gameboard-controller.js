(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('gameboardController', ['$scope', '$http', 'GameboardService', 'GameboardClickerService', 'ThemeChangerService', function($scope, $http, gameboardService, gameboardClickerService, themeChangerService){
            $scope.gameboardModel = gameboardService;
            $scope.gameboardClickerModel = gameboardClickerService;
            $scope.themeChangerModel = themeChangerService;
        }]);
})();