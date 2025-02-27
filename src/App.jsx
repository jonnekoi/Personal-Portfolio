import './App.css'
import AboutMe from './components/AboutMe.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
      <div className={`relative w-full transition-transform ${isOpen ? "-rotate-6 translate-x-[-10px] translate-y-[120px]" : "rotate-0"}`}>
        <div className="fixed top-8 right-8 z-50 on-mobile-ham">
          <button onClick={toggleMenu} className="relative w-12 h-10 cursor-pointer">
            <span className={`block w-12 h-1 bg-white rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-12 h-1 bg-white rounded mt-2 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-12 h-1 bg-white rounded mt-2 transition-transform ${isOpen ? '-rotate-45 -translate-y-4' : ''}`}></span>
          </button>
        </div>

        {isOpen && (
            <div className="absolute top-0 right-10 w-64 text-white flex flex-col space-y-6 p-8">
              <a href="#aboutMe" onClick={closeMenu} className="code-text">About Me</a>
              <a href="#techStack" onClick={closeMenu} className="code-text">Tech Stack</a>
              <a href="#projects" onClick={closeMenu} className="code-text">Projects</a>
              <a href="#contact" onClick={closeMenu} className="code-text">Contact</a>
            </div>
        )}

        <div className="flex flex-col items-center space-y-52">
          <div id="aboutMe"><AboutMe/></div>
          <div id="techStack"><TechStack/></div>
          <div id="projects" className="flex justify-center"><Projects/></div>
        </div>
        <div id="contact"><Contact/></div>

        <div>
          <p className="text-white text-1xl mb-5 code-text">
            © 2025 Jonne Koivisto / All rights reserved
          </p>
        </div>
      </div>
  );
}

export default App

