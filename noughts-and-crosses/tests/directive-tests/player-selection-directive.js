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

        it('should bind player the players correctly based on the player type selected', function(){
            rootScope.model = mocks.playerSelectionService;
            var element = directiveElement.find('h2');
            mocks.playerSelectionService.players[0] = 'human';
            mocks.playerSelectionService.players[1] = 'random';
            rootScope.$digest();
            element.text().should.equal('Player 1 = humanPlayer 2 = random');
        });

        it('should call to change the player type picture on image click', function(){
            rootScope.model = mocks.playerSelectionService;
            var element = directiveElement.find('img');
            rootScope.$digest();
            element.triggerHandler('click');
            togglePlayer1Spy.should.have.been.calledOnce; /*jshint ignore:line */
            togglePlayer2Spy.should.have.been.calledOnce; /*jshint ignore:line */
        });

        it('should call the create gameboard method once on appropriate button click', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement.find('button');
            rootScope.$digest();
            element.triggerHandler('click');
            createGameboardSpy.should.have.been.calledOnce; /*jshint ignore:line */
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();