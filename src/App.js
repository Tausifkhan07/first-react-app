import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Work from './Pages/Work';
import Project from './Pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
