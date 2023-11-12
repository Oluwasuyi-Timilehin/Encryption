import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Log from './log';
import Homepage from './Homepage';
import SignUp from './SignUp';

 
const App=()=>{

  return(
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<SignUp/>}></Route>
        <Route path='/log' element={<Log></Log>}></Route>
        <Route path='/Homepage' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;