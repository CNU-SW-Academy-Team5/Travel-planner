import React from "react";
import Draggable from 'react-draggable';
import './Main.css';
import { useState } from 'react';

export default function Main(){
  const [divs, setDivs] = useState([]);
    return(
        <div>
        <div>
        <button onClick={() => setDivs([...divs, <Draggable><div className='pluscircle' key={divs.length}></div></Draggable>])}>
        일정 넣기
        </button>
        {divs.map((div, index) => (
        div
        ))}
        </div>
        <div className="lineDiv">
            <div className="line"></div>
        </div>
        <Draggable>
          <div className="circle" />
        </Draggable>
        <Draggable>
          <div className="circle" />
        </Draggable>
        <Draggable>
          <div className="circle" />
        </Draggable>
      </div>
        
    )
}