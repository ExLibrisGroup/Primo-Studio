import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {StaticCategory} from '../classes/static-category';
import {ConfigurationService} from '../utils/configuration.service';
import {IframeService} from '../utils/iframe.service';
import {EditorService} from '../editor-tab/editor.service';
import {CodeFile} from '../classes/code-file';
import {PnxVariable} from '../classes/pnx-variable';
import {MatCheckbox, MatCheckboxChange, MatDialog, MatSelectChange} from '@angular/material';
import * as CodeMirror from 'codemirror';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TemplateContentField} from '../classes/template-content-field';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'prm-email-print-editor',
    templateUrl: './email-print-editor.component.html',
    styleUrls: ['./email-print-editor.component.scss']
})
export class EmailPrintEditorComponent implements OnInit, OnDestroy {
    public _selectedCategory: StaticCategory;
    public _selectedLanguage: string;
    public categories: {[key: string]: StaticCategory};
    public availableLanguages: string[];
    public fields: TemplateContentField[];
    public variables: PnxVariable[];
    public _codeFile: CodeFile;
    public isShowCodeEditor: boolean;
    public pnxFieldsField: TemplateContentField;

    @Output()
    public urlChange: EventEmitter<string> = new EventEmitter();
    @Output()
    private expandTab: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('pnx_fields_checkbox',{static: false})
    public pnxFieldsCheckbox: MatCheckbox;

    private _url: string;
    private frameAttributesMap: any = {};
    private _inProgress: boolean;
    private _expanded: boolean;
    private openRepeat: string = '<div ng-repeat="item in $ctrl.parentCtrl.items">';
    private closeRepeat: string = '</div>';

    constructor(public configurationService: ConfigurationService,
                public iframeService: IframeService,
                public editorService: EditorService,
                public elementRef: ElementRef,
                public $http: HttpClient,
                public dialog: MatDialog) {
        this.categories = {
            email: new StaticCategory('email', 'Email', '/email-template'),
            print: new StaticCategory('print', 'Print', '/email-template') // TODO change to print template
        };
        this.fields = [
            new TemplateContentField('Logo', false, 'prm-logo'),
            new TemplateContentField('Personal Note (for signed in users)', false), // TODO what does it means?
            new TemplateContentField('Brief display', true, 'prm-brief-result-container', '[item]="item"'),
            new TemplateContentField('Availability status', true, 'prm-search-result-availability-line', '[result]="::item"'),
            new TemplateContentField('Detailed display', true, 'prm-service-details', '[item]="item"'),
            new TemplateContentField('PNX Fields', true),
            new TemplateContentField('Footer', false) // TODO what does it means?
        ];
        this.variables = [
            new PnxVariable('type', 'pnx.display.type[0]', false),
            new PnxVariable('title', 'pnx.display.title[0]', false),
            new PnxVariable('contributor', 'pnx.display.contributor[0]', false),
            new PnxVariable('publisher', 'pnx.display.publisher[0]', false),
            new PnxVariable('creation date', 'pnx.display.creationdate[0]', false),
            new PnxVariable('format', 'pnx.display.format[0]', false),
            new PnxVariable('identifier', '', false), // TODO complete path
            new PnxVariable('description', '', false), // TODO complete path
            new PnxVariable('language', 'pnx.display.language[0]', false),
            new PnxVariable('source', 'pnx.display.source[0]', false)
        ];
        this.pnxFieldsField = this.fields.find(field => field.name === "PNX Fields");
        this._expanded = true;
        this.toggleTab();
    }

    ngOnInit() {
        this.url = '/static-file/' + this.selectedCategory.key + '?vid=' + this.config.view + '&lang=' + this.selectedLanguage;
        let frameWindow = window.frames[0];
        this.iframeService.isAttributesMapInitialized().subscribe((isLoaded) => {
            if (isLoaded) {
                this.frameAttributesMap = frameWindow.appConfig['primo-view']['attributes-map'];
                this.availableLanguages = this.frameAttributesMap.interfaceLanguageOptions.split(',');
            }
        });

        CodeMirror.commands.save = (instance) => {
            instance.onSave();
        };

        this.pnxFieldsField.calculateTemplate = () => {
            return `<div ${'class="' + this.pnxFieldsField.name.replace(' ', '_') + '"'}>`+
                `${this.variables.filter(variable => variable.inserted).reduce((prev, variable) => prev + variable.calculateTemplate(), '')}`+
                `</div>`;
        };
    }

    ngOnDestroy() {
        this.urlChange.emit('');
        if (this.expanded) {
            this.expandTab.emit(!this.expanded);
        }
    }

    createTheme() {
        this._inProgress = true;
        this.editorService.saveFile(this._codeFile).subscribe((resp)=>{
            if(+resp.status === 200){
                console.log('file "' + this._codeFile.file_path + '" was saved');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).add(()=>{
            this._inProgress = false;
        });
    }

    download() {
        this.$http.get('/single_file?path=' + this.filePath, {
            headers: {
                'Content-Type': 'text/html',
                'Accept': 'text/html'
            },
            responseType: 'arraybuffer'
        }).subscribe((data)=>{
            let url = URL.createObjectURL(new Blob([data]));
            let a = document.createElement('a');
            a.href = url;
            a.download = this.fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(function(){
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 100);
        });
    }

    setSelectedCategory(category: string) {
        this._selectedCategory = this.categories[category];
        this.changeCodeFile();
    }

    setSelectedLanguage(language: string) {
        this._selectedLanguage = language;
        this.changeCodeFile();
    }

    private changeCodeFile() {
        let codeFile = new CodeFile('htmlembedded', '', this.filePath, 0);
        this.urlChange.emit(this.selectedCategory.suffix + '?vid=' + this.config.view + '&lang=' + this.selectedLanguage);
        this.editorService.initCode(codeFile).add(() => {
            this._codeFile = this.editorService.codeFiles.get(this.filePath);

            // update selected variables
            this.variables.forEach(variable => this.updateInsertedVariable(variable));
            let insertedVariables = this.variables.filter(variable => variable.inserted);
            if (insertedVariables.length > 1) {
                let indexesInData = insertedVariables.map(variable => this._codeFile.data.indexOf(variable.calculateTemplate()));
                let sortedIndexes = indexesInData.slice(0).sort((a, b) => a - b);
                if (indexesInData !== sortedIndexes) {
                    let sortedVariables = sortedIndexes.map(sortedI => insertedVariables[indexesInData.indexOf(sortedI)]);
                    let notInsertedVariables = this.variables.filter(variable => !variable.inserted);
                    this.variables = sortedVariables.concat(notInsertedVariables);
                }
            }

            // update selected fields
            this.fields.forEach(field => this.updateInsertedField(field));
            let insertedFields = this.fields.filter(field => field.inserted);
            if (insertedFields.length > 1) {
                let indexesInData = insertedFields.map(field => this._codeFile.data.indexOf(field.calculateTemplate()));
                let sortedIndexes = indexesInData.slice(0).sort((a, b) => a - b);
                if (indexesInData !== sortedIndexes) {
                    let sortedFields = sortedIndexes.map(sortedI => insertedFields[indexesInData.indexOf(sortedI)]);
                    let notInsertedFields = this.fields.filter(field => !field.inserted);
                    this.fields = sortedFields.concat(notInsertedFields);
                }
            }
        });
    }

    public showCodeEditor(): void {
        this.isShowCodeEditor = !this.isShowCodeEditor;
        if (!this.isShowCodeEditor && this.expanded) {
            this.toggleTab();
        }
    }

    public onSave(data: CodeFile) {
        this._inProgress = true;
        this.editorService.saveFile(data).subscribe((resp)=>{
            if(+resp.status === 200){
                console.log('file "' + data.file_path + '" was saved');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).add(()=>{
            this._inProgress = false;
        });
    }

    public onDropField(event: CdkDragDrop<string[]>) {
        let field = this.fields[event.previousIndex];
        if (event.currentIndex !== event.previousIndex && field.inserted) {
            let lowerIndex = event.previousIndex < event.currentIndex ? event.previousIndex + 1 : event.currentIndex;
            let biggerIndex = event.previousIndex < event.currentIndex ? event.currentIndex + 1 : event.previousIndex;
            let sliced = this.fields.slice(lowerIndex, biggerIndex);
            if (sliced.some(field => field.inserted)) {
                this.removeFieldFromTemplate(field);
                moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
                this.insertFieldToTemplate(field);
            } else {
                moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
            }
        } else {
            moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
        }
    }

    public setFieldToTemplate(field: TemplateContentField, $event: MatCheckboxChange) {
        if ($event.checked && !$event.source.indeterminate) {
            this.insertFieldToTemplate(field);
        } else if (!$event.checked) {
            this.removeFieldFromTemplate(field);
        }
    }

    public removeFieldFromTemplate(field: TemplateContentField) {
        let calculatedField = field.calculateTemplate();
        let insertedFields = this.fields.filter(field => field.inserted);
        let indexInInsertedFields = insertedFields.indexOf(field);
        let nextField = insertedFields.length > indexInInsertedFields + 1 ? insertedFields[indexInInsertedFields + 1] : undefined;
        let previousField = 0 < indexInInsertedFields ? insertedFields[indexInInsertedFields - 1] : undefined;
        let betweenRepeatableFields = nextField && previousField && nextField.repeatable && !field.repeatable && previousField.repeatable;
        this._codeFile.data = this._codeFile.data
                                .replace(betweenRepeatableFields ? this.closeRepeat + calculatedField + this.openRepeat : calculatedField, '')
                                .replace(this.openRepeat + this.closeRepeat, '');
        field.inserted = false;
    }

    public insertFieldToTemplate(field: TemplateContentField) {
        let fieldIndex = this.fields.indexOf(field);
        let nextField = this.fields.slice(fieldIndex).find(nextField => nextField.inserted);
        let previousField = this.fields.slice(0, fieldIndex).reverse().find(previousField => previousField.inserted);
        let nextFieldTemplate = nextField ? nextField.calculateTemplate() : '';
        let previousFieldTemplate = previousField ? previousField.calculateTemplate() : '';
        let previousRepeatable = (previousField && previousField.repeatable);
        let nextRepeatable = (nextField && nextField.repeatable);
        let closeOrOpenRepeat = (before, after) => (before && !after) ? this.closeRepeat : (!before && after) ? this.openRepeat : '';
        let beforeText = previousFieldTemplate + closeOrOpenRepeat(previousRepeatable, nextRepeatable) + nextFieldTemplate;
        let afterText = previousFieldTemplate + closeOrOpenRepeat(previousRepeatable, field.repeatable) +
            field.calculateTemplate() + closeOrOpenRepeat(field.repeatable, nextRepeatable) + nextFieldTemplate;
        this._codeFile.data = this._codeFile.data.replace(beforeText, afterText);
        field.inserted = true;
    }

    public updateInsertedField(field: TemplateContentField): void {
        let calculatedField = field.calculateTemplate();
        field.inserted = this._codeFile.data.includes(calculatedField);
    }

    public onDropVariable(event: CdkDragDrop<string[]>) {
        let variable = this.variables[event.previousIndex];
        if (event.currentIndex !== event.previousIndex && variable.inserted) {
            let lowerIndex = event.previousIndex < event.currentIndex ? event.previousIndex + 1 : event.currentIndex;
            let biggerIndex = event.previousIndex < event.currentIndex ? event.currentIndex + 1 : event.previousIndex;
            let sliced = this.variables.slice(lowerIndex, biggerIndex);
            if (sliced.some(variable => variable.inserted)) {
                this.removeVariableFromTemplate(variable);
                moveItemInArray(this.variables, event.previousIndex, event.currentIndex);
                this.insertVariableToTemplate(variable);
            } else {
                moveItemInArray(this.variables, event.previousIndex, event.currentIndex);
            }
        } else {
            moveItemInArray(this.variables, event.previousIndex, event.currentIndex);
        }
    }

    public setVariableToTemplate(event: MatSelectChange) {
        let variablesNames = this.variables.map(variable => variable.name);
        let selectedVariableNames = this.variables.filter(variable => variable.inserted).map(variable => variable.name);
        let eventVariables: string[] = event.value;
        let selectedVariableName: string = _.difference(selectedVariableNames, eventVariables).concat(_.difference(eventVariables, selectedVariableNames))[0];
        let indexInVariables = variablesNames.indexOf(selectedVariableName);
        let selectedVariable: PnxVariable = this.variables[indexInVariables];
        if (event.value.indexOf(selectedVariableName) > -1) {
            this.insertVariableToTemplate(selectedVariable);
        } else {
            this.removeVariableFromTemplate(selectedVariable);
        }
    }

    public removeVariableFromTemplate(variable: PnxVariable) {
        let calculatedVariable = variable.calculateTemplate();
        this._codeFile.data = this._codeFile.data.replace(calculatedVariable, '');
        variable.inserted = false;
        if (!this.variables.some((variable) => variable.inserted)) {
            this.removeFieldFromTemplate(this.pnxFieldsField);
            this.pnxFieldsCheckbox.toggle();
        }
    }

    public insertVariableToTemplate(variable: PnxVariable) {
        if (this.pnxFieldsField.inserted) {
            let variableIndex = this.variables.indexOf(variable);
            let nextVariable = this.variables.slice(variableIndex).find(nextVariable => nextVariable.inserted);
            let previousVariable = this.variables.slice(0, variableIndex).reverse().find(previousVariable => previousVariable.inserted);
            let nextVariableTemplate = nextVariable ? nextVariable.calculateTemplate() : '</div>';
            let previousVariableTemplate = previousVariable ? previousVariable.calculateTemplate() : '<div class="PNX_Fields">';
            let beforeText = previousVariableTemplate + nextVariableTemplate;
            let afterText = previousVariableTemplate + variable.calculateTemplate() + nextVariableTemplate;
            this._codeFile.data = this._codeFile.data.replace(beforeText, afterText);
        }
        variable.inserted = true;
    }

    public updateInsertedVariable(variable: PnxVariable): void {
        let calculatedField = variable.calculateTemplate();
        variable.inserted = this._codeFile.data.includes(calculatedField);
    }

    public isVariableInData(variable: PnxVariable): boolean {
        let calculatedData = variable.calculateTemplate();
        return this.codeFile.data.includes(calculatedData);
    }

    public isAnyVariableInTemplate(): boolean {
        return this.variables.some((variable) => variable.inserted);
    }

    public isAllVariablesInTemplate(field: TemplateContentField): boolean {
        return this.variables.reduce((prev, variable) => variable.inserted && prev, field.inserted);
    }

    public toggleTab() {
        this._expanded = !this._expanded;
        this.expandTab.emit(this._expanded);
    }

    set url(value: string) {
        this._url = value;
    }

    get config() {
        return this.configurationService.config;
    }

    get selectedLanguage(): string {
        if (!this._selectedLanguage) {
            return this.frameAttributesMap.interfaceLanguage || this.configurationService.isVe ? 'en' : 'en_US';
        }
        return this._selectedLanguage;
    }

    get selectedCategory(): StaticCategory {
        if (!this._selectedCategory) {
            this.setSelectedCategory(this.categories.email.key);
        }
        return this._selectedCategory;
    }

    get filePath(): string {
        return '\\html\\' + (this.configurationService.isVe ? this.selectedCategory.key + '\\' : '') + this.fileName;
    }

    get fileName(): string {
        return this.selectedCategory.key + '_' + this.selectedLanguage + '.html';
    }

    get codeFile(): CodeFile {
        if (this._codeFile) {
            return this._codeFile;
        } else {
            this._codeFile = new CodeFile('htmlembedded', '', this.filePath, 0);
            this.editorService.initCode(this._codeFile).add(() => {
                this._codeFile = this.editorService.codeFiles.get(this.filePath);
            });
            return this._codeFile;
        }
    }

    get inProgress(): boolean {
        return this._inProgress;
    }

    set inProgress(value: boolean) {
        this._inProgress = value;
    }

    get expanded(): boolean {
        return this._expanded;
    }

    set expanded(value: boolean) {
        this._expanded = value;
    }
}
