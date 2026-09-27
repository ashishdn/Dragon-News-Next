import Navbar from "../../components/shared/Navbar.jsx";
import Header from "../../components/shared/Header.jsx";
import Footer from "../../components/shared/Footer.jsx";


export default function layout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
