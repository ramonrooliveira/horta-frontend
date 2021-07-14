import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";
import Link from 'next/link';
// import Zoom from 'react-medium-image-zoom'
// import 'react-medium-image-zoom/dist/styles.css'
import { SRLWrapper } from "simple-react-lightbox";

const Project = ({ project, header, footer }) => {

  const options = {
    settings: {
      autoplaySpeed: 0,
      disableKeyboardControls: true,
      disablePanzoom: true,
      disableWheelControls: true,
      overlayColor: 'rgba(30, 30, 30, 0.9)'
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false
    },
    caption: {
      showCaption: false
    },
    thumbnails: {
      showThumbnails: false
    }
  }
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
      <div className="project__container">
        <div className="project__photos">
          {project?.photos.map(photo => {
            return (
              <SRLWrapper options={options}>
                <Image
                  key={photo.id}
                  image={photo}
                  className="project__photo"
                  />
              </SRLWrapper>
            )
          })}
        </div>
        <div className="project__text-section">
          <h1>{project.title}</h1>
          <p>{project?.description}</p>
          <Link href="/">
            <button 
              type="button"
              className="primary-button"
            >projetos</button>
          </Link>
        </div>
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