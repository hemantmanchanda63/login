// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Info from './Info';
import React,{useState} from 'react';
import Error from './Error';

function App() {
  const [token, setToken] = useState(localStorage.getItem("usertoken") ?? null);
  console.log(token);
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={token?<Info />: <Login token={token} setToken={setToken} /> } />
          <Route path='/register' element={<Register />} />
          <Route path='/info' element={<Info />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
