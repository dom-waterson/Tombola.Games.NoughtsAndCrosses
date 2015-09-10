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

        $scope.updateGameboard = function(index){
            $scope.gameboard.board = $scope.gameboard.board.substr(0,index) + $scope.gameboard.playerTurn + $scope.gameboard.board.substr(index+1);
        };

        $scope.setPlayerClass = function(){
            if(!$scope.playing){
                return '';
            }
            if($scope.gameboard.playerTurn === 1){
                return 'player1';
            }
            else{
                return 'player2';
            }
        };

        $scope.gameboardClicked = function(squareNumberClicked){
            if ($scope.gameboard.board.charAt(squareNumberClicked) !== '0'){
                return;
            }
            if ($scope.gameboard.playerTurn === 1){
                $scope.updateGameboard(squareNumberClicked);
                $scope.gameboard.playerTurn = 2;
            }
            else{
                $scope.updateGameboard(squareNumberClicked);
                $scope.gameboard.playerTurn = 1;
            }
        };
    });
})();