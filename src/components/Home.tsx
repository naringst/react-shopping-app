import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../api/instance";
import { Link } from "react-router-dom";
import { Item } from "../interface/interface";

export default function Home() {
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
                <ItemName>{item.price}</ItemName>
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
