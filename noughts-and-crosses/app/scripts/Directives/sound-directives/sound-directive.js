(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .directive('tombolaSound', function(){
            return {
                restrict: 'E',
                link: function postlink (scope, iElement, iAttrs, controller){
                    iElement.append(angular.element('<audio><source src="sound/game-sounds.mp3" type="audio/mp3"/></audio>'));
                }
            };
        });
})();