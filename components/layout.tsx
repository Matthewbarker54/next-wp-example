import Head from "next/head";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { IFormattedMenu, IMeta, IWpAppData } from "lib/types";

export interface IGeneral {
      appData: IWpAppData;
      navMenu: IFormattedMenu;
      footerMenu: IFormattedMenu;
}
interface ILayout {
    general: IGeneral;
    meta: IMeta;
}

const Layout: React.FC<ILayout> = ({ general, meta, children }) => {
    return (
        <div className="app_container">
            <Head>
                <title>{meta?.title ? meta.title : ""}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {meta?.tags.map((tag, i) => (
                    <meta key={i} name={tag.name} content={tag.content} />
                ))}
            </Head>
            <Nav
                menu={general.navMenu}
                logo={general.appData.logo}
            />
            {children}
            <Footer
                menu={general.navMenu}
                footerMenu={general.footerMenu}
                details={general.appData}
            />
        </div>
    );
};

export default Layout;