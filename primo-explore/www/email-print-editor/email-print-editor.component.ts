import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {StaticCategory} from '../classes/static-category';
import {ConfigurationService} from '../utils/configuration.service';
import {IframeService} from '../utils/iframe.service';
import {EditorService} from '../editor-tab/editor.service';
import {CodeFile} from '../classes/code-file';
import {PnxVariable} from '../classes/pnx-variable';
import {MatCheckbox, MatCheckboxChange, MatDialog, MatSelect, MatSelectChange} from '@angular/material';
import * as CodeMirror from 'codemirror';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TemplateContentField} from '../classes/template-content-field';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

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
    private _codeFile: CodeFile;
    private _finalCodeFile: CodeFile;
    public isShowCodeEditor: boolean;
    public pnxFieldsField: TemplateContentField;
    public templateApproved: boolean;

    @Output()
    public urlChange: EventEmitter<string> = new EventEmitter();
    @Output()
    private expandTab: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('pnx_fields_checkbox',{static: false})
    public pnxFieldsCheckbox: MatCheckbox;
    @ViewChild('pnx_fields_select',{static: false})
    public pnxFieldsSelect: MatSelect;

    private _url: string;
    private frameAttributesMap: any = {};
    private _inProgress: boolean;
    private _expanded: boolean;
    private openRepeat: string = '<tr ng-if="$ctrl.parentCtrl.fullViewLoaded"\n' +
        '                        ng-repeat="item in $ctrl.parentCtrl.delayedItems">';
    private closeRepeat: string = '</tr>';
    private isAttributesMapInitializedSubscription: Subscription;

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
            new TemplateContentField('Logo', false,
                {
                    component: 'prm-logo',
                    parameters: 'style="height: 66px;"'
                }),
            new TemplateContentField('Institution Note', false,
                {
                    parameters: 'translate="nui.email.institutionNote"'
                }),
            new TemplateContentField('Personal Note (for signed in users)', false,
                {
                    component: 'tr',
                    parameters: 'ng-if="$ctrl.parentCtrl.note"',
                    content:'\n                        <td style="padding: 15px 10px;\n' +
                        '    font-style: italic;">\n' +
                        '                            <b>Note:</b> {{$ctrl.parentCtrl.note}}\n' +
                        '                        </td>\n                    '
                }),
            new TemplateContentField('Brief display', true,
                {
                    component: 'prm-brief-result-container',
                    parameters: 'style="width: 100%;"\n                                                        [item]="item"',
                    content: '\n                            '
                }),
            new TemplateContentField('Availability status', true,
                {
                    component: 'prm-search-result-availability-line',
                    parameters: '[result]="::item"'
                }),
            new TemplateContentField('Detailed display', true,
                {
                    component: 'prm-service-details',
                    parameters: '[item]="item"'
                }),
            new TemplateContentField('Display Fields', true),
            new TemplateContentField('Footer', false,
                {
                    component: 'prm-explore-footer'
                })
        ];
        this.variables = [
            new PnxVariable('type', 'pnx.display.type[0]', false),
            new PnxVariable('title', 'pnx.display.title[0]', false),
            new PnxVariable('contributor', 'pnx.display.contributor[0]', false),
            new PnxVariable('publisher', 'pnx.display.publisher[0]', false),
            new PnxVariable('creation date', 'pnx.display.creationdate[0]', false),
            new PnxVariable('format', 'pnx.display.format[0]', false),
            new PnxVariable('identifier', 'pnx.display.identifier[0]', false),
            new PnxVariable('description', 'pnx.display.description[0]', false),
            new PnxVariable('language', 'pnx.display.language[0]', false),
            new PnxVariable('source', 'pnx.display.source[0]', false)
        ];
        this.pnxFieldsField = this.fields.find(field => field.name === "Display Fields");
        this._expanded = true;
        this.toggleTab();

        //TODO remove to change editor to not show by default
        this.isShowCodeEditor = true;
    }

    ngOnInit() {
        CodeMirror.commands.save = (instance) => {
            instance.onSave();
        };

        this.pnxFieldsField.calculateTemplate = () => {
            return `<div ${'class="' + this.pnxFieldsField.name.replace(' ', '_') + '"'}>`+
                `${this.variables.filter(variable => variable.inserted).reduce((prev, variable) => prev + variable.calculateTemplate(), '')}`+
                `</div>`;
        };

        this.url = '/static-file/' + this.selectedCategory.key + '?vid=' + this.config.view + '&lang=' + this.selectedLanguage;
        let frameWindow = window.frames[0];
        this.isAttributesMapInitializedSubscription = this.iframeService.isAttributesMapInitialized().subscribe((isLoaded) => {
            if (isLoaded) {
                this.frameAttributesMap = frameWindow.appConfig['primo-view']['attributes-map'];
                this.availableLanguages = this.frameAttributesMap.interfaceLanguageOptions.split(',');
            }
        });
    }

    ngOnDestroy() {
        this.urlChange.emit('');
        if (this.expanded) {
            this.expandTab.emit(!this.expanded);
        }
        if (this.isAttributesMapInitializedSubscription && !this.isAttributesMapInitializedSubscription.closed) {
            this.isAttributesMapInitializedSubscription.unsubscribe();
        }
    }

    createTheme() {
        this._inProgress = true;
        this.editorService.saveFile(this.codeFile).subscribe((resp)=>{
            if(+resp.status === 200){
                console.log('file "' + this.codeFile.file_path + '" was saved');
                this.iframeService.refreshNuiIFrame();
            }
        }, (err)=> {
            console.log(err);
        }).add(()=>{
            this._inProgress = false;
        });
    }

    generateEmailTemplate() {
        this._inProgress = true;
        this.getFinalCodeFile().subscribe(finalCodeFile => {
            finalCodeFile.data = this.codeFile.data;
            this.editorService.saveFile(finalCodeFile).subscribe((resp)=>{
                if(+resp.status === 200){
                    console.log('file "' + finalCodeFile.file_path + '" was saved');
                    this.templateApproved = true;
                }
            }, (err)=> {
                console.log(err);
            }).add(()=>{
                this._inProgress = false;
            });
        });
    }

    download() {
        this.$http.get('/single_file?path=' + this.filePath.replace('.tmpl', ''), {
            headers: {
                'Content-Type': 'text/html',
                'Accept': 'text/html'
            },
            responseType: 'arraybuffer'
        }).subscribe((data)=>{
            let url = URL.createObjectURL(new Blob([data]));
            let a = document.createElement('a');
            a.href = url;
            a.download = this.fileName.replace('.tmpl', '');
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
            this.codeFile = this.editorService.codeFiles.get(this.filePath);

            // update selected variables
            this.variables.forEach(variable => this.updateInsertedVariable(variable));
            let insertedVariables = this.variables.filter(variable => variable.inserted);
            if (insertedVariables.length > 1) {
                let indexesInData = insertedVariables.map(variable => this.codeFile.data.indexOf(variable.calculateTemplate()));
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
                let indexesInData = insertedFields.map(field => this.codeFile.data.indexOf(field.calculateTemplate()));
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

    public isFieldDisabled(field: TemplateContentField): boolean {
        switch (field.component) {
            case "prm-brief-result-container":
                return this.fields.find(field => field.component === "prm-service-details").inserted;
            case "prm-service-details":
                return this.fields.find(field => field.component === "prm-brief-result-container").inserted;
            default:
                return false;
        }
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
        if (!$event.checked) {
            this.removeFieldFromTemplate(field);
        } else if ($event.checked) {
            if ($event.source.indeterminate) {
                this.pnxFieldsCheckbox.toggle();
                this.removeFieldFromTemplate(field);
            } else {
                if (field === this.pnxFieldsField && !this.isAnyVariableInTemplate()) {
                    this.variables.forEach(variable => {
                        variable.inserted = true;
                        this.pnxFieldsSelect.options.forEach(item => item.select());
                    });
                    this.pnxFieldsSelect.open();
                }
                this.insertFieldToTemplate(field);
            }
        }
    }

    public removeFieldFromTemplate(field: TemplateContentField) {
        let calculatedField = field.calculateTemplate();
        let insertedFields = this.fields.filter(field => field.inserted);
        let indexInInsertedFields = insertedFields.indexOf(field);
        let nextField = insertedFields.length > indexInInsertedFields + 1 ? insertedFields[indexInInsertedFields + 1] : undefined;
        let previousField = 0 < indexInInsertedFields ? insertedFields[indexInInsertedFields - 1] : undefined;
        let betweenRepeatableFields = nextField && previousField && nextField.repeatable && !field.repeatable && previousField.repeatable;
        this.codeFile.data = this.codeFile.data
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
        let isPreviousRepeatable = (previousField && previousField.repeatable);
        let isNextRepeatable = (nextField && nextField.repeatable);
        let closeOrOpenRepeat = (before, after) => (before && !after) ? this.closeRepeat : (!before && after) ? this.openRepeat : '';
        let beforeText = previousFieldTemplate + closeOrOpenRepeat(isPreviousRepeatable, isNextRepeatable) + nextFieldTemplate;
        let afterText = previousFieldTemplate + closeOrOpenRepeat(isPreviousRepeatable, field.repeatable) +
            field.calculateTemplate() + closeOrOpenRepeat(field.repeatable, isNextRepeatable) + nextFieldTemplate;
        this.codeFile.data = this.codeFile.data.replace(beforeText, afterText);
        field.inserted = true;
    }

    public updateInsertedField(field: TemplateContentField): void {
        let calculatedField = field.calculateTemplate();
        field.inserted = this.codeFile.data.includes(calculatedField);
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
        this.codeFile.data = this.codeFile.data.replace(calculatedVariable, '');
        variable.inserted = false;
        if (!this.variables.some((variable) => variable.inserted)) {
            this.removeFieldFromTemplate(this.pnxFieldsField);
            if (this.pnxFieldsCheckbox.checked) {
                this.pnxFieldsCheckbox.toggle();
            }
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
            this.codeFile.data = this.codeFile.data.replace(beforeText, afterText);
        }
        variable.inserted = true;
    }

    public updateInsertedVariable(variable: PnxVariable): void {
        let calculatedField = variable.calculateTemplate();
        variable.inserted = this.codeFile.data.includes(calculatedField);
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
            return this.frameAttributesMap.interfaceLanguage || (this.configurationService.isVe ? 'en' : 'en_US');
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
        return this.selectedCategory.key + '_' + this.selectedLanguage + '.tmpl.html';
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

    set codeFile(value: CodeFile) {
        this._codeFile = value;
    }

    private getFinalCodeFile(): Observable<CodeFile> {
        return new Observable<CodeFile>(observer => {
            if (this._finalCodeFile) {
                observer.next(this._finalCodeFile);
                observer.complete();
            } else {
                this._finalCodeFile = new CodeFile('htmlembedded', '', this.filePath.replace('.tmpl.html', '.html'), 0);
                this.editorService.initCode(this._finalCodeFile).add(() => {
                    this._finalCodeFile = this.editorService.codeFiles.get(this.filePath.replace('.tmpl.html', '.html'));
                    observer.next(this._finalCodeFile);
                    observer.complete();
                });
            }
        });
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
