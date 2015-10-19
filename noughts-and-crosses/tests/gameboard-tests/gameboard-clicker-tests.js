(function () {
    'use strict';
    describe('gameboard clicker service tests', function(){
        var GameboardClickerService,
            state,
            timeout,
            gameboardMock,
            promiseHandlerMock,
            sandbox;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
                $provide.value('PromiseHandler', mocks.promiseHandler);
            });
            sandbox = sinon.sandbox.create();
            inject(['$state', '$timeout', 'GameboardClickerService', function($state, $timeout, _gameboardClickerService_){
                state = $state;
                timeout = $timeout;
                GameboardClickerService = _gameboardClickerService_;
            }]);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            promiseHandlerMock = sinon.sandbox.mock(mocks.promiseHandler);
        });

        it('should change the player turn from 1 to 2 successfully', function(){
            GameboardClickerService.changePlayer();
            mocks.gameboardService.gameboard.playerTurn.should.equal(2);
        });

        it('should change the player from 2 to 1 successfully', function(){
            mocks.gameboardService.gameboard.playerTurn = 2;
            GameboardClickerService.changePlayer();
            mocks.gameboardService.gameboard.playerTurn.should.equal(1);
        });

        it('should leave the player turn at 1 if the players arent both human', function(){
            mocks.gameboardService.gameboard.player1 = 'random';
            GameboardClickerService.changePlayer();
            mocks.gameboardService.gameboard.playerTurn.should.equal(1);
        });

        it('should change the state to win if the outcome given is a win', function() {
            GameboardClickerService.checkOutcome({outcome:'Win'});
            timeout.flush();
            state.current.url.should.equal('/win');
        });

        it('should change the state to draw if the outcome given is a draw', function(){
            GameboardClickerService.checkOutcome({outcome:'Draw'});
            timeout.flush();
            state.current.url.should.equal('/draw');
        });

        it('should not change the gameboard if the game is already won', function(){
            mocks.gameboardService.currentGameState = 'Win';
            GameboardClickerService.gameboardClicked();
            mocks.gameboardService.gameboard.board.should.equal('000000000');
        });

        it('should update the appropriate square with player 1 on player 1s turn', function(){
            var expectedGameboard = '100000000';
            mocks.gameboardService.gameboard.board = mocks.promiseHandler.makeMove(1,0).gameboard;
            mocks.gameboardService.gameboard.board.should.equal(expectedGameboard);
        });

        it('should update the appropriate square with player 2 on player 2s turn', function(){
            var expectedGameboard = '200000000';
            mocks.gameboardService.gameboard.board = mocks.promiseHandler.makeMove(2, 0).gameboard;
            mocks.gameboardService.gameboard.board.should.equal(expectedGameboard);
        });

        it('should not change the gameboard if the square clicked is already occupied', function(){
            mocks.gameboardService.gameboard.board = '100000000';
            GameboardClickerService.gameboardClicked();
            mocks.gameboardService.gameboard.board.should.equal('100000000');
        });

        it('should appropriately set the winning player', function(){
            var testData = {outcome: 'Win', winner: '2'};
            GameboardClickerService.checkOutcome(testData);
            mocks.gameboardService.playerWinner.should.equal('Player 2');
        });

        afterEach(function(){
            gameboardMock.verify();
            promiseHandlerMock.verify();
            sandbox.restore();
        });
    });
})();