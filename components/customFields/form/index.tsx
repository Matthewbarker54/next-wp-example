
import { FormEvent, useState } from "react";

import styles from "./form.module.css";

const FORM_DEFAULTS = {
  example: "",
};

const FormExample = () => {
  const [
    { example},
    setFormValues,
  ] = useState(FORM_DEFAULTS);

  const submitContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `url for form submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input_1: example,
        }),
      }
    );
    alert(`Form submitted`)
    // const data = await res.json();
    // if (data?.is_valid) {
    //   // toast.success(
    //   //   <div dangerouslySetInnerHTML={{ __html: data.confirmation_message }} />
    //   // );
    //   console.log("worked")
    //   setFormValues(FORM_DEFAULTS);
    // } else console.log("error")
    // // toast.error("Sorry, we were unable to receive your enquiry");
  };

  return (
    <div className={styles.panel}>
      <div className={`${styles.content}`}>
        <div className={styles.box}>
          <h2>Form</h2>
          <form method="POST" onSubmit={submitContactForm}>
            <div className={styles.grid}>
              <div></div>
              <label>
                <span>
                  Example
                </span>
                <input
                  type="text"
                  placeholder="Please Enter"
                  value={example}
                  onChange={(e) =>
                    setFormValues((cur) => ({
                      ...cur,
                      example: e.target.value,
                    }))
                  }
                />
              </label>
            </div>
            <button className="btn primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormExample;