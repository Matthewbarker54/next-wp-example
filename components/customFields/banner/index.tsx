import { IBanner } from "@/types";
import { cleanURL } from "lib/helpers";
import Link from "next/link";
import styles from "./banner.module.css";

const Banner = ({ cta, content, title, }: IBanner) => {
  return (
    <div className={styles.panel}>
        <div className={`${styles.content}`}>
          {title ? <h3>{title}</h3> : null}
            <div className={styles.text}>
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            </div>
          {cta?.url ?
          <>
            {cta.target ?
              <a className={`btn primary`} href={cta.url} target={cta.target}>
                {cta.title}
              </a>
            :
              <Link href={cleanURL(cta.url)}>
                <a className={`btn primary`}>
                  {cta.title}
                </a>
              </Link>
            }
          </> 
          : null}
        </div>
    </div>
  );
};

export default Banner;