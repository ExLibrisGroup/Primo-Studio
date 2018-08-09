/**
 * Created by giladw on 23/07/2018.
 */

class EditorTab{

    constructor(editorService, iframeService, $scope, analytics){
        this.editorService= editorService;
        this.iframeService = iframeService;
        this.$scope = $scope;
        this.analytics = analytics;
        this.analytics.pageView();

        this.inProgress= false;
        this.expanded = true;
        this.toggleTab();
    }

    $onInit() {
        this.editorService.initAllCodes();
        this.$scope.$on('save', (event, data) => {
            this.inProgress = true;
            this.editorService.saveFile(data).then((resp)=>{
                if(resp.status === 200){
                    console.log('file "' + data.file_path + '" was saved');
                    this.iframeService.refreshNuiIFrame();
                }
            }, (err)=> {
                console.log(err);
            }).finally(()=>{
                this.inProgress = false;
            });
            this.analytics.trackEvent('codeEditor', 'save', 'single_file: ' + data.file_path);
        });

        CodeMirror.commands.save = (instance) => {
            instance.onSave();
        }
    }

    get codeFiles(){
        return this.editorService.codeFiles;
    }

    set codeFiles(newArr) {
        this.editorService.codeFiles = newArr;
    }

    toggleTab() {
        this.expanded = !this.expanded;
        this.$scope.$emit('expandTab', this.expanded);
        this.analytics.trackEvent('codeEditor', 'expand_tab', this.expanded);
    }

    createTheme(){
        this.inProgress = true;
        this.editorService.createTheme().then((resp)=>{
            if(resp.status === 200){
                console.log('all files were saved');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).finally(()=>{
            this.inProgress = false;
        });
        this.analytics.trackEvent('codeEditor', 'save', 'all_files');
    }
}

EditorTab.$inject=['editorService', 'iframeService', '$scope', 'Analytics'];

module.exports = {
    name: 'prmEditor',
    config: {
        controller: EditorTab,
        templateUrl: '/editorTab/editor-tab.html'
    }
}