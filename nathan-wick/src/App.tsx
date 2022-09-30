import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
