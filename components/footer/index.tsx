import React from "react";
import Link from "next/link";

import { IFormattedMenu, IWpAppData } from "lib/types";
import style from "./footer.module.css";
import { cleanImageURL } from "lib/helpers";

interface IFooter {
    menu: IFormattedMenu;
    footerMenu: IFormattedMenu;
    details: IWpAppData;
}
const Footer = ({ menu, footerMenu, details }: IFooter) => {

    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <div className={style.panel}>
                    <div className={style.logoWrapper}>
                        <Link href="/">
                            <a className={style.logo}>
                                <img src={cleanImageURL(details.logo.url)} alt={details.logo.alt} />
                            </a>
                        </Link>
                        <a href='https://www.ssauk.com/' target='_blank' className={style.logo}>
                            <img src={cleanImageURL(details.sa_logo?.url)} alt={details.sa_logo?.alt} />
                        </a>
                    </div>
                    <div className={style.social}>
                        {details.facebook ?
                            <a
                                className={style.socialIcon}
                                target="_blank"
                                rel="noopener"
                                href={details.facebook}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h192V336h-64v-80h64v-64c0-53.024 42.976-96 96-96h64v80h-32c-17.664 0-32-1.664-32 16v64h80l-32 80h-48v176h96c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z"/>
                                </svg>
                            </a>
                        : null}
                        {details.twitter ?
                            <a
                                className={style.socialIcon}
                                target="_blank"
                                rel="noopener"
                                href={details.twitter}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 504.4 504.4">
                                    <path d="M377.6.2H126.4C56.8.2 0 57 0 126.6v251.6c0 69.2 56.8 126 126.4 126H378c69.6 0 126.4-56.8 126.4-126.4V126.6C504 57 447.2.2 377.6.2zm-.4 188.8v8.4c0 84-64.8 180.8-183.6 180.8-36.4 0-70.4-10.4-98.8-28.4 5.2.4 10 .8 15.2.8 30.4 0 58-10 80-27.2-28.4-.4-52-18.8-60.4-44 4 .8 8 1.2 12 1.2 6 0 12-.8 17.2-2.4-28.8-6-50.8-31.6-50.8-62.4v-.8c8 4.8 18.4 7.6 28.8 8-17.2-11.2-28.8-30.8-28.8-52.8 0-11.6 3.2-22.4 8.8-32 32 38.4 79.2 63.6 132.8 66.4-1.2-4.8-1.6-9.6-1.6-14.4 0-35.2 28.8-63.6 64.4-63.6 18.4 0 35.2 7.6 47.2 20 14.8-2.8 28.4-8 40.8-15.6-4.8 14.8-15.2 27.2-28.4 35.2 13.2-1.6 25.6-4.8 37.2-10-8.8 12.8-19.6 24-32 32.8z"/>
                                </svg>
                            </a>
                        : null}
                        {details.linkedin ?
                            <a
                                className={style.socialIcon}
                                target="_blank"
                                rel="noopener"
                                href={details.linkedin}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"/>
                                </svg>
                            </a>
                        : null}
                        {details.instagram ?
                            <a
                                className={style.socialIcon}
                                target="_blank"
                                rel="noopener"
                                href={details.linkedin}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M256 152c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105zm0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105zM437 0H75C33.6 0 0 33.6 0 75v362c0 41.4 33.6 75 75 75h362c41.4 0 75-33.6 75-75V75c0-41.4-33.6-75-75-75zM256 392c-74.399 0-135-60.601-135-135 0-74.401 60.601-135 135-135s135 60.599 135 135c0 74.399-60.601 135-135 135zm165-270c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30zm-165 30c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105zm0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105zm0 0c-57.9 0-105 47.1-105 105s47.1 105 105 105 105-47.1 105-105-47.1-105-105-105z"/>
                                </svg>
                            </a>
                        : null}
                    </div>
                </div>
                <div className={style.panel}>
                    <div className={style.inner}>
                        <ul className={style.web_links}>
                            {footerMenu?.map((link, idx) =>
                                <li key={idx}>
                                        {link.external ?
                                            <a
                                                className={`${style.footer_link}`}
                                                target="_blank"
                                                rel="noopener"
                                                href={link.url}
                                            >
                                                {link.title}
                                            </a>
                                            :
                                            <Link href={link.slug !== process.env.WP_BASE ? link.slug  : "/"}>
                                                <a
                                                    className={`${style.footer_link}`}
                                                >
                                                    {link.title}
                                                </a>
                                            </Link>
                                        }
                                </li>
                            )}
                        </ul>
                        <ul className={style.web_links}>
                            {menu?.map((link, idx) =>
                                <li key={idx}>
                                        {link.external ?
                                            <a
                                                className={`${style.footer_link}`}
                                                target="_blank"
                                                rel="noopener"
                                                href={link.url}
                                            >
                                                {link.title}
                                            </a>
                                            :
                                            <Link href={link.slug || "/"}>
                                                <a
                                                    className={`${style.footer_link}`}
                                                >
                                                    {link.title}
                                                </a>
                                            </Link>
                                        }
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={style.inner}>
                        <ul className={style.list}>
                            <li>{details.address_line_1}</li>
                            <li>{details.address_line_2}</li>
                            <li>{details.city}</li>
                            <li>{details.postcode}</li>
                        </ul>
                        <ul className={style.list}>
                            Office Hours:
                            {details.opening_hours.map((opn, idx) => (
                                <li key={idx}>{opn.day + ' ' + opn.opening_time + ' - ' + opn.closing_time}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={style.info}>
                    <p>© 2021 Shoebox Storage Solution</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;