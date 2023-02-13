import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Signup from './components/pages/Signup';
import Products from './components/pages/Products';


function App() {
  return (
    <div className="App">
      {/* heyyy */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/sign-up' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
