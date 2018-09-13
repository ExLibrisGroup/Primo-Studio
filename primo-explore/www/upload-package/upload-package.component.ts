import { Component } from '@angular/core';
import {FileUploaderService} from "../utils/file-uploader.service";
import {IframeService} from "../utils/iframe.service";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";

@Component({
  selector: 'prm-upload-package',
  templateUrl: './upload-package.component.html',
  styleUrls: ['./upload-package.component.scss']
})
export class UploadPackageComponent {
  private uploadDisabled: boolean;
  private package: any;

  constructor(private fileUploaderService: FileUploaderService,
              private iframeService: IframeService,
              private analytics: Angulartics2GoogleAnalytics){
    this.analytics.pageTrack('/');
    this.uploadDisabled = true;
  }

  setPackage(files){
    this.package = {'package' : files};
    if(files.length > 0) {
      this.uploadDisabled = false;
      this.analytics.eventTrack('setPackage', {category: 'UploadPackage', label: files[0].name});
    }
  }

  uploadPackage(){
    this.fileUploaderService.uploadFiles('/package', this.package).subscribe(()=>{
      console.log('package uploaded successfully');
      //this.iframeService.refreshNuiIFrame();
      location.reload();
      this.uploadDisabled = true;
    }, (err)=>{
      console.log('failed to upload package: '+ err.data);
    });
    this.analytics.eventTrack('uploadPackage', {category: 'UploadPackage', label: this.package['package'][0].name});
  }

}
