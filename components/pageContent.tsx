import { IContent } from "lib/types";
import Hero from "@/components/hero";
import FormExample from "./customFields/form";
import TextWithImage from "./customFields/textWithImage";
import TextBlock from "./customFields/textBlock";
import Banner from "./customFields/banner";
import Location from "./customFields/location";
import { IGeneral } from "./layout";
import Pricing from "./customFields/pricing";
;

const PageContent = (props: { content: IContent, general: IGeneral }) => {
  if (!props.content?.acf?.flexible_layout) return null;
  return (
    <>
      {props.content.acf.flexible_layout.map((customField, i) => {
        if (customField?.acf_fc_layout === "hero") {
          return <Hero key={i} {...customField} />;
        }
        if (customField?.acf_fc_layout === "text_with_image") {
          return <TextWithImage key={i} {...customField} />;
        }
        if (customField?.acf_fc_layout === "text_block") {
          return <TextBlock key={i} {...customField} />;
        }
        if (customField?.acf_fc_layout === "banner") {
          return <Banner key={i} {...customField} />;
        }
        if (customField?.acf_fc_layout === "location") {
          return <Location key={i} {...customField} details={props?.general?.appData} />;
        }
        if (customField?.acf_fc_layout === "pricing") {
          return <Pricing key={i} {...customField} />;
        }
        // Forms
        if (customField?.acf_fc_layout === "form" && customField.form === "1") {
          return <FormExample key={i} />;
        }
        console.log(JSON.stringify(customField, null, 2));
        return <pre key={i}>{JSON.stringify(customField, null, 2)}</pre>;
      })}
    </>
  );
};

export default PageContent;