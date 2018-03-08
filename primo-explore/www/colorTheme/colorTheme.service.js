/**
 * Created by shoulm on 08/03/2018.
 */

class ColorThemeService {
    constructor(configurationService, $http) {
        this.configurationService = configurationService;
        this.$http = $http;
        this._colors = {
            "primary": "#53738C",
            "secondary": "#A9CDD6",
            "backgroundColor": "#ffffff",
            "links": "#5C92BD",
            "warning": "#ff6347",
            "positive": "#0f7d00",
            "negative": "#808080",
            "notice": "#e08303"
        };
        this.$http.get('/colors').then((response) => {
            this._colors = response.data;
        }, (err) => {
            console.log('failed to get colors JSON from server, using default colors');
        });
    }

    get config(){
        return this.configurationService.config;
    }

    get colors(){
        return this._colors;
    }

    createTheme() {
        var _this = this;
        var config = {
            data: {
                colors: this.colors,
                conf: this.config
            }
        };
        return this.$http.post('/colors', config);

    }
}
    ColorThemeService.$inject= ['configurationService','$http'];

module.exports = {
    name: 'colorThemeService',
    service: ColorThemeService
}