class FileTree {
    constructor($element, $compile, $scope) {
        this.$element = $element;
        this.$compile = $compile;
        this.$scope = $scope;
        this.$scope.selectedFile = null;
    }

    $onInit() {
        this.tree = this.baseDir;

        let visibility = (this.nodeState !== "collapse") || 'style="display: none;"';
        if (this.tree) {
            if (this.tree.size > 0 && this.tree.children) {
                for (let i in this.tree.children) {
                    if (this.tree.children[i].size > 0 && this.tree.children[i].children) {
                        this.tree.children[i].className = "ft_" + this.nodeState + " ft_deselected";
                    } else {
                        this.tree.children[i].className = "ft_child" + " ft_deselected";
                    }
                }

                let template = angular.element(
                    '<ul ' + visibility + '>' +
                    '<li ng-repeat="node in $ctrl.tree.children" node-id={{node.path}} ng-class="node.className">' +
                    '{{node.name}}' +
                    '<prm-file-tree base-dir="node" node-id="{{node.path}}" node-name="{{$ctrl.tree.name}}" node-state="{{$ctrl.nodeState}}"></prm-file-tree>' +
                    '</li>' +
                    '</ul>');

                let linkFunction = this.$compile(template);
                linkFunction(this.$scope);
                this.$element.append(template);
            } else {
                this.$element.remove();
            }
        }

        this.$scope.$watch(() => this.baseDir, val => {
            for (let i in this.baseDir.children) {
                if (this.baseDir.children[i].size > 0 && this.baseDir.children[i].children) {
                    this.baseDir.children[i].className = "ft_" + this.nodeState + " ft_deselected";
                } else {
                    this.baseDir.children[i].className = "ft_child" + " ft_deselected";
                }
            }

            let template = angular.element(
                '<ul id="ftTreeBrowser" class="filetree treeview-famfamfam treeview">' +
                '<li ng-repeat="node in $ctrl.tree.children" node-id={{node.path}} ng-class="node.className">' +
                '{{node.name}}' +
                '<prm-file-tree base-dir="node" node-id="{{node.path}}" node-name={{$ctrl.tree.name}} node-state="{{$ctrl.nodeState}}"></prm-file-tree>' +
                '</li>' +
                '</ul>');

            let linkFunction = this.$compile(template);
            linkFunction(this.$scope);
            this.$element.html(null).append(template);

            //Click Event
            angular.element(document.getElementById('ftTreeBrowser')).unbind().bind('click', e => {
                if (angular.element(e.target).length) {
                    this.$scope.previousElement = this.$scope.currentElement;

                    this.$scope.currentElement = angular.element(e.target);

                    if (this.tree.type === 'file') {
                        this.$scope.$broadcast('fileSelected', {
                            selectedFile: this.$scope.currentElement.attr('node-id')
                        })
                    }

                    if (this.$scope.previousElement) {
                        this.$scope.previousElement.addClass("ft_deselected").removeClass("ft_selected");
                    }
                    this.$scope.currentElement.addClass("ft_selected").removeClass("ft_deselected");

                    if (this.$scope.currentElement.children().length) {
                        this.$scope.currentElement.children().toggleClass("hide");
                        //$(e.target).children().slideToggle("fast");

                        this.$scope.currentElement.toggleClass("ft_collapse");
                        this.$scope.currentElement.toggleClass("ft_expand");
                    }
                }
            });
        }, true);
    }
}


FileTree.$inject=['$element', '$compile', '$scope'];

module.exports = {
    name: 'prmFileTree',
    config: {
        controller: FileTree,
        templateUrl: '/fileTree/file-tree.html',
        bindings: {
            baseDir: '<',
            nodeState: '@'
        }
    }
}