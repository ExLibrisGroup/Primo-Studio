export class Icon {
  name: string;
  id: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
  path?: string;
  viewBox?: SVGAnimatedRect;
}

export enum IconType {
  FONT_AWESOME = '/fontawesome-webfont.svg',
  BOOTSTRAP = '/glyphicons-halflings-regular.svg',
  PRIMO_UI = '/images/primo-ui.svg'
}
