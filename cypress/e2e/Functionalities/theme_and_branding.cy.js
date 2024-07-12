describe('Check that the size of fonts are correct', () => {

    const baseUrl = 'https://39951248.hs-sites.com/style-guide';
   it('Check that H tags are the correct size', () => {
      cy.visit(baseUrl);
      cy.get('h1').should('have.css', 'font-size', '71px');
      cy.get('h2').should('have.css', 'font-size', '51px');
      cy.get('h3').should('have.css', 'font-size', '42px');
      cy.get('h4').should('have.css', 'font-size', '32px');
      cy.get('h5').should('have.css', 'font-size', '24px');
      cy.get('h6').should('have.css', 'font-size', '20px');
   });

   it('Check that the font-family is correct and paragraphs size are correct', () =>{
      cy.visit(baseUrl);
      cy.get('body').should('have.css', 'font-family', 'Lato');  
      cy.get('p').should('have.css', 'font-size', '18px');
   });

   it('Check that the color in primary buttons is correct', () => {
      cy.visit(baseUrl);
      cy.get('.span3.widget-span.widget-type-cell.dnd_area-column-24-padding.dnd-column');
      cy.get('.button.button--primary').should('have.css', 'background', 'rgb(235, 1, 139) none repeat scroll 0% 0% / auto padding-box border-box');
   });

   it('Check that the color in secondary buttons is correct', () => {
      cy.visit(baseUrl);
      cy.get('.span3.widget-span.widget-type-cell.dnd-column.dnd_area-column-37-padding');
      cy.get('.button.button--secondary').should('have.css', 'background', 'rgb(38, 169, 224) none repeat scroll 0% 0% / auto padding-box border-box');
   });

   it('Check that the color in tertiary buttons is correct', () => {
      cy.visit(baseUrl);
      cy.get('.span3.widget-span.widget-type-cell.dnd-column');
      cy.get('.button.button--tertiary').should('have.css', 'background', 'rgb(65, 42, 132) none repeat scroll 0% 0% / auto padding-box border-box');
   });
});