import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';
import Blogs from './components/views/Blogs';
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
          path='/blogs'
          element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
