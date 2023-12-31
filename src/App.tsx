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
import SignUp from "./components/SignUp";

function App() {
  const [cartItem, setCartItem] = useState<Item[]>([]);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const setLogin = () => {
    setIsLoggedIn(true);
  };
  const setLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLoggedIn={isLoggedin} setIsLoggedIn={setIsLoggedIn} />
          }
        >
          <Route
            path="/"
            element={<Home cartItem={cartItem} setCartItem={setCartItem} />}
          ></Route>
          <Route
            path="/detail/:id"
            element={<Detail cartItem={cartItem} setCartItem={setCartItem} />}
          ></Route>
          <Route
            path="cart"
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          ></Route>
          <Route path="mypage" element={<Mypage />}></Route>
          <Route
            path="login"
            element={
              <Login
                setLogin={setLogin}
                isLoggedIn={isLoggedin}
                setLogout={setLogout}
              />
            }
          ></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
