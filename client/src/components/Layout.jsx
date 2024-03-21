import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
