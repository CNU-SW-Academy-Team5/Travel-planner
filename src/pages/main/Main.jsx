import React from "react";
import './Main.css';
import { useState } from 'react';

const getDays = (startDate, endDate) => {
  let arr = [];
  for(
    let dt = new Date(startDate);
    dt <= endDate;
    dt.setDate(dt.getDate()+1)
  ){
    arr.push(new Date(dt))
  }
  return arr;
};
export default function Main({startDate, endDate}){
  let posX =0;
  const [divs, setDivs] = useState([]);
  const [date, setDate] = useState(new Date());
  const [divsMemo, setDivsMemo] = useState([]);

  const dateDiff = getDays(startDate, endDate);

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

  const [dayPlan, setDayPlan] = useState([]); 
  
  const addPlanHandler = () =>{
    setDayPlan([...dayPlan ,{id : dayPlan.length+1}])
  }

 const onDragStartHandeler = (e) =>{
  const img = new Image();
  e.dataTransfer.setDragImage(img, 0, 0);
  posX = e.clientX;

 }

 const onDragHandler = (e) => {
  if(e.clientX <= 120) return;
  
  e.target.style.left = `${e.clientX+e.target.offsetLeft-posX}px`;
  posX=e.clientX;

  console.log(e.clientX);
 }

    return(
        <div>
        <div>
        <button className="plusBtn" onClick={addPlanHandler}>
        일정 추가
        </button>
        </div>
        <div className="planContainer">
          <div className="line"></div>
          {dayPlan.map(()=>{
            return(
              <div className="plusCircle" draggable={true}  onDrag={onDragHandler} onDragStart={onDragStartHandeler}/>
            )
          })}
          <div className="circle">{date.toLocaleDateString()}</div>
          <div className="circle">{date.toLocaleDateString()}</div>
          <div className="circle">{date.toLocaleDateString()}</div>
        </div>
       
      </div>    
    )
}