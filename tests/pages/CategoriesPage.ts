import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CategoriesPage extends BasePage {
  private readonly contentPageLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.contentPageLocator = this.page.getByRole('main').getByText('Топы категорийRUTUBE x');
  }
  open() {
    this.page.goto('https://rutube.ru/categories/');
  }
  async contentPageHasCorrectLayout() {
    await this.checkLayoutByScreenshot(this.contentPageLocator, 'categoriesPage.png');
  }
  async hideHeader() {
    await this.hideElement('header');
  }
}
