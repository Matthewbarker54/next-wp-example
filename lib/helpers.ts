import { IFormattedMenu } from "./types";

interface IWpMenuItem {
  ID: number;
  title: string;
  url: string;
  slug: string;
  menu_order: number;
  child_items?: IWpMenuItem[];
}

export const reduceMenu = (menuItems: IWpMenuItem[]): IFormattedMenu => {
  return (
    menuItems
    .reduce(reduceMenuItem, [])
    .sort((a,b) =>a.menu_order - b.menu_order)
  );
};

const reduceMenuItem = (menu:IFormattedMenu, menuItem: IWpMenuItem): IFormattedMenu => {
  const { ID, title, url, slug, menu_order, child_items } = menuItem;
  const subMenu = child_items ? reduceMenu(child_items) : null;

  const path = "/" + cleanURL(url);
  return [
    ...menu,
    { 
      id: ID, 
      title, 
      path, 
      url, 
      slug, 
      menu_order, 
      subMenu 
    }
  ]
}

/**
 * Trim start of url and any trailing slashes
 * @param url
 */
export const cleanURL = (url: string) => {
  if(url.includes(`https://`)) return url.replace(`https://${process.env.WP_BASE}/`, "").replace(/\/$/, "");
  else return url.replace(`http://3.129.234.178/`, "").replace(/\/$/, "");
}

export const cleanImageURL = (url: string) => {
  const temp = url.split('/');
 return '../assets/images/' + temp[temp.length - 1]
}