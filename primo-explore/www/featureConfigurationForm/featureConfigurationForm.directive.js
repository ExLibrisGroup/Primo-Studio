/**
 * Created by shoulm on 17/04/2018.
 */
const _merge= require('lodash/merge');

class FeatureConfigurationForm{
    constructor($timeout){
        this.$timeout = $timeout;
    }

    $onInit(){
        this.configItemCounter = this.formFieldsConfig.multiple - 1 | 0; //we subtract 1 because of the first config item which appears by default
        this.formsData = [{}];
        let defaultFieldConf=
            {
                type: 'input',
                templateOptions: {
                    type: 'text',
                }
            };
        this.formConf = this.formFieldsConfig.form.map((field)=>{
            let defaultField = angular.copy(defaultFieldConf);
            defaultField.templateOptions['label'] = field['key'];
            let fieldConf =  _merge(defaultField, field); //extend default conf with field conf
            return fieldConf;
        });
        this.forms = [angular.copy(this.formConf)];
    }

    addConfigItem(){
            this.configItemCounter--;
            let newForm = angular.copy(this.formConf);
            this.forms.push(newForm);
    }

    removeConfigItem(formIndex) {
        this.configItemCounter++;
        this.forms.splice(formIndex, 1);
        this.formsData.splice(formIndex, 1);
    }

    submit(formData){
        this.onSubmit(formData);
        console.log(formData);
    }
}

FeatureConfigurationForm.$inject=['$timeout'];

module.exports = {
    name: 'prmFeatureConfigurationForm',
    config: {
        controller: FeatureConfigurationForm,
        bindings: {
            formFieldsConfig: '<',
            onSubmit: '<'
        },
        templateUrl: '/featureConfigurationForm/feature-configuration-form.html'
    }
}