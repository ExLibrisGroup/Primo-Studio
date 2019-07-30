import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'prm-download-package',
  templateUrl: './download-package.component.html',
  styleUrls: ['./download-package.component.scss']
})
export class DownloadPackageComponent  {

  constructor(private $http: HttpClient){
  }

  downloadPackage(){
    this.$http.get('/package', {
      headers: {
        'Content-Type': 'application/zip',
        'Accept': 'application/zip'
      },
      responseType: 'arraybuffer'
    }).subscribe((data)=>{
      let url = URL.createObjectURL(new Blob([data]));
      let a = document.createElement('a');
      a.href = url;
      a.download = 'package.zip';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 100);
    });
  }

}
