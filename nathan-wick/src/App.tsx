import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/views/About';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
