import { expect } from 'chai';

class YahooSearchPage {
    searchUrl : string = 'https://search.yahoo.com';
    searchBox : string = '#yschsp';
    searchButton : string = '//*[@id="sf"]/button/span';
    searchResults : string = '#main #web';

    open(): void {
        browser.url(this.searchUrl);
        expect(browser.getTitle()).is.equal('Yahoo Search - Web Search');
    }
    
    enterText(item): void {
        browser.element(this.searchBox).clearElement();
        browser.element(this.searchBox).setValue(item);
    }

    search(): void {
        browser.element(this.searchButton).click();
    }

    assertSearchResults(): void {
        const results = browser.elements(this.searchResults).$$('li');
        expect(results.length).is.greaterThan(0);
    }
}
const yahooSearchPage = new YahooSearchPage();
Object.freeze(yahooSearchPage);
export default yahooSearchPage;