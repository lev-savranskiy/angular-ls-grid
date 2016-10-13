/**
 * Simple AngularJS grid
 * @name lsGrid
 * @author https://github.com/lev-savranskiy
 * @version 0.1
 * @category AngularJS plugin
 * @example http://wap7.ru/folio/angular-ls-grid
 */

angular.module('lsGrid', [ 'ui.bootstrap.pagination', 'lsPager'])

    .directive('lsGrid', ['$http', function($http) {
        return {
            scope: {
                options: "="
            },
            restrict: 'E',
            templateUrl: 'components/lsGrid/lsGrid.html',
            link: function ($scope, elem, attr) {
                console.log('[lsGrid init]');


                var init = function () {

                    $scope.cached = {};
                    $scope.current = {};
                    $scope.cached.data = $scope.options.data;
                    $scope.totalItems = $scope.cached.data && $scope.cached.data.length;
                    $scope.keyHeaders = [];

                    if (!$scope.options.headers && $scope.options.data && $scope.options.data[0]) {
                        $scope.options.headers = {};
                        for (var k in $scope.options.data[0]) {
                            $scope.options.headers[k] = k;
                        }

                    }

                    $scope.keyHeaders = $scope.options.headers ? Object.keys($scope.options.headers) : [];
                    $scope.totalHeaders = $scope.keyHeaders && $scope.keyHeaders.length;

                    $scope.tableWidth = $scope.options.tableWidth || '90%';
                    $scope.tableMinWidth = $scope.keyHeaders.length * 120 + 'px';
                    $scope.colWidth = parseInt(100 / $scope.totalHeaders);
                    $scope.itemsPerPage = $scope.options.itemsPerPage || 20;
                    $scope.maxSize = 3;
                    $scope.currentPage = 1;


                    $scope.sortBy = function (data, field, dir) {
                        if (dir == 'desc') {
                            return _.sortBy(data, [field]).reverse();
                        } else {
                            return _.sortBy(data, [field]);
                        }
                    };

                    $scope.dir = null;
                    $scope.field = null;


                    $scope.sort = function (field) {
                        $scope.field = field;
                        $scope.currentPage = 1;
                        $scope.rebuildData(true);
                    };


                    $scope.rebuildData = function (toggleSort) {


                            if ($scope.field) {
                                if (toggleSort) {
                                    $scope.dir = $scope.dir == 'asc' ? 'desc' : 'asc';
                                }
                                $scope.current.data = $scope.sortBy($scope.cached.data, $scope.field, $scope.dir);
                            } else {
                                $scope.current.data = $scope.cached.data;
                            }

                            $scope.current.data = $scope.current.data.slice(($scope.currentPage - 1) * $scope.itemsPerPage, $scope.currentPage * $scope.itemsPerPage);


                    };

                    $scope.pageChanged = function () {
                        $scope.rebuildData();
                    };


                    $scope.rebuildData();
                };


                if ($scope.options) {
                    if($scope.options.dataUrl){
                        $scope.message = "Loading data...";
                        $http({method: 'GET', url: $scope.options.dataUrl}).then(function (result) {
                            $scope.options.data = result.data;
                            $scope.message = "";
                            init();

                        }, function (result) {
                            $scope.options.data = [];
                            $scope.message = "Can not get data at url " + $scope.options.dataUrl;
                            init();
                        });
                    }else{
                        init();
                    }

                } else {
                    $scope.message = "Grid options missing."
                }


            }
        }
    }]);



