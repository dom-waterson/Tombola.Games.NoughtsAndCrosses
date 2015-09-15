(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').controller('playerSelectionController', ['$scope', function($scope){
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.playing = false;
        $scope.win = winConditions;

        $scope.changePlayerType = function(playerNumber){
            if(playerNumber === 1){
                $scope.player1 = playerChanger($scope.player1);
            }
            if(playerNumber === 2){
                $scope.player2 = playerChanger($scope.player2);
            }
        };

        var playerChanger = function(player){
            if (player === 'human'){
                return 'computer';
            }
            else if (player === 'computer'){
                return 'random';
            }
            else{
                return 'human';
            }
        };
    }]);

    var winConditions = [
        'PPPXXXXXX',
        'XXXPPPXXX',
        'XXXXXXPPP',
        'PXXPXXPXX',
        'XPXXPXXPX',
        'XXPXXPXXP',
        'PXXXPXXXP',
        'XXPXPXPXX'
    ];
})();