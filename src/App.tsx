import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About, Contact, Experience, Hero, Tech, Works } from './components';
import { Universe } from './components/Universe';
import { Scroll } from './components/Scroll';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Universe />
        <Scroll />
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
