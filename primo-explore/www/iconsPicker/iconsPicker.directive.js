/**
 * Created by shoulm on 11/02/2018.
 */
class IconsPicker{

    constructor(iconPickerService, iframeService){
        this.iconPickerService= iconPickerService;
        this.iframeService = iframeService;

        this.inProgress= false;
    }

    get icons(){
        return this.iconPickerService.icons;
    }

    getViewBoxText(viewBox) {
        return `${viewBox.baseVal.x} ${viewBox.baseVal.y} ${viewBox.baseVal.height} ${viewBox.baseVal.width}`;
    }

    createTheme(){
        this.inProgress = true;
        this.iconPickerService.createTheme().then((resp)=>{
            if(resp.status === 200){
                console.log('icons set created');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).finally(()=>{
            this.inProgress = false;
        });
    }
}

IconsPicker.$inject=['iconPickerService', 'iframeService'];

module.exports = {
    name: 'prmIconsPicker',
    config: {
        controller: IconsPicker,
        templateUrl: '/iconsPicker/icons-picker.html'
    }
}