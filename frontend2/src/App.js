import React from 'react';

import {Routes, Route} from 'react-router-dom';
import PreProcessing from './viewModels/PreProcessing.js';
import Home from './viewModels/Home.js'; 
import Recommendation from './viewModels/Recommendation.js';
import Evaluation from './viewModels/Evaluation.js';


function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path="/preprocessing" element={<PreProcessing />} />
            <Route path='/recommendation' element={<Recommendation />} />
            <Route path='/evaluation' element={<Evaluation/>} />
       </Routes>
    </>
  );
}

export default App;
