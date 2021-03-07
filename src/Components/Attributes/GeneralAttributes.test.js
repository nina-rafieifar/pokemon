import "./GeneralAttributes";
import { fixture } from "@open-wc/testing";
import { html, render } from "lit-html";

test("pokemon-general-attr renders the correct elements", () => {
  render(
    html`<pokemon-general-attr name="Ivysaur" number="002" image="some url"></pokemon-general-attr>`,
    document.body
  );
  expect(document.body.getElementsByTagName("pokemon-general-attr")).toBeDefined();
});

test("pokemon-general-attr renders as it should", async () => {
  const element = await fixture(
    html`<pokemon-general-attr name="Ivysaur" number="002" image="some url"></pokemon-general-attr>`
  );
  expect(element).toMatchSnapshot();
});
