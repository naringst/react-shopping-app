import React from "react";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Layout from "./components/Layout";
import "./App.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
