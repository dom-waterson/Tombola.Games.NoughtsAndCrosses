(function () {
    'use strict';
    angular.module('Tombola.NoughtsAndCrosses')
        .service('ThemeChangerService', function(){
            var me = this;
            me.theme = 'default';

            me.switchTheme = function(){
                if(me.theme === 'default'){
                    me.theme = 'silly';
                }
                else{
                    me.theme = 'default';
                }
            };
        });
})();