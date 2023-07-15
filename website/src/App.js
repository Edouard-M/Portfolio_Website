import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import Loader from './components/Loader';

window.onload=()=>{
  <div id="preloader">
  </div>
  }

function App() {
  
  return (
    <div className="App">
        <Loader />
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
