import { html, LitElement, css } from "lit-element";
class PokemonAttacks extends LitElement {
  static get properties() {
    return {
      name: { attribute: true },
      damage: { attribute: true }
    };
  }
  static get styles() {
    return css`
      .chip {
        display: inline-block;
        background: #14855a;
        padding: 0 12px;
        border-radius: 5px;
        font-size: 13px;
        font-family: Space Mono;
        display: inline-flex;
        justify-content: space-around;
        min-width: 6rem;
        color: #ffffff;
        width: max-content;
      }
      .pokemon__details_item {
        padding: 0.15rem;
        height: 1.4rem;
      }
    `;
  }
  render() {
    return html`<div class="pokemon__details_item">
      <div class="chip">
        <span>${this.name}</span>
        |
        <span>${this.damage}</span>
      </div>
    </div>`;
  }
}

customElements.define("pokemon-attacks", PokemonAttacks);
