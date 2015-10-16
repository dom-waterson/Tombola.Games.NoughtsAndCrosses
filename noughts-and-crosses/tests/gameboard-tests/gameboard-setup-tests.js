(function () {
    'use strict';
    describe('gameboard setup testing', function(){
        var playerSelectionMock,
            GameboardService,
            sandbox;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('PlayerSelectionService', mocks.playerSelectionService);
            });
            sandbox = sinon.sandbox.create();
            inject(['GameboardService', function(_gameboardService_){
                GameboardService = _gameboardService_;
            }]);

            playerSelectionMock = sinon.sandbox.mock(mocks.playerSelectionService);
        });

        it('should initialize the gameboard to 000000000', function(){
            GameboardService.createGameboard();
            GameboardService.gameboard.board.should.equal('000000000');
        });

        it('should setup player1 correctly', function(){
            GameboardService.createGameboard();
            GameboardService.gameboard.player1.should.equal(mocks.playerSelectionService.players[0]);
        });

        it('should setup player2 correctly', function(){
            GameboardService.createGameboard();
            GameboardService.gameboard.player2.should.equal(mocks.playerSelectionService.players[1]);
        });

        it('should set the turn to player 1 to begin with', function(){
            GameboardService.createGameboard();
            GameboardService.gameboard.playerTurn.should.equal(1);
        });

        it('should set the playing flag to true', function(){
            GameboardService.createGameboard();
            GameboardService.playing.should.equal(true);
        });

        it('should reset the values back to their defaults on game reset', function(){
            GameboardService.currentGameState = 'Continue';
            GameboardService.playing = true;
            GameboardService.playerWinner = 0;
            GameboardService.resetGame();
            GameboardService.currentGameState.should.equal('');
            GameboardService.playing.should.equal(false);
            GameboardService.playerWinner.should.equal('');
        });

        afterEach(function(){
            playerSelectionMock.verify();
            sandbox.restore();
        });
    });
})();