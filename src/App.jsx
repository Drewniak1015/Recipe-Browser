import React from "react";
import Pages from "./Comps/Pages/Pages";
import Category from "./Comps/Category/Category";
import "./main.css";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import Search from "./Comps/Search/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <HashRouter>
      <Nav>
        <Logo to={"/"}>
          <GiKnifeFork />
          Recipe App
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </HashRouter>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
