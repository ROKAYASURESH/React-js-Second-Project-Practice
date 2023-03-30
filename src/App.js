import logo from './logo.svg';
import './App.css';
import Header from './Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Contact from './Contact';
import Shop from './Shop';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Product from './Product';
import Details from './Details';

export default function App() {
  return (
    <div className="App">
      <Header/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/details/$%7Br.id%7D" element={<Details/>} />

      </Routes>
     
    
      <Footer/>
 
      </div>
  );
}



