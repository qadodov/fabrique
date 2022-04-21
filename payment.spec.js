describe('Payment', () => {

    it ('Checks if related payments appear', () => {

        cy.visit('https://finance.dev.fabrique.studio/accounts/login/',{
            auth: {
                username: 'fabrique',
                password: 'fabrique'
            }
        });
        cy.get("input[type='email']").type('admin@admin.ad');
        cy.get("input[type='password']").type('admin');
        cy.get("button[type='submit']").click();

        cy.get("button[class='button button--size-sm button--is-centered button--state-filled']").click();
        cy.get("div[class='checkbox__icon checkbox__icon--radio']").eq(0).click();
        cy.get("input[placeholder='Выберите']").eq(0).type('Уменьшаемый план', {force:true}).type('{enter}');
        cy.contains('Связанные платежи будут доступны после сохранения');


    });
});