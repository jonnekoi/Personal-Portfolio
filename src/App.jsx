import './App.css'
import AboutMe from './components/AboutMe.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
      <div className="relative w-full">
        <div className="flex flex-col items-center space-y-52">
          <AboutMe/>
          <TechStack/>
          <Projects/>
        </div>
        <Contact/>

        <div>
          <p className="text-white text-1xl mb-5 code-text">
            © 2025 Jonne Koivisto / All rights reserved
          </p>
        </div>
      </div>
  );
}

export default App

