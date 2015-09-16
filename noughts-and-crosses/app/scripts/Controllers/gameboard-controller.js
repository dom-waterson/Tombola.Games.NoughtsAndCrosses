(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('gameboardController', ['$scope', '$http', 'PromiseHandler', 'PlayerSelectionService', function($scope, $http, promiseHandler, playerSelectionService){
            $scope.model = playerSelectionService;
            $scope.currentGameState = '';
            $scope.createGameboard = function(){
                $scope.gameboard = {
                    player1 : playerSelectionService.player1Type,
                    player2 : playerSelectionService.player2Type,
                    board : '000000000',
                    playerTurn : 1
                };
                $scope.playing = true;
                promiseHandler.prepareGame($scope.gameboard.player1, $scope.gameboard.player2)
                    .then(function(response){
                        $scope.gameboard.board = response.gameboard;
                        $scope.currentGameState = response.outcome;
                        if($scope.gameboard.player1==='pre-trained'){
                            $scope.gameboard.playerTurn = 2;
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };

            $scope.resetGame = function(){
                $scope.playing = false;
            };

            $scope.gameboardClicked = function(squareNumberClicked){
                if ($scope.gameboard.board.charAt(squareNumberClicked) !== '0'){
                    return;
                }
                promiseHandler.makeMove($scope.gameboard.playerTurn, squareNumberClicked)
                    .then(function(response){
                        $scope.gameboard.board = response.gameboard;
                        if($scope.gameboard.player1 === 'human' && $scope.gameboard.player2 === 'human') {
                            if ($scope.gameboard.playerTurn === 1) {
                                $scope.gameboard.playerTurn = 2;
                            }
                            else {
                                $scope.gameboard.playerTurn = 1;
                            }
                        }
                        $scope.currentGameState = response.outcome;
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();