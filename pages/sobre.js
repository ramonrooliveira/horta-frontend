import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Image from "../components/image"
import Link from "next/link";

const Sobre = ({ homepage, header, footer, about }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />
        <div className="about__container">
          <div className="left-image-section">
            <Image
              image={about?.image}
              className="about__image"
            />
          </div>
          <div className="about__text-section">
            <h1>{about?.title}</h1>
            <p>{about?.text}</p>
            <Link href={about?.button.url}>
              <button 
                type="button"
                className="primary-button"
              >{about?.button.label}</button>
            </Link>
          </div>
        </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, header, footer, about] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/header"),
    fetchAPI("/footer"),
    fetchAPI("/about")
  ]);

  return {
    props: { homepage, header, footer, about },
    revalidate: 1,
  };
}

export default Sobre;
