import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/website' exact element={<Home/>}/>
        <Route path='/services' exact element={<Services/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/sign-up' exact element={<SignUp/>}/>
      </Routes>
    </Router>
    </>

   );
}

export default App;
