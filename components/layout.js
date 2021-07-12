import Nav from "./nav";
import Footer from "./footer";

const Layout = ({ children, header, footer, seo }) => (
  <>
    <Nav header={header} />
    {children}
    <Footer footer={footer} />
  </>
);

export default Layout;
