import Footer from "./Footer";
import Navbar from "./Navbar";

export default function UserLayout({ children }) {
    return (
      <>
        <Navbar/>
          <main>{children}</main>
        <Footer/>
      </>
    )
}