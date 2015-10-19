(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardClickerService', ['$state', '$timeout', 'GameboardService', 'PromiseHandler', 'WinCheckerService', function($state, $timeout, gameboardService, promiseHandler, winCheckerService){
            var me = this,
                changeToEndState = function(endState){
                    $state.go(endState);
                },
                checkOutcome = function(response){
                    if(response.outcome === 'Win'){
                        gameboardService.playerWinner = 'Player ' + response.winner;
                        winCheckerService.checkWin(response.winner);
                        $timeout(changeToEndState, 2000, true, 'win');
                    }
                    else if(response.outcome === 'Draw'){
                        $timeout(changeToEndState, 2000, true, 'draw');
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
                        gameboardService.changePlayer();
                        checkOutcome(response);
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };
        }]);
})();