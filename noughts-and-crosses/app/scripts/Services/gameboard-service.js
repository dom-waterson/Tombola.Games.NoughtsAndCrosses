(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('GameboardService', ['PlayerSelectionService', 'PromiseHandler', function(playerSelectionService, promiseHandler){
            var me = this;
            me.currentGameState = '';
            me.playerWinner = '';
            me.createGameboard = function(){
                me.gameboard = {
                    player1 : playerSelectionService.player1Type,
                    player2 : playerSelectionService.player2Type,
                    board : '000000000',
                    playerTurn : 1
                };
                me.playing = true;
                promiseHandler.prepareGame(me.gameboard.player1, me.gameboard.player2)
                    .then(function(response){
                        me.gameboard.board = response.gameboard;
                        me.currentGameState = response.outcome;
                        if(me.gameboard.player1==='pre-trained' || me.gameboard.player1==='random'){
                            me.gameboard.playerTurn = 2;
                        }
                    })
                    .catch(function(response){
                        alert('There was an error: ' + response);
                    });
            };

            me.resetGame = function(){
                me.playing = false;
                me.currentGameState = '';
                me.playerWinner = '';
            };
        }]);
})();