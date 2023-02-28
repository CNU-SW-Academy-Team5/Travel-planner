import React from "react";
import './Main.css';
import { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Main({startDate, endDate}){
  let posX =0;
  const [divs, setDivs] = useState([]);
  const [date, setDate] = useState(new Date());
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
        <FaMapMarkerAlt/>
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