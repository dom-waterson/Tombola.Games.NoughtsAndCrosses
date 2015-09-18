(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('gameboardController', ['$scope', '$http', 'GameboardService', 'GameboardClickerService', function($scope, $http, gameboardService, gameboardClickerService){
            $scope.gameboardModel = gameboardService;
            $scope.gameboardClickerModel = gameboardClickerService;
        }]);
})();