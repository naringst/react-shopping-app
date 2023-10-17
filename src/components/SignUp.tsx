import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../style";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPw(e.target.value);
  };
  const handlePwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwCheck(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    console.log(email);
    console.log(pw);
    console.log(pwCheck);
    if (pw === pwCheck) {
    }
  };

  return (
    <Container>
      <form>
        <label htmlFor="email">아이디</label>
        <Input
          id="sign-up-email"
          type="email"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="sign-up-pw">비밀번호</label>
        <Input id="sign-up-pw" type="password" value={pw} onChange={handlePw} />
        <label htmlFor="sign-up-pw">비밀번호 확인</label>
        <Input
          id="pw"
          type="password"
          value={pwCheck}
          onChange={handlePwCheck}
        ></Input>
        <LoginButton onSubmit={handleSubmit}>회원가입</LoginButton>
      </form>
    </Container>
  );
}

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 10px 0;
`;

const LoginButton = styled.button`
  width: 310px;
  height: 40px;
  margin: 10px 0;
`;
