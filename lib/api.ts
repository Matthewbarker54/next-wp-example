import { reduceMenu } from "./helpers";

const baseURL = process.env.WP_URL;

export const getGeneralData = async () => {
  const [appData, navMenuData, footerMenuData] = await Promise.all(
    [
      "acf/v3/options/options",
      "menus/v1/menus/main-menu",
      "menus/v1/menus/footer-menu",
    ].map(async (url) => {
      const res = await fetch(baseURL + url);
      const data = await res.json();
      return data;
    })
  );

  const navMenu = reduceMenu(navMenuData.items);
  const footerMenu = reduceMenu(footerMenuData.items);

  return {
    appData: { ...appData.acf },
    navMenu,
    footerMenu,
  };
};

export const getData = async (url: any) => {
  // api call
  const res = await fetch(baseURL + url);
  const data = await res.json();

  return data;
};

export const getMeta = async (url: string) => {

  const res = await fetch(baseURL + "wp/v2/" + url);
  const data = await res.json();
  const content = data && data.length ? data[0] : null;

  return {
    title: content?.yoast_title || "",
    tags: content?.yoast_meta || [],
  };
};