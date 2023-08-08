import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Infos from "../pages/Infos";
import Specialities from "../pages/Specialities";

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
