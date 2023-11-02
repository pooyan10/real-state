import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="min-h-screen px-2">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
