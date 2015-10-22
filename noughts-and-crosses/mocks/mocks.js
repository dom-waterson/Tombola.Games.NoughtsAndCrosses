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
        resetGame: function(){},
        changePlayer: function(){}
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
        gameboardClicked: function(squareNumberClicked){}
    },

    themeChangerService:{
        theme: 'default',
        switchTheme: function(){}
    },

    winCheckerService:{
        checkWin: function(){}
    }
};
