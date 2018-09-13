import {Injectable} from '@angular/core';
import {ConfigurationService} from "./configuration.service";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IframeService {
  private _up: boolean;
  private _nuiIFrameElement;

  constructor(private configurationService: ConfigurationService,
              private sanitizer: DomSanitizer) {
    this._up = false;
  }

  get config(){
    return this.configurationService.config;
  }

  get nuiIframeElement(){
    if (!this._nuiIFrameElement){
      this._nuiIFrameElement = document.getElementById('primo-explore-iframe');
    }
    return this._nuiIFrameElement;
  }

  refreshNuiIFrame(){
    if (!this.nuiIframeElement){
      return;
    }
    this.nuiIframeElement.contentWindow.location.reload();
  }

  getIframeUrl(){
    let ve = this.configurationService.isVe;
    let appName = ve ? 'discovery' : 'primo-explore';
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.protocol + '//' + window.location.host + ':80/'+appName+'/search/?vid='+this.config.view+'&dirName='+this.config.dirName+'&url='+this.config.url);
  }

  isUp(){
    return this._up;
  }

  set up(newVal){
    this._up= newVal;
  }
}
