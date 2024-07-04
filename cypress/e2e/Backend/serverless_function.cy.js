describe('Test Serverless Function', () => {
   const baseUrl = 'https://api-endpoint.com';
   it('Should return a succesful response', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/endpoint`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        
        expect(response.body).to.have.property('key', 'value');
      });
   });

   it('Handle error responses correctly' , () => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}/endpoint`,
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.be.within(400, 499);
        expect(response.body).to.have.property('error', 'some error message');
    });
   });
});