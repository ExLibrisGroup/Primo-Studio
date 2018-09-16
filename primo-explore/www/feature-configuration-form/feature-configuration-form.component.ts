import {Component, Inject, OnInit} from '@angular/core';
import {copy} from "angular";
import * as _merge from 'lodash/merge';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Addon} from "../classes/addon";
import {FeaturesService} from "../utils/features.service";

@Component({
  selector: 'prm-feature-configuration-form',
  templateUrl: './feature-configuration-form.component.html',
  styleUrls: ['./feature-configuration-form.component.scss']
})
export class FeatureConfigurationFormComponent implements OnInit {
  private _configItemCounter: number;
  private models: {}[];
  private formFields: any[];
  private _formFieldsArray: any[][];

  constructor(private featuresService: FeaturesService,
              private dialogRef: MatDialogRef<FeatureConfigurationFormComponent>,
              @Inject(MAT_DIALOG_DATA) private addon: Addon){  }

  ngOnInit() {
    this._configItemCounter = this.addon.config.multiple - 1 | 0; //we subtract 1 because of the first config item which appears by default
    this.models = [{}];
    let defaultFieldConf=
      {
        type: 'input',
        templateOptions: {
          type: 'text',
        }
      };
    this.formFields = this.addon.config.form.map((field)=>{
      let defaultField = copy(defaultFieldConf);
      defaultField.templateOptions['label'] = field['key'];
      if (field.type === 'select' && field.templateOptions && field.templateOptions.options) {
        field.templateOptions.options.forEach(option => {
          option.label = option.label || option.name;
        })
      }
      return _merge(defaultField, field); //extend default conf with field conf
    });
    this._formFieldsArray = [copy(this.formFields)];
  }

  addConfigItem(){
    this._configItemCounter--;
    let newForm = copy(this.formFields);
    this._formFieldsArray.push(newForm);
    this.models.push({});
  }

  removeConfigItem(formIndex) {
    this._configItemCounter++;
    this._formFieldsArray.splice(formIndex, 1);
    this.models.splice(formIndex, 1);
  }

  submit(){
    this.dialogRef.close(this.models);
    console.log(this.models);
  }

  get inProgress(): { [key: string]: boolean } {
    return this.featuresService.inProgress;
  }

  set inProgress(value: { [key: string]: boolean }) {
    this.featuresService.inProgress = value;
  }


  get configItemCounter(): number {
    return this._configItemCounter;
  }

  set configItemCounter(value: number) {
    this._configItemCounter = value;
  }

  get formFieldsArray(): any[][] {
    return this._formFieldsArray;
  }

  set formFieldsArray(value: any[][]) {
    this._formFieldsArray = value;
  }
}
