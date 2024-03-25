import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "./Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="contentWrap">
      <div className="header">
        <NavBar />
      </div>
      <div className="mainContent">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
