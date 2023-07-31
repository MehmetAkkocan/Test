import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class CargoUpdatePage {
  pageTitle: ElementFinder = element(by.id('TestApp.cargo.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  uidInput: ElementFinder = element(by.css('input#cargo-uid'));
  userInput: ElementFinder = element(by.css('input#cargo-user'));
  sourceaddressInput: ElementFinder = element(by.css('input#cargo-sourceaddress'));
  cargodescriptionInput: ElementFinder = element(by.css('input#cargo-cargodescription'));
  destinationaddressInput: ElementFinder = element(by.css('input#cargo-destinationaddress'));
  updateDateInput: ElementFinder = element(by.css('input#cargo-updateDate'));
  createDateInput: ElementFinder = element(by.css('input#cargo-createDate'));
  sourcecitySelect: ElementFinder = element(by.css('select#cargo-sourcecity'));
  sourcedistinctSelect: ElementFinder = element(by.css('select#cargo-sourcedistinct'));
  vehicletypeSelect: ElementFinder = element(by.css('select#cargo-vehicletype'));
  vehiclecasetypeSelect: ElementFinder = element(by.css('select#cargo-vehiclecasetype'));
  cargotypeSelect: ElementFinder = element(by.css('select#cargo-cargotype'));
  destinationcitySelect: ElementFinder = element(by.css('select#cargo-destinationcity'));
  destinationdistinctSelect: ElementFinder = element(by.css('select#cargo-destinationdistinct'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setUidInput(uid) {
    await this.uidInput.sendKeys(uid);
  }

  async getUidInput() {
    return this.uidInput.getAttribute('value');
  }

  async setUserInput(user) {
    await this.userInput.sendKeys(user);
  }

  async getUserInput() {
    return this.userInput.getAttribute('value');
  }

  async setSourceaddressInput(sourceaddress) {
    await this.sourceaddressInput.sendKeys(sourceaddress);
  }

  async getSourceaddressInput() {
    return this.sourceaddressInput.getAttribute('value');
  }

  async setCargodescriptionInput(cargodescription) {
    await this.cargodescriptionInput.sendKeys(cargodescription);
  }

  async getCargodescriptionInput() {
    return this.cargodescriptionInput.getAttribute('value');
  }

  async setDestinationaddressInput(destinationaddress) {
    await this.destinationaddressInput.sendKeys(destinationaddress);
  }

  async getDestinationaddressInput() {
    return this.destinationaddressInput.getAttribute('value');
  }

  async setUpdateDateInput(updateDate) {
    await this.updateDateInput.sendKeys(updateDate);
  }

  async getUpdateDateInput() {
    return this.updateDateInput.getAttribute('value');
  }

  async setCreateDateInput(createDate) {
    await this.createDateInput.sendKeys(createDate);
  }

  async getCreateDateInput() {
    return this.createDateInput.getAttribute('value');
  }

  async sourcecitySelectLastOption() {
    await this.sourcecitySelect.all(by.tagName('option')).last().click();
  }

  async sourcecitySelectOption(option) {
    await this.sourcecitySelect.sendKeys(option);
  }

  getSourcecitySelect() {
    return this.sourcecitySelect;
  }

  async getSourcecitySelectedOption() {
    return this.sourcecitySelect.element(by.css('option:checked')).getText();
  }

  async sourcedistinctSelectLastOption() {
    await this.sourcedistinctSelect.all(by.tagName('option')).last().click();
  }

  async sourcedistinctSelectOption(option) {
    await this.sourcedistinctSelect.sendKeys(option);
  }

  getSourcedistinctSelect() {
    return this.sourcedistinctSelect;
  }

  async getSourcedistinctSelectedOption() {
    return this.sourcedistinctSelect.element(by.css('option:checked')).getText();
  }

  async vehicletypeSelectLastOption() {
    await this.vehicletypeSelect.all(by.tagName('option')).last().click();
  }

  async vehicletypeSelectOption(option) {
    await this.vehicletypeSelect.sendKeys(option);
  }

  getVehicletypeSelect() {
    return this.vehicletypeSelect;
  }

  async getVehicletypeSelectedOption() {
    return this.vehicletypeSelect.element(by.css('option:checked')).getText();
  }

  async vehiclecasetypeSelectLastOption() {
    await this.vehiclecasetypeSelect.all(by.tagName('option')).last().click();
  }

  async vehiclecasetypeSelectOption(option) {
    await this.vehiclecasetypeSelect.sendKeys(option);
  }

  getVehiclecasetypeSelect() {
    return this.vehiclecasetypeSelect;
  }

  async getVehiclecasetypeSelectedOption() {
    return this.vehiclecasetypeSelect.element(by.css('option:checked')).getText();
  }

  async cargotypeSelectLastOption() {
    await this.cargotypeSelect.all(by.tagName('option')).last().click();
  }

  async cargotypeSelectOption(option) {
    await this.cargotypeSelect.sendKeys(option);
  }

  getCargotypeSelect() {
    return this.cargotypeSelect;
  }

  async getCargotypeSelectedOption() {
    return this.cargotypeSelect.element(by.css('option:checked')).getText();
  }

  async destinationcitySelectLastOption() {
    await this.destinationcitySelect.all(by.tagName('option')).last().click();
  }

  async destinationcitySelectOption(option) {
    await this.destinationcitySelect.sendKeys(option);
  }

  getDestinationcitySelect() {
    return this.destinationcitySelect;
  }

  async getDestinationcitySelectedOption() {
    return this.destinationcitySelect.element(by.css('option:checked')).getText();
  }

  async destinationdistinctSelectLastOption() {
    await this.destinationdistinctSelect.all(by.tagName('option')).last().click();
  }

  async destinationdistinctSelectOption(option) {
    await this.destinationdistinctSelect.sendKeys(option);
  }

  getDestinationdistinctSelect() {
    return this.destinationdistinctSelect;
  }

  async getDestinationdistinctSelectedOption() {
    return this.destinationdistinctSelect.element(by.css('option:checked')).getText();
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
    await this.setUidInput('uid');
    expect(await this.getUidInput()).to.match(/uid/);
    await waitUntilDisplayed(this.saveButton);
    await this.setUserInput('user');
    expect(await this.getUserInput()).to.match(/user/);
    await waitUntilDisplayed(this.saveButton);
    await this.setSourceaddressInput('sourceaddress');
    expect(await this.getSourceaddressInput()).to.match(/sourceaddress/);
    await waitUntilDisplayed(this.saveButton);
    await this.setCargodescriptionInput('5');
    expect(await this.getCargodescriptionInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setDestinationaddressInput('destinationaddress');
    expect(await this.getDestinationaddressInput()).to.match(/destinationaddress/);
    await waitUntilDisplayed(this.saveButton);
    await this.setUpdateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getUpdateDateInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getCreateDateInput()).to.contain('2001-01-01T02:30');
    await this.sourcecitySelectLastOption();
    await this.sourcedistinctSelectLastOption();
    await this.vehicletypeSelectLastOption();
    await this.vehiclecasetypeSelectLastOption();
    await this.cargotypeSelectLastOption();
    await this.destinationcitySelectLastOption();
    await this.destinationdistinctSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
