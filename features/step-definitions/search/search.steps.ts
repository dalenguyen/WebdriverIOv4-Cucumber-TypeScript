import { Given, When, Then } from 'cucumber'; 
import yahooSearchPage from './../../pages/yahoo.search.page';

Given('I am on the search page', function() {
    yahooSearchPage.open();
});

When('I enter {string} into the search box', function(arg1) {
    yahooSearchPage.enterText(arg1);
});

When('I click the search button', function() {
    yahooSearchPage.search();
});

Then('I should see a list of search results', function() {
    yahooSearchPage.assertSearchResults();
});
