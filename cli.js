describe('angular homepage', function() {
    it('should search a given value', function() {
      
      browser.get('https://angular.io/');
      
      // Type 'platforms' in search bar
      element(by.css('.search-container>input')).sendKeys('platforms');
      browser.driver.sleep(3000);

      // Click on ngDeploy
      element(by.css('body > aio-shell > aio-search-results > div > div:nth-child(3) > ul.priority-pages > li > a')).click();
      browser.driver.sleep(3000);

      // Check if 'ng deploy' is displayed
      var ngDeploy = element(by.id('ng-deploy'));
      expect(ngDeploy.isDisplayed()).toBe(true);   
      browser.driver.sleep(3000);

    });
  });