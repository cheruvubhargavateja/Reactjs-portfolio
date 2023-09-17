import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import HomeSection from './components/home-section/HomeSection';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <About />
      <Footer />
    </div>
  );
}

export default App;
