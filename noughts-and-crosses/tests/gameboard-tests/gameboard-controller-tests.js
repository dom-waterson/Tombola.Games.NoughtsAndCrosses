(function () {
    'use strict';
    describe('gameboard controller tests', function(){
        var sandbox,
            controller,
            scope,
            gameboardMock,
            gameboardClickerMock,
            themeChangerMock;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
                $provide.value('GameboardClickerService', mocks.gameboardClickerService);
                $provide.value('ThemeChangerService', mocks.themeChangerService);
            });
            sandbox = sinon.sandbox.create();
            inject(function($controller, $rootScope){
                scope = $rootScope.$new();
                controller = $controller('gameboardController', {
                    $scope: scope
                });
            });
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            gameboardClickerMock = sinon.sandbox.mock(mocks.gameboardClickerService);
            themeChangerMock = sinon.sandbox.mock(mocks.themeChangerService);
        });

        it('instantiates the gameboard model correctly', function(){
            controller.gameboardModel.should.be.deep.equal(mocks.gameboardService);
        });

        it('instantiates the gameboard clicker model correctly', function(){

        });

        it('instantiates the theme changer model correctly', function(){

        });
    });
})();