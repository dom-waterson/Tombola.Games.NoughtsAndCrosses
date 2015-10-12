(function () {
    'use strict';
    describe('Player selection service tests', function(){
        var playerSelectionService;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses');
            inject(function(_PlayerSelectionService_){
                playerSelectionService = _PlayerSelectionService_;
            });
        });

        it('should have the player defaults set to human', function(){
            playerSelectionService.players[0].should.equal('human');
            playerSelectionService.players[1].should.equal('human');
        });

        it('should change the player 1 type to pre-trained on first click', function(){
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.players[0].should.equal('pre-trained');
        });

        it('should change the player 2 type to pre-trained on first click', function(){
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.players[1].should.equal('pre-trained');
        });

        it('should change the player 1 type to random on second click', function(){
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.players[0].should.equal('random');
        });

        it('should change the player 2 type to random on second click', function(){
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.players[1].should.equal('random');
        });

        it('should change the player 1 type back to human on third click', function(){
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.togglePlayer1Type();
            playerSelectionService.players[0].should.equal('human');
        });

        it('should change the player 2 type back to human on third click', function(){
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.togglePlayer2Type();
            playerSelectionService.players[1].should.equal('human');
        });
    });
})();