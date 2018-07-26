angular.directive('mdiPicker', [
    '$http',
    function ($http) {
        function link (scope, element, attrs, ngModel) {
            element.addClass('dropdown');
            element.addClass('mdi-picker');
            scope.iconData = [];
            scope.icons = [];
            scope.selected = 'mdi-vector-square';
            ngModel.$render = function () {
                scope.selected = ngModel.$viewValue || 'mdi-vector-square';
            };
            var http = $http.get('//cdn.materialdesignicons.com/1.8.36/meta.json');
            http.then(function (resp) {
                scope.iconData = resp.data;
                scope.icons = resp.data.map(function (v) {
                    return v.name;
                }).slice(0, 301);
            });
            scope.focusInput = function () {
                if(element.find('input').length > 0) {
                    setTimeout(function () {
                        element.find('input')[0].focus();
                    }, 100);
                }
            };
            scope.searchTerm = '';
            scope.selectIcon = function (icon) {
                scope.selected = 'mdi-' + icon;
                ngModel.$setViewValue(icon);
            };
            scope.$watch('searchTerm', function (term) {
                if (typeof term == 'undefined'
                    || term == null || term == ''
                    || term.length < 2) {
                    scope.icons = scope.iconData.map(function (v) {
                        return v.name;
                    }).slice(0, 301);
                } else {
                    scope.icons = scope.iconData.filter(function (v) {
                        if (v.name.match(term)) {
                            return true;
                        } else {
                            for (var i = 0, c = v.aliases.length; i < c; i++) {
                                if (v.aliases[i].match(term)) {
                                    return true;
                                }
                            }
                            return false;
                        }
                    }).map(function (v) {
                        return v.name;
                    }).slice(0, 301);
                }
            });
        }
        return {
            require: '?ngModel',
            transclude: true,
            restrict: 'A',
            link: link,
            template: [
                '<button class="btn btn-default mdi mdi-24px dropdown-toggle" type="button" ng-class="[selected]" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" ng-mouseup="focusInput()"></button>',
                '<div class="dropdown-menu" aria-labelledby="dropdownMenu1" style="padding:6px">',
                '<span class="mdi mdi-24px mdi-magnify search"></span>',
                '<input type="text" class="form-control" placeholder="Filter..." ng-model="searchTerm" ng-model-options="{ debounce: 200 }" />',
                '<div ng-show="icons.length == 0" class="" style="padding: 10px 4px 4px 4px;">No icons found</div>',
                '<div class="icons">',
                '<span ng-repeat="icon in icons" class="mdi mdi-24px" ng-class="[\'mdi-\' + icon]" ng-attr-title="{{icon}}" ng-click="selectIcon(icon)"></span>',
                '<div ng-show="icons.length == 301" class="" style="padding: 10px 4px 4px 4px;">Please filter to view others...</div>',
                '</div>',
                '</div>',
                '</div>'
            ].join('')
        }
    }
]);