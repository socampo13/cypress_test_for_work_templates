describe("My First Test", () => {
  const viewports = [
    { width: 1920, height: 1080 },
    { width: 1366, height: 768 },
    { width: 768, height: 1024 },
    { width: 453, height: 816 },
    { width: 390, height: 844 },
  ];

  viewports.forEach((viewport) => {
    it(`Resolutions test ${viewport.width}x${viewport.height}`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit("https://www.onthefuze.com");

      // Verificar que los elementos estén dentro de sus contenedores
      cy.get('.row-fluid').children().each(($elemento) => {
        cy.wrap($elemento).should('be.visible');
        cy.wrap($elemento).should('have.css', 'position', 'static');
        cy.wrap($elemento).should('have.css', 'overflow', 'visible');
      });

      // Verificar la alineación de los elementos
      cy.get('.row-fluid').should(($elemento) => {
        const padding = parseInt($elemento.css('padding'), 10);
        const border = parseInt($elemento.css('border-width'), 10);

        // Verificar la alineación vertical
        expect($elemento.offset().top + padding + border).to.be.closeTo($elemento.parent().offset().top + padding, 2);

        // Verificar la alineación horizontal
        expect($elemento.offset().left + padding + border).to.be.closeTo($elemento.parent().offset().left + padding, 2);
      });

      // Verificar que no hay elementos salidos de sus contenedores
      cy.get('body').should('not.have.property', 'scrollHeight', 'greaterThan', 'viewportHeight');
  
      // Verificar que no hay elementos con ancho mayor al de su contenedor
      cy.get('.row-fluid').children().should(($elemento) => {
        expect($elemento.width()).to.be.at.most($elemento.parent().width());
      });

      // Verificar que no hay elementos con altura mayor a la de su contenedor
      cy.get('.row-fluid').children().should(($elemento) => {
        expect($elemento.height()).to.be.at.most($elemento.parent().height());
      });
    });
  });
});
