(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').controller('PlayerSelectionController', function($scope){
        $scope.player1 = 'human';
        $scope.player2 = 'human';
        $scope.playing = false;
        $scope.createGameboard = function(){
            $scope.gameboard = {
                player1 : $scope.player1,
                player2 : $scope.player2,
                board : '000000000',
                playerTurn : 1
            };
            $scope.playing = true;
        };

        $scope.gameboardClicked = function(squareNumberClicked){
            if ($scope.gameboard.playerTurn === 1){
                alert('player 1 clicked square: ' + squareNumberClicked);
                $scope.gameboard.playerTurn = 2;
            }
            else{
                alert('player 2 clicked square: ' + squareNumberClicked);
                $scope.gameboard.playerTurn = 1;
            }
        };
    });
})();