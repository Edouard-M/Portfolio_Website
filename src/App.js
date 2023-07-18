import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import Loader from './components/Loader';


function App() {
  
  return (
    <div className="App">
        <Loader />
        <Router>
          <Routes>
            <Route path="/" exact element={<LandingPage/>} />
          </Routes>
        </Router>
        <footer id="footer">
          Edouard Mignien
        </footer>
    </div>
  );
}

export default App;
