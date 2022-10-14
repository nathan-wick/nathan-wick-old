import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';
import Blog from './components/views/Blog';
import Footer from './components/Footer';
import ThreeTraitsEveryGoodProgrammerHas from './components/views/blogs/ThreeTraitsEveryGoodProgrammerHas';

function App() {
  return (
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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
