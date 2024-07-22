describe("In the content of the page, there shouldnt be lorem ipsum texts", () => {
  const baseUrl = "https://12br.com";
  beforeEach(() => {
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  it("No lorem ipsum in the body of the page ", () => {
    cy.visit(baseUrl);
    cy.get("body").then(($body) => {
      const bodyText = $body.text().toLowerCase();
      expect(bodyText).to.not.include("lorem ipsum");
    });
  });

  it("Double checks in headings, paragraphs, links and other elements", () => {
    cy.visit(baseUrl);
    const elementsToCheck = ["p", "a", "h1", "h2", "h3", "h4", "h5", "h6"];

    elementsToCheck.forEach((selector) => {
      cy.get(selector).each(($el) => {
        const text = $el.text();
        expect(text).to.not.include("Lorem Ipsum");
      });
    });
  });
});
