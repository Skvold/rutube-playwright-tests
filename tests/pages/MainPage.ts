import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
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
  }
  async open() {
    this.page.goto('https://rutube.ru/');
  }
  async changeThemeToWhite() {
    this.changeThemeButtonLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async headerHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'haderAriaSnapshot.yml' });
  }
  async caregoriesTabsHasCorrectAriaSnapshot() {
    await expect(this.caregoriesTabsLocator).toMatchAriaSnapshot({
      name: 'caregoriesTabsAriaSnapshot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuAriaSnapshot.yml' });
  }
  async openAddPopupList() {
    this.headerAddButtonLocator.click();
  }
  async openNotificationsPopup() {
    this.headerNotificationsButtonLocator.click();
  }
  async openAutorizationModal() {
    this.headerLoginButtonLocator.click();
  }
  async switchToRegistrationModal() {
    this.switchToRegistrationModalButtonLocator.click();
  }
  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonPopupListLocator).toMatchAriaSnapshot({
      name: 'addButtonPopuplist.yml',
    });
  }
  async notificationsPopupHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({
      name: 'notificationsPopup.yml',
    });
  }
  async authorizationModalHasCorrectAriaSnapshot() {
    await expect(this.autorizationModalLocator).toMatchAriaSnapshot({
      name: 'authorizationModal.yml',
    });
  }
  async registrationModalHasCorrectAriaSnapshot() {
    await expect(this.autorizationModalLocator).toMatchAriaSnapshot({
      name: 'registrationModal.yml',
    });
  }
  async fullMenuHasAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'fullMenuSnapshot.yml',
    });
  }
  async checkAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
  }
}
