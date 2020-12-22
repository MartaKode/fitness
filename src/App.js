import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Services from './components/Services';
import ReactDOM from 'react-dom';
import { BackTop } from 'antd';


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {/* <About />
      <Services />
      <Contact /> */}
    </div>
  );
}


export default App;
