import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  constructor(private $http: HttpClient) { }

  uploadFiles(uploadUrl: string, filesMap: {[key: string]: string}){
    let fd = new FormData();
    for (let key in filesMap){
      for (let file of filesMap[key]){
        fd.append(key, file);
      }
    }
    return this.$http.post(uploadUrl, fd, {
      withCredentials: true
    });
  }

  removeFiles(removeUrl: string) {
    return this.$http.delete(removeUrl);
  }
}
