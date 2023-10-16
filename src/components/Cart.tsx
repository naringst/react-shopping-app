import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Cart({ cartItem, setCartItem }: any) {
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItem = (e: any) => {
    //여기서 그냥 처리해버림
    if (cartItem.length === 1) {
      setTotalPrice(0);
    }

    setCartItem(
      cartItem.filter((item: any) => {
        return item.id != e.target.id;
      })
    );
  };

  const countTotal = () => {
    let totalPrice = 0;
    cartItem.forEach((item: any) => {
      totalPrice += Number(item.price);
      setTotalPrice(totalPrice);
    });
  };

  useEffect(() => {
    countTotal();
  }, [cartItem]);

  return (
    <div>
      {cartItem.map((item: any) => (
        <Div>
          <img src={item?.image} width="80px" />
          <DescDiv>
            <div>{item?.title}</div>
            <div>${item?.price}</div>
          </DescDiv>
          <Counter>
            <button>-</button>
            <p>n개</p>
            <button>+</button>
          </Counter>
          <button onClick={deleteItem} id={item.id}>
            삭제
          </button>
        </Div>
      ))}
      <div>
        <span>합계 : ${totalPrice}</span>
        <button>계산하기</button>
      </div>
    </div>
  );
}

const Div = styled.div`
  display: flex;
  margin: 30px 50px;
  justify-content: space-between;
`;

const Counter = styled.div`
  display: flex;
  margin: 30px 30px;
`;
const DescDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
