import { BrowserRouter } from 'react-router-dom'
import './style.css'
import Home from '../pages/Home'

function App() {

  return (
    <BrowserRouter>
    <div className="body">
      <Home />

    {/* <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
        {!isMobile ? <Hero /> : <HeroMobile/>}
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      {/*<Feedbacks />*/}
      {/* <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Contact />
        {/* <StarsCanvas /> */}
      {/*</div>
    </div> */}
  </div>
  </BrowserRouter>
  )
}

export default App
