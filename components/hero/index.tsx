import React from "react";

import { IHeroCustomField } from "lib/types";
import style from "./hero.module.css";
import { cleanImageURL } from "lib/helpers";

const Hero = ({ title, sub_title, image }: IHeroCustomField) => {

    return (
        <header className={style.hero} style={{backgroundImage: `url(${cleanImageURL(image.url)})`}}>
            <div className={style.content}>
                <h1>{title}</h1>
                <h2>{sub_title}</h2>
            </div>
        </header>
    );
};

export default Hero;