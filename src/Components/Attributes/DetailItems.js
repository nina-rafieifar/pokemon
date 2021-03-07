import { html } from "lit-element";

export const PokemonWeightAndWeight = (text, Max, Min) => html`<div class="pokemon__details_items">
  <span class="size__text">${text}</span>
  <div class="size">
    <span>${Min} - ${Max}</span>
  </div>
</div>`;

export const PokemonResistantAndWeaknesses = (text, ability) => html`<div class="pokemon__details_items">
  <span class="chip__text">${text}</span>
  <div class="chips">
    ${ability.split(",").map(
      (i) => html`<div class="chip chip_${i.toLowerCase()}">
        <span>${i}</span>
      </div>`
    )}
  </div>
</div>`;
