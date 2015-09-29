(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['$state', 'GameboardService', 'PromiseHandler', 'WinCheckerService', function($state, gameboardService, promiseHandler, winCheckerService){
            var me = this,
                checkOutcome = function(response){
                    if(response.outcome === 'Win'){
                        gameboardService.playerWinner = 'Player ' + response.winner;
                        winCheckerService.checkWin(response.winner);
                        $state.go('win');
                    }
                    else if(response.outcome === 'Draw'){
                        $state.go('draw');
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
                if (gameboardService.gameboard.board.charAt(squareNumberClicked) !== '0' || gameboardService.currentGameState === 'Win'){
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