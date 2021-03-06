import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Gallery from "../components/gallery";
import { fetchAPI } from "../lib/api";


const Home = ({ homepage, header, footer, projects }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />
      {/* <motion.div initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}> */}

        <Gallery projects={projects}/>
      {/* </motion.div> */}
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, header, footer, projectsUnsorted] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/header"),
    fetchAPI("/footer"),
    fetchAPI("/projects")
  ]);

  // push unfinished projects to the end
  let projects = [];
  await projectsUnsorted.forEach((elem, index) => {
    if (elem.title == 'em breve...') {
      projects = [...projects, elem];
    } else {
      projects = [elem, ...projects];
    }
  })

  return {
    props: { homepage, header, footer, projects },
    revalidate: 1,
  };
}

export default Home;
