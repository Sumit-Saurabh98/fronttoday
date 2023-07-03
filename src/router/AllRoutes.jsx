import React from 'react';
import Dashboard from '../components/Dashboard';
import HomePage from '../components/HomePage';
import {Route, Routes} from "react-router-dom"

function AllRoutes(props) {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    );
}

export default AllRoutes;