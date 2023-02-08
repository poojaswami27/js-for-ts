
const {Builder, By, Key, until} = require('selenium-webdriver');

/*(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
*/
function testMethod1(){
    let driver = new Builder().forBrowser(firefox).build();
    try{
        driver.get('https://www.google.com/');
        driver.findElement(By.name('q')).sendKeys('');
        driver.findElement(By.xpath("//input[@value='Google Search']")).click();
    }catch{
        console.log("failed");
    }finally{
        driver.quit();
    }
}