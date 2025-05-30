import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/Portfolio' element={<Portfolio />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;