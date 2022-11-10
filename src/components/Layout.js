import Footer from "./Footer";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";

import "../style/style.css";
const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <HeroSection />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
