import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import { test, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('authSetup', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rutube.ru/');
  await page.waitForSelector(
    'div.wdp-popup-module__header.wdp-popup-module__header_with-image.wdp-onboardings-inventory-module__popupPictureHeader > button',
  );

  const closeButton = page.getByRole('button', { name: 'Закрыть' });

  if (await closeButton.isVisible()) {
    await closeButton.click();
  }
  await page
    .locator('div')
    .filter({ hasText: /^Вход и регистрация$/ })
    .locator('button')
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('textbox', { name: 'Введите телефон или электронную почту' })
    .fill(process.env.LOGIN!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Продолжить' })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .locator('#login-password')
    .fill(process.env.PASSWORD!);
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page
    .locator('iframe[title="Multipass"]')
    .contentFrame()
    .getByRole('button', { name: 'Войти', exact: true })
    .click();
  await page.getByAltText('Иконка канала channel64662590').click();
  await page.locator('a').filter({ hasText: 'Профиль' }).click();

  await page.context().storageState({ path: authFile });
});
