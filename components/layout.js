import Nav from "./nav";

const Layout = ({ children, header, seo }) => (
  <>
    <Nav header={header} />
    {children}
  </>
);

export default Layout;
