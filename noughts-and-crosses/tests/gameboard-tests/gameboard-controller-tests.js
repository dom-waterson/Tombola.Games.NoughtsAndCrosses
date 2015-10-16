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
            inject(['$controller', '$rootScope', function($controller, $rootScope){
                scope = $rootScope.$new();
                controller = $controller('gameboardController', {
                    $scope: scope
                });
            }]);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            gameboardClickerMock = sinon.sandbox.mock(mocks.gameboardClickerService);
            themeChangerMock = sinon.sandbox.mock(mocks.themeChangerService);
            controller.gameboardModel = mocks.gameboardService;
            controller.gameboardClickerModel = mocks.gameboardClickerService;
            controller.themeChangerModel = mocks.themeChangerService;
        });

        it('instantiates the gameboard model correctly', function(){
            controller.gameboardModel.should.equal(mocks.gameboardService);
        });

        it('instantiates the gameboard clicker model correctly', function(){
            controller.gameboardClickerModel.should.equal(mocks.gameboardClickerService);
        });

        it('instantiates the theme changer model correctly', function(){
            controller.themeChangerModel.should.equal(mocks.themeChangerService);
        });
    });
})();