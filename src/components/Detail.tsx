import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { instance } from "../api/instance";

interface Item {
  id: String;
  title: String;
  image: String;
  price: Number;
  category: String;
}

export default function Detail() {
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

  return (
    <div>
      <div>{itemId}</div>
      <div>{item?.category}</div>
      <img src={String(item?.image)} width="300px" height="400px"></img>
    </div>
  );
}
