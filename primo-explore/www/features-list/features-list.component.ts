import {Component, OnInit} from '@angular/core';
import {IframeService} from "../utils/iframe.service";
import {ConfigurationService} from "../utils/configuration.service";
import {FeaturesService} from "../utils/features.service";

import * as _filter from 'lodash/filter';
import {Addon} from "../classes/addon";
import {FeatureConfigurationFormComponent} from "../feature-configuration-form/feature-configuration-form.component";
import {MatDialog} from "@angular/material";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {Overlay} from "@angular/cdk/overlay";


@Component({
  selector: 'prm-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss']
})
export class FeaturesListComponent implements OnInit {
  private selectedFilterField: string;
  private searchTerm: string;
  private filterOptions: ({ key: string; displayName: string })[];
  private features: Addon[] = [];
  private filerPredicateBinded: any;
  private filteredFeatures: Addon[] = [];

  constructor(private featuresService: FeaturesService,
              private iframeService: IframeService,
              private ngDialog: MatDialog,
              private overlay: Overlay,
              private configurationService: ConfigurationService,
              private analytics: Angulartics2GoogleAnalytics){
    this.analytics.pageTrack('/');
    this.selectedFilterField = 'all';
    this.searchTerm = '';
    this.filterOptions = [{key:'all', displayName:'All'}, {key:'what', displayName: 'Title'}, {key:'hook', displayName: 'Hook'}, {key:'who', displayName: 'Contributor'}];
  }

  ngOnInit() {
    this.filerPredicateBinded = this.filterPredicate.bind(this);
    this.featuresService.fetchFeaturesData().subscribe((data)=>{
      this.features = data;
      this.features = _filter(this.features, (feature: Addon)=> {
        if (feature.systemExclusive) {
          if (this.configurationService.config.ve) {
            return feature.systemExclusive.toLowerCase() === "ve";
          } else {
            return feature.systemExclusive.toLowerCase() === "primo";
          }
        } else {
          return true;
        }
      });
      this.filterFeatures();
    });
  }

  notifyFilterChanged() {
    this.filterFeatures();
    this.analytics.eventTrack('filterChange', {category: 'Addons', label: this.selectedFilterField + " - " + this.searchTerm});
  }

  selectFeature(addOn: Addon){
    if(addOn.config){
      let addOnConfigFromSubmitCallback = this.addFeature.bind(this, addOn);
      let dialogOptions = this.ngDialog.open<FeatureConfigurationFormComponent, Addon, any>(FeatureConfigurationFormComponent,
        {
          data: addOn,
          scrollStrategy: this.overlay.scrollStrategies.reposition(),
          height: "fit-content",
          width: "450px",
          panelClass: "custom-dialog-container"
      });
      dialogOptions.afterClosed().subscribe(formData => {
        if (formData) {
          addOnConfigFromSubmitCallback(formData);
        }
      });
    }
    else{
      this.addFeature(addOn);
    }
  }


  addFeature(addOn: Addon, featureConfigData?){
    let npmid= addOn.npmid;
    this.inProgress[npmid] = true;
    this.featuresService.addFeature(addOn, featureConfigData).subscribe(()=>{
      this.inProgress[npmid] = false;
      this.iframeService.refreshNuiIFrame();
    }, ()=>{
      this.inProgress[npmid] = false;
    });
    this.analytics.eventTrack('addFeature', {category: 'Addons', label: addOn.npmid + " - " + featureConfigData});
  }

  removeFeature(npmid, hook){
    this.inProgress[npmid] = true;
    this.featuresService.removeFeature(npmid, hook).subscribe(()=>{
      this.inProgress[npmid] = false;
      this.iframeService.refreshNuiIFrame();
    }, ()=>{
      this.inProgress[npmid] = false;
    });
    this.analytics.eventTrack('removeFeature', {category: 'Addons', label: npmid});
  }

  filterFeatures(){
    this.filteredFeatures = this.features.filter(this.filerPredicateBinded);
  }

  getFilteredFeatures(){
    return this.filteredFeatures;
  }

  isFeatureInstalled(npmid){
    return this.configurationService.config.installedFeatures.indexOf(npmid) > -1;
  }

  filterPredicate(value){
    if (!this.searchTerm){
      return true;
    }
    let filterTerm = this.searchTerm.toLowerCase();
    let fieldsToFilterBy = this.selectedFilterField === 'all'? this.filterOptions.map((value)=>value.key) : [this.selectedFilterField];
    for (let field of fieldsToFilterBy){
      if(!value[field]){
        continue;
      }
      if (value[field].toLowerCase().indexOf(filterTerm) > -1){
        return true;
      }
    }
    return false;
  }

  setSearchTerm(value: string) {
    this.searchTerm = value;
    this.notifyFilterChanged();
  }

  setSelectedFilter(value: string) {
    this.selectedFilterField = value;
    this.notifyFilterChanged();
  }

  get inProgress(): { [key: string]: boolean } {
    return this.featuresService.inProgress;
  }

  set inProgress(value: { [key: string]: boolean }) {
    this.featuresService.inProgress = value;
  }
}
