import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попапа уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasAriaSnapshot();
});
test('Проверка доступности элементов меню пользователя в хэдере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserMenu();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
