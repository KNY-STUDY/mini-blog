import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        margin: 0 auto;
        :not(:last-child) {
            margin-bottom: 10px;
        }
    }
`;

const FormArea = styled.form`
    text-align:left;
`;


const InputWrap = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;

const FormLabel = styled.label`
    display:block;
    margin-bottom: 10px;
`;

const FormInput = styled.input`
    display:block;
    margin-bottom: 5px;
    width: 300px;
    height:30px;
    line-height: 30px;
`;

const ErrorMessage = styled.div`
    color: red;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 20px;
`
//더미테스트
const User = {
    id: 'testtt',
    pw: 'test1234@'
  }
  

function LoginPage() {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
      if(idValid && pwValid) {
        setNotAllow(false);
        return;
      }
      setNotAllow(true);
    }, [idValid, pwValid]);

    const handleId = (e) => {
      setId(e.target.value);
      const regex =
        /^(?=.*[a-z]).{5,10}$/;
      if (regex.test(e.target.value)) {
        setIdValid(true);
      } else {
        setIdValid(false);
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
    const onClickConfirmBtn = () => {
      if(id === User.id && pw === User.pw) {
        alert('로그인에 성공했습니다.')
      } else {
        alert("등록되지 않은 회원입니다.");
      }
    }

    return (
        <Wrapper>
            <Container>
                <h2>Login</h2>               
                <FormArea>
                    <InputWrap>
                        <FormLabel>아이디를 입력해주세요</FormLabel>
                        <FormInput
                            type="text"
                            placeholder="아이디를 입력해주세요"
                            value={id}
                            onChange={handleId}
                        />
                    </InputWrap>

                    <ErrorMessage>
                        {!idValid && id.length > 0 && (
                            <div>올바른 아이디를 입력해주세요.(최소 5자 이상 10자 이하)</div>
                        )}
                    </ErrorMessage>
                
                    <InputWrap>
                        <FormLabel>패스워드를 입력해주세요</FormLabel>
                        <FormInput
                            type="password"
                            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                            value={pw}
                            onChange={handlePw}
                        />
                    </InputWrap>

                    <ErrorMessage>
                        {!pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    </ErrorMessage>

                    <Button title="확인" disabled={notAllow} onClick={onClickConfirmBtn} />       
                
                    <Button
                        title="회원가입"
                        onClick={() => {
                            navigate("/join-page");
                        }}
                    />
                </FormArea>
            </Container>
        </Wrapper>
    ); 
}

export default LoginPage;