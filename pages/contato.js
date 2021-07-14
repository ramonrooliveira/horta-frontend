import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Image from "../components/image";

const Contato = ({ homepage, header, footer, contact }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />
      <div className="contact__container">
        <div className="contact__image-container">
          <Image
            image={contact?.image}
            className="contact__image"
          />
        </div>
        <div className="contact__block">
          <h3>{contact?.contactBlock.title}</h3>
          <span>{contact?.contactBlock.addressFirstLine}</span>
          <span>{contact?.contactBlock.addressSecondLine}</span>
          <span>tel: {contact?.contactBlock.phones}</span>
          <span>{contact?.contactBlock.email}</span>
          <span>instragram: {contact?.contactBlock.instagram}</span>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, header, footer, contact] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/header"),
    fetchAPI("/footer"),
    fetchAPI("/contact")
  ]);

  return {
    props: { homepage, header, footer, contact },
    revalidate: 1,
  };
}

export default Contato;
