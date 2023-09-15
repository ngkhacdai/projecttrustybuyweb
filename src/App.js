import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { useState } from 'react';
import SideBar from './components/SideBar'
import Account from "./pages/Account";
import Product from "./pages/Product";
import Invoices from "./pages/Invoices";
function App() {
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={token ? <SideBar><Home /></SideBar> : <Navigate to="/login" />}
        />
        <Route
          path='/accounts'
          element={token ? <SideBar><Account /></SideBar> : <Navigate to="/login" />}
        />
        <Route
          path='/products'
          element={token ? <SideBar><Product /></SideBar> : <Navigate to="/login" />}
        />
        <Route
          path='/invoices'
          element={token ? <SideBar><Invoices /></SideBar> : <Navigate to="/login" />}
        />
        <Route path='/login' element={<Login setToken={setToken} />} />
      </Routes>

    </BrowserRouter >
  );
}

export default App;
