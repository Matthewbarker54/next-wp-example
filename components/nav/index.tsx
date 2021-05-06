import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { IFormattedMenu, IImage } from "lib/types";
import style from "./nav.module.css";
import { cleanImageURL } from "lib/helpers";

const isActiveLink = (slug: string, asPath: string) => {
  console.log(`/${slug}`, asPath, `/${slug}` === `${asPath}`)
  return `/${slug}` === asPath;
};

const isActiveRoot = (path: string, asPath: string) => {
  const root = asPath.split("/")[1]
  return path === root
};

const isActiveSubLink = (slug: string, asPath: string) => {
  return `${slug}` === asPath || (slug === "" && asPath === "/");
};

interface INav {
  menu: IFormattedMenu;
  logo: IImage;
}

const Nav = ({ menu, logo }: INav) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { asPath } = useRouter();

  return (
    <nav className={style.navigation}>
      <div className={style.content}>
        <Link href="/">
          <a className={style.logo}>
            <img src={cleanImageURL(logo.url)} alt={logo.alt} />
          </a>
        </Link>
        <ul className={style.web_links}>
          {menu?.map((link, idx) =>
            <li key={idx}>
              <Link href={link.slug || "/"}>
                <a
                  className={`${style.nav_link}`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          )}
        </ul>

        <div
          className={`${style.mobile_nav} ${isOpen ? style.mobile_nav_open : ""
            }`}
        >
          <button className={`hamburger hamburger--emphatic ${isOpen ? "is-active" : ""}`} type="button" onClick={() => setIsOpen((cur) => !cur)} tabIndex={1}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <button
            className={style.mobile_nav_close}
            onClick={() => setIsOpen((cur) => !cur)}
            aria-label="close menu"
            tabIndex={-1}
          ></button>
          <ul className={style.mobile_nav_links}>
            {menu?.map((link,idx) =>
              <li key={idx}>
                <Link href={link.slug || "/"}>
                  <a
                    className={`${style.nav_link}`}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;