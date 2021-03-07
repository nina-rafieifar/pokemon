import React from "react";
import { render } from "@testing-library/react";
import { Evolutions } from "./Evolutions";
import { pokemon } from "../../mocks/pokemon";

test("renders Pokemon", () => {
  const element = render(<Evolutions pokemon={pokemon} />);
  expect(element).toMatchSnapshot();
});

test("renders Pokemon no evolve", () => {
  const noEvolvePokemon = pokemon;
  noEvolvePokemon.evolutions = null;
  const element = render(<Evolutions pokemon={noEvolvePokemon} />);
  expect(element).toMatchSnapshot();
});
