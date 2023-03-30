import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { BrowserRouter } from "react-router-dom";

// import Home from './Home';
// import Shop from './Shop';
// import Contact from './Contact';
// import About from './About';


ReactDOM.render(<div><BrowserRouter><App/></BrowserRouter></div>,document.getElementById('root'));


