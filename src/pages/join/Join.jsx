import React, { useState } from "react";
import { useEffect } from "react";
import './Join.css';

// const User ={
//     email: 'sw@naver.com',
//     pw: 'sw12345!!'
// }
export default function Join(){
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);
    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };
      
      const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };

      const handleName = (e) =>{
        setName(e.target.value);
      }
      const onClickConfirm = (event) => {
          event.preventDefault();
      
          const data = { email: email, password: pw, name: name};
          console.log(data);
      
          fetch("/signup", {
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

    // const onClickConfirm = () => {
    //     if(email===User.email && pw===User.pw){
    //         alert('회원가입 성공');
    //     }else{
    //         alert('이메일과 비밀번호를 바르게 입력해주세요.');
    //     }
    // }

    useEffect(() => {
    if(emailValid&&pwValid){
        setNotAllow(false)
        return;
    }
    setNotAllow(true);

    }, [emailValid, pwValid]);

    return(
        <div className="JoinPage">
            <div className="JoinTitle">
                회원가입하기
            </div>

            <div className="JoinContent">
            <div className="JoinInputTitle">이메일</div>
            <div className="JoinInputWrap">
                <input
                type='text'
                className="JoinInput"
                placeholder="swacademy@naver.com"
                value={email}
                onChange={handleEmail}/>
            </div> 
            <div className="JoinErrorMessageWrap">
                {!emailValid&&email.length>0&&(
                        <div>올바른 이메일을 입력해주세요</div>
                )}
            </div>
            <div style={{marginTop: "6px"}}className="JoinInputTitle">비밀번호</div>
            <div className="JoinInputWrap">
                <input
                type='password'
                className="JoinInput"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                value={pw}
                onChange={handlePw}/>
            </div> 
            <div className="JoinErrorMessageWrap">
                {!pwValid && pw.length>0&&(
                    <div>영문, 숫자, 특수문자 포함 8자 이상</div>
                )}
            </div>
            <input type='text' value={name} onChange={handleName}></input>
            </div>

            <div>
                <button onClick={onClickConfirm} disabled={notAllow} className="JoinBottomButton">회원가입</button>
            </div>
        </div>
    );
}