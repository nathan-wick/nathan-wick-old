import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';
import Blog from './components/views/Blog';
import Footer from './components/Footer';

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
