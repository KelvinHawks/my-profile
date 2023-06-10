import ImageHeader from './components/ImageHeader';
import Buttons from './components/Buttons';
import About from './components/About';
import InterestSect from './components/Interest'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className='container'>
      <ImageHeader/>
      <Buttons/>
      <About/>
      <InterestSect/>
      <Footer/>
    </div>
   
  );
}

export default App;
