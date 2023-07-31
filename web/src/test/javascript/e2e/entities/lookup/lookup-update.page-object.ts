import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class LookupUpdatePage {
  pageTitle: ElementFinder = element(by.id('TestApp.lookup.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#lookup-name'));
  langInput: ElementFinder = element(by.css('input#lookup-lang'));
  uidInput: ElementFinder = element(by.css('input#lookup-uid'));
  valueInput: ElementFinder = element(by.css('input#lookup-value'));
  descriptionInput: ElementFinder = element(by.css('input#lookup-description'));
  parentSelect: ElementFinder = element(by.css('select#lookup-parent'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setLangInput(lang) {
    await this.langInput.sendKeys(lang);
  }

  async getLangInput() {
    return this.langInput.getAttribute('value');
  }

  async setUidInput(uid) {
    await this.uidInput.sendKeys(uid);
  }

  async getUidInput() {
    return this.uidInput.getAttribute('value');
  }

  async setValueInput(value) {
    await this.valueInput.sendKeys(value);
  }

  async getValueInput() {
    return this.valueInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async parentSelectLastOption() {
    await this.parentSelect.all(by.tagName('option')).last().click();
  }

  async parentSelectOption(option) {
    await this.parentSelect.sendKeys(option);
  }

  getParentSelect() {
    return this.parentSelect;
  }

  async getParentSelectedOption() {
    return this.parentSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setNameInput('name');
    expect(await this.getNameInput()).to.match(/name/);
    await waitUntilDisplayed(this.saveButton);
    await this.setLangInput('lang');
    expect(await this.getLangInput()).to.match(/lang/);
    await waitUntilDisplayed(this.saveButton);
    await this.setUidInput('uid');
    expect(await this.getUidInput()).to.match(/uid/);
    await waitUntilDisplayed(this.saveButton);
    await this.setValueInput('value');
    expect(await this.getValueInput()).to.match(/value/);
    await waitUntilDisplayed(this.saveButton);
    await this.setDescriptionInput('description');
    expect(await this.getDescriptionInput()).to.match(/description/);
    await this.parentSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
