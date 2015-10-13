(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .controller('themeController', ['$scope', 'ThemeChangerService', function($scope, themeChangerService){
            $scope.model = themeChangerService;
        }]);
})();