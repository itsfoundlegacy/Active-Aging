import './App.css';
import Home from './pages/home';
import Pictures from './pages/pictures';
import Team from './pages/team';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pictures" element={<Pictures />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
