// Page props (from getServerSideProps)
export interface IPageProps {
  general: IGeneral;
  content: IContent;
  meta: IMeta;
}

export interface IGeneral {
  appData: IWpAppData;
  navMenu: IFormattedMenu;
  footerMenu: IFormattedMenu;
}

interface IMetaItem {
  name: string;
  content: string;
}
export interface IMeta {
  title: string;
  tags: IMetaItem[];
}


export interface IWpMenu {
  name: string;
  path: string;
  items: IWpMenuItem[];
}

export interface IWpMenuItem {
  ID: number;
  title: string;
  url: string;
  menu_order: number;
  child_items?: IWpMenuItem[];
}

export type IFormattedMenu = IFormattedMenuItem[];
export interface IFormattedMenuItem {
  id: number;
  title: string;
  path: string;
  menu_order: number;
  subMenu: null | IFormattedMenu;
  external?: boolean;
  url?: string;
  slug: string;
  child_items?: IWpMenuItem[];
}

export interface IWpAppData {
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  logo: IImage;
  sa_logo: IImage;
  email: string;
  number: string;
  opening_hours: IOpenDay[];
  address_line_1: string;
  address_line_2: string;
  city: string;
  postcode: string;
}

export interface IOpenDay {
  day: string;
  opening_time: string;
  closing_time: string;
}

// WP interfaces for app wide data
export interface IImage {
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  description: string;
  caption: string;
  name: string;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
    "post-thumbnail": string;
    "post-thumbnail-width": number;
    "post-thumbnail-height": number;
    "twentytwenty-fullscreen": string;
    "twentytwenty-fullscreen-width": number;
    "twentytwenty-fullscreen-height": number;
  };
}

// WP Custom Fields for page content
type ICustomField =
  | IHeroCustomField
  | IForm
  | ITextWithImage
  | ITextBlock
  | IBanner
  | ILocation
  | IPricing
  | undefined;

export interface IContent {
  id: number;
  acf?: {
    flexible_layout?: ICustomField[];
  };
  general: IGeneral;
}

export interface IHeroCustomField {
  acf_fc_layout: "hero";
  title: string;
  sub_title: string;
  image: IImage;
}

export interface ITextWithImage {
  acf_fc_layout: "text_with_image";
  title: string;
  content: string;
  image: IImage;
  reverse_row: boolean;
}

export interface ITextBlock {
  acf_fc_layout: "text_block";
  title: string;
  content: string;
  cta: any;
  is_center: boolean;
}

export interface IBanner {
  acf_fc_layout: "banner";
  title: string;
  content: string;
  cta: any;
}

export interface ILocation {
  acf_fc_layout: "location";
  key?: number;
  details: IWpAppData;
}

export interface IForm {
  acf_fc_layout: "form";
  form: string;
}

export interface IPricing {
  acf_fc_layout: "pricing";
  title: string;
  content: string;
  options: IOption[];
}

interface IOption {
  image: IImage;
  content: string;
}
