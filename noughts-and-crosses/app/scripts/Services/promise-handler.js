(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('PromiseHandler', ['$q', '$http', function($q, $http){
            this.prepareGame = function(player1, player2){
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame',
                    {
                        'player1': player1,
                        'player2': player2
                    }, {"withCredentials": 'true'})
                    .then(function(response){
                        deferred.resolve(response.data);
                    })
                    .catch(function(response){
                        deferred.reject(response.data);
                    });
                return deferred.promise;
            };

            this.makeMove = function(currentPlayer, chosenSquare){
                var deferred = $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',
                    {
                        'playerNumber': currentPlayer,
                        'chosenSquare': chosenSquare
                    }, {"withCredentials":'true'})
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