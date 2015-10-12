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
    });
})();