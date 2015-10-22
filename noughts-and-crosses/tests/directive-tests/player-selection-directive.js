(function () {
    'use strict';
    describe('draw state directive tests', function() {
        var compile,
            rootScope,
            directiveElement,
            gameboardMock,
            themeChangerMock,
            playerSelectionMock,
            sandbox,
            createGameboardSpy,
            togglePlayer1Spy,
            togglePlayer2Spy;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
            });
            sandbox = sinon.sandbox.create();
            inject(['$compile', '$rootScope', function($compile, $rootScope){
                compile = $compile;
                rootScope = $rootScope.$new();
            }]);
            themeChangerMock = sinon.sandbox.mock(mocks.themeChangerService);
            playerSelectionMock = sinon.sandbox.mock(mocks.playerSelectionService);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            createGameboardSpy = sinon.sandbox.spy(mocks.gameboardService, 'createGameboard');
            togglePlayer1Spy = sinon.sandbox.spy(mocks.playerSelectionService, 'togglePlayer1Type');
            togglePlayer2Spy = sinon.sandbox.spy(mocks.playerSelectionService, 'togglePlayer2Type');
            directiveElement = compileTheElement();
        });

        var compileTheElement = function(){
            var element = angular.element('<player-selection></player-selection>');
            var elements = compile(element)(rootScope);
            rootScope.$digest();
            return elements;
        };

        it('should add the appropriate html and have the directive work', function(){
            directiveElement[0].toString().should.equal('[object HTMLElement]');
        });

        it('should set the theme based on the theme changer service', function(){
            rootScope.themeChangerModel = mocks.themeChangerService;
            mocks.themeChangerService.theme = 'silly';
            rootScope.$digest();
            var element = directiveElement.find('div');
            element.attr('ng-class').should.equal('silly');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();