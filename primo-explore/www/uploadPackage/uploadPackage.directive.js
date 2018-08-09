/**
 * Created by shoulm on 28/03/2018.
 */
class PrmUploadPackage{
    constructor(fileUploaderService, iframeService, ngFileUpload, analytics){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.ngFileUpload = ngFileUpload;
        this.analytics = analytics;
        this.analytics.pageView();
        this.uploadDisabled = true;
    }

    setPackage(files){
        this.package = {'package' : files};
        if(files.length > 0) {
            this.uploadDisabled = false;
            this.analytics.trackEvent('UploadPackage', 'setPackage', files[0].name);
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
        this.analytics.trackEvent('UploadPackage', 'uploadPackage', this.package['package'][0].name);
    }
}

PrmUploadPackage.$inject= ['fileUploaderService', 'iframeService', 'Upload', 'Analytics'];

module.exports = {
    name: 'prmUploadPackage',
    config: {
        controller: PrmUploadPackage,
        templateUrl: '/uploadPackage/upload-package.html'

    }
}
