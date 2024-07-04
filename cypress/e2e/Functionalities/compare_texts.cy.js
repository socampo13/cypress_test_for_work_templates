// As this comparison is done in non-main pages, the cy.origin is used. 
describe('Comparar textos de dos páginas diferentes', () => {
    it('Debería comparar el texto de dos páginas', () => {
      // Variables to store the texts from both pages
      let textoPagina1;
      let textoPagina2;
  
      // Navigate to the first page and extract the text
      cy.origin('https://gonzobanker.com', () => {
        cy.visit('https://gonzobanker.com/2024/05/digital-banking-metrics-adoption-usage-and-impact-of-digital-on-banks-and-credit-unions/');
        cy.get(".wp-block-heading"); // Titles
        cy.get("p") // Texts
        cy.get(".ctaText") // CTA/Buttons
        cy.get(".postTitle") // Link texts
        // If needed, change, add or delete all of the selectors
          .invoke('text')
          .then((texto) => {
            textoPagina1 = texto.trim();
          });
      });
  
      // Navigate to the second page and extract the text
      cy.origin('https://www.crnrstone.com', () => {
        cy.visit('https://www.crnrstone.com/gonzobanker-blog/bank-performance/digital-banking-metrics-adoption-usage-and-impact-of-digital-on-banks-and-credit-unions?hs_preview=RfhCOyNE-170728341799');
        cy.get("p"); // Texts
        cy.get("h2"); // Titles
        cy.get("h3"); // Titles
        cy.get("span") // Link texts 
        // If needed, change, add or delete all of the selectors
          .invoke('text')
          .then((texto) => {
            textoPagina2 = texto.trim();
          });
      });
  
      // Compare the texts after both are obtained
      cy.then(() => {
        expect(textoPagina1).to.equal(textoPagina2);
      });
    });
  });
  