import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Mypage from "./components/Mypage";
import Detail from "./components/Detail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Item } from "./interface/interface";

function App() {
  const [cartItem, setCartItem] = useState<Item[]>([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/detail/:id"
            element={<Detail cartItem={cartItem} setCartItem={setCartItem} />}
          ></Route>
          <Route
            path="cart"
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          ></Route>
          <Route path="mypage" element={<Mypage />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
