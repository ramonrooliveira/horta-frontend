import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import SimpleReactLightbox from 'simple-react-lightbox'
import { motion } from 'framer-motion';
import '../assets/scss/global.scss';
import '../assets/scss/nav.scss';
import '../assets/scss/footer.scss';
import '../assets/scss/about.scss';
import '../assets/scss/gallery.scss';
import '../assets/scss/project.scss';
import '../assets/scss/contact.scss';
import '../assets/scss/floaty.scss';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps, router }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="preload"
          href="../../public/fonts/Museo-Sans/MuseoSans-100.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <SimpleReactLightbox>
          <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            },
          }}>
            <Component {...pageProps} />
          </motion.div>
        </SimpleReactLightbox>
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
