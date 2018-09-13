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
  private configItemCounter: number;
  private models: {}[];
  private formFields: any[];
  private formFieldsArray: any[][];

  constructor(private featuresService: FeaturesService,
              private dialogRef: MatDialogRef<FeatureConfigurationFormComponent>,
              @Inject(MAT_DIALOG_DATA) private addon: Addon){  }

  ngOnInit() {
    this.configItemCounter = this.addon.config.multiple - 1 | 0; //we subtract 1 because of the first config item which appears by default
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
      return _merge(defaultField, field); //extend default conf with field conf
    });
    this.formFieldsArray = [copy(this.formFields)];
  }

  addConfigItem(){
    this.configItemCounter--;
    let newForm = copy(this.formFields);
    this.formFieldsArray.push(newForm);
    this.models.push({});
  }

  removeConfigItem(formIndex) {
    this.configItemCounter++;
    this.formFieldsArray.splice(formIndex, 1);
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
}
