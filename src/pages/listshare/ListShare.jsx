import React, { useState } from 'react';
import './ListShare.css';
import { useNavigate } from "react-router";
import Logo from '../../component/logo/Logo';
import {RiUserShared2Line} from "react-icons/ri";

const ListShare = () => {
  const [parties, setParties] = useState([]);
  const navigate = useNavigate();
  const [newParty, setNewParty] = useState('');

  const handleAddParty = (name) => {
    setParties([...parties, name]);
    const data = {parties: parties};
    console.log(data);

    fetch('/user-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error: ', error);
    });
    setNewParty('');
  };

  const handleRemoveParty = (index) => {
    setParties(parties.filter((party, i) => i !== index));
  };

  const InputPartyName = (e) => {
    setNewParty(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div className='ListShareWrap'>
    <p className="ListShare">일정 공유/관리<RiUserShared2Line className="CalendarIcon"/></p>
      <div className='ListShareForm'>
       <form onSubmit={(e) => {
        e.preventDefault();
        handleAddParty(e.target.name.value);
        }}>
        <input className='PlusName' type="text" name="name" onChange={InputPartyName} />
        <button className='PlusButton' type="submit" value={parties}>추가</button>
       </form>
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
        <button className='SaveButton'onClick={() => navigate('/mainPlan')}>
            다음
        </button>
      </div>
      <Logo/>
    </div>
  );
};

export default ListShare;