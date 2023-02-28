import React from "react";
import './ListPlus.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router";
import {BsCalendarPlus} from "react-icons/bs";
import Logo from "../../component/logo/Logo";

export default function ListPlus(){
        const navigate = useNavigate();
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        const [showCalendar, setShowCalendar] = useState(false);
        
        const [name, setName] = useState("");
        const [area, setArea] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          const data = { id: 3, name: name, startDate: startDate, endDate: endDate, region: area };
          console.log(data);
      
          fetch("/plan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              console.log(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        };

        const nameInputhandle = (e) => {
          console.log(e.target.value);
          setName(e.target.value);
        }

        const regionInputhandle = (e) =>{
          console.log(e.target.value);
          setArea(e.target.value);
        }
      
    return(
        <div className="ListPlusWrap">
            <p className="ListPlus">일정 추가<BsCalendarPlus className="CalendarIcon"/></p>
            <div className="List">
            <div className="ListBox">
            <p className="ListName">일정 이름</p>
            <input type={"text"} className="textBox" value={name} onChange={nameInputhandle}></input>
            </div>
            <div className="ListBox">
            <div className="ListBoxCalendar">
            <p className="ListNameDate">여행 일자</p>
             <button className="CalendarBtn"onClick={() => setShowCalendar(!showCalendar)}>
              날짜 선택
             </button>
            {showCalendar && (
               <div>
               <Calendar 
                 selectRange={true}
                 onChange={([start, end]) => {
                   setStartDate(start);
                   setEndDate(end);
                 }}
               />
             </div>
            )}    
             </div>
            <input type={"text"} placeholder="2022.12.28" className="textBox" value={`${startDate.toISOString().substring(0, 10)} ~ ${endDate.toISOString().substring(0, 10)}`}></input>
            </div>
            <div className="ListBox">
            <p className="ListName">방문 지역</p>
            <input type={"text"} className="textBox" onChange={regionInputhandle} value={area}></input>  
            </div>
            <div className="BtnWrap">
            <button className='ListSubmitBtn' type='submit'onClick={handleSubmit}>저장</button>
            <button className="ListSubmitBtn" onClick={() => navigate('/listshare')}>다음</button>
            </div>
            </div>
            <Logo/>
        </div>
    )
}


