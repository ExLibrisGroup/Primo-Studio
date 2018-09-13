import { Component } from '@angular/core';
import {ColorThemeService} from "./color-theme.service";
import {IframeService} from "../utils/iframe.service";

import * as _keys from "lodash/keys";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";

@Component({
  selector: 'prm-color-theme',
  templateUrl: './color-theme.component.html',
  styleUrls: ['./color-theme.component.scss']
})
export class ColorThemeComponent{
  private inProgress: boolean;

  constructor(private colorThemeService: ColorThemeService,
              private iframeService: IframeService,
              private analytics: Angulartics2GoogleAnalytics){
    this.analytics.pageTrack('/');

    this.inProgress= false;
  }

  get colors(){
    return this.colorThemeService.colors;
  }

  keys(object) {
    return _keys(object);
  }

  createTheme(){
    this.inProgress = true;
    this.colorThemeService.createTheme().subscribe((resp)=>{
      if(+resp.status === 200){
        console.log('theme created');
        this.iframeService.refreshNuiIFrame();
      }
    }, (err)=> {
      console.log(err);
    }).add(()=>{
      this.inProgress = false;
    });
    this.analytics.eventTrack('createTheme', {category: 'colorTheme', label: 'all_colors'});
  }

  setColor(key: string, newValue: string) {
    this.colors[key] = newValue;
  }

}
