describe('test description', () => {
    /* before(() => {
        cy.login();
    });

    beforeEach(() => {
       const authToken = window.localStorage.getItem('authToken');
       if(authToken){
        window.localStorage.setItem('authToken', authToken);
       }
       cy.visit('https://saucedemo.com');
    }); */
    it("should successfully add and remove items from the cart", () => {
        cy.visit('https://saucedemo.com');
        // Enter valid credentials
        cy.get('input[name="user-name"]').type("standard_user");
        cy.get('input[name="password"]').type("secret_sauce"); 
    
        // Click the login button
        cy.get('input[type="submit"]').click();
    
        // Assert that the URL changes to the dashboard or home page
        cy.url().should("include", "/inventory.html");
    
        // Optionally, you can also assert that a specific element on the dashboard page is visible
        cy.get(".inventory_list").should("be.visible");
        
        // Add and inside the cart, delete the items. Then, go back to listing.
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('[data-test=shopping-cart-link]').click();
        cy.get('[data-test=remove-sauce-labs-backpack]').click();
        cy.get('[data-test=remove-sauce-labs-bike-light]').click();
        cy.get('[data-test=continue-shopping]').click();
    });

   /*  it('should add an item to the cart', () => {
        cy.visit('https://saucedemo.com');
        // Enter valid credentials
        cy.get('input[name="user-name"]').type("standard_user");
        cy.get('input[name="password"]').type("secret_sauce"); 
    
        // Click the login button
        cy.get('input[type="submit"]').click();
    
        // Assert that the URL changes to the dashboard or home page
        cy.url().should("include", "/inventory.html");
    
        // Optionally, you can also assert that a specific element on the dashboard page is visible
        cy.get(".inventory_list").should("be.visible");

        // Add items to the cart, and complete the order
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('[data-test=shopping-cart-link]').click();
        cy.get('[data-test=checkout]').click();
        cy.get('[data-test=firstName]').click();
        cy.get('[data-test=firstName]').type('Coco');
        cy.get('[data-test=lastName]').type('Loco');
        cy.get('[data-test=postalCode]').type('123456');
        cy.get('[data-test=continue]').click();
        cy.get('[data-test=finish]').click();
        cy.get('[data-test=back-to-products]').click();
    }); */

    /* it('Test filters', () => {
        cy.visit('https://saucedemo.com');
        // Enter valid credentials
        cy.get('input[name="user-name"]').type("standard_user");
        cy.get('input[name="password"]').type("secret_sauce"); 
    
        // Click the login button
        cy.get('input[type="submit"]').click();
    
        // Assert that the URL changes to the dashboard or home page
        cy.url().should("include", "/inventory.html");
    
        // Optionally, you can also assert that a specific element on the dashboard page is visible
        cy.get(".inventory_list").should("be.visible");

        cy.get('[data-test=product-sort-container]').click();
        cy.get('[data-test=product-sort-container]').type('az');
        cy.get('[data-test=product-sort-container]').click();
        cy.get('[data-test=product-sort-container]').type('za');
        cy.get('[data-test=product-sort-container]').click();
        cy.get('[data-test=product-sort-container]').type('lohi');
        cy.get('[data-test=product-sort-container]').click();
        cy.get('[data-test=product-sort-container]').type('hilo')
    }); */
});