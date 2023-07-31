import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ShipmarkPage from './pages/ShipmarkPage';
import Loader from './components/generics/Loader';



function App() {
  
  return (
    <div className="App">
        <Loader />
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
