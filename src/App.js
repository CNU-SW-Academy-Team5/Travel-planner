//test
import './App.css';
import React from 'react';
import ListPlus from './pages/listplus/ListPlus';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Join from './pages/join/Join';
import Home from './pages/home/Home';
import ListShare from './pages/listshare/ListShare';
import Main from './pages/main/Main';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Login/> <Join/></>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='listplus' element={<ListPlus/>}></Route>
          <Route path='listshare' element={<ListShare/>}></Route>
          <Route path='main' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
