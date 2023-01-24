
import './App.css';
import React from 'react';
import ListPlus from './ListPlus';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Join from './Join';
import Home from './Home';
import ListShare from './ListShare';
import Main from './Main';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Login/> <Join/></>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='listplus' element={<><ListPlus/> <ListShare/></>}></Route>
          <Route path='main' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
