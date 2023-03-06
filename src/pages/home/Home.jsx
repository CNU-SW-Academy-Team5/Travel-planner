import React, { useEffect } from "react";
import './Home.css';
import { useNavigate } from "react-router";
import { useState } from "react";
import Logo from "../../component/logo/Logo";

export default function Home(){ 
    const navigate = useNavigate();
    const [travelList, setTravelList] = useState( [{name: '', startDate: '', endDate: ''}])
    useEffect(() => {
        fetch('/plan-list')  
          .then(response => response.json())
          .then(data => {
            setTravelList(data.data.content);
            console.log(data.data.content);
          })
          .catch(error => {
            console.error('Error:', error);
          });
         
      }, []);
      const handleDelete = (id) => {
        fetch(`/plan-list/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            setTravelList(prevList => prevList.filter(item => item.id !== id));
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    return(    
    <div>  
        <div className="myListWrap">
            <p className="myList">나의 일정</p>
            <p className="myListCount">{travelList.length}</p>
        </div>
        <button className="myListPlusBtn" onClick={() => navigate('/listplus')}>
            <p className="myList">일정 추가</p> 
            <p className="myListPlusCount">+</p>  
        </button>
        <Logo/>
        <div className="myListShowWrap">
        {travelList.map((item) => (
                <div className="myListShowBoxTable" key={item.id}>
                    <table>
                        <tbody>
                        <tr className="myTrip">
                            <td>여행 이름</td>
                            <td>{item.name}</td>
                            <td>여행 일자</td>
                            <td>{`${item.startDate} ~ ${item.endDate}`}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button>일정 수정</button>
                    <button>일정 공유</button>
                    <button onClick={()=>handleDelete(item.id)}>일정 삭제</button>
                </div>
        ))}
        </div>
        
    </div>
    )
}