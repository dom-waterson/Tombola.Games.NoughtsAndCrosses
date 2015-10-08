(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .directive('onClickSound', function(){
            return {
                restrict: 'E',
                link: function postlink (scope, iElement, iAttrs, controller){
                    iElement.append(angular.element('<audio controls autoplay><source src="sound/Silly.mp3" type="audio/mp3"/></audio>'));
                }
            };

        });
})();