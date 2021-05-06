import { ITextWithImage } from "@/types";
import { cleanImageURL } from "lib/helpers";
import styles from "./textWithImage.module.css";

const TextWithImage = ({ reverse_row, title, image, content }: ITextWithImage) => {
  return (
    <div className={`${styles.panel}`}>
        <div className={`${styles.content} ${reverse_row ? styles.panel_reverse : ""}`}>
            <div className={styles.block}>
            {title ? <h3>{title}</h3> : null}
            <div
                className={styles.text}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            </div>
            <div className={styles.image}>
                <img src={cleanImageURL(image.url)} alt={image.alt} />
            </div>
        </div>
    </div>
  );
};

export default TextWithImage;