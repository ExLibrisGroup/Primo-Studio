import { Component } from '@angular/core';
import {FileUploaderService} from "../utils/file-uploader.service";
import {IframeService} from "../utils/iframe.service";

@Component({
  selector: 'prm-upload-package',
  templateUrl: './upload-package.component.html',
  styleUrls: ['./upload-package.component.scss']
})
export class UploadPackageComponent {
  private _uploadDisabled: boolean;
  private package: any;

  constructor(private fileUploaderService: FileUploaderService,
              private iframeService: IframeService){
    this._uploadDisabled = true;
  }

  setPackage(files){
    this.package = {'package' : files};
    if(files.length > 0) {
      this._uploadDisabled = false;
    }
  }

  uploadPackage(){
    this.fileUploaderService.uploadFiles('/package', this.package).subscribe(()=>{
      console.log('package uploaded successfully');
      //this.iframeService.refreshNuiIFrame();
      location.reload();
      this._uploadDisabled = true;
    }, (err)=>{
      console.log('failed to upload package: '+ err.data);
    });
  }


  get uploadDisabled(): boolean {
    return this._uploadDisabled;
  }

  set uploadDisabled(value: boolean) {
    this._uploadDisabled = value;
  }
}
