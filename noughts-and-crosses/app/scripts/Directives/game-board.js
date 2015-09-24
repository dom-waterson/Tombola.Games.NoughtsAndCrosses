(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').directive('gameboard', function(){
        return{
            restrict: 'E',
            templateUrl: 'scripts/Directives/game-board.html'
        };
    });
})();