import React from 'react';
import Navbar from './component/navbar';
import Home from './component/home.js';
import About from './component/about';
import Projects from './component/project';
import Contact from './component/contact';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
