import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dash from './Dash';
import Me from './Me';
import Log from './log';

 
const App=()=>{

  return(
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Dash/>}></Route>
        <Route path='/log' element={<Log></Log>}></Route>
        <Route path='/Me' element={<Me/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;