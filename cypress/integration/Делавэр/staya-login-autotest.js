describe('Проверка авторизации staya', function () {
    it('Проверка авторизации', function () {
         cy.visit('https://staya.dog/');
         cy.get('.header-bottom__right--link').click();
         cy.get('.auth-form > form > [type="email"]').type('talankinayu@yandex.ru');
         cy.get('.auth-form > form > [type="password"]').type('1q2q3q4q5q');
         cy.get('.auth-form__submit').click();

         cy.contains('Мои заказы');
     })
    })