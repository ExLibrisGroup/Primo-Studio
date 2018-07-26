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
            file_path: '/css/custom1.css',
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

    initAllCodes() {
        this.initCode(this._css);
        this.initCode(this._js);
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
            this._css,
            this._js
        ];
    }

    set codeFiles(newArr) {
        this._css = newArr[0];
        this._js = newArr[1];
    }

    saveFile(fileJson) {
        let config = {
            data: {
                code: [
                    fileJson
                ],
                conf: this.config
            }
        };
        return this.$http.put('/code', config);
    }

    createTheme() {
        let config = {
            data: {
                code: [
                    this._css,
                    this._js
                ],
                conf: this.config
            }
        };
        return this.$http.put('/code', config);
    }
}

EditorService.$inject= ['configurationService','$http'];

module.exports = {
    name: 'editorService',
    service: EditorService
};