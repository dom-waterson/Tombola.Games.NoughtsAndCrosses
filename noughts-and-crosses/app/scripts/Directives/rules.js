(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .directive('rules', function(){
            return{
                restrict: 'E',
                templateUrl: 'scripts/Directives/rules.html'
            };
        });
})();