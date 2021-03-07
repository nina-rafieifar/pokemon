import { PokemonResistantAndWeaknesses, PokemonWeightAndWeight } from "./DetailItems";
import { fixture } from "@open-wc/testing";

test("PokemonWeightAndWeight renders the correct elements", async () => {
  const element = await fixture(PokemonWeightAndWeight("Weight", 10, 12));
  expect(element).toMatchSnapshot();
});

test("PokemonResistantAndWeaknesses renders the correct elements", async () => {
  const element = await fixture(PokemonResistantAndWeaknesses("Weight", "water,fire"));
  expect(element).toMatchSnapshot();
});
