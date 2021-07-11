import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Contato = ({ homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([
    fetchAPI("/homepage")
  ]);

  return {
    props: { homepage },
    revalidate: 1,
  };
}

export default Contato;
