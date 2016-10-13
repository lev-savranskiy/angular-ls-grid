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



