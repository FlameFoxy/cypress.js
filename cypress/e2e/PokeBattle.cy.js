describe('Покупка аватара', function () {
    
    it('Покупка нового аватара тренера', function () {
         cy.visit('https://pokemonbattle.me/'); // заходим на сайт
         cy.get(':nth-child(1) > .auth__input').type('daria.s.romanova@gmail.com'); // вводим правильный логин
         cy.get('#password').type('Iostream@321'); // вводим правильный пароль
         cy.get('.auth__button').should('be.visible'); // проверяем, что кнопку Войти видно
         cy.get('.auth__button').click(); // нажимаем кнопку Войти
         cy.get('.header__btns > [href="/shop"]').should('be.visible'); // проверяем, что кнопку Магазин видно
         cy.get('.header__btns > [href="/shop"]').click(); // нажимаем кнопку Магазин видно
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // жмем на аватар, если он не скрыт (т.к. уже установлен)
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим CVC
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov'); // вводим имя владельца карты
         cy.get('.pay-btn').click(); // жмём кнопку Оплатить
         cy.get('#cardnumber').type('56456'); // вводим код из СМС
         cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
         cy.get('.payment__adv').click(); // нажимаем Вернуться в магазин
     })
 })