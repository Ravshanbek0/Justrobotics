import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './Language/Language';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './components/RegisterPage/Register'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}


export default App