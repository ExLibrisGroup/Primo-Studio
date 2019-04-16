import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "../utils/configuration.service";
import {IframeService} from "../utils/iframe.service";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {SidenavTab} from "../classes/sidenav-tab";
import {TestsService} from "../tests/tests.service";
import {Animations} from "../utils/animations";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'prm-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
    animations: [
        Animations.easeInOutAnimation
    ]
})
export class ServerComponent implements OnInit {

    private _tabs: SidenavTab[];
    private selectedTab: SidenavTab;
    private _sidenavCollapsed: boolean;
    private sidenavAnimating: boolean;
    private expandTab: boolean;
    private haveResults: boolean;
    private queryPackageName: string;

    constructor(private $http: HttpClient,
                private route: ActivatedRoute,
                private router: Router,
                private configurationService: ConfigurationService,
                private iframeService: IframeService,
                private analytics: Angulartics2GoogleAnalytics,
                private testsService: TestsService) {
        this._tabs = [
            new SidenavTab('Theme', 'palette'),
            new SidenavTab('Images', 'image'),
            new SidenavTab('Icons', 'icons'),
            new SidenavTab('Addons', 'gift'),
            new SidenavTab('Editor', 'curly_brackets'),
            new SidenavTab('Download', 'cloud_download'),
            new SidenavTab('UploadPackage', 'cloud_upload')
        ];
        this.selectedTab = this._tabs[0];
        this._sidenavCollapsed = false;
        this.sidenavAnimating = false;
        this.expandTab = false;
        this.haveResults = false;
    }

    ngOnInit(): void {
        let params = this.route.snapshot.queryParams;

        if (params.packageName) {
            this.selectedTab = this._tabs[3];
            if (this.sidenavCollapsed) {
                this.sidenavCollapsed = false;
            }
            this.queryPackageName = params.packageName;
            this.router.navigate([],{queryParams: {packageName: null}, queryParamsHandling: "merge"});
        }

        if (params.tests && params.tests === 'true') {
            this._tabs.push(new SidenavTab('Tests', 'test'));
        }

        this.analytics.pageTrack(window.location.href);
        this.analytics.eventTrack('urlToCustomize', {
            category: 'Configuration',
            label: this.configurationService.config.url
        });
        this.analytics.eventTrack('viewToCustomize', {
            category: 'Configuration',
            label: this.configurationService.config.view
        });
        this.analytics.eventTrack('isVE', {category: 'Configuration', label: this.configurationService.config.ve});
    }

    get appTitle() {
        return 'Primo Studio';
    }

    get config() {
        return this.configurationService.config;
    }

    isUp() {
        return this.iframeService.isUp();
    }

    getIframeUrl() {
        return this.iframeService.getIframeUrl();
    }

    restart() {
        let config = {params: this.configurationService.config};
        this.$http.get('/restart', config).subscribe(() => {
            this.iframeService.refreshNuiIFrame();
        });
    }

    selectTab(tab: SidenavTab) {
        this.selectedTab = tab;
        if (this.sidenavCollapsed) {
            this.sidenavCollapsed = false;
        }
        this.analytics.eventTrack('change', {category: '_tabs', label: tab.name});
    }

    toggleSidenav() {
        this.sidenavCollapsed = !this.sidenavCollapsed;
    }

    onExpandTab($event: boolean) {
        this.expandTab = $event;
    }


    get sidenavCollapsed(): boolean {
        return this._sidenavCollapsed;
    }

    set sidenavCollapsed(value: boolean) {
        this._sidenavCollapsed = value;
    }

    get tabs(): SidenavTab[] {
        return this._tabs;
    }

    set tabs(value: SidenavTab[]) {
        this._tabs = value;
    }

    onRemoveQueryPackageName() {
        this.queryPackageName = null;
    }

    isInTestTabWithResults() {
        return (this.selectedTab === this.tabs.reduce((prev, curr) => curr.name==='Tests' ? curr : prev)) && this.testsService.haveResults;
    }

    isTooltipDisplayed(tab: SidenavTab): boolean {
        return tab.name === "Icons";
    }

    getTooltipMessage(tab: SidenavTab): string {
        return tab.name + ` is available from Primo ${this.configurationService.isVe ?'VE 2018 October' : '2018 November'} release`;
    }
}
