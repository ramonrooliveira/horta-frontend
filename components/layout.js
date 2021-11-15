import Nav from "./nav";
import Footer from "./footer";
import Floaty from "./floaty";

const Layout = ({ children, header, footer, seo }) => (
  <>
    <Nav header={header} />
    {children}
    <Footer footer={footer} />
    <Floaty />
  </>
);

export default Layout;
