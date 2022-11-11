import Footer from "./Footer";
import SearchBar from "./SearchBar";

import "../style/style.css";
const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
