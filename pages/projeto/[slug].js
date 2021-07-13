import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Project = ({ project, header, footer }) => {
  // const imageUrl = getStrapiMedia(project.cover);

  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.image,
  //   article: true,
  // };

  return (
    <Layout header={header} footer={footer}>
      {/* <Seo seo={seo} /> */}
      <div>
        <h1>{project.title}</h1>
        <Image
          image={project.cover}
          style={{
            position: "static",
            height: 200,
          }}
        />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [projects, header, footer] = await Promise.all([
    fetchAPI(`/projects?slug=${params.slug}`),
    fetchAPI("/header"),
    fetchAPI("/footer")
  ]);

  return {
    props: { project: projects[0], header, footer },
    revalidate: 1,
  };
}

export default Project;