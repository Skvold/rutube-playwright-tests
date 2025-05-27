import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    await this.page.getByLabel('Уведомление об использовании cookies').locator('button').click();
  }
  async closePopupModalOnboarding() {
    const closeButton = this.page.getByRole('button', { name: 'Закрыть' });

    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  }
  async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }
}
