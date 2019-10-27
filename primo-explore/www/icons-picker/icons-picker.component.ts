import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import * as _ from 'lodash';
import {IframeService} from "../utils/iframe.service";
import {IconsPickerService} from "./icons-picker.service";
import {DomSanitizer} from "@angular/platform-browser";
import {IconPickerDialogComponent} from "../icon-picker-dialog/icon-picker-dialog.component";
import {Icon} from "../classes/icon";

@Component({
  selector: 'prm-icons-picker',
  templateUrl: './icons-picker.component.html',
  styleUrls: ['./icons-picker.component.scss']
})
export class IconsPickerComponent implements OnInit {
  private _inProgress: boolean;
  private dialogCreated: boolean;

  @Input('iconPicker') iconPicker: string;
  private dialog: IconPickerDialogComponent;
  private buttonRef: ElementRef<any>;

  @ViewChildren('buttonRef') buttonRefs: QueryList<ElementRef>;

  constructor(private iframeService: IframeService,
              private iconsPickerService: IconsPickerService,
              public sanitizer: DomSanitizer,
              private vcRef: ViewContainerRef,
              private el: ElementRef,
              private cfr: ComponentFactoryResolver) {
    this._inProgress= false;
    this.dialogCreated = false;
  }

  ngOnInit() {
  }

  keys(object) {
    return _.keys(object);
  }

  openDialog(buttonElement: HTMLButtonElement) {
    this.buttonRef = this.buttonRefs.toArray().filter(ref => ref.nativeElement.id === buttonElement.id)[0];

    let ipPosition = 'right';
    let ipHeight = 'auto';
    let ipMaxHeight = '200px';
    let ipWidth = '270px';
    let ipPlaceHolder = 'Search icon...';
    let ipFallbackIcon = `prm prm-${buttonElement.id}`;
    let ipIconPack = 'all';

    if (!this.dialogCreated) {
      this.dialogCreated = true;

      let vcRef = this.vcRef;
      const compFactory = this.cfr.resolveComponentFactory(IconPickerDialogComponent);
      const injector = Injector.create({providers: [], parent: vcRef.parentInjector});
      const cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
      cmpRef.instance.setDialog(this, this.buttonRef, this.iconPicker, ipPosition, ipHeight, ipMaxHeight,
        ipWidth, ipPlaceHolder, ipFallbackIcon, ipIconPack);
      this.dialog = cmpRef.instance;

      if (this.vcRef !== vcRef) {
        cmpRef.changeDetectorRef.detectChanges();
      }
    } else if (this.dialog) {
      this.dialog.setDialog(this, this.buttonRef, this.iconPicker, ipPosition, ipHeight, ipMaxHeight,
        ipWidth, ipPlaceHolder, ipFallbackIcon, ipIconPack);
      this.dialog.openDialog(this.iconPicker);
    }
  }

  closeDialog() {
    if (this.dialog) {
      this.dialog.closeIconPicker();
    }
  }

  iconSelected(icon: Icon) {
    this.iconsPickerService.iconSelected(this.buttonRef.nativeElement.id, icon);
  }

  createTheme(){
    this._inProgress = true;
    this.iconsPickerService.createTheme().subscribe((resp)=>{
      console.log('icons set created');
      this.iframeService.refreshNuiIFrame();
    }, (err)=> {
      console.log(err);
    }).add(()=>{
      this._inProgress = false;
    });
  }

  get inProgress(): boolean {
    return this._inProgress;
  }

  set inProgress(value: boolean) {
    this._inProgress = value;
  }

  get icons(): any{
    return this.iconsPickerService.icons;
  }

  set icons(newIcons: any) {
    this.iconsPickerService.icons = newIcons;
  }
}
