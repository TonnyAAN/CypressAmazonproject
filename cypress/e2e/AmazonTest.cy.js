describe('Add socks to cart', () => {
    it('should add socks to the cart', () => {
      try{

        //Launching amazon application
        cy.visit("https://www.amazon.co.uk");

        //Handling the captcha security
        cy.contains('a','Try different image').should('be.visible').click();
        cy.get('#sp-cc', { timeout: 10000 }).should('be.visible');

        // Click the "Accept Cookies" button
        cy.get('#sp-cc-accept').click();

        // Wait for the cookie consent banner to disappear
        cy.get('#sp-cc').should('not.exist');

        //Entering the search criteria
        cy.get('input#twotabsearchtextbox').type('socks 9-12');

        //Click on search button
        cy.get('#nav-search-submit-button').click();

        //Selecting the item from the result list and switched to  item details page.
        cy.get('div[data-cy="title-recipe"] a').last().click();

        //Following code is dummy one if  the above last () function is suppose not working.

            //cy.document().then(($document) => {
            //Find the image link element using JavaScript
            //const imageLink = $document.querySelector('div > img[alt="Women Athletic Socks, Running Hiking Socks Sports Sneaker Socks Outdoor Hiking Climbing Socks No Blister Terry Cushion, Breathable, Moisture Wicking Sport Low Cut Socks 6 pairs"]');
         
            //Check if the image link element exists
            //if (imageLink) {
            // Click the image link using JavaScript
            //imageLink.click();
            //} else {
            //Handle the case when the image link element is not found
            //cy.log('Image link not found');
            // }
           //});
      
        //Capturing the selected item title and Cart count value
      cy.get('#productTitle')
      .then($title => {
      const productTitle = $title.text();
      cy.log(`Product Title: ${productTitle}`);
    
      });

      //Retrieve the current "View Basket" count
      cy.get('#nav-cart-count')
      .then($viewBasket => {
      const initialCount = parseInt($viewBasket.text());
      cy.log(`Initial "View Basket" count: ${initialCount}`);
      //cy.contains('option',' Select ').should('be.visible').click();

   
      
      // Add an item to the basket.
      cy.get('#add-to-cart-button').dblclick();
    
      // Retrieve the updated "View Basket" count
      cy.get('#nav-cart-count')
      .then($updatedViewBasket => {
      const updatedCount = parseInt($updatedViewBasket.text());
      cy.log(`Updated "View Basket" count: ${updatedCount}`);
    
      // Assert that the count is incremented
      expect(updatedCount).to.be.greaterThan(initialCount);
      });
      });    
     
    }
    catch (err) {
      // Handle the exception here
      if (err.message.includes('markFeatureRenderForImageBlock is not defined')) {
        // Log or handle the exception as needed
        cy.log('Ignoring markFeatureRenderForImageBlock exception');
      } else {
        // Rethrow the exception if it's not the expected one
        throw err;
      }
    }
                                     
    });
});




        

        

  

        

        


    
  
