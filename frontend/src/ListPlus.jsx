import React from "react";
import './ListPlus.css';

export default function ListPlus(){
    return(
        <div className="ListPlusWrap">
            <p className="ListPlus">일정 추가하기</p>
            <div className="List">
            <div className="ListBox">
            <p className="ListName">일정 이름</p>
            <input type={"text"} placeholder="제주도 여행" className="textBox"></input>
            </div>
            <div className="ListBox">
            <p className="ListName">여행 일자</p>
            <input type={"text"} placeholder="2022.12.28" className="textBox"></input>
            </div>
            <div className="ListBox">
            <p className="ListName">방문 지역</p>
            <input type={"text"} placeholder="제주도" className="textBox"></input>
            </div>
            </div>
        </div>
    )
}