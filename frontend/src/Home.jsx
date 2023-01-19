import React from "react";
import spongebob from "C:/Users/aksgd/OneDrive/바탕 화면/Travel-planner-FE/frontend/src/img/spongebob.png";
import './Home.css';
import { useNavigate } from "react-router";

export default function Home(){
    const navigate = useNavigate();

    return(
    <div>
        <div className="nameWrap">    
            <img className="myImg" src={spongebob} alt="spongebob"/>
            <p className="myId">mall</p>
        </div>
        <div className="myListWrap">
            <p className="myList">나의 일정</p>
            <p className="myListCount">3</p>
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
                            <td>제주도 여행</td>
                            <td className="myTrip">여행 일자</td>
                            <td>2022.12.28~2022.12.30</td>
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
                            <td>부산 여행</td>
                            <td className="myTrip">여행 일자</td>
                            <td>2022.12.28~2022.12.30</td>
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