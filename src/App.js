import './App.css';
import CinematicVideo from './components/CinematicVideo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <div>
        <Navbar/>
        <Footer/>
        <CinematicVideo/>
       </div> 
    </div>
  );
}

export default App;
