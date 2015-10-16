(function () {
    'use strict';
    describe('win checker tests', function(){
        var sandbox,
            gameboardMock,
            winCheckerService;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
            });
            sandbox = sinon.sandbox.create();
            inject(['WinCheckerService', function(_winCheckerService_){
                winCheckerService = _winCheckerService_;
            }]);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
        });

        it('should win if gameboard is 111000000 or 222000000', function(){
            mocks.gameboardService.gameboard.board = '111000000';
            winCheckerService.checkWin('1').should.be.deep.equal([0,1,2]);
            mocks.gameboardService.gameboard.board = '222000000';
            winCheckerService.checkWin('2').should.be.deep.equal([0,1,2]);
        });

        it('should win if gameboard is 000111000 or 000222000', function(){
            mocks.gameboardService.gameboard.board = '000111000';
            winCheckerService.checkWin('1').should.be.deep.equal([3,4,5]);
            mocks.gameboardService.gameboard.board = '000222000';
            winCheckerService.checkWin('2').should.be.deep.equal([3,4,5]);
        });

        it('should win if gameboard is 000000111 or 000000222', function(){
            mocks.gameboardService.gameboard.board = '000000111';
            winCheckerService.checkWin('1').should.be.deep.equal([6,7,8]);
            mocks.gameboardService.gameboard.board = '000000222';
            winCheckerService.checkWin('2').should.be.deep.equal([6,7,8]);
        });

        it('should win if gameboard is 100010001 or 200020002', function(){
            mocks.gameboardService.gameboard.board = '100010001';
            winCheckerService.checkWin('1').should.be.deep.equal([0,4,8]);
            mocks.gameboardService.gameboard.board = '200020002';
            winCheckerService.checkWin('2').should.be.deep.equal([0,4,8]);
        });

        it('should win if gameboard is 001010100 or 002020200', function(){
            mocks.gameboardService.gameboard.board = '001010100';
            winCheckerService.checkWin('1').should.be.deep.equal([2,4,6]);
            mocks.gameboardService.gameboard.board = '002020200';
            winCheckerService.checkWin('2').should.be.deep.equal([2,4,6]);
        });

        it('should win if gameboard is 100100100 or 200200200', function(){
            mocks.gameboardService.gameboard.board = '100100100';
            winCheckerService.checkWin('1').should.be.deep.equal([0,3,6]);
            mocks.gameboardService.gameboard.board = '200200200';
            winCheckerService.checkWin('2').should.be.deep.equal([0,3,6]);
        });

        it('should win if gameboard is 010010010 or 020020020', function(){
            mocks.gameboardService.gameboard.board = '010010010';
            winCheckerService.checkWin('1').should.be.deep.equal([1,4,7]);
            mocks.gameboardService.gameboard.board = '020020020';
            winCheckerService.checkWin('2').should.be.deep.equal([1,4,7]);
        });

        it('should win if gameboard is 001001001 or 002002002', function(){
            mocks.gameboardService.gameboard.board = '001001001';
            winCheckerService.checkWin('1').should.be.deep.equal([2,5,8]);
            mocks.gameboardService.gameboard.board = '002002002';
            winCheckerService.checkWin('2').should.be.deep.equal([2,5,8]);
        });

        it('should not win if the gameboard is not a winning move', function(){
            mocks.gameboardService.gameboard.board = '000000000';
            should.not.exist(winCheckerService.checkWin('1'));
        });

        afterEach(function(){
            gameboardMock.verify();
            sandbox.restore();
        });
    });
})();