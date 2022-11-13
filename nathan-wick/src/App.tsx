import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';
import Blog from './components/views/Blog';
import Footer from './components/Footer';
import ThreeTraitsEveryGoodProgrammerHas from './components/views/blogs/ThreeTraitsEveryGoodProgrammerHas';
import TimeComplexityExplainedSimple from './components/views/blogs/TimeComplexityExplainedSimple';
import EightEssentialTypescriptDataStructures from './components/views/blogs/EightEssentialTypescriptDataStructures';
import Projects from './components/views/Projects';
import MobileContext from './contexts/MobileContext';

const App = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(Boolean);
  const viewWidthMobileBreakpoint = 768;

  useEffect(() => {
      window.addEventListener("resize", () => setViewWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (viewWidth >= viewWidthMobileBreakpoint) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [ viewWidth ]);

  return (
    <MobileContext.Provider value={isMobile}>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<About />} />
          <Route
            path='/about'
            element={<About />} />
          <Route
            path='/blog'
            element={<Blog />} />
          <Route
            path='/blog/three-traits-every-good-programmer-has'
            element={<ThreeTraitsEveryGoodProgrammerHas />} />
          <Route
            path='/blog/time-complexity-explained-simple'
            element={<TimeComplexityExplainedSimple />} />
          <Route
            path='/blog/eight-essential-typescript-data-structures'
            element={<EightEssentialTypescriptDataStructures />} />
          <Route
            path='/projects'
            element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </MobileContext.Provider>
  );
}

export default App;
