import React from "react";

export default function Cart({ cartItem, setCartItem }: any) {
  const totalPrice = 0;
  const deleteItem = (id: number) => {
    setCartItem(
      cartItem.filter((item: any) => {
        return item.id !== id;
      })
    );
  };
  return (
    <div>
      {cartItem.map((item: any) => (
        <div>
          <div>{item?.title}</div>
          <div>{item?.price}</div>

          <div>counter</div>
          <button>삭제</button>
        </div>
      ))}
      <div>
        <span>합계 : ${totalPrice}</span>
        <button>계산하기</button>
      </div>
    </div>
  );
}
