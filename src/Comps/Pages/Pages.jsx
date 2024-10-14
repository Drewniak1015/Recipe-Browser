import React from "react";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import Cusine from "../Cusine/Cusine";
import Searched from "../Search/Searched";
import Recipe from "../Recipe/Recipe";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cusine/:type" element={<Cusine />}></Route>
      <Route path="/searched/:search" element={<Searched />}></Route>
      <Route path="/recipe/:name" element={<Recipe />}></Route>
    </Routes>
  );
};

export default Pages;
