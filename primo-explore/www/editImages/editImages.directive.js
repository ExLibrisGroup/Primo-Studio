/**
 * Created by shoulm on 15/02/2018.
 */
class PrmEditImages{
    constructor(fileUploaderService, iframeService){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.images={};
        this.logoFileLabel = 'Choose logo file';
        this.faviconFileLabel = 'Choose favicon';
        this.faviconFileLabel = 'Choose favicon';
        this.resourceFilesLabel = 'Choose resource type icons'
        this.uploadDisabled = true;
    }

    setImage(name, files){
        var self = this;
        this.images[name]= files;
        if (files.length > 1){
            angular.element(document.querySelector('#label-for-' + name + '')).text(files.length + ' files selected').addClass('is-touched')
        }
        else{
            angular.element(document.querySelector('#label-for-' + name + '')).text(files[0].name).addClass('is-touched')
        }
        if(files.length > 0) {
            angular.element(document.querySelector('#button-upload')).attr('disabled', false)
        }
    }

    uploadImages(){
        this.fileUploaderService.uploadFiles('/images', this.images).then((response)=>{
            console.log('images uploaded successfully');
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            console.log('failed to upload images: '+ err)
        });
    }


}
PrmEditImages.$inject=['fileUploaderService', 'iframeService'];

module.exports = {
    name: 'prmEditImages',
    config: {
        controller: PrmEditImages,
        templateUrl: '/editImages/edit-images.html'
    }
}