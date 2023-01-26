import React from "react";
import './ListPlus.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ListPlus(){

        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        const [showCalendar, setShowCalendar] = useState(false);
        const [date, setDate] = useState(new Date());

      
    return(
        <div className="ListPlusWrap">
            <p className="ListPlus">일정 추가하기</p>
            <div className="List">
            <div className="ListBox">
            <p className="ListName">일정 이름</p>
            <input type={"text"} placeholder="제주도 여행" className="textBox"></input>
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
            <input type={"text"} placeholder="제주도" className="textBox"></input>
            </div>
            </div>
        </div>
    )
}


