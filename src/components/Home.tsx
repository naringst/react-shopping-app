import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/instance";
import { Link } from "react-router-dom";
import { Item } from "../interface/interface";

export default function Home({ cartItem, setCartItem }: any) {
  const [itemLists, setItemLists] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>(itemLists);

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  useEffect(() => {
    setFilteredItems(itemLists);
  }, [itemLists]);

  async function getData() {
    try {
      const response = await instance.get("/products");
      setItemLists(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const filterItem = (e: React.MouseEvent<HTMLElement>) => {
    if (e.currentTarget.id === "all") {
      setFilteredItems(itemLists);
    } else {
      setFilteredItems(
        itemLists.filter((item) => item.category === e.currentTarget.id)
      );
    }
  };

  const getCart = (e: any) => {
    //itmellsits에서 해당 아이템을 찾아서 담기
    e.preventDefault();
    const thisItem = filteredItems.filter((item) => {
      return String(item.id) === String(e.target.id);
    })[0];

    //cart에 있는지 확인하는 함수
    const isInCart = cartItem.some((it: any) => {
      return it.id === thisItem.id;
    });

    if (isInCart) {
      //cart Item에 있다면 -> 카운트 추가
      const upCountItem = cartItem.filter(
        (it: any) => it.id === thisItem.id
      )[0];
      upCountItem.count += 1;
      setCartItem(
        cartItem.map((it: any) => (it.id === upCountItem.id ? upCountItem : it))
      );
    } else {
      //cart에 Item 없다면 -> 담기
      const addItem = filteredItems.filter(
        (it: any) => it.id === thisItem.id
      )[0];
      addItem.count = 1;
      setCartItem([addItem, ...cartItem]);
    }

    alert(`${thisItem.title}이 장바구니에 담겼습니다!`);
  };

  return (
    <Container>
      <h1>Products</h1>
      <section>
        <Button id="all" onClick={filterItem}>
          모두
        </Button>
        <Button id="electronics" onClick={filterItem}>
          전자기기
        </Button>
        <Button id="jewelery" onClick={filterItem}>
          쥬얼리
        </Button>
        <Button id="men's clothing" onClick={filterItem}>
          남성의류
        </Button>
        <Button id="women's clothing" onClick={filterItem}>
          여성의류
        </Button>
      </section>
      <Span>showing : {filteredItems.length} items</Span>
      <GridSection>
        {filteredItems.map((item: any) => {
          return (
            <Link to={`detail/${item.id}`}>
              <ItemDiv
                key={item.id}
                onClick={() => {
                  console.log("상세페이지 이동");
                  console.log(item.id);
                }}
              >
                <img src={item.image} width="30px" height="50px" />
                <ItemName>{item.title}</ItemName>
                <ItemName>${item.price}</ItemName>
                <button id={item.id} onClick={getCart}>
                  장바구니에 담기
                </button>
              </ItemDiv>
            </Link>
          );
        })}
      </GridSection>
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

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
  padding: 5px 50px;
  display: grid;
  grid-template-rows: 200px 200px 200px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  grid-column-gap: 30px;
  grid-row-gap: 40px;
`;

const ItemDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.h2`
  font-size: 14px;
`;
