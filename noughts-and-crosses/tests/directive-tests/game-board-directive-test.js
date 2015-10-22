(function () {
    'use strict';
    describe('game board directive tests', function(){
        var compile,
            rootScope,
            directiveElement,
            sandbox,
            themeChangerMock,
            gameboardClickerMock,
            gameboardMock,
            gameboardClickedSpy,
            resetGameSpy;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('ThemeChangerService', mocks.themeChangerService);
                $provide.value('GameboardClickerService', mocks.gameboardClickerService);
                $provide.value('GameboardService', mocks.gameboardService);
            });
            sandbox = sinon.sandbox.create();
            inject(['$compile', '$rootScope', function($compile, $rootScope){
                compile = $compile;
                rootScope = $rootScope;
            }]);
            themeChangerMock = sinon.sandbox.mock(mocks.themeChangerService);
            gameboardClickerMock = sinon.sandbox.mock(mocks.gameboardClickerService);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            gameboardClickedSpy = sinon.sandbox.spy(mocks.gameboardClickerService, 'gameboardClicked');
            resetGameSpy = sinon.sandbox.spy(mocks.gameboardService, 'resetGame');
            directiveElement = compileTheElement();
        });

        var compileTheElement = function(){
            var element = angular.element('<gameboard></gameboard>');
            var elements = compile(element)(rootScope);
            rootScope.$digest();
            return elements;
        };

        it('should add the appropriate html and have the directive work', function(){
            directiveElement[0].toString().should.equal('[object HTMLElement]');
        });

        it.skip('should set the theme based on the theme changer service', function(){
            rootScope.themeChangerModel = mocks.themeChangerService;
            mocks.themeChangerService.theme = 'silly';
            rootScope.$digest();
            var element = directiveElement.find('div');
            element.attr('ng-class').should.equal('silly');
        });

        it.skip('should have the appropriate class applied to the gameboard div', function(){
            var element = directiveElement.find('div');
            element.attr('class').should.equal('gameboard');
        });

        it.skip('should set the gameboard row class to the appropriate divs', function(){
            var element = directiveElement.find('div');
            element.attr('class').should.equal('gameboardRow');
        });

        it.skip('should set the 9 gameboard squares with the appropriate classes', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement.find('div');
            mocks.gameboardService.gameboard.board = '000000000';
            rootScope.$digest();
            element.attr('class').should.equal('gameboardSquare player0');
        });

        it.skip('should change the divs class binding when the gameboard is changed', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            mocks.gameboardService.gameboard.board = '100000000';
            var element = directiveElement.find('div.gameboardSquare');
            rootScope.$digest();
            element.attr('class').should.equal('gameboardSquare player1');
        });

        it('should call the gameboardClicked method when clicking a square', function(){
            rootScope.gameboardClickerModel = mocks.gameboardClickerService;
            var element = directiveElement.find('div');
            rootScope.$digest();
            element.triggerHandler('click');
            gameboardClickedSpy.should.have.callCount(9);
        });

        it('should call the reset game board function when clicking the reset button', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement.find('button');
            rootScope.$digest();
            element.triggerHandler('click');
            resetGameSpy.should.have.been.calledOnce; /*jshint ignore:line*/
        });

        it('should have the appropriate information displayed below the gameboard', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement.find('p');
            mocks.gameboardService.gameboard.board = '121200120';
            mocks.gameboardService.currentGameState = 'Win';
            mocks.gameboardService.playerWinner = '2';
            rootScope.$digest();
            element.text().should.equal('121200120Win 2');
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();