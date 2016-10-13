/**
 * Simple lsPager for ls-grid
 * @name lsPager
 * @author https://github.com/lev-savranskiy
 * @version 0.1
 * @category AngularJS plugin
 * @example http://wap7.ru/folio/angular-ls-grid
 */

angular.module('lsPager', [])

    .directive('lsPager', [ function () {
        return {
            restrict: 'E',
            templateUrl: 'components/lsPager/lsPager.html',
            link: function ($scope, elem, attr) {
                console.log('[lsPager init]');

            }
        }
    }]);



