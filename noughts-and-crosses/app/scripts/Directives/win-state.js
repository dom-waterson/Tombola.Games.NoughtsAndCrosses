(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').directive('winState', function(){
        return{
            restrict: 'E',
            templateUrl: 'scripts/Directives/win-state.html'
        };
    });
})();