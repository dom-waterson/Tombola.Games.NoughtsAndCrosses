(function () {
    'use strict';
    describe('Promise handling tests', function(){
        var httpBackend,
            promiseHandler;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses');

            inject(['$httpBackend', 'PromiseHandler', function($httpBackend, _promiseHandler_){
                httpBackend = $httpBackend;
                promiseHandler = _promiseHandler_;
            }]);
        });

        it('should send and receive a valid new game response', function(){
            var dataToSend = {player1: 'human', player2: 'human'},
                expectedData = {outcome: 'Continue', gameboard: '000000000', winner: 0},
                result;
            httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', dataToSend)
                .respond(expectedData);

            promiseHandler.prepareGame(dataToSend.player1, dataToSend.player2)
                .then(function(response){
                    result = response;
                });
            httpBackend.flush();

            result.should.be.deep.equal(expectedData);
        });

        it('should complete a full game on the server with non human players', function(){
            var dataToSend = {player1: 'pre-trained', player2: 'random'},
                expectedData = {outcome: 'Win', gameboard: '111022000', winner: 1},
                result;
            httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', dataToSend)
                .respond(expectedData);

            promiseHandler.prepareGame(dataToSend.player1, dataToSend.player2)
                .then(function(response){
                    result = response;
                });
            httpBackend.flush();

            result.outcome.should.not.equal('Continue');
        });

        it('should send and receive a valid make move response', function(){
            var dataToSend = {playerNumber: 1, chosenSquare: 3},
                expectedData = {outcome: 'Continue', gameboard: '000100000'},
                result;
            httpBackend.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove', dataToSend)
                .respond(expectedData);

            promiseHandler.makeMove(dataToSend.playerNumber, dataToSend.chosenSquare)
                .then(function(response){
                    result = response;
                });
            httpBackend.flush();

            result.should.be.deep.equal(expectedData);
        });

        afterEach(function(){
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });
    });
})();