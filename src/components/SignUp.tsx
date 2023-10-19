import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../style";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handlePwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    //비밀번호 6자 이상이어야 ...
    console.log("submit");
    console.log(email);
    console.log(password);
    console.log(pwCheck);
    if (password === pwCheck) {
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          setEmail("");
          setPassword("");
          setPwCheck("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  return (
    <Container>
      <form>
        <label htmlFor="email">아이디</label>
        <Input name="email" type="email" value={email} onChange={handleEmail} />
        <label htmlFor="password">비밀번호</label>
        <Input
          name="password"
          type="password"
          value={password}
          onChange={handlePw}
        />
        <label htmlFor="passwordCheck">비밀번호 확인</label>
        <Input
          name="passwordCheck"
          type="password"
          value={pwCheck}
          onChange={handlePwCheck}
        ></Input>
      </form>
      <LoginButton onClick={handleSubmit}>회원가입</LoginButton>
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
