import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";

function App() {
  let screenWidth = window.innerWidth;

  return (
    <BrowserRouter>
      {screenWidth > 900 ? <Navbar /> : <NavbarMobile />}
      <Home />
      <About />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
