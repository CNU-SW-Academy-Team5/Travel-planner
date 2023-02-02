import React from "react";
import Draggable from 'react-draggable';
import './Main.css';
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';

export default function Main(){
  const [divs, setDivs] = useState([]);
  const [helloData, setHelloData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/hello");
        const result = response.data;
        setHelloData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
    return(
        <div>
         {helloData.map((data, index) => (
        <p key={index}>{data}</p>
      ))}
        {/* <div>
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
        </Draggable> */}
      </div>
        
    )
}