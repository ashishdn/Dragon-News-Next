import Navbar from "../../components/shared/Navbar.jsx";
import Header from "../../components/shared/Header.jsx";
import Footer from "../../components/shared/Footer.jsx";
import BreakingNews from "../../components/shared/BreakingNews.jsx";
export default function layout({children}) {
  return (
    <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}
