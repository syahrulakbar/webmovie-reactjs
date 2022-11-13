import Footer from "./Footer";
import SearchBar from "./SearchBar";
import BottomBar from "./BottomBar";
import "../style/style.css";
const Layout = ({ children }) => {
  return (
    <>
      <SearchBar />
      <BottomBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
