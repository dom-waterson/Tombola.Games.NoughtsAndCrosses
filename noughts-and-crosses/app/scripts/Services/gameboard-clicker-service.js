(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['GameboardService', 'PromiseHandler', function(gameboardService, promiseHandler){
            var me = this,
                checkOutcome = function(response){
                    if(response.outcome === 'Win'){
                        if(response.winner === '1'){
                            gameboardService.playerWinner = 'player 1';
                        }
                        else{
                            gameboardService.playerWinner = 'player 2';
                        }
                    }
                },
                changePlayer = function(){
                    if(gameboardService.gameboard.player1 === 'human' && gameboardService.gameboard.player2 === 'human') {
                        if (gameboardService.gameboard.playerTurn === 1) {
                            gameboardService.gameboard.playerTurn = 2;
                        }
                        else {
                            gameboardService.gameboard.playerTurn = 1;
                        }
                    }
                };

            me.gameboardClicked = function(squareNumberClicked){
                if (gameboardService.gameboard.board.charAt(squareNumberClicked) !== '0'){
                    return;
                }
                promiseHandler.makeMove(gameboardService.gameboard.playerTurn, squareNumberClicked)
                    .then(function(response){
                        gameboardService.gameboard.board = response.gameboard;
                        gameboardService.currentGameState = response.outcome;
                        changePlayer();
                        checkOutcome(response);
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();