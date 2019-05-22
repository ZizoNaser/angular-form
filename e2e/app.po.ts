import { browser, element, by } from 'protractor';

export class AngularFormPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('af-root h1')).getText();
  }
}
