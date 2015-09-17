(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('PromiseHandler', ['$q', '$http', function($q, $http){
            this.prepareGame = function(player1, player2){
                var data = {
                    'player1': player1,
                    'player2': player2
                };
                return handleRequest(data, 'newgame');
            };

            this.makeMove = function(currentPlayer, chosenSquare){
                var data = {
                    'playerNumber': currentPlayer,
                    'chosenSquare': chosenSquare
                };
                return handleRequest(data, 'makemove');
            };

            var handleRequest = function(data, requestType){
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/'+requestType, data , {"withCredentials":'true'})
                    .then(function(response){
                        deferred.resolve(response.data);
                    })
                    .catch(function(response){
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };
        }]);
})();