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

        it('should set the theme based on the theme changer service', function(){
            rootScope.themeChangerModel = mocks.themeChangerService;
            mocks.themeChangerService.theme = 'silly';
            rootScope.$digest();
            var element = directiveElement[0].children[0];
            element.className.should.equal('silly');
        });

        it('should have the appropriate class applied to the gameboard div', function(){
            var element = directiveElement[0].children[0].children[0];
            element.className.should.equal('gameboard');
        });

        it('should set the gameboard row class to the appropriate divs', function(){
            var element = directiveElement[0].children[0].children[0], i;
            for(i=0; i<element.children.length; i++){
                element.children[i].className.should.equal('gameboardRow');
            }
        });

        it('should set the 9 gameboard squares with the appropriate classes', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement[0].children[0].children[0], i, j, count=0;
            mocks.gameboardService.gameboard.board = '010200102';
            rootScope.$digest();
            for(i=0;i<element.children.length;i++){
                for(j=0;j<element.children[i].children.length; j++){
                    element.children[i].children[j].className.should.equal('gameboardSquare player'+mocks.gameboardService.gameboard.board[count]);
                    count++;
                }
            }
        });

        it('should change the divs class binding when the gameboard is changed', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement[0].children[0].children[0].children[0].children[0];
            mocks.gameboardService.gameboard.board = '000000000';
            rootScope.$digest();
            element.className.should.equal('gameboardSquare player0');
            mocks.gameboardService.gameboard.board = '100000000';
            rootScope.$digest();
            element.className.should.equal('gameboardSquare player1');
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