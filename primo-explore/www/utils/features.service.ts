import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Addon} from "../classes/addon";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private featuresJsonURL: string;
  private _inProgress: {[key: string]: boolean} = {};

  constructor(private $http: HttpClient,
              private configurationService: ConfigurationService,
              private route: ActivatedRoute
  ) {
    let queryParams = this.route.snapshot.queryParams;
    let featuresJSONBranch = queryParams['branch'] || 'master';
    this.featuresJsonURL = 'https://raw.githubusercontent.com/primousers/primostudio/' + featuresJSONBranch + '/features.json';
  }

  fetchFeaturesData(): Observable<any> {
    return new Observable<any>(observer => {
      this.$http.get(this.featuresJsonURL).subscribe((data) => {
        observer.next(data);
        observer.complete();
      }, (err) => {
        console.log('oops something went wrong while fetching features data: ' + err);
      });
    });
  }

  addFeature(addOn: Addon, featureConfigData): Observable<any> {
    let npmid = addOn.npmid;
    let version = addOn.version;
    let hook = addOn.hook;

    console.log('adding feature with npm id: ' + npmid);
    let config = {
      data: {
        id: npmid,
        version: version,
        hook: hook,
      }
    };
    if (featureConfigData) {
      config['data']['featureConfig'] = featureConfigData;
    }
    return new Observable<any>(observer => {
      this.$http.post('/feature', config).subscribe((resp) => {
        console.log('feature installed');
        this.configurationService.config.installedFeatures.push(npmid);
        observer.next(resp);
        observer.complete();
      }, (err) => {
        console.log('something went wrong when installing feature:' + err.message);
        observer.error(err);
      });
    });
  }

  removeFeature(npmid: string, hook: string): Observable<any> {
    console.log('uninstalling feature with npm id: ' + npmid);
    let config = this.configurationService.config;
    config['id'] = npmid;
    config['hook'] = hook;
    let data = {params: config};
    return new Observable<any>(observer => {
      this.$http.get('/remove_feature', data).subscribe((resp) => {
        console.log('feature uninstalled');
        let index = this.configurationService.config.installedFeatures.indexOf(npmid);
        if (index !== -1) {
          this.configurationService.config.installedFeatures.splice(index, 1);
        }
        observer.next(resp);
        observer.complete();
      }, (err) => {
        console.log('something went wrong when uninstalling feature:' + err.message);
      });
    });
  }

  get inProgress(): { [key: string]: boolean } {
    return this._inProgress;
  }

  set inProgress(value: { [key: string]: boolean }) {
    this._inProgress = value;
  }
}
