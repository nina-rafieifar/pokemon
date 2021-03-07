import { gql } from "@apollo/client";


export const POKEMONS = gql`
    query {
      pokemons(first: 150) {
        id
        number
        name
        image
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        resistant
        attacks {
          fast {
            name
            damage
          }
          special {
            name
            damage
          }
        }
        weaknesses
        evolutions {
          id
          number
          name
          image
          weight {
            minimum
            maximum
          }
        }
        evolutionRequirements {
          amount
          name
        }
      }
    }
  `;