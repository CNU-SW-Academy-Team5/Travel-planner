import React from "react";
import './MainPlan.css';
import { useState } from 'react';
import { IoEarth } from "react-icons/io5";
import PlanGraph from "../../component/plangragh/PlanGraph";
import MainList from "../mainlist/MainList";
import { useEffect } from "react";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUnorderedList} from "react-icons/ai";
import { useNavigate } from "react-router";
import Logo from "../../component/logo/Logo";

export default function MainPlan(){

  const [date, setDate] = useState(new Date());
  const [planName, setPlanName] = useState('제주도 여행');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/')
      .then(response => response.json())
      .then(data => {
        setPlanName(data);
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
      <button className="listBtn" onClick={() => navigate('/mainlist')}>리스트<AiOutlineUnorderedList/></button>
      </div>
      <div className="planGraphContainer">
      <PlanGraph/>
      <PlanGraph/>
      <PlanGraph/>
      </div>
      </div>    
    )
}