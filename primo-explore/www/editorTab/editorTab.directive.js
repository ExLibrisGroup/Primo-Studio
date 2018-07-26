/**
 * Created by giladw on 23/07/2018.
 */

class EditorTab{

    constructor(editorService, iframeService, $scope){
        this.editorService= editorService;
        this.iframeService = iframeService;
        this.$scope = $scope;

        this.inProgress= false;
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

    createTheme(){
        this.inProgress = true;
        this.editorService.createTheme().then((resp)=>{
            if(resp.status === 200){
                console.log('css and js were saved');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).finally(()=>{
            this.inProgress = false;
        });
    }
}

EditorTab.$inject=['editorService', 'iframeService', '$scope'];

module.exports = {
    name: 'prmEditor',
    config: {
        controller: EditorTab,
        templateUrl: '/editorTab/editor-tab.html'
    }
}