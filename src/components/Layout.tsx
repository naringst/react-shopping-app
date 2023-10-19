import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Layout({ isLoggedIn, setIsLoggedIn }: any) {
  return (
    <div>
      <Header>
        <div>
          <StyledLink to="/">SHOP</StyledLink>
        </div>
        <div>
          <StyledLink to="cart">
            <Span>장바구니</Span>
          </StyledLink>
          <StyledLink to="mypage">
            <Span>마이페이지</Span>
          </StyledLink>
          <StyledLink to="login">
            {isLoggedIn ? <Span>로그아웃</Span> : <Span>로그인</Span>}
          </StyledLink>
        </div>
      </Header>
      <Outlet />
      <Footer>@all rights reserved</Footer>
    </div>
  );
}

const Header = styled.header`
  height: 30px;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 2px -2px #d9d9d9;
`;

const Span = styled.span`
  margin: 0px 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Footer = styled.footer`
  padding: 10px 0;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background: #d9d9d9;
`;
