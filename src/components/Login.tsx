import React, { useState } from "react";
import { ColumnFlexDiv, Container } from "../style";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ setLogin, isLoggedIn, setLogout }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyDk8anwaHkB3mD5wXJ1oW0cuc65zDOKzZQ",
    authDomain: "react-shopping-7c569.firebaseapp.com",
    projectId: "react-shopping-7c569",
    storageBucket: "react-shopping-7c569.appspot.com",
    messagingSenderId: "1046827400753",
    appId: "1:1046827400753:web:25e1cc9d4539884b009f10",
    measurementId: "G-59ZPS6CMCW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  let navigate = useNavigate();
  let location = useLocation();

  const handleLogin = (e: any) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("loggedin :", user);
        setLogin();
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const logoutProcess = () => {
    const real = window.confirm("로그아웃하시겠습니까?");
    if (real) {
      setLogout();
    }

    navigate("/");
  };

  return (
    <Container>
      {!isLoggedIn ? (
        <>
          <h1>로그인</h1>
          <ColumnFlexDiv>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </ColumnFlexDiv>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
          <span>
            회원이 아니신가요? <Link to="/signup">회원가입하기</Link>
          </span>
        </>
      ) : (
        <>{logoutProcess()}</>
      )}
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
