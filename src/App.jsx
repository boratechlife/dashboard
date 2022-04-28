import React, { useEffect } from 'react';

import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import { useState } from 'react/cjs/react.production.min';


function App() {

  const location = useLocation();
 
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
