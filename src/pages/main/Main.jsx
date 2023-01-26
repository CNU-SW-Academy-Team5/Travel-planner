import React from "react";
import Draggable from 'react-draggable';
import './Main.css';

export default function Main(){
    return(
        <div>
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