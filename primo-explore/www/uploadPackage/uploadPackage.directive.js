/**
 * Created by shoulm on 28/03/2018.
 */
class PrmUploadPackage{
    constructor(fileUploaderService, iframeService){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.uploadDisabled = true;
    }

    setPackage(file){
        this.package = {'package' : file};
        if(file.length > 0) {
            angular.element(document.querySelector('#button-upload-package')).attr('disabled', false)
        }
    }

    uploadPackage(){
        this.fileUploaderService.uploadFiles('/package', this.package).then((response)=>{
            console.log('package uploaded successfully');
            //this.iframeService.refreshNuiIFrame();
            location.reload();
        }, (err)=>{
            console.log('failed to upload package: '+ err);
        });
    }
}

PrmUploadPackage.$inject= ['fileUploaderService', 'iframeService'];

module.exports = {
    name: 'prmUploadPackage',
    config: {
        controller: PrmUploadPackage,
        templateUrl: '/uploadPackage/upload-package.html'

    }
}
