(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/playerSelection');
            $stateProvider
                .state('playerSelection', {
                    url: '/playerSelection',
                    template: '<player-selection></player-selection>',
                    controller: 'playerSelectionController'
                })
                .state('gameboard', {
                    url: '/gameboard',
                    template: '<gameboard></gameboard>',
                    controller: 'gameboardController'
                });
        }]);
})();