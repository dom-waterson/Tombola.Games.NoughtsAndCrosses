(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').directive('playerSelection', function(){
        return{
            restrict: 'E',
            templateUrl: 'scripts/Directives/player-selection.html'
        };
    });
})();