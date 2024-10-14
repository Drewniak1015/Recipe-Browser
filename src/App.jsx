import React from "react";
import Home from "./Comps/Home/Home";
import Pages from "./Comps/Pages/Pages";
import Category from "./Comps/Category/Category";
import "./main.css";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./Comps/Search/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div>
      <Nav>
        {/* <Logo to={"/"}>
          <GiKnifeFork></GiKnifeFork>
        </Logo>  */}
      </Nav>
      <BrowserRouter>
        <Search></Search>
        <Category></Category>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
export default App;
