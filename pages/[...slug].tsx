import { GetStaticPaths, GetStaticProps } from "next";
import Error404 from "next/error";

import Layout from "@/components/layout";
import { getGeneralData, getData, getMeta } from "lib/api";
import PageContent from "@/components/pageContent";
import { IPageProps } from "@/types";
import { cleanURL } from "lib/helpers";

// [...slug] will catch all routes unless it matches a subfolder name
export default function Template({ general, content, meta }: IPageProps) {
  if (!content) return <Error404 statusCode={404} />;
  return (
    <Layout general={general} meta={meta}>
      <PageContent content={content} general={general} />
    </Layout>
  );
}

// function to to get props during build for [...slug] component
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const general = await getGeneralData();
  // [...slug] params will be in an array
  const slug = params?.slug && params.slug[params.slug.length - 1];
  const meta = await getMeta(`pages?slug[]=${slug}`);

  const contentData = await getData(`acf/v3/pages?slug[]=${slug}`);
  const content = contentData[0];

  return { props: { general, content, meta } };
};

//getStaticProps will run for the paths return
export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getData("wp/v2/pages");

  // need to get correct params for nested pages i.e. services/consultancy
  const paths = pages
    .filter((page: any) => !["home", "news"].includes(page.slug))
    .map((page: any) => {
      // use link instead of page.slug because it doesn't contain the parent part of the path
      const path = cleanURL(page.link);
      return {
        params: {
          // make an array of paths to match params pattern for [...slug]
          slug: path ? path.split("/") : ["home"],
        },
      };
    });

  return {
    paths,
    // totally static build so cannot use fallback too ssr missing paths
    fallback: false,
  };
}; 