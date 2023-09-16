import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import HomeSection from './components/home-section/HomeSection';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar/>
        <Routes>
            <Route path='/' element={<HomeSection />} />
        </Routes>
        <Routes>
            <Route path='/about' element={<About isLink={true}/>} />
        </Routes>
        <About isLink={false}/>
      <Footer />
    </div>
  );
}

export default App;
