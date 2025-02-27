import './App.css'
import AboutMe from './components/AboutMe.jsx';
import TechStack from './components/TechStack.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
      <>
        <div className="flex flex-col items-center space-y-52">
          <AboutMe/>
          <TechStack/>
          <Projects/>
        </div>
        <Contact/>
      </>
  )
}

export default App

