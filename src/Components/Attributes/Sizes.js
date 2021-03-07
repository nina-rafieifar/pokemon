import { html, LitElement, css } from "lit-element";
import { PokemonWeightAndWeight } from "./DetailItems";
class PokemonSizes extends LitElement {
  static get properties() {
    return {
      weightMax: { attribute: true },
      weightMin: { attribute: true },
      heightMax: { attribute: true },
      heightMin: { attribute: true }
    };
  }
  static get styles() {
    return css`
      .pokemon__details_sizes {
        display: flex;
        font-family: Tigerious;
      }
      .pokemon__details_items {
      }
      .size__text {
      }
      .size {
        background: #3524b5;
        padding: 0px 12px;
        border-radius: 5px;
        font-size: 13px;
        font-family: "Space Mono";
        display: inline-flex;
        min-width: 70%;
        justify-content: space-around;
        margin: 0.3rem 0;
        color: #ffffff;
      }
    `;
  }
  render() {
    return html`<div class="pokemon__details_sizes">
      ${PokemonWeightAndWeight("Weight", this.weightMax, this.weightMin)}
      ${PokemonWeightAndWeight("Height", this.heightMax, this.heightMax)}
    </div>`;
  }
}

customElements.define("pokemon-sizes", PokemonSizes);
