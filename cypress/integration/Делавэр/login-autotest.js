describe('Проверка формы логина и пароля', function () {
    it('Проверка восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();
         
         cy.contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon');
     })

     it('Позитивный кейс:правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Негативный кейс:правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
 })

 it('Негативный кейс:неправильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('yuliya@talankina.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();

    cy.contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
 })

})