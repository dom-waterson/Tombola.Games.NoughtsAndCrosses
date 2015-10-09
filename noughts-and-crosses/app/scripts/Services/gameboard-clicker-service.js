(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['GameboardService', 'PromiseHandler', 'WinCheckerService', 'SoundService', function(gameboardService, promiseHandler, winCheckerService, soundService){
            var me = this,
                checkOutcome = function(response){
                    if(response.outcome === 'Win'){
                        if(response.winner === '1'){
                            gameboardService.playerWinner = 'player 1';
                        }
                        else{
                            gameboardService.playerWinner = 'player 2';
                        }
                        winCheckerService.checkWin(response.winner);
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
                        if(!soundService.currentlyPlaying){
                            soundService.playGameSound(7, 743);
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();