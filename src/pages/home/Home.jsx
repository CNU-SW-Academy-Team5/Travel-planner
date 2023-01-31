import React from "react";
// import spongebob from "C:/Users/aksgd/OneDrive/바탕 화면/Travel-planner-FE/frontend/src/img/spongebob.png";
import './Home.css';
import { useNavigate } from "react-router";
import { useState } from "react";


export default function Home(){ 
    const navigate = useNavigate();
    const [trip, setTrip] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [listCount, setListCount] = useState(0);

    return(
    <div>
        <div className="nameWrap">    
            <img className="myImg" img="https://w.namu.la/s/bd52223e4d1f11fcc4c7f6506bf3321b26579bf118db6c1ca20492b9af4228a414edd25f1006baace220e4ca771288e0f38d6cbf253ae4e9d39aaf4b881600b0d65e518e7d94891837ee9a0c6a723aac0f4d2b7bf4a65b36bd1fe636aa49c632" alt="spongebob"/>
            <p className="myId">mall</p>
        </div>
        <div className="myListWrap">
            <p className="myList">나의 일정</p>
            <p className="myListCount">{listCount}</p>
        </div>
        <button className="myListPlusWrap" onClick={() => navigate('/listplus')}>
            <p className="myListPlus">일정 추가</p> 
            <p className="myListPlusCount">+</p>  
        </button>
        <div className="myListShowWrap">
            <p className="myListShow">일정 리스트</p>
            <div className="myListShowBox">
                <div className="myListShowBoxTable">
                    <table>
                        <tbody>
                        <tr>
                            <td className="myTrip">여행 이름</td>
                            <td>{trip}</td>
                            <td className="myTrip">여행 일자</td>
                            <td>{`${startDate.toDateString()} ~ ${endDate.toDateString()}`}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="button">일정 수정</button>
                    <button className="button">일정 공유</button>
                    <button className="button">일정 삭제</button>
                </div>
            </div>
            <div className="myListShowBox">
                <div className="myListShowBoxTable">
                    <table>
                        <tbody>
                        <tr>
                            <td className="myTrip">여행 이름</td>
                            <td>{trip}</td>
                            <td className="myTrip">여행 일자</td>
                            <td>{`${startDate.toDateString()} ~ ${endDate.toDateString()}`}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="button">일정 수정</button>
                    <button className="button">일정 수정</button>
                    <button className="button">일정 수정</button>
                </div>
            </div>
        </div>
    </div>
    )
}