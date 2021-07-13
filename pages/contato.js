import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Contato = ({ homepage, header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, header, footer] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/header"),
    fetchAPI("/footer")
  ]);

  return {
    props: { homepage, header, footer },
    revalidate: 1,
  };
}

export default Contato;
