import React from "react";
import './ListPlus.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router";

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
            <p className="ListPlus">일정 추가하기</p>
            <div className="List">
            <div className="ListBox">
            <p className="ListName">일정 이름</p>
            <input type={"text"} placeholder="제주도 여행" className="textBox" value={name} onChange={nameInputhandle}></input>
            </div>
            <div className="ListBox">
            <div className="ListBoxCalendar">
            <p className="ListNameDate">여행 일자</p>
             <button className="CalendarBtn"onClick={() => setShowCalendar(!showCalendar)}>
              여행 달력 펼치기 {/*달력 펼쳐서 시작 날짜, 끝 날짜 설정*/}
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
               <div>
                 여행 시작: {startDate.toDateString()}
                 <br/>
                 여행 끝: {endDate.toDateString()}
               </div>
             </div>
            )}
             
             </div>
            <input type={"text"} placeholder="2022.12.28" className="textBox" value={`${startDate.toDateString()} ~ ${endDate.toDateString()}`}></input>
            </div>
            <div className="ListBox">
            <p className="ListName">방문 지역</p>
            <input type={"text"} placeholder="제주도" className="textBox" onChange={regionInputhandle} value={area}></input>  
            </div>
            <button type='submit'onClick={handleSubmit}>저장</button>
            <button onClick={() => navigate('/listshare')}>다음</button>
            </div>
        </div>
    )
}


