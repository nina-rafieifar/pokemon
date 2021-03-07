import { html, LitElement, css } from "lit-element";

class PokemonAttr extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      number: { attribute: true },
      image: { attribute: true }
    };
  }
  static get styles() {
    return css`
      .pokemon__general-attributes {
        box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 22px;
        background-color: #ffffff;
        max-height: 87vh;
      }
      .pokemon__general-attributes:hover {
        box-shadow: 0 35px 45px 0 rgba(0, 0, 0, 0.2);
      }
      .pokemon__name {
        margin: 0;
      }
      .pokemon__number {
        padding: 1rem 0;
        font-family: Tigerious;
      }
      .pokemon__image {
        height: 50vh;
        pointer-events: none;
        text-align: left;
      }
    `;
  }
  render() {
    return html`<div class="pokemon__general-attributes">
      <h2 class="pokemon__number">${this.number}</h2>
      <img alt=${this.name} src=${this.image} class="pokemon__image" />
      <h1 class="pokemon__name">${this.name}</h1>
    </div>`;
  }
}

customElements.define("pokemon-general-attr", PokemonAttr);
