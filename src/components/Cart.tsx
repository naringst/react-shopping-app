import React, { useEffect } from "react";
import styled from "styled-components";

export default function Cart({ cartItem, setCartItem }: any) {
  let totalPrice = 0;

  const deleteItem = (e: any) => {
    setCartItem(
      cartItem.filter((item: any) => {
        return item.id !== e.target.id;
      })
    );
  };

  function countTotal() {
    cartItem.forEach((item: any) => {
      console.log(item.price);
      totalPrice += Number(item.price);
      console.log(totalPrice);
    });
  }

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
            <div>{item?.price}</div>
          </DescDiv>
          <Counter>
            <button>-</button>
            <p>n개</p>
            <button>+</button>
          </Counter>
          <button>삭제</button>
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
