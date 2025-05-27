import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/MainPage';

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности табов категорий неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.caregoriesTabsHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов попапа уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationsPopup();
  await mainPage.notificationsPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAutorizationModal();
  await mainPage.authorizationModalHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна регистрации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAutorizationModal();
  await mainPage.switchToRegistrationModal();
  await mainPage.registrationModalHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuHasAriaSnapshot();
});
test('Переключение темы неавторизованного пользователя', async ({ mainPage }) => {
  await mainPage.checkAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkAttributeValue('white2022');
});
