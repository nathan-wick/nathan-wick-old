import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';

function App() {
  return (
    <Router 
      basename={`/${process.env.PUBLIC_URL}`}>
      <NavBar />
      <Routes>
        <Route
          path=''
          element={<About />} />
        <Route
          path='*'
          element={<About />} />
        <Route
          path='/about'
          element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
