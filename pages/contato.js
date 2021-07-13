import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Image from "../components/image";

const Contato = ({ homepage, header, footer, contact }) => {
  return (
    <Layout header={header} footer={footer}>
      <Seo seo={homepage.seo} />
      <Image
          image={contact?.image}
          style={{
            position: "static",
            height: 200,
          }}
        />
        <div>
          <p>{contact?.contactBlock.title}</p>
          <p>{contact?.contactBlock.addressFirstLine}</p>
          <p>{contact?.contactBlock.addressSecondLine}</p>
          <p>tel: {contact?.contactBlock.phones}</p>
          <p>{contact?.contactBlock.email}</p>
          <p>instragram: {contact?.contactBlock.instagram}</p>
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
