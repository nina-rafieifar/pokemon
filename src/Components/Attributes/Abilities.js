import { html, LitElement, css } from "lit-element";
import { PokemonResistantAndWeaknesses } from "./DetailItems";
class PokemonAbilities extends LitElement {
  static get properties() {
    return {
      resistant: { attribute: true },
      weaknesses: { attribute: true }
    };
  }
  static get styles() {
    return css`
      .chips {
        display: grid;
      }
      .chip {
        display: inline-block;
        background: #919191;
        padding: 0 12px;
        border-radius: 5px;
        font-size: 13px;
        font-family: Space Mono;
        margin: 4%;
        color: #ffffff;
      }
      .chip_bug {
        background: #27a852;
      }
      .chip_dark {
        background: #30303b;
      }
      .chip_grass {
        background: #88cc00;
      }
      .chip_ghost {
        color: #000000;
        background: #e8e8ff;
      }
      .chip_ground {
        background: #919191;
        background: linear-gradient(to top, #875850 50%, #919191 50%);
      }
      .chip_fairy {
        color: #000000;
        background: #ffd1e8;
        background: linear-gradient(to top, #8373ff 50%, #ffd1e8 50%);
      }
      .chip_fire {
        background: #ff0000bb;
      }
      .chip_flying {
        background: #56b8b0;
      }
      .chip_ice {
        color: #000000;
        background: #e6e6e6;
      }
      .chip_water {
        background: #3e86fa;
      }
      .chip__text {
        font-family: Tigerious;
      }
      .pokemon__details_resistance_weakness {
        display: flex;
        justify-content: space-around;
      }
    `;
  }
  render() {
    return html` <div class="pokemon__details_resistance_weakness">
      ${PokemonResistantAndWeaknesses("Resistances", this.resistant)}${PokemonResistantAndWeaknesses(
        "Weaknesses",
        this.weaknesses
      )}
    </div>`;
  }
}

customElements.define("pokemon-abilities", PokemonAbilities);
