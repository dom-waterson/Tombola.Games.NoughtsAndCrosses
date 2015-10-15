(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['$state', '$timeout', 'GameboardService', 'PromiseHandler', 'WinCheckerService', 'SoundService', 'SoundConstants', 'ThemeChangerService', function($state, $timeout, gameboardService, promiseHandler, winCheckerService, soundService, soundConstants, themeChangerService){
            var me = this,
                soundData = soundConstants,
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
                    if(endState === 'win'){
                        soundService.playGameSound(soundData.VICTORY_START, soundData.VICTORY_DURATION);
                    }
                    else{
                        if(themeChangerService.theme === 'default'){
                            soundService.playGameSound(soundData.DEFAULT_LOSE_STATE_START, soundData.DEFAULT_LOSE_STATE_DURATION);
                        }
                        else{
                            soundService.playGameSound(soundData.SILLY_LOSE_STATE_START, soundData.SILLY_LOSE_STATE_DURATION);
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
                        if(themeChangerService.theme === 'default'){
                            soundService.playGameSound(soundData.DEFAULT_PLAYER_CLICK_START, soundData.DEFAULT_PLAYER_CLICK_DURATION);
                        }
                        else{
                            soundService.playGameSound(soundData.SILLY_PLAYER_CLICK_START, soundData.SILLY_PLAYER_CLICK_DURATION);
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();