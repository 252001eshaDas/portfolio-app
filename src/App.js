import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';
import About from './components/About';

function App() {
  // useEffect(() => {
    const [isDayMode, setIsDayMode] = useState(true); // State to manage day/night mode

    useEffect(() => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 18) {
        setIsDayMode(true);  // Day mode by default
      } else {
        setIsDayMode(false); // Night mode by default
      }
    }, []);
    // Function to toggle between day and night mode
  const toggleTheme = () => {
    setIsDayMode((prevMode) => !prevMode);
  };
    

 // Update CSS variables based on the current mode
 useEffect(() => {
  const root = document.documentElement;
  if (isDayMode) {
   // Day theme
   root.style.setProperty('--primary-color', '#1f2937');
   root.style.setProperty('--secondary-color', '#f97316');
   root.style.setProperty('--accent-color', '#a6cdfd');
   root.style.setProperty('--background-color', '#ebecedf3');
   root.style.setProperty('--text-color', '#374151');
   root.style.setProperty('--highlight-color', '#facc15');
   root.style.setProperty('--color', '#374151');
  } else {
   // Night theme with purple and blue shades
   root.style.setProperty('--primary-color', '#8eaaed');
   root.style.setProperty('--secondary-color', '#7f5af0');
   root.style.setProperty('--accent-color', '#3b82f6');
   root.style.setProperty('--background-color', '#1c1e26');
   root.style.setProperty('--text-color', '#f0f0f0');
   root.style.setProperty('--color', '#60668f');
   root.style.setProperty('--highlight-color', '#3a3d98');
  }
}, [isDayMode]);




  return (
    <div className="App">
      <Header />
          
      <main>
        {/* Toggle button */}
        <label className="switch">
          <input type="checkbox" checked={!isDayMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
