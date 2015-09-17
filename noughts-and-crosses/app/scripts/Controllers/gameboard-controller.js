(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('gameboardController', ['$scope', '$http', 'GameboardService', function($scope, $http, gameboardService){
            $scope.model = gameboardService;
        }]);
})();