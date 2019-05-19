import {Component, OnInit} from '@angular/core';
import {IframeService} from "../utils/iframe.service";
import {ConfigurationService} from "../utils/configuration.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'prm-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {

  private urlTouched: boolean;

  constructor(private iframeService: IframeService,
              private configurationService: ConfigurationService,
              private route: ActivatedRoute){
      this.urlTouched = false;
  }

  ngOnInit(): void {
    let params = this.route.snapshot.queryParams;
    if (params['url'] && params['vid']){
      this.start();
    }
  }

  get config(){
    return this.configurationService.config;
  }

  start(){
    let urlMatch = this.config.url.match(/^((?:https?:\/\/)?[a-zA-Z0-9][\w.-]+(?:\.?[\w.-]+)*[a-zA-Z0-9](?::[0-9]+)?)(.*)$/);
    if (urlMatch[2]) {
      this.config.url = urlMatch[1];
      this.config.suffix = urlMatch[2];
      let vidMatch = this.config.suffix.match(/([?&])vid=([^&]*)/);
      if (vidMatch) {
        this.config.suffix = this.config.suffix.replace(vidMatch[0], () => (vidMatch[1]==='?') ? '?' : '');
        this.config.view = vidMatch[2];
      }
    } else if (this.config.suffix && this.urlTouched) {
        this.config.suffix = undefined;
    }
    this.configurationService.start().subscribe(()=>{
      this.iframeService.up = true;
    });
  }

  stop(){
    this.iframeService.up = false;
    this.urlTouched = false;
  }

  isUp(){
    return this.iframeService.isUp();
  }

  setUrl(url: string) {
    this.urlTouched = true;
    this.config.url = url;
  }

  setView(view: string) {
    this.config.view = view;
  }

  setVe(ve: boolean) {
    this.config.ve = ve.toString();
  }

  setCentralPackage(central: boolean) {
    this.config.useCentral = central.toString();
  }

  getUrl(): string {
    if (this.config.suffix && this.config.suffix.length > 0) {
      let appName = this.configurationService.isVe ? 'discovery' : 'primo-explore';
      let middlePart = '';
      if (!this.config.suffix.startsWith('/' + appName)) {
        middlePart = '/' + appName;
      }
      return this.config.url + middlePart + this.config.suffix
    } else {
      return this.config.url;
    }
  }
}
