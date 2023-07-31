import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Footer from "../components/Footer";
import NavbarMobile from "../components/NavbarMobile";
import Specialities from "../pages/Specialities";
import Contact from "../pages/Contact";
import Infos from "../pages/Infos";
import { AnimatePresence } from "framer-motion";

function App() {
  let screenWidth = window.innerWidth;

  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <nav>{screenWidth > 1000 ? <Navbar /> : <NavbarMobile />}</nav>
        <main>
          <Home />
          <About />
          <Specialities />
          <Infos />
          {/* <Following id="following" /> */}
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
