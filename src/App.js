import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Reasons from "./components/Reasons";

import './App.css';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/projecttest" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} /> 
      </Routes>
      <Reasons/>
    </Box>
  )
}

export default App