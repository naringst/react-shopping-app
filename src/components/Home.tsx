import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <section>
        <Button>모두</Button>
        <Button>전자기기</Button>
        <Button>쥬얼리</Button>
        <Button>남성의류</Button>
        <Button>여성의류</Button>
      </section>
      <Span>showing : n items</Span>
      <GridSection>
        <ItemDiv>div</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
        <ItemDiv>ㅇ</ItemDiv>
      </GridSection>
    </div>
  );
}

const Button = styled.button`
  width: 140px;
  height: 60px;
  margin: 5px 10px;
  border-radius: 5px;
  transition: 0.3s;
  background: white;
  border: 1px solid #545454;
  font-size: 18px;
  font-weight: 400;
  &:hover {
    background: #545454;
    transition: 0.3s;
    color: white;
  }
`;

const Span = styled.p`
  margin-left: 100px;
  text-align: left;
`;

const GridSection = styled.section`
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const ItemDiv = styled.div`
  border: 1px solid black;
`;
