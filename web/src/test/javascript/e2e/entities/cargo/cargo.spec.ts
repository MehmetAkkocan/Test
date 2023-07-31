import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import CargoComponentsPage from './cargo.page-object';
import CargoUpdatePage from './cargo-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('Cargo e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let cargoComponentsPage: CargoComponentsPage;
  let cargoUpdatePage: CargoUpdatePage;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    cargoComponentsPage = new CargoComponentsPage();
    cargoComponentsPage = await cargoComponentsPage.goToPage(navBarPage);
  });

  it('should load Cargos', async () => {
    expect(await cargoComponentsPage.title.getText()).to.match(/Cargos/);
    expect(await cargoComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete Cargos', async () => {
    const beforeRecordsCount = (await isVisible(cargoComponentsPage.noRecords)) ? 0 : await getRecordsCount(cargoComponentsPage.table);
    cargoUpdatePage = await cargoComponentsPage.goToCreateCargo();
    await cargoUpdatePage.enterData();

    expect(await cargoComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(cargoComponentsPage.table);
    await waitUntilCount(cargoComponentsPage.records, beforeRecordsCount + 1);
    expect(await cargoComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await cargoComponentsPage.deleteCargo();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(cargoComponentsPage.records, beforeRecordsCount);
      expect(await cargoComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(cargoComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
