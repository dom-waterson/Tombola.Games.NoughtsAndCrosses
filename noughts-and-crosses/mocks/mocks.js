'use strict';
//sandbox = sinon.sandBox.create();
//inject(function($injector){
// $service = $injector.get('$service');
//}

//serviceMock = sinon.sandBox.mock(mocks.serviceName);

//$provide.value('serviceName', mocks.serviceName);

//afterEach(function(){
// serviceMock.verify();
// sandbox.restore();
//}

var mocks = {
    gameboardService: {
        currentGameState: '',
        playerWinner: '',
        createGameboard: function(){},
        gameboard: {
            player1: 'human',
            player2: 'human',
            board: '000000000',
            playerTurn: 1
        },
        playing: false,
        resetGame: function(){}
    },

    playerSelectionService: {
        players: ['human', 'pre-trained'],
        playing: false,
        togglePlayer1Type: function(){},
        togglePlayer2Type: function(){}
    },

    promiseHandler: {
        makeMove: function(currentPlayer, chosenSquare){
            if(currentPlayer === 1){
                return {gameboard: '100000000'};
            }
            else{
                return {gameboard: '200000000'};
            }

        },
        prepareGame: function(){}
    }
};