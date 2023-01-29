
import './App.css';
// import React from 'react';
import React, {useState, useEffect} from 'react';
import ListPlus from './pages/listplus/ListPlus';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Join from './pages/join/Join';
import Home from './pages/home/Home';
import ListShare from './pages/listshare/ListShare';
import Main from './pages/main/Main';

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/hello")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        // 기본코드
        <ul>
          {message.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
        </ul>
      </header>
    </div>
  );
  // return (

  //   <div className="App">
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path='/' element={<><Login/> <Join/></>}></Route>
  //         <Route path='home' element={<Home/>}></Route>
  //         <Route path='listplus' element={<><ListPlus/> <ListShare/></>}></Route>
  //         <Route path='main' element={<Main/>}></Route>
  //       </Routes>
  //     </BrowserRouter>

  //   </div>
  // );
}

export default App;
