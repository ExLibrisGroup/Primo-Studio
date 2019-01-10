import { Component, OnInit } from '@angular/core';
import {IframeService} from "../utils/iframe.service";
import {ConfigurationService} from "../utils/configuration.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'prm-configuration-form',
  templateUrl: './configuration-form.component.html',
  styleUrls: ['./configuration-form.component.scss']
})
export class ConfigurationFormComponent implements OnInit {
    existingPackage: boolean;
    private currentPackage: any;

  constructor(private iframeService: IframeService,
              private configurationService: ConfigurationService,
              private route: ActivatedRoute){
      this.currentPackage = {};
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
    this.configurationService.start(this.currentPackage).subscribe(()=>{
      this.iframeService.up = true;
    });
  }

  stop(){
    this.iframeService.up = false;
    this.currentPackage = {};
    this.existingPackage = false;
  }

  isUp(){
    return this.iframeService.isUp();
  }

  setUrl(url: string) {
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

    setExistingPackage(checked: boolean) {
        this.existingPackage = checked;
    }

    setPackageToLoad(file: any) {
        this.currentPackage = {package: file};
    }
}
