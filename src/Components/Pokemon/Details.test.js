import React from "react";
import { render } from "@testing-library/react";
import { Details } from "./Details";
import { pokemon } from "../../mocks/pokemon";

test("renders Pokemon", () => {
  const element = render(<Details pokemon={pokemon} />);
  expect(element).toMatchSnapshot();
});

test("renders Pokemon no attacks", () => {
  const noAttackPokemon = pokemon;
  noAttackPokemon.attacks.fast = null;
  noAttackPokemon.attacks.special = [];
  const element = render(<Details pokemon={noAttackPokemon} />);
  expect(element).toMatchSnapshot();
});
