(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('WinCheckerService', function(){
            var me = this;

            var winningMoves = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,4,8],
                [2,4,6],
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ];

            me.checkWin = function(playerWinner){
                var i;
                for(i=0; i<winningMoves.length; i++){
                    if(winningMoves[i][0] === playerWinner &&
                        winningMoves[i][1] === playerWinner &&
                        winningMoves[i][2] === playerWinner){
                        return winningMoves[i];
                    }
                }
            };
    });
})();