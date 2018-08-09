/**
 * Created by shoulm on 06/02/2018.
 */
class PrmColorTheme{
    constructor(colorThemeService, iframeService, analytics){
        this.colorThemeService= colorThemeService;
        this.iframeService = iframeService;
        this.analytics = analytics;
        this.analytics.pageView();

        this.inProgress= false;
    }

    get colors(){
        return this.colorThemeService.colors;
    }

    createTheme(){
        this.inProgress = true;
        this.colorThemeService.createTheme().then((resp)=>{
            if(resp.status === 200){
                console.log('theme created');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).finally(()=>{
            this.inProgress = false;
        });
        this.analytics.trackEvent('colorTheme', 'createTheme', 'all_colors');
    }
}

PrmColorTheme.$inject= ['colorThemeService', 'iframeService', 'Analytics'];

module.exports = {
    name: 'prmColorTheme',
    config: {
        controller: PrmColorTheme,
        templateUrl: '/colorTheme/color-theme.html'

    }
}
