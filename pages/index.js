import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Gallery from "../components/gallery";
import { fetchAPI } from "../lib/api";

const Home = ({ homepage, header, footer, projects }) => {
  return (
    <Layout header={header} footer={footer}>
      {/* <Seo seo={homepage.seo} /> */}
      <Gallery projects={projects}/>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, header, footer, projects] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/header"),
    fetchAPI("/footer"),
    fetchAPI("/projects")
  ]);

  return {
    props: { homepage, header, footer, projects },
    // revalidate: 1,
  };
}

export default Home;
