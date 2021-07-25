import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import UserPage from './component/UserPage';


function App() {

  return (
    <Routes basename="/github-app">
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
