describe('angular homepage', function() {
    it('should search a given value', function() {
      
      browser.get('https://angular.io/');

      // Type 'platforms' in search bar
      element(by.css('.search-container>input')).sendKeys('platforms');
      browser.driver.sleep(3000);

      // Click on platformLocation
      element(by.css('a[href*="api/common/PlatformLocation"]')).click();
      browser.driver.sleep(3000);

     // Check if 'platform location' is displayed
      var platformLocation = element(by.id('platformlocation'));
      expect(platformLocation.isDisplayed()).toBe(true);   
      browser.driver.sleep(3000);

    });
  });