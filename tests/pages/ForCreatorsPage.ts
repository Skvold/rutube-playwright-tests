import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { url } from 'inspector';

export class ForCreatorPage extends BasePage {
  static readonly testsParams = [
    {
      url: 'http://rutube.ru/for_creators/#main',
      screenshotName: 'mainTab.png',
      name: 'Главная',
    },
    {
      url: 'http://rutube.ru/for_creators/#steps',
      screenshotName: 'stepsTab.png',
      name: 'Превые шаги',
    },
    {
      url: 'http://rutube.ru/for_creators/#faq',
      screenshotName: 'faqTab.png',
      name: 'Как развивать канал',
    },
    {
      url: 'http://rutube.ru/for_creators/#monetization',
      screenshotName: 'monetizationTab.png',
      name: 'Монетизация',
    },
    {
      url: 'http://rutube.ru/for_creators/#rules',
      screenshotName: 'rulesTab.png',
      name: 'Правила',
    },
    {
      url: 'http://rutube.ru/for_creators/#team',
      screenshotName: 'teamTab.png',
      name: 'Команда R',
    },
  ];
  private readonly pageContentLocator: Locator;
  constructor(page: Page) {
    super(page);
    this.pageContentLocator = this.page.locator('#___gatsby');
  }
  async open(url: string) {
    await this.page.goto(url);
  }
  async pageHasCorrectLayout(screenshotName: string) {
    await this.checkLayoutByScreenshot(this.pageContentLocator, screenshotName);
  }
}
