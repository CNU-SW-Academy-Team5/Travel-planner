import React from "react";
import './PlanGraph.css';
import { useState } from 'react';
import { FcPlanner } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import {IoChatbubbleOutline} from "react-icons/io5";

export default function PlanGraph(){
  let posX =0;
  const [date, setDate] = useState(new Date());
  const [dayPlan, setDayPlan] = useState([]);

  const [showMemo, setShowMemo] = useState(false);
  const [timeInput, setTimeInput] = useState('');
  const [placeInput, setPlaceInput] = useState('');
  const [detailInput, setDetailInput] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const addPlanHandler = () =>{
    setDayPlan([...dayPlan ,{id : dayPlan.length+1, memo: null}])
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
  }

  const onSaveMemo = () =>{
    setShowMemo(false);
    const memoData = {
      time: timeInput,
      place: placeInput,
      detail: detailInput,
    };
    console.log(memoData);
    setDayPlan(prevDayPlan => {
      const updatedDayPlan = [...prevDayPlan];
      const index = updatedDayPlan.indexOf(selectedPlan);
      updatedDayPlan[index] = { ...selectedPlan, memo: memoData };
      return updatedDayPlan;
    });

    fetch('/detailed-plan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memoData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Memo saved:', data);
      sessionStorage.setItem("id", data.data);
    })
    .catch(error => {
      console.error('Error saving memo:', error);
    });
  }

  const onCancelMemo = () =>{
    setShowMemo(false);
  }

  const onMemoInputKeyDown = (e) => {
    if(e.key==='Enter'){
        onSaveMemo();
    }else if(e.key==='Escape'){
        onCancelMemo();
    }
  }

  const onDoubleClickHandler = (plan) => {
    setSelectedPlan(plan);
    setShowMemo(true);
    setTimeInput(plan.memo?.time || '');
    setPlaceInput(plan.memo?.place || '');
    setDetailInput(plan.memo?.detail || '');
  }

  return(
    <div>
      <div className="planContainer">
      <div>
        <div className="dateDiv"><FaMapMarkerAlt className="markerIcon"/><br/>{`${date.getDate()}일`}
        </div>
        <button className="plusBtn" onClick={addPlanHandler}>
          추가<IoChatbubbleOutline className="plusIcon"/>
        </button>
      </div>
        <div className="line"></div>
        {dayPlan.map((plan) => {
          return(
            <div key={plan.id} className="plusCircle" draggable={true} onDrag={onDragHandler} onDragStart={onDragStartHandeler} onDoubleClick={() => onDoubleClickHandler(plan)}>
              {plan.memo && (
             <div className="memoContent">
             <div className="time">{plan.memo.time}</div>
             <div className="place">{plan.memo.place}</div>
            </div>
              )}
              {showMemo && selectedPlan?.id === plan.id && (
                <div className="memoWindow">
                    <div className="buttons-row">  
                    <button className="buttons" onClick={onSaveMemo}>저장</button>
                    <button className="buttons" onClick={onCancelMemo}>취소</button>
                  </div>  
                  <div className="inputs-row">
                    <input className="inputdetail" type='text'  value={timeInput} onChange={(e)=>setTimeInput(e.target.value)} placeholder='시간' onKeyDown={onMemoInputKeyDown}/>
                    <input className="inputdetail" type='text' value={placeInput} onChange={(e)=>setPlaceInput(e.target.value)} placeholder='장소' onKeyDown={onMemoInputKeyDown}/>
                  </div>  
                    <input className="inputMemo" type='text' value={detailInput} onChange={(e)=>setDetailInput(e.target.value)} placeholder='메모' onKeyDown={onMemoInputKeyDown}/>
                </div>
              )}
              </div>
            )
          })}
        </div>
      </div>    
    )
}