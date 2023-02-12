import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* heyyy */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
