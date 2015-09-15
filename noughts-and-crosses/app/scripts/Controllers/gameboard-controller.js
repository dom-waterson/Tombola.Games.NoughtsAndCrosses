(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses').controller('gameboardController', function($scope){
        $scope.createGameboard = function(player1, player2){
            $scope.gameboard = {
                player1 : player1,
                player2 : player2,
                board : '000000000',
                playerTurn : 1
            };
            $scope.playing = true;
        };

        var updateGameboard = function(index){
            $scope.gameboard.board = $scope.gameboard.board.substr(0,index) + $scope.gameboard.playerTurn + $scope.gameboard.board.substr(index+1);
        };

        $scope.resetGame = function(){
            $scope.playing = false;
        };

        $scope.gameboardClicked = function(squareNumberClicked){
            if ($scope.gameboard.board.charAt(squareNumberClicked) !== '0'){
                return;
            }
            if ($scope.gameboard.playerTurn === 1){
                updateGameboard(squareNumberClicked);
                $scope.gameboard.playerTurn = 2;
            }
            else{
                updateGameboard(squareNumberClicked);
                $scope.gameboard.playerTurn = 1;
            }
        };
    });
})();