(function () {
    'use strict';
    describe('draw state directive tests', function() {
        var compile,
            rootScope,
            directiveElement,
            gameboardMock,
            sandbox,
            resetGameSpy;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
            });
            sandbox = sinon.sandbox.create();
            inject(['$compile', '$rootScope', function($compile, $rootScope){
                compile = $compile;
                rootScope = $rootScope.$new();
            }]);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
            resetGameSpy = sinon.sandbox.spy(mocks.gameboardService, 'resetGame');
            directiveElement = compileTheElement();
        });

        var compileTheElement = function(){
            var element = angular.element('<win-state></win-state>');
            var elements = compile(element)(rootScope);
            rootScope.$digest();
            return elements;
        };

        it('should add the appropriate html and have the directive work', function(){
            directiveElement[0].toString().should.equal('[object HTMLElement]');
        });

        it('should apply the correct class to the appropriate divs', function(){
            var element = directiveElement.find('div');
            element.attr('class').should.equal('announcement ng-binding');
        });

        it('should bind the winning player into the appropriate divs', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            mocks.gameboardService.playerWinner = 1;
            rootScope.$digest();
            var element = directiveElement.find('div');
            element.text().should.equal('1Wins');
        });

        it('should set the image source correctly', function(){
            var element = directiveElement.find('img');
            element.attr('src').should.equal('images/win.jpg');
        });

        it('should run the reset game function when the player clicks the reset button', function(){
            rootScope.gameboardModel = mocks.gameboardService;
            var element = directiveElement.find('button');
            element.triggerHandler('click');
            resetGameSpy.should.have.been.calledOnce; /*jshint ignore:line*/
        });

        afterEach(function(){
            sandbox.restore();
        });
    });
})();