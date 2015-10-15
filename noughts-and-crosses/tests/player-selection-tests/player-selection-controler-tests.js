(function () {
    'use strict';
    describe('player selection controller tests', function(){
        var sandbox,
            controller,
            scope,
            playerSelectionMock,
            gameboardMock,
            themeChangerMock;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('PlayerSelectionService', mocks.playerSelectionService);
                $provide.value('GameboardService', mocks.gameboardService);
                $provide.value('ThemeChangerService', mocks.themeChangerService);
            });
            sandbox = sinon.sandbox.create();
            inject(function($controller, $rootScope){
                scope = $rootScope.$new();
                controller = $controller('playerSelectionController', {
                    $scope: scope
                });
            });
            playerSelectionMock = sinon.sandbox.mock(mocks.playerSelectionService);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            themeChangerMock = sinon.sandbox.mock(mocks.themeChangerService);
            controller.model = mocks.playerSelectionService;
            controller.gameboardModel = mocks.gameboardService;
            controller.themeChangerModel = mocks.themeChangerService;
        });

        it('should correctly instantiate the player selection model', function(){
            controller.model.should.equal(mocks.playerSelectionService);
        });

        it('should correctly instantiate the gameboard model', function(){
            controller.gameboardModel.should.equal(mocks.gameboardService);
        });

        it('should correctly instantiate the theme changer model', function(){
            controller.themeChangerModel.should.equal(mocks.themeChangerService);
        });

        afterEach(function(){
            playerSelectionMock.verify();
            gameboardMock.verify();
            themeChangerMock.verify();
            sandbox.restore();
        });
    });
})();