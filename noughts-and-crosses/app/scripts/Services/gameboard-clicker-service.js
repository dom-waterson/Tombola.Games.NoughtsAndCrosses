(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['$state', '$timeout', 'GameboardService', 'PromiseHandler', 'WinCheckerService', 'SoundService', 'ThemeChangerService', function($state, $timeout, gameboardService, promiseHandler, winCheckerService, soundService, themeChangerService){
            var me = this,
                checkOutcome = function(response){
                    if(response.outcome === 'Win'){
                        gameboardService.playerWinner = 'Player ' + response.winner;
                        winCheckerService.checkWin(response.winner);
                        $timeout(changeToEndState, 2000, true, 'win');
                    }
                    else if(response.outcome === 'Draw'){
                        $timeout(changeToEndState, 2000, true, 'draw');
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
                },
                changeToEndState = function(endState){
                    $state.go(endState);
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
                        if(themeChangerService.theme === 'default'){
                            soundService.playGameSound(5, 1291);
                        }
                        else{
                            soundService.playGameSound(7, 743);
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();