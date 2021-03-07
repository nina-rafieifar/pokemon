export const pokemon = {
  attacks: { fast: [{ damage: 12, name: "Tackle" }], special: [{ damage: 70, name: "Power Whip" }] },
  evolutionRequirements: { amount: 25, name: "Bulbasaur candies" },
  evolutions: [
    {
      id: "UG9rZW1vbjowMDI=",
      number: "002",
      name: "Ivysaur",
      image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      id: "UG9rZW1vbjowMDM=",
      number: "003",
      name: "Venusaur",
      image: "https://img.pokemondb.net/artwork/venusaur.jpg"
    }
  ],
  height: { __typename: "PokemonDimension", minimum: "0.61m", maximum: "0.79m" },
  id: "UG9rZW1vbjowMDE=",
  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
  name: "Bulbasaur",
  number: "001",
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  weight: { minimum: "6.04kg", maximum: "7.76kg" }
};
