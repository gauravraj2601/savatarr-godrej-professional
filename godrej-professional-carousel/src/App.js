
import './App.css';
import CarouselComponent from './components/Carousel';
import Navbar from './components/Navbar';
import { dataImage1, dataImage3, dataImage2 } from './db';




function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='crousel-div'>
      <CarouselComponent imageData={dataImage1} />
      <CarouselComponent imageData={dataImage2} />
      <CarouselComponent imageData={dataImage3} />
      </div>
    </div>
  );
}

export default App;
