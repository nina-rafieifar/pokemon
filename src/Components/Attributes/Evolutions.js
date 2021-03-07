import { html, LitElement, css } from "lit-element";
class PokemonEvolution extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      number: { attribute: true },
      image: { attribute: true }
    };
  }
  static get styles() {
    return css`
      .pokemon__evolution_general-attributes {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 50%;
        background-color: #ffffff;
        border: 1px solid #3b3939;
        height: 25vh;
        width: 25vh;
        color: #3b3939;
      }
      .pokemon__evolution_name {
        margin: 0;
        margin: -25px;
        font-size: small;
      }
      .pokemon__evolution_number {
        padding: 0.4rem 0px;
        font-family: Tigerious;
        margin: 0.1rem;
      }
      .pokemon__evolution_image {
        height: 12vh;
        pointer-events: none;
        text-align: left;
      }
    `;
  }
  render() {
    return html`<div class="pokemon__evolution_general-attributes">
      <p class="pokemon__evolution_number">${this.number}</p>
      <img alt=${this.name} src=${this.image} class="pokemon__evolution_image" />
      <h4 class="pokemon__evolution_name">${this.name}</h4>
    </div>`;
  }
}

customElements.define("pokemon-evolution", PokemonEvolution);
