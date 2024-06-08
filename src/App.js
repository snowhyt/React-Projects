// src/App.js
import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './Views/Home.js';
import Product from './Views/Product.js';
import About from './Views/About.js';
import Contact from './components/Contact.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
    
      <Router>
      
       <Header />

        <div className='p-3'>
        <Routes>
          <Route
          exact path="/" 
          element={<Home/>}/> 

          <Route
          path="/about" 
          element={<About/>}/>

          <Route
          path="/contact-us" 
          element={<Contact/>}/>
          <Route
          path="/products/:id" 
          element={<Product/>}/>
        
          
        </Routes>
        </div>

      </Router>



      <Footer />

    </div>
  );
}

export default App;
