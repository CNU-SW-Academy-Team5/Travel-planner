import React from "react";
import Draggable from 'react-draggable';
import './Main.css';
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';

export default function Main(){
  const [divs, setDivs] = useState([]);
  const [date, setDate] = useState(new Date());
  const [divsMemo, setDivsMemo] = useState([]);

  const handleClick = () => {
    setDivsMemo([...divs, <div key={divs.length} className='plusMemo'></div>]);
  };

const [inputs, setInputs] = useState([{ value: "" }]);
  
  const handleAddInput = () => {
    const newInput = { value: "" };
    setInputs([...inputs, newInput]);
  };

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };
 
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
        {/*{helloData.map((data, index) => (
        <p key={index}>{data}</p>
        ))}*/}
        <div>
        <button className="plusBtn" onClick={() => setDivs([...divs, <Draggable><div className='plusCircle' key={divs.length}></div></Draggable>])}>
        일정 추가
        </button>
        {divs.map((div, index) => (
        div
        ))}
        </div>
        <div className="lineDiv">
            <div className="line"></div>
        </div>
        <Draggable>
          <div className="circle">{date.toLocaleDateString()}</div>
        </Draggable>
        <Draggable>
          <div className="circle">{date.toLocaleDateString()}</div>
        </Draggable>
        <Draggable>
          <div className="circle">{date.toLocaleDateString()}</div>
        </Draggable>
        <div className="memo-container">
        <div className="memo">
        <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input className="memoText"
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button className="textBtn" onClick={handleAddInput}>장소 +</button>
    </div>
        </div>
        <div className="memo">
        <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input className="memoText2"
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button className="textBtn2" onClick={handleAddInput}>식당 +</button>
    </div>
        </div>
        <div className="memo">
        <div>
      {inputs.map((input, index) => (
        <div key={index}>
          <input className="memoText3"
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button className="textBtn3" onClick={handleAddInput}>숙박 및 기타 +</button>
    </div>
        </div>
        </div>  
      </div>    
    )
}