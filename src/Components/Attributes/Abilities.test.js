import "./Abilities";
import { fixture } from "@open-wc/testing";
import { html, render } from "lit-html";

test("pokemon-abilities renders the correct elements", () => {
  render(html`<pokemon-abilities resistant="grass,fairy" weaknesses="water,ice"></pokemon-abilities>`, document.body);
  expect(document.body.getElementsByTagName("pokemon-abilities")).toBeDefined();
});

test("pokemon-abilities renders as it should", async () => {
  const element = await fixture(
    html`<pokemon-abilities resistant="grass,fairy" weaknesses="water,ice"></pokemon-abilities>`
  );
  expect(element).toMatchSnapshot();
});
