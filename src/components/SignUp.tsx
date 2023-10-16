import React from "react";
import styled from "styled-components";
import { Container } from "../style";

export default function SignUp() {
  return (
    <Container>
      <label htmlFor="email">아이디</label>{" "}
      <Input id="email" type="email"></Input>
      <label htmlFor="pw">비밀번호</label> <Input id="pw" type="pw"></Input>
      <label htmlFor="pw">비밀번호 확인</label>
      <Input id="pw" type="pw"></Input>
      <LoginButton>회원가입</LoginButton>
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
