import './App.css';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ServicesSection from './components/ServiceSection';
import Slider from './components/Slider';
import TeamsSection from './components/TeamsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <About/>
      <TeamsSection/>
      <ServicesSection/>
      <Slider/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;
