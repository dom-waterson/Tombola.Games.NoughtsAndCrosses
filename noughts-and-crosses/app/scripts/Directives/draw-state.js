(function(){
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .directive('drawState', function(){
            return{
                restrict: 'E',
                templateUrl: 'scripts/Directives/draw-state.html'
            };
        });
})();