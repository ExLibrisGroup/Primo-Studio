import { Injectable } from '@angular/core';
import {ConfigurationService} from "../utils/configuration.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  private _colors: any;

  constructor(private configurationService: ConfigurationService,
              private $http: HttpClient) {
    this._colors = {
      "primary": "#53738C",
      "secondary": "#A9CDD6",
      "backgroundColor": "#ffffff",
      "links": "#5C92BD",
      "warning": "#ff6347",
      "positive": "#0f7d00",
      "negative": "#808080",
      "notice": "#e08303"
    };
    this.$http.get('/colors').subscribe((response) => {
      this._colors = response;
    }, (err) => {
      console.log('failed to get colors JSON from server, using default colors');
    });
  }

  get config(){
    return this.configurationService.config;
  }

  get colors(){
    return this._colors;
  }

  createTheme(): Observable<any> {
    let config = {
      data: {
        colors: this.colors,
        conf: this.config
      }
    };
    return this.$http.post('/colors', config);

  }
}
