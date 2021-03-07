import React from "react";
import { render } from "@testing-library/react";
import { Pokemon } from "./View";
import { pokemon } from "../../mocks/pokemon";

test("renders Pokemon", () => {
  const element = render(<Pokemon pokemon={pokemon} />);
  expect(element).toMatchSnapshot();
});

test("renders Pokemon no evolve", () => {
  const noEvolvePokemon = pokemon;
  noEvolvePokemon.evolutions = null;
  const element = render(<Pokemon pokemon={noEvolvePokemon} />);
  expect(element).toMatchSnapshot();
});
