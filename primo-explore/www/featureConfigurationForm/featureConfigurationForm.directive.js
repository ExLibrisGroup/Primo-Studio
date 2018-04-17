/**
 * Created by shoulm on 17/04/2018.
 */
class FeatureConfigurationForm{
    constructor($timeout){
        this.$timeout = $timeout;
    }

    $onInit(){

        // let formConf=
        //     [
        //         {
        //             key: 'url',
        //             type: 'input',
        //             templateOptions: {
        //                 type: 'text',
        //                 label: 'URL',
        //                 placeholder: 'Enter URL'
        //             }
        //         },
        //         {
        //             key: 'somthing',
        //             type: 'input',
        //             templateOptions: {
        //                 type: 'text',
        //                 label: 'Something',
        //                 placeholder: 'Enter Something'
        //             }
        //         },
        //     ];
        this.configItemCounter = this.formFieldsConfig.multiple - 1 | 0; //we subtract 1 because of the first config item which appears by default
        this.formsData = [{}];
        this.formConf = this.formFieldsConfig.form.map((field)=>{
            field['type']= 'input';
            field['templateOptions'] = {
                type: 'text',
                label: field['key']
            }
            return field;
        });
        this.forms = [angular.copy(this.formConf)];
    }

    addConfigItem(){
            this.configItemCounter--;
            let newForm = angular.copy(this.formConf);
            this.forms.push(newForm);
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