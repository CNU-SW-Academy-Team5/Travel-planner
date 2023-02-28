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
import MainPlan from './pages/mainplan/MainPlan';
import PlanGraph from './component/plangragh/PlanGraph';
import MainList from './pages/mainlist/MainList';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Login/> <Join/></>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='listplus' element={<ListPlus/>}></Route>
          <Route path='listshare' element={<ListShare/>}></Route>
          <Route path='mainplan' element={<MainPlan/>}></Route>
          <Route path='plangraph' element={<PlanGraph/>}></Route>
          <Route path='mainlist' element={<MainList/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
