import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Reasons from "./components/Reasons";

import './App.css';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BmiCalculator from './pages/BmiCalculator';
import Manual from './components/Manual';
import Manual2 from './components/Manual2';

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px'}}} m="auto">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/projecttest" element={<Home />} />
        <Route path="/projecttest/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/BmiCalculator" element={<BmiCalculator />} /> 
        <Route path="/Manual" element={<Manual />} />
      </Routes>
    </Box>
  )
}

export default App