'use strict';
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
        makeMove: function(currentPlayer, chosenSquare){},
        prepareGame: function(){}
    },

    gameboardClickerService:{
        checkOutcome: function(response){},
        changePlayer: function(){},
        gameboardClicked: function(squareNumberClicked){}
    },

    themeChangerService:{
        theme: 'default',
        switchTheme: function(){}
    }
};
