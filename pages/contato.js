import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Contato = () => {
  return (
    <Layout categories={categories} navtitle={navtitle}>
      <Seo seo={homepage.seo} />
      
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, navtitle] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/nav-subtitle")
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
