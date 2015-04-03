(function () {
    'use strict';

    angular.module('myApp')
        .directive('select', materialSelect);
    materialSelect.$inject = ['$timeout'];

    function materialSelect($timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            require: '?ngModel'
        };

        function link(scope, element, attrs, ngModel) {
            $timeout(create);

            if (ngModel) {
                ngModel.$render = create;
            }

            function create() {
                element.material_select();
            }

            element.one('$destroy', function () {
                element.material_select('destroy');
            });
        }

        return directive;
    }

})();