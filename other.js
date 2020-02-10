describe('angular homepage', function() {
    it('should search a given value', function() {
      
      browser.get('https://angular.io/');
      
      // Type 'platforms' in search bar
      element(by.css('.search-container>input')).sendKeys('platforms');
      browser.driver.sleep(3000);

      // Click on angular contributors
      element(by.css('body > aio-shell > aio-search-results > div > div:nth-child(5) > ul.priority-pages > li:nth-child(1) > a')).click();
      browser.driver.sleep(3000);

      // Check if 'angular contributors' is displayed
      var angularContributors = element(by.id('angular-contributors'));
      expect(angularContributors.isDisplayed()).toBe(true);   
      browser.driver.sleep(3000);

    });
  });