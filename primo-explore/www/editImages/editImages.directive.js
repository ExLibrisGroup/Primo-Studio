/**
 * Created by shoulm on 15/02/2018.
 */
class PrmEditImages{
    constructor(fileUploaderService, iframeService){
        this.fileUploaderService = fileUploaderService;
        this.iframeService = iframeService;
        this.images={};
    }

    setImage(name, files){
        this.images[name]= files[0];
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