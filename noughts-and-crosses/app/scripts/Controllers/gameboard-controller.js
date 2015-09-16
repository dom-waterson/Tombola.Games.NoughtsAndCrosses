(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('gameboardController', ['$scope', '$http', 'PromiseHandler', 'PlayerSelectionService', function($scope, $http, promiseHandler, playerSelectionService){
            $scope.status='';
            $scope.data='';
            $scope.model = playerSelectionService;
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
                        if($scope.gameboard.player1==='pre-trained'){
                            $scope.gameboard.playerTurn = 2;
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
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
                promiseHandler.makeMove($scope.gameboard.playerTurn, squareNumberClicked)
                    .then(function(response){
                        $scope.gameboard.board = response.gameboard;
                        if($scope.gameboard.playerTurn===1){
                            $scope.gameboard.playerTurn = 2;
                        }
                        else{
                            $scope.gameboard.playerTurn = 1;
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();