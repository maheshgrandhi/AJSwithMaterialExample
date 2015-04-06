/**
 * @ngdoc directive
 * @name scrollOnClick
 *
 * @description
 * scrolling animation on click
 *
 * @restrict A
 * */
angular.module('myApp')
    .directive('scrollOnClick', function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attr) {
                elem.on('click', function() {
                    $("body").animate({scrollTop: elem.offset().top}, "slow");
                });
            }
        };
});
