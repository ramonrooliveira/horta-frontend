import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Gallery from "../components/gallery";
// import { fetchAPI } from "../lib/api";
import { homepage, header, footer, projects } from "../data/data"

const Home = ({ homepage, header, footer, projects }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />

      <Gallery projects={projects} />
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  // const [homepage, header, footer, projectsUnsorted] = await Promise.all([
  //   // fetchAPI("/homepage"),
  //   // fetchAPI("/header"),
  //   // fetchAPI("/footer"),
  //   // fetchAPI("/projects")
  // ]);

  // push unfinished projects to the end
  // let projects = [];
  // await projectsUnsorted.forEach((elem, index) => {
  //   if (elem.title == "em breve...") {
  //     projects = [...projects, elem];
  //   } else {
  //     projects = [elem, ...projects];
  //   }
  // });

  return {
    props: { homepage, header, footer, projects },
    revalidate: 1,
  };
}

export default Home;
