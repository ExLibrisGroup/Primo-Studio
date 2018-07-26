/**
 * Created by giladw on 23/07/2018.
 */

class CodeEditor{

    constructor($element, $scope, $timeout){
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
    }

    $onInit() {
        this.syntax = this.model.type;
        this.data = this.model.data;

        this.codemirrorOptions = {
            lineNumbers: true,
            lineWrapping: true,
            matchBrackets: true,
            mode: this.syntax,
            theme:  'tomorrow-night-eighties',
            value: this.data || ''
        };

        var textarea = this.$element.find('textarea')[0];
        this.codeMirror = CodeMirror.fromTextArea(textarea, this.codemirrorOptions);

        this.$scope.$watch(()=>{return this.model.type}, () => {
            this.syntax = this.model.type;
            this.codeMirror.setOption('mode', this.syntax);
        });

        this.$scope.$watch(()=>{return this.model.version}, (oldValue) => {
            if(oldValue && oldValue !== '') {
                this.data = this.model.data;
                this.codeMirror.setValue(this.data);
            }
        });

        // Set the codemirror value to the scope
        this.codeMirror.on('change', (e) => {
            this.$timeout(() => {
                this.model.data = this.codeMirror.getValue();
            }, 300);
        });

        this.codeMirror.onSave = () => {
            this.$scope.$emit('save', this.model);
        };
    }
}

CodeEditor.$inject=['$element', '$scope', '$timeout'];

module.exports = {
    name: 'prmCodeEditor',
    config: {
        controller: CodeEditor,
        templateUrl: '/codeEditor/code-editor.html',
        bindings: {
            model: '<'
        }
    }
};