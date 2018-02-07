/**
 * Created by shoulm on 06/02/2018.
 */
class PrmColorTheme{
    constructor($http, iframeService, configurationService){
        this.$http = $http;
        this.iframeService = iframeService;
        this.configurationService = configurationService;
        this.colors = {
            "primary": "#53738C",
            "secondary" : "#A9CDD6",
            "backgroundColor" : "white",
            "links": "#5C92BD",
            "warning": "tomato",
            "positive": "#0f7d00",
            "negative": "gray",
            "notice": "#e08303"
        };
    }

    getColors(){
        return this.colors;
    }

    get config(){
        return this.configurationService.config;
    }

    createTheme(){
        var _this = this;
        var config={data: {
            colors: this.colors,
            conf: this.config
        }
        };
        this.$http.post('/colors',config).then((resp)=>{
            if(resp.status === 200){
                console.log('theme created');
                this.iframeService.refreshNuiIFrame();
            }

        });
    }
}

PrmColorTheme.$inject= ['$http', 'iframeService', 'configurationService'];

module.exports = {
    name: 'prmColorTheme',
    config: {
        controller: PrmColorTheme,
        templateUrl: '/colorTheme/color-theme.html'

    }
}
