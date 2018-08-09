/**
 * Created by shoulm on 15/02/2018.
 */
class PrmEditImages{
    constructor(fileUploaderService, iframeService, ngFileUpload, analytics){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.ngFileUpload = ngFileUpload;
        this.analytics = analytics;

        this.analytics.pageView();
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
        this.analytics.trackEvent('Images', 'setImage', name + " - " + files[0].name);
    }

    uploadImages(){
        this.fileUploaderService.uploadFiles('/images', this.images).then((response)=>{
            console.log('images uploaded successfully');
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            console.log('failed to upload images: '+ err)
        });
        this.analytics.trackEvent('Images', 'uploadImages', this.images);
    }

    removeImages() {
        this.fileUploaderService.removeFiles('/images').then((response)=>{
            console.log('images removed successfully');
            this.iframeService.refreshNuiIFrame();
        }, (err)=>{
            console.log('failed to remove images: ' + err.toString())
        });
        this.analytics.trackEvent('Images', 'removeImages', 'all');
    }


}
PrmEditImages.$inject=['fileUploaderService', 'iframeService', 'Upload', 'Analytics'];

module.exports = {
    name: 'prmEditImages',
    config: {
        controller: PrmEditImages,
        templateUrl: '/editImages/edit-images.html'
    }
}