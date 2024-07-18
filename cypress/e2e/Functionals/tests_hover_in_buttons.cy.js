describe('Checks hover effects in buttons', () => {
   beforeEach(() => {
      cy.visit('https://www.onthefuze.com/');
   });

   it('Hovers are working', () => {
      const originalBgColors = [];
      const originalColors = [];
      const originalBorderColors = [];

      cy.get('button').each(($btn, index) => {
        cy.wrap($btn).invoke('css', 'background-color').then((bgColor) => {
            originalBgColors[index] = bgColor;
        });

        cy.wrap($btn).invoke('css', 'color').then((color) => {
            originalColors[index] = color;
        });

        cy.wrap($btn).invoke('css', 'border-color').then((borderColor) => {
            originalBorderColors[index] = borderColor;
        });

        cy.wrap($btn).trigger('mouseover', { force: true });

        cy.wrap($btn).invoke('css', 'background-color').then((hoverBgColor) => {
            if (hoverBgColor === originalBgColors[index]){
                cy.log(`Button ${index + 1} does not have a hover effect on background-color`);
            }
        });

        cy.wrap($btn).invoke('css', 'color').then((hoverColor) => {
            if (hoverColor === originalColors[index]){
                cy.log(`Button ${index + 1} does not have a hover effect on color`);
            }
        });

        cy.wrap($btn).invoke('css', 'border-color').then((hoverBorderColor) => {
            if (hoverBorderColor === originalBorderColors[index]){
                cy.log(`Button ${index + 1} does not have a hover effect on border-color`);
            }
        });

        cy.wrap($btn).trigger('mouseout', { force: true });
      });
   });
});