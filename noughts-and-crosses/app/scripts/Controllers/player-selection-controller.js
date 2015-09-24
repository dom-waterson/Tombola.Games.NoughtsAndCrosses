(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('playerSelectionController', ['$scope', 'PlayerSelectionService', 'GameboardService', function($scope, playerSelectionService, gameboardService){
            $scope.model = playerSelectionService;
            $scope.gameboardModel = gameboardService;
        }]);
})();