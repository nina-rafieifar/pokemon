import React from "react";
import { Details } from "./Details";
import { Evolutions } from "./Evolutions";
import "../Attributes/GeneralAttributes";
import "./style.scss";

export function Pokemon(prop) {
  return (
    <div id="pokemon" className="pokemon">
      <div className="pokemon__details">
        <Details pokemon={prop.pokemon} />
      </div>
      <div className="pokemon__general">
        <pokemon-general-attr
          name={prop.pokemon.name}
          number={prop.pokemon.number}
          image={prop.pokemon.image}
        ></pokemon-general-attr>
      </div>
      <div className="pokemon__evolutions">
        <Evolutions pokemon={prop.pokemon} />
      </div>
    </div>
  );
}
