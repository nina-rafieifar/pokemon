import React from "react";
import Carousel from "react-material-ui-carousel";
import "./style.scss";
import { useQuery } from "@apollo/client";
import { POKEMONS } from "../Queries/Pokemons";
import { Pokemon } from "../Pokemon/View";
import Spinner from "react-spinner-material";
export function Layout() {
  const { loading, error, data } = useQuery(POKEMONS);

  return loading ? (
    <div className="layout__spinner">
      <Spinner radius={80} color={"red"} stroke={8} visible={true} />
    </div>
  ) : error ? (
    <div className="layout__error">There has been an error. Please try again later.</div>
  ) : (
    <Carousel
      className="layout layout__carousel"
      indicators={false}
      autoPlay={false}
      animation="slide"
      timeout={500}
      swipe={true}
      cycleNavigation={false}
    ></Carousel>
  );
}
