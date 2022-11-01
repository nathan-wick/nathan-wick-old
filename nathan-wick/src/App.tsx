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

function App() {
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
  }, [ viewWidth ])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<About isMobile={isMobile} />} />
        <Route
          path='/about'
          element={<About isMobile={isMobile} />} />
        <Route
          path='/blog'
          element={<Blog isMobile={isMobile} />} />
        <Route
          path='/blog/three-traits-every-good-programmer-has'
          element={<ThreeTraitsEveryGoodProgrammerHas isMobile={isMobile} />} />
        <Route
          path='/blog/time-complexity-explained-simple'
          element={<TimeComplexityExplainedSimple isMobile={isMobile} />} />
        <Route
          path='/blog/eight-essential-typescript-data-structures'
          element={<EightEssentialTypescriptDataStructures isMobile={isMobile} />} />
        <Route
          path='/projects'
          element={<Projects isMobile={isMobile} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
