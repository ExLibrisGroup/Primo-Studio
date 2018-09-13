/**
 * Created by shoulm on 08/03/2018.
 */

class IconPickerService {
    constructor(configurationService, $http) {
        this.configurationService = configurationService;
        this.$http = $http;
        // let filename = '../images/primo-ui.svg';
        // let blob = new Blob([filename]);
        // this.reader = new FileReader();
        // let file = this.reader.readAsText(blob);
        // this._icons = this.parseSvg(file);
        this._icons = {
            "primary": "#53738C",
            "secondary": "#A9CDD6",
            "backgroundColor": "#ffffff",
            "links": "#5C92BD",
            "warning": "#ff6347",
            "positive": "#0f7d00",
            "negative": "#808080",
            "notice": "#e08303"
        };
        this.$http.get('/icons').then((response) => {
            this._icons = this.parseSvg(response.data);
        }, (err) => {
            console.log('failed to get icons from server, using default icons');
        });
    }

    parseSvg(svgFile) {
        let svg = new DOMParser().parseFromString(svgFile, 'text/xml');
        let svgNodeList = svg.querySelectorAll('svg[id]');
        let svgJson = {};
        svgNodeList.forEach(
            element => {
                svgJson[element.id] = {
                    'path': element.innerHTML,
                    'viewBox': element.viewBox
                }
            });
        return svgJson;
    }

    get config(){
        return this.configurationService.config;
    }

    get icons(){
        return this._icons;
    }

    createTheme() {
        let config = {
            data: {
                icons: this.icons,
                conf: this.config
            }
        };
        return this.$http.post('/icons', config);

    }
}

IconPickerService.prototype.parseFromString = new DOMParser().parseFromString;

IconPickerService.$inject= ['configurationService','$http'];

module.exports = {
    name: 'iconPickerService',
    service: IconPickerService
};
