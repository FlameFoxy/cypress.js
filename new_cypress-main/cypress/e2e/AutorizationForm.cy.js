
describe('Тестирование формы авторизации', function () {
    
    it('Верные логин и пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим правильный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверяем, что уведомление видно
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // проверяем текст уведомления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что видно крестик
         })

    it('Функция восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#forgotEmailButton').should('be.visible'); // проверяем, что Забыли пароль? видно
        cy.get('#forgotEmailButton').click(); // нажимаем Забыли пароль?
        cy.get('#restoreEmailButton').should('be.visible'); // проверяем, что кнопку Отправить код видно
        cy.get('#mailForgot').type('daria.s.romanova@gmail.com'); // вводим валидный e-mail для восстановления пароля
        cy.get('#restoreEmailButton').click(); // нажимаем кнопку Отправить код
        cy.get('#messageHeader').should('be.visible'); // проверяем, что уведомление видно
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // проверяем текст уведомления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что видно крестик
         })

    it('Правильный логин, НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим правильный логин
        cy.get('#pass').type('iLoveqastudio11111'); // вводим НЕправильный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверяем, что уведомление видно
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяем текст уведомления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что видно крестик  
         })

    it('НЕправильный логин, правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('NOTgerman@dolnikov.ru'); // вводим НЕправильный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим правильный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверяем, что уведомление видно
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяем текст уведомления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что видно крестик  
         })
         
it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // вводим правильный логин, содержащий прописные буквы
        cy.get('#pass').type('iLoveqastudio1'); // вводим правильный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку Войти
        cy.get('#messageHeader').should('be.visible'); // проверяем, что уведомление видно
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // проверяем текст уведомления
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что видно крестик
         })
})


