import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import DashBoard from './components/Home/DashBoard';
import { useState } from 'react';

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken ={setToken} />;
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={DashBoard} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
