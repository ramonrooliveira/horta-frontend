import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, homepage, header }) => {
  return (
    <Layout header={header}>
      <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <h1>{homepage.hero.subtitle}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, header] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/header")
  ]);

  return {
    props: { articles, categories, homepage, header },
    revalidate: 1,
  };
}

export default Home;
