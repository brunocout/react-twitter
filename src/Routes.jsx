import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/home'

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <Home /> } />
        </Routes>
     );
}
 
export default MainRoutes;