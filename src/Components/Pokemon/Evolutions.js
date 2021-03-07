import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "../Attributes/Evolutions";
import "../Attributes/Sizes";
import "./style.scss";

export function Evolutions(prop) {
  return (
    <table className="pokemon__evolutions_table">
      <tbody>
        <tr>
          <td>
            <div className="pokemon__evolutions_container">
              <p>Evolution</p>
              {prop.pokemon.evolutions ? (
                <div className="pokemon__evolutions_items">
                  <pokemon-evolution
                    name={prop.pokemon.name}
                    number={prop.pokemon.number}
                    image={prop.pokemon.image}
                  ></pokemon-evolution>
                  <KeyboardArrowRightIcon />
                  <pokemon-evolution
                    name={prop.pokemon.evolutions[0].name}
                    number={prop.pokemon.evolutions[0].number}
                    image={prop.pokemon.evolutions[0].image}
                  ></pokemon-evolution>
                </div>
              ) : (
                <div className="pokemon__evolutions_items pokemon__evolutions_items_no-evolve">
                  <p>This Pokémon does not evolve.</p>
                  <div>
                    <pokemon-evolution
                      name={prop.pokemon.name}
                      number={prop.pokemon.number}
                      image={prop.pokemon.image}
                    ></pokemon-evolution>
                  </div>
                </div>
              )}
            </div>
          </td>
        </tr>
        <tr>
          <td className="pokemon__details_items">
            <pokemon-sizes
              weightMax={prop.pokemon.weight.maximum}
              weightMin={prop.pokemon.weight.minimum}
              heightMax={prop.pokemon.height.maximum}
              heightMin={prop.pokemon.height.minimum}
            ></pokemon-sizes>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
