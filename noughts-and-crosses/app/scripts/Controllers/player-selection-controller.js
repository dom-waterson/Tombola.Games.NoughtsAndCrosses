(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('playerSelectionController', ['$scope', 'PlayerSelectionService', 'GameboardService', 'ThemeChangerService', function($scope, playerSelectionService, gameboardService, themeChangerService){
            $scope.model = playerSelectionService;
            $scope.gameboardModel = gameboardService;
            $scope.themeChangerModel = themeChangerService;
        }]);
})();