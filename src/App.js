import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stackedbarchart from './components/Pages/Chart';
import Final from './components/Pages/Final';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Final />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
