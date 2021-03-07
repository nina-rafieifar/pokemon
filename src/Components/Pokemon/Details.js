import React from "react";
import "../Attributes/Abilities";
import "../Attributes/Attacks";
import "./style.scss";

export function Details(prop) {
  return (
    <div className="pokemon__details_table">
      <pokemon-abilities resistant={prop.pokemon.resistant} weaknesses={prop.pokemon.weaknesses}></pokemon-abilities>
      <div className="pokemon__details_attacks">
        {prop.pokemon.attacks.fast && (
          <div className="chips">
            <div className="chip__text">Fast</div>
            {prop.pokemon.attacks.fast.map((i) => (
              <pokemon-attacks name={i.name} damage={i.damage} key={i.name}></pokemon-attacks>
            ))}
          </div>
        )}
        {prop.pokemon.attacks.special && (
          <div className="chips">
            <div className="chip__text">Special</div>
            <div>
              {prop.pokemon.attacks.special.map((i) => (
                <pokemon-attacks name={i.name} damage={i.damage} key={i.name}></pokemon-attacks>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
