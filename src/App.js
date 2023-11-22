import './Styles/App.css';
import './Styles/home.css';
import './Styles/home-desktop.css';
import './Styles/login.css';
import './Styles/komik.css';
import './Styles/komik-desktop.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import SumberAset from './Components/Home/SumberAset';
import Dashboard from './Components/Komik/Dashboard';
import Komik from './Components/Komik/Komik';
import Episode from './Components/Komik/Episode';
import LihatEnding from './Components/Komik/LihatEnding';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sumberaset' element={<SumberAset />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/lihatending' element={<LihatEnding />} />
          <Route path='/komik' element={<Komik />} />
          <Route path='/komik/:epsId' element={<Episode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
