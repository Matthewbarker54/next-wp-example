import { GetStaticProps } from "next";
import Error404 from "next/error"
import { getData, getGeneralData, getMeta } from "lib/api";

import Layout from "@/components/layout";
import PageContent from "@/components/pageContent";
import { IPageProps } from "@/types";


export default function Home({ meta, general, content }: IPageProps) {
  if(!content) return <Error404 statusCode={404} />;
  return (
    <Layout meta={meta} general={general}>
      <PageContent content={content} general={general} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const general = await getGeneralData();
  const meta = await getMeta('pages?slug=index');
  const contentData = await getData(`acf/v3/pages?slug[]=index`);
  const content = contentData[0]

  return { props: { general, meta, content  } };
}