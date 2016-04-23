exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function(){
    browser.driver.get('http://localhost:3000').then(function(){
      browser.driver.sleep(1000);//1ª gambiarra
      browser.driver.findElement(by.id('entrar')).click();
      browser.driver.sleep(1);
      browser.driver.findElement(by.id('login_field'))
        .sendKeys('boa50');
      browser.driver.findElement(by.id('password'))
        .sendKeys('titobelau50');
      browser.driver.findElement(by.name('commit')).click();
    });
  }
};
