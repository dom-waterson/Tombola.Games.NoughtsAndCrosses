(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('playerSelectionController', ['$scope', 'PlayerSelectionService', function($scope, playerSelectionService){
            $scope.model = playerSelectionService;
        }]);
})();