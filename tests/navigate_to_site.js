const globals = require('./settings/globals.js');

module.exports = {
  'Navigates To The EKA Site': (browser) => {
    return browser
      .url(globals.url)

      .click('a[href="/solutions"]')
      .pause('1000')
      .waitForElementVisible('.nav-logo')
      .waitForElementVisible('.home-link')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.login-link')
      .waitForElementVisible('#nav-contact-us')



      .click('a[href="/services"]')
      .pause('1000')
      .waitForElementVisible('.nav-logo')
      .waitForElementVisible('.home-link')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.login-link')
      .waitForElementVisible('#nav-contact-us')



      .click('a[href="/company"]')
      .pause('1000')
      .waitForElementVisible('.nav-logo')
      .waitForElementVisible('.home-link')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.login-link')
      .waitForElementVisible('#nav-contact-us')



      .click('a[href="/"]')
      .pause('1000')
      .waitForElementVisible('.nav-logo')
      .waitForElementVisible('.solutions-link')
      .waitForElementVisible('.services-link')
      .waitForElementVisible('.company-link')
      .waitForElementVisible('.login-link')
      .waitForElementVisible('#nav-contact-us')
      .waitForElementVisible('#join-mailinglist_input')

      .setValue('#join-mailinglist_input[name=email2]', 'johndoe@gmail.com')
      .click('#join-mailinglist_btn')
      .assert.containsText('#myModalLabel', 'REQUEST A DEMO') 
      .click('.close')
      .pause('1000')

      .click('#nav-contact-us')
      .waitForElementVisible('#myModal',1000)
      .assert.containsText('#myModal', 'HOW CAN WE HELP?')
      .pause('1000')
      .click('.close')
      .pause('1000')

      .end();
  }
}
