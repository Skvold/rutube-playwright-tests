import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import test from 'node:test';
import { text } from 'stream/consumers';
export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly caregoriesTabsLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationsButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonPopupListLocator: Locator;
  private readonly headerNotificationPopupLocator: Locator;
  private readonly autorizationModalLocator: Locator;
  private readonly switchToRegistrationModalButtonLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByText(
      'RUTUBEДобавитьУведомленияПереключить на светлую темуВход и регистрация',
    );
    this.caregoriesTabsLocator = this.page.locator('.wdp-tabs-module__tabs');
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationsButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonPopupListLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.autorizationModalLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]');
    this.switchToRegistrationModalButtonLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .locator('div[role="form"]')
      .getByRole('button', { name: 'Зарегистрироваться' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала channel64662590' });
    this.headerUserMenuLocator = this.page
      .locator('section')
      .filter({ hasText: 'channel64662590' })
      .nth(1);
  }
  // actions
  async open() {
    await this.page.goto('https://rutube.ru/', { waitUntil: 'load', timeout: 60000 });
  }
  async openHeaderUserMenu() {
    await this.userLogoLocator.click();
  }
  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationsPopup() {
    await this.headerNotificationsButtonLocator.click();
  }
  async openAutorizationModal() {
    await this.headerLoginButtonLocator.click();
  }
  async switchToRegistrationModal() {
    await this.switchToRegistrationModalButtonLocator.click();
  }
  // assertions
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonPopupListLocator, 'addButtonPopuplist.yml');
  }
  async notificationsPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationPopupLocator, 'notificationsPopup.yml');
  }
  async authorizationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.autorizationModalLocator, 'authorizationModal.yml');
  }
  async registrationModalHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.autorizationModalLocator, 'registrationModal.yml');
  }
  async fullMenuHasAriaSnapshot() {
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'fullMenuSnapshot.yml');
  }
  async checkAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
  async headerUserMenuHasCorrectAriaSnapshot() {
    await expect(this.headerUserMenuLocator).toMatchAriaSnapshot({
      name: 'headerUserMenuSnapshot.yml',
    });
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'haderAriaSnapshot.yml' });
  }
  async caregoriesTabsHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.caregoriesTabsLocator, 'caregoriesTabsAriaSnapshot.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }
}
