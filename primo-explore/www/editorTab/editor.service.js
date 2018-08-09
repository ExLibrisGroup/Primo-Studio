/**
 * Created by shoulm on 08/03/2018.
 */

class EditorService {
    constructor(configurationService, $http) {
        this.configurationService = configurationService;
        this.$http = $http;

        this._css = {
            type: 'css',
            data: '',
            file_path: '/css/studio-editor.css',
            version: 0
        };
        this._js = {
            type: 'javascript',
            data: '',
            file_path: '/js/custom.js',
            version: 0
        };

        this.initAllCodes();
    }

    getFiles() {
        this.files = {};
        this.$http.get('/file-tree').then( response => {
            this.files = response.data;
            this.files.children = this.files.children.filter(function f(e) {
                if (e.type !== 'directory')
                    return true;
                if (e.size) {
                    return (e.children = e.children.filter(f)).length;
                }
            });
        }, err => {
            console.log('failed to get all files from server');
        })
    }

    initAllCodes() {
        this.initCode(this._css);
        // this.initCode(this._js);
    }

    initCode(fileJson) {
        this.$http.post('/code', fileJson).then((response) => {
            fileJson.data = response.data;
            fileJson.version++;
        }, (err) => {
            console.log('failed to get ' + fileJson.type + ' from server. file path: ' + fileJson.file_path);
        });
    }

    get config(){
        return this.configurationService.config;
    }

    get codeFiles(){
        return [
            this._css
            // this._js
        ];
    }

    set codeFiles(newArr) {
        this._css = newArr[0];
        // this._js = newArr[1];
    }

    saveFile(fileJson) {
        return this.sendFilesToServer([fileJson]);
    }

    createTheme() {
        return this.sendFilesToServer(this.codeFiles);
    }

    sendFilesToServer(files) {
        let config = {
            data: {
                code: files
            },
            conf: this.config
        };
        return this.$http.put('/code', config);
    }
}

EditorService.$inject= ['configurationService','$http'];

module.exports = {
    name: 'editorService',
    service: EditorService
};