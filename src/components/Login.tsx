import React from "react";
import { ColumnFlexDiv, Container } from "../style";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <h1>로그인</h1>
      <ColumnFlexDiv>
        <Input></Input>
        <Input></Input>
      </ColumnFlexDiv>
      <LoginButton>로그인</LoginButton>
      <span>
        회원이 아니신가요? <Link to="/signup">회원가입하기</Link>
      </span>
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
