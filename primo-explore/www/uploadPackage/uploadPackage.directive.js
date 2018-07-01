/**
 * Created by shoulm on 28/03/2018.
 */
class PrmUploadPackage{
    constructor(fileUploaderService, iframeService, ngFileUpload){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.ngFileUpload = ngFileUpload;
        this.uploadDisabled = true;
    }

    setPackage(files){
        this.package = {'package' : files};
        if(files.length > 0) {
            this.uploadDisabled = false
        }
    }

    uploadPackage(){
        this.fileUploaderService.uploadFiles('/package', this.package).then((response)=>{
            console.log('package uploaded successfully');
            //this.iframeService.refreshNuiIFrame();
            location.reload();
            this.uploadDisabled = true;
        }, (err)=>{
            console.log('failed to upload package: '+ err.data);
        });
    }
}

PrmUploadPackage.$inject= ['fileUploaderService', 'iframeService', 'Upload'];

module.exports = {
    name: 'prmUploadPackage',
    config: {
        controller: PrmUploadPackage,
        templateUrl: '/uploadPackage/upload-package.html'

    }
}
