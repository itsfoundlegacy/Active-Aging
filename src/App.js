import './App.css';
import Home from './pages/home';
import Events from './pages/events';
import Team from './pages/team';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Router forceRefresh={true}>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      </Router>
    </div>
  );
}

/* TODO: 
  Update Pictures
  Colors
*/

export default App;
