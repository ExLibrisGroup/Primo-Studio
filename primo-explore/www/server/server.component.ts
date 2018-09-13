import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "../utils/configuration.service";
import {IframeService} from "../utils/iframe.service";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";

@Component({
  selector: 'prm-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  private tabs: ({ name: string; icon: string })[];
  private selectedTab: string;
  private sidenavCollapsed: boolean;
  private sidenavAnimating: boolean;
  private expandTab: boolean;

  constructor(private $http: HttpClient,
              private configurationService: ConfigurationService,
              private iframeService: IframeService,
              private analytics: Angulartics2GoogleAnalytics) {  }

  ngOnInit(): void {
    console.log('constructor running');
    this.analytics.pageTrack(window.location.href);

    this.tabs = [
      { name: 'Theme', icon: 'palette' },
      { name: 'Images', icon: 'image' },
      // { name: 'Icons', icon: 'image' },
      { name: 'Addons', icon: 'gift' },
      { name: 'Editor', icon: 'curly_brackets' },
      { name: 'Download', icon: 'cloud_download' },
      { name: 'UploadPackage', icon: 'cloud_upload' }
    ];
    this.selectedTab = 'Theme';
    this.sidenavCollapsed = false;
    this.sidenavAnimating = false;
    this.expandTab = false;
  }

  get appTitle(){
    return 'Primo Studio';
  }

  get config(){
    return this.configurationService.config;
  }

  isUp(){
    return this.iframeService.isUp();
  }

  getIframeUrl(){
    return this.iframeService.getIframeUrl();
  }

  restart(){
    let config={params: this.configurationService.config};
    this.$http.get('/restart',config).subscribe(()=>{
      this.iframeService.refreshNuiIFrame();
    });
    this.analytics.pageTrack("/");
  }

  selectTab(tab){
    this.selectedTab = tab;
    if (this.sidenavCollapsed) {
      this.sidenavCollapsed = false;
    }
    this.analytics.eventTrack('change', {category: 'tabs', label: tab});
  }

  toggleSidenav(){
    this.sidenavCollapsed = !this.sidenavCollapsed;
  }

  onExpandTab($event: boolean) {
    this.expandTab = $event;
  }

}
