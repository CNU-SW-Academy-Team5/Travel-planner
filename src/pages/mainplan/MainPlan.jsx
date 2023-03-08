import React from "react";
import './MainPlan.css';
import { useState } from 'react';
import { IoEarth } from "react-icons/io5";
import PlanGraph from "../../component/plangragh/PlanGraph";
import { useEffect } from "react";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUnorderedList} from "react-icons/ai";
import { useNavigate } from "react-router";
import Logo from "../../component/logo/Logo";

export default function MainPlan(){

  const [startDate, setStartDate] = useState('');
  const [planName, setPlanName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    var sessionId=sessionStorage.getItem("id");
    fetch(`/plan/${sessionId}`)
      .then(response => response.json())
      .then(data => {
        setPlanName(data.data.name);
        setStartDate((data.data.startDate));
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return(
    <div>
      <Logo/>
      <div className="planName">{planName}<IoEarth className="plannerIcon"/>
      <button className="homeBtn" onClick={() => navigate('/home')}>홈<AiOutlineHome/></button>
      <button className="listBtn">리스트<AiOutlineUnorderedList/></button>
      </div>
      <div className="planGraphContainer">
      <PlanGraph date={startDate}/> 
      <PlanGraph/>
      <PlanGraph/>
      </div>
      </div>      
    )
}