(function () {
    'use strict';
    describe('theme changer service tests', function(){
        var themeChangerService;
        beforeEach(function(){
            module('Tombola.NoughtsAndCrosses');
            inject(['ThemeChangerService', function(_themeChangerService_){
                themeChangerService = _themeChangerService_;
            }]);
        });

        it('should have the theme set to default by default', function(){
            themeChangerService.theme.should.equal('default');
        });

        it('should change the theme from default to silly', function(){
            themeChangerService.switchTheme();
            themeChangerService.theme.should.equal('silly');
        });

        it('should change the theme from silly to default', function(){
            themeChangerService.switchTheme();
            themeChangerService.switchTheme();
            themeChangerService.theme.should.equal('default');
        });
    });
})();