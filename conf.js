exports.config = {
  // Selenium address where webdriver is being used
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    // Organized suite testing for each first title, under each headline, under search/platforms
    suites: {
      api: 'teste/api.js',
      cli: 'teste/cli.js',
      guide: 'teste/guide.js',
      other: 'teste/other.js'
    }
  };