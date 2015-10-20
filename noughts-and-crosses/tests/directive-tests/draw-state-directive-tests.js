(function () {
    'use strict';
    describe('draw state directive tests', function(){
        var compile,
            rootScope,
            gameboardMock;

        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses', function($provide){
                $provide.value('GameboardService', mocks.gameboardService);
            });
            sinon.sandbox.create();
            inject(['$compile', '$rootScope', function($compile, $rootScope){
                compile = $compile;
                rootScope = $rootScope;
            }]);
            gameboardMock = sinon.sandbox.mock(mocks.gameboardService);
        });

        it('should add the appropriate html', function(){
            var directiveElement = '<draw-state></draw-state>';

            rootScope.gameboardModel = mocks.gameboardService;
            var elements = compile(directiveElement)(rootScope);
            var expectedElements = ['<div class="announcement">It&#8217;s</div>',
                                    '<div class="announcement">A</div>',
                                    '<div class="announcement">Draw</div>',
                                    '<div><img src="images/draw.jpg"/></div>',
                                    '<button ng-click="gameboardModel.resetGame()" ui-sref="playerSelection">Reset</button>'];
            rootScope.$digest();
            elements.should.equal(expectedElements);
        });
    });
})();