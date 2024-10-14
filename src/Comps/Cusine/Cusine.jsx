import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Cusine() {
  const [cusine, setCusine] = useState([]);
  let params = useParams();
  const getCusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=243e13343d2a4ce8a1e9993f1537c635&number=10&cuisine=${name}`
    );
    const recipes = await data.json();
    setCusine(recipes.results);
  };
  useEffect(() => {
    getCusine(params.type);
    console.log(params.type);
  }, [params.type]);
  return (
    <Grid>
      {cusine.map((item) => {
        return (
          <Link to={"/recipe/" + item.id}>
            <Card key={item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cusine;
