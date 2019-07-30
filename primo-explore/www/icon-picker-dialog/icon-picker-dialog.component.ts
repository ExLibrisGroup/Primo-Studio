import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Icon, IconType} from "../classes/icon";
import {IconsPickerService} from "../icons-picker/icons-picker.service";
import {IconsPickerComponent} from "../icons-picker/icons-picker.component";
import * as _ from 'lodash';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'prm-icon-picker-dialog',
  templateUrl: './icon-picker-dialog.component.html',
  styleUrls: ['./icon-picker-dialog.component.scss']
})
export class IconPickerDialogComponent implements OnInit {
  public ipPosition: string;
  public ipHeight: number;
  public ipMaxHeight: number;
  public ipWidth: number;
  public ipPlaceHolder: string;
  public ipFallbackIcon: string;
  public ipIconPack: string;

  private iconsPickerComponent: IconsPickerComponent;
  private initialIcon: string;
  private directiveElementRef: ElementRef;

  private listenerMouseDown: any;
  private listenerResize: any;
  private listenerScroll: any;

  private dialogArrowSize = 10;

  @ViewChild('dialogPopup', { static: true })
  dialogElement: ElementRef<HTMLDivElement>;

  public show: boolean;
  public hidden: boolean;
  public top: number;
  public left: number;
  public position: string;
  public arrowTop: number;
  public selectedIcon: Icon;
  public iconType = IconType;

  icons: Icon[] = [];
  search = '';

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private service: IconsPickerService,
    public sanitizer: DomSanitizer,
  ) { }

  setDialog(instance: any, elementRef: ElementRef, icon: string, ipPosition: string, ipHeight: string, ipMaxHeight: string,
            ipWidth: string, ipPlaceHolder: string, ipFallbackIcon: string, ipIconPack: string) {
    this.iconsPickerComponent = instance;
    this.setInitialIcon(icon);
    this.directiveElementRef = elementRef;
    this.ipPosition = ipPosition;
    this.ipHeight = parseInt(ipHeight);
    this.ipMaxHeight = parseInt(ipMaxHeight);
    this.ipWidth = parseInt(ipWidth);
    if (!this.ipWidth) {
      this.ipWidth = elementRef.nativeElement.offsetWidth;
    }
    this.ipPlaceHolder = ipPlaceHolder;
    this.ipFallbackIcon = ipFallbackIcon;
    this.ipIconPack = ipIconPack;
  }

  ngOnInit() {
    this.icons = this.service.getIcons(this.ipIconPack);
    this.listenerMouseDown = (event: any) => this.onMouseDown(event);
    this.listenerResize = () => this.onResize();
    this.listenerScroll = (event) => this.onScroll(event);
    this.openDialog(this.initialIcon);
  }

  setInitialIcon(icon: string) {
    this.initialIcon = icon;
    this.selectedIcon = this.icons.find(el => el ? `fa fa-${el.id}` === icon || `glyphicon glyphicon-${el.id}` === icon : false);
    if (this.selectedIcon && icon !== this.ipFallbackIcon) {
      this.search = this.selectedIcon.id;
    } else {
      this.search = '';
    }
  }

  openDialog(icon: string) {
    this.setInitialIcon(icon);
    this.openIconPicker();
  }

  setSearch(val: string) {
    this.search = val;
  }

  selectIcon(icon: Icon): void {
    if (icon.type === IconType.FONT_AWESOME) {
      this.iconsPickerComponent.iconSelected(icon);
    } else if (icon.type === IconType.BOOTSTRAP) {
      this.iconsPickerComponent.iconSelected(icon);
    } else if (icon.type === IconType.PRIMO_UI) {
      this.iconsPickerComponent.iconSelected(icon);
    }
    this.closeIconPicker();
  }

  onMouseDown(event: any) {
    if (!this.isDescendant(this.el.nativeElement, event.target) && event.target != this.directiveElementRef.nativeElement) {
      this.closeIconPicker();
    }
  }

  onScroll(event) {
    if (!this.isDescendant(this.el.nativeElement, event.target) && event.target != this.directiveElementRef.nativeElement) {
      this.closeIconPicker();
    }
  }

  openIconPicker() {
    if (!this.show) {
      this.show = true;
      this.hidden = true;
      setTimeout(() => {
        this.setDialogPosition();
        _.filter(this.dialogElement.nativeElement.children, e => e.className === 'icon-grid')[0].scroll({top: 0, left: null, behavior: "auto"});
        this.hidden = false;
        this.cdr.detectChanges();
      }, 0);
      document.addEventListener('mousedown', this.listenerMouseDown);
      window.addEventListener('scroll', this.listenerScroll, {capture: true});
      window.addEventListener('resize', this.listenerResize);
    }
  }

  closeIconPicker() {
    if (this.show) {
      this.show = false;
      document.removeEventListener('mousedown', this.listenerMouseDown);
      window.removeEventListener('scroll', this.listenerScroll, {capture: true});
      window.removeEventListener('resize', this.listenerResize);
      this.cdr.detectChanges();
    }
  }

  onResize() {
    if (this.position === 'fixed') {
      this.setDialogPosition();
    }
  }

  setDialogPosition() {
    let dialogHeight = this.dialogElement.nativeElement.offsetHeight;
    let node = this.directiveElementRef.nativeElement, position = 'static', transform = '';
    let parentNode: any = null, transformNode: any = null, style: any = null;
    while (node !== null && node.tagName !== 'HTML') {
      style = window.getComputedStyle(node);
      position = style.getPropertyValue('position');
      transform = style.getPropertyValue('transform');
      if (position !== 'static' && parentNode === null) {
        parentNode = node;
      }
      if (transform && transform !== 'none' && transformNode === null) {
        transformNode = node;
      }
      if (position === 'fixed') {
        parentNode = transformNode;
        break;
      }
      node = node.parentNode;
    }
    let boxDirective = this.createBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
    if (position !== 'fixed' || parentNode) {
      if (parentNode === null) {
        parentNode = node;
      }
      let boxParent = this.createBox(parentNode, true);
      this.top = boxDirective.top - boxParent.top;
      this.left = boxDirective.left - boxParent.left;
    } else {
      this.top = boxDirective.top;
      this.left = boxDirective.left;
    }
    if (position === 'fixed') {
      this.position = 'fixed';
    }
    if (this.ipPosition === 'left') {
      this.left -= this.ipWidth + this.dialogArrowSize - 2;
    } else if (this.ipPosition === 'top') {
      this.top -= dialogHeight + this.dialogArrowSize;
      this.arrowTop = dialogHeight - 1;
    } else if (this.ipPosition === 'bottom') {
      this.top += boxDirective.height + this.dialogArrowSize;
    } else {
      this.left += boxDirective.width + this.dialogArrowSize - 2;
    }
  }

  isDescendant(parent: any, child: any): boolean {
    let node: any = child.parentNode;
    while (node !== null) {
      if (node === parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  createBox(element: any, offset: boolean): any {
    return {
      top   : element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
      left  : element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
      width : element.offsetWidth,
      height: element.offsetHeight
    };
  }
}
