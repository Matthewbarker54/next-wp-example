import { ITextBlock } from "@/types";
import { cleanURL } from "lib/helpers";
import Link from "next/link";
import styles from "./textBlock.module.css";

const TextBlock = ({ title, content, cta, is_center }: ITextBlock) => {
  return (
    <div className={styles.panel}>
        <div className={`${styles.content} ${is_center ? styles.contentCenter : null}`}>
            {title ? <h3>{title}</h3> : null}
            <div
                className={styles.content_block}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            {cta?.url ?
              <>
                {cta.target ?
                  <a className={`btn primary ${styles.cta}`} href={cta.url} target={cta.target}>
                    {cta.title}
                  </a>
                :
                  <Link href={cleanURL(cta.url)}>
                    <a className={`btn primary ${styles.cta}`}>
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

export default TextBlock;