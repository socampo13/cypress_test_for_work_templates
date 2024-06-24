//ALWAYS TAKE INTO ACCOUNT THE SLUGS TO AVOID ISSUES AND NOT WANTED ERRORS
describe('Test Blog Listing templates functionalities', () => {
    const baseUrl = 'https://45841846.hs-sites.com/blog-listing' //The baseUrl should be the URL from the LISTING page. Only change URL commented lines that explains it
    it('Search bar is working properly', () => {
        cy.visit(baseUrl);

        cy.get('.hs-search-field__input').click();
        cy.get('.hs-search-field__input').type('test');
        cy.get('button').click();
        cy.get('.hs-search-field__bar > form').submit();

        cy.url().should('contains', 'https://45841846.hs-sites.com/hs-search-results'); //Only change the whole URL in here
   });

    it('Check if pagination is working correctly', () => {
        cy.visit(baseUrl);
        cy.get('.pagination__link--next').click();
        cy.url().should('contains', 'https://45841846.hs-sites.com/blog-listing/page/2'); //Only change the whole URL in here
        
        cy.get('.pagination__link--next').click();
        cy.url().should('contains', 'https://45841846.hs-sites.com/blog-listing/page/3'); //Only change the whole URL in here
        
        cy.get('.pagination__link--prev').click();
        cy.url().should('contains', 'https://45841846.hs-sites.com/blog-listing/page/2'); //Only change the whole URL in here
        
        cy.get('.pagination__link:nth-child(2)').click();
        cy.url().should('contains', baseUrl);
   }); 

    it('Check if clicking a post redirects correctly', () => {
        cy.visit(baseUrl);
        
        cy.get('.aos-init').first().find('.blog-index__post-content-image', 'https://45841846.fs1.hubspotusercontent-na1.net/hub/45841846/hubfs/Imported_Blog_Media/boost-website.jpg?width=500&name=boost-website.jpg').click(); //Only change the whole URL in here
        cy.url().should('include', 'https://45841846.hs-sites.com/blog-listing/journey-continues'); //Only change the whole URL in here
   });

    it('Buttons inside the posts are working correctly', () => {
        cy.visit('https://45841846.hs-sites.com/blog-listing/journey-continues'); //Only change the whole URL in here

        cy.get('.button:nth-child(2)').click();
        cy.url().should('contains', 'https://45841846.hs-sites.com/blog-listing/shaping-web-content-future'); //Only change the whole URL in here
        
        cy.get('.blog-post__navigation > .button').click();
        cy.url().should('contains', baseUrl); 
   });

    it('Check if the form inside posts works correctly', () => {
        cy.visit('https://45841846.hs-sites.com/blog-listing/journey-continues'); //Only change the whole URL in here

        cy.get('.input').click();
        cy.get('.input').type('support@onthefuze.com');
        cy.get('.hs-button').click();
   });
});