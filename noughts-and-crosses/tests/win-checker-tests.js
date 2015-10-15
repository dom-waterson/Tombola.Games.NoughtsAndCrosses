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
            inject(function(_WinCheckerService_){
                winCheckerService = _WinCheckerService_;
            });
            gameboardMock = sandbox.mock(mocks.gameboardService);
        });

        it('should win if gameboard is 111000000 or 222000000', function(){

        });

        it('should win if gameboard is 000111000 or 000222000', function(){

        });

        it('should win if gameboard is 000000111 or 000000222', function(){

        });

        it('should win if gameboard is 100010001 or 200020002', function(){

        });

        it('should win if gameboard is 001010100 or 002020200', function(){

        });

        it('should win if gameboard is 100100100 or 200200200', function(){

        });

        it('should win if gameboard is 010010010 or 020020020', function(){

        });

        it('should win if gameboard is 001001001 or 002002002', function(){

        });
    });
})();