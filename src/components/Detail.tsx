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
  count: Number;
}

export default function Detail({ cartItem, setCartItem }: any) {
  const params = useParams();
  const itemId = params.id;

  const [item, setItem] = useState<Item>();

  async function getDetailData() {
    try {
      const response = await instance.get(`/products/${itemId}`);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDetailData();
  }, []);

  const putItemToCart = () => {
    //있는지 확인
    let isInCart = false;
    console.log(cartItem);
    if (cartItem) {
      isInCart = cartItem.some((it: any) => {
        return it.id === Number(itemId);
      });
    }

    if (isInCart) {
      //있으면 아이템 찾기
      //원래 카트에 있던 애를 새로 배열로 만들기
      const newCart = cartItem.filter((it: Item) => it.id == itemId)[0];
      newCart.count += 1;
      setItem(newCart);
      const newCartItems = cartItem.map((it: Item) =>
        it.id == itemId ? newCart : it
      );
      setCartItem(newCartItems);
    } else {
      item!.count = 1;
      setItem(item);
      setCartItem([item, ...cartItem]);
    }

    alert(`${item!.title}이 장바구니에 담겼습니다!`);
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
