import React, { useState } from 'react';
import './ListShare.css';
import { useNavigate } from "react-router";

const ListShare = () => {
  const [parties, setParties] = useState([]);
  const navigate = useNavigate();

  const handleAddParty = (name) => {
    setParties([...parties, name]);
  };

  const handleRemoveParty = (index) => {
    setParties(parties.filter((party, i) => i !== index));
  };

  return (
    <div className='ListShareWrap'>
    
      <p className='ListShareName'>일정 공유/관리</p>
      <div>
        <button className='PlusButton' onClick={() => handleAddParty(prompt("일행을 추가하세요."))}>
          추가 {/*추가 버튼 누르면 '일행을 추가하세요' 경고창 -> 이름 추가*/} 
        </button>
        <button className='SaveButton'onClick={() => navigate('/main')}>
            저장 {/*저장 누르면 다음 페이지(메인페이지)로*/}
        </button>
        <div className='ListShareUl'>
        <ul>
          {parties.map((party, index) => (
            <li className='ListShareLi' key={index}>
            <button className='MinusButton' onClick={() => handleRemoveParty(index)}>
                삭제
            </button>    
              {party}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default ListShare;