import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { instance } from "../api/instance";
import { Container } from "../style";
import styled from "styled-components";

interface Item {
  id: String;
  title: String;
  image: String;
  price: Number;
  category: String;
  description: String;
}

export default function Detail({ cartItem, setCartItem }: any) {
  const params = useParams();
  const itemId = params.id;

  const [item, setItem] = useState<Item>();

  async function getDetailData() {
    try {
      const response = await instance.get(`/products/${itemId}`);
      setItem(response.data);
      console.log(item);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailData();
  }, []);

  const putItemToCart = () => {
    setCartItem([item, ...cartItem]);
  };

  return (
    <Div>
      <img src={String(item?.image)} width="300px" height="400px"></img>
      <ItemBox>
        <ItemCategory>{item?.category}</ItemCategory>
        <ItemTitle>{item?.title}</ItemTitle>
        <ItemPrice>$ {String(item?.price)}</ItemPrice>

        <ItemDesc>{item?.description}</ItemDesc>
        <div>
          <button onClick={putItemToCart}>장바구니에 담기</button>
          <Link to="/cart">
            <button>장바구니로 이동</button>
          </Link>
        </div>
      </ItemBox>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 30px 50px;
`;
const ItemCategory = styled.h2`
  color: #d9d9d9;
  font-size: 24px;
`;

const ItemTitle = styled.h1`
  font-size: 30px;
`;
const ItemDesc = styled.p`
  color: gray;
  font-size: 15px;
`;

const ItemPrice = styled.h1`
  font-size: 45px;
`;
const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 0 20px;
  text-align: center;
  width: 600px;
`;
