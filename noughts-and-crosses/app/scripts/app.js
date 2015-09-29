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
                })
                .state('win', {
                    url: '/win',
                    template: '<win-state></win-state>',
                    controller: 'gameboardController'
                })
                .state('draw', {
                    url: '/draw',
                    template: '<draw-state></draw-state>',
                    controller: 'gameboardController'
                });
        }]);
})();