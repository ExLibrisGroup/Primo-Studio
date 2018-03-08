/**
 * Created by shoulm on 06/02/2018.
 */
class PrmColorTheme{
    constructor(colorThemeService, iframeService){
        this.colorThemeService= colorThemeService;
        this.iframeService = iframeService;
    }

    get colors(){
        return this.colorThemeService.colors;
    }

    createTheme(){
        this.colorThemeService.createTheme().then((resp)=>{
            if(resp.status === 200){
                console.log('theme created');
                this.iframeService.refreshNuiIFrame();
            }
        });
    }
}

PrmColorTheme.$inject= ['colorThemeService', 'iframeService'];

module.exports = {
    name: 'prmColorTheme',
    config: {
        controller: PrmColorTheme,
        templateUrl: '/colorTheme/color-theme.html'

    }
}
