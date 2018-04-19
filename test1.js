var assert = require('assert');
describe('frontier page', function() {
//verify title of page is corret
    it('should have the right title', function () {
	browser.url('/');
	var title = browser.getTitle();
	assert.equal(title, 'Frontier Internet Service | 855-858-4802 | Frontier Communications');        
    });
 //verify that buttons on home screen are all clickable
    it('button should load a new page', function() {
	browser.url('/');
	browser.click('js-track-home-hero');
	//change button id per button tested
	var text = bowser.getText('Shop Frontier Internet Plans');
	//change button text per button tested
	assert(text == 'Button has been clicked');
    });
 //verify that when clicking on button it opens new URL
    it('button should open a new page', function() {
	browser.url('/');
	//store old URL in var
	var oldurl = browser.getURL();
	browser.click('js-track-home-hero');
	//change button id per button tested
	var url = browser.getUrl();
	//compare plaine text the two urls
	console.log('Old URL is:' + oldurl + 'New URL is:' + url);
     });
//verify that when hovering over drop list that list appear
     it('drop down list should produce list', function() {
	browser.url('/');
	browser.movetoObject('menu-item-4313');
	//pause the screen so that we can see if menu items apear
	browser.pause(5000);
     });
//verify that when clicking the Espanol link that it takes you to espanol version of page.
     it('click espanol and espanol page/url appears', function() {
	browser.url('/');
	//click on the link called Espanol
	//this can be used for other tab item at the top of the page as well
	browser.click('=Espanol');
	var esp = browser.get URL();
	//assume that this special URL is given or we know espanol is attached to end
	console.log('Espanol URL is:' + esp);
      });
//verify that on the myaccount screen the user can input information
    it('user can input information in username and password on account page', function() {
	browser.url('https://www.frontier.com/BillPay/Login');
	var user = browser.setValue('input[id = "fid-login-inline-username"]', test);
	var pass = browser.setValue('input[id = "fid-login-inline-password"]', password);
	var resultuse = user.getValue();
	var resultpas = pass.getValue();
	console.log('The username and password are:' + resultuse + ',' + resultpass);
    });
//verify that the Order Now button is clickable
	it('button should load order page', function() {
	browser.url('/');
	browser.click('js-track-nav-shop-online');
	var order = bowser.getText('Order Now');
	assert(order == 'Button has been clicked');
});