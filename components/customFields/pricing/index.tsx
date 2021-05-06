import { IPricing } from "@/types";
import { cleanImageURL } from "lib/helpers";
import styles from "./pricing.module.css";

const Pricing = ({ title, content, options }: IPricing) => {
  return (
    <div className={`${styles.panel}`}>
        <div className={`${styles.content}`}>
            {title ? <h3>{title}</h3> : null}
            {content ? <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            : null}
          {options.map((opt, idx) => (
            <div className={styles.row}  key={idx} >
              <div className={styles.image}>
                <img src={cleanImageURL(opt.image.url)} alt={opt.image.alt} />
              </div>
              <div className={styles.block}>
                <div
                  className={styles.innerText}
                  dangerouslySetInnerHTML={{ __html: opt.content }}
                ></div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Pricing;