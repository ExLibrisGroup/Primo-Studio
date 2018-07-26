/**
 * Created by shoulm on 15/02/2018.
 */
class PrmEditImages{
    constructor(fileUploaderService, iframeService, ngFileUpload){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.ngFileUpload = ngFileUpload;
        this.images={};
        this.logoFileLabel = 'Choose logo file';
        this.faviconFileLabel = 'Choose favicon';
        this.svgFileLabel = 'Choose icons svg';
        this.resourceFilesLabel = 'Choose resource type icons';
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
            this.uploadDisabled = false;
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

    removeImages() {
        this.fileUploaderService.removeFiles('/images').then((response)=>{
            console.log('images removed successfully');
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            console.log('failed to remove images: ' + err.toString())
        })
    }


}
PrmEditImages.$inject=['fileUploaderService', 'iframeService', 'Upload'];

module.exports = {
    name: 'prmEditImages',
    config: {
        controller: PrmEditImages,
        templateUrl: '/editImages/edit-images.html'
    }
}