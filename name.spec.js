describe('NameChange', () => {

    it ('Changes name and surname', () => {

        cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
            auth: {
                username: 'fabrique',
                password: 'fabrique'
            }
        });
        cy.get("input[type='email']").type('admin@admin.ad');
        cy.get("input[type='password']").type('admin');
        cy.get("button[type='submit']").click();

        cy.get("button[class='button button--size-sm button--is-square button--is-rounded button--is-centered button--state-secondary']"). click();
        cy.get("a[class='userInfo userInfo--is-link']").click();
        cy.wait(5000);
        cy.get("button[class='button button--size-sm button--is-centered button--state-filled']").click();
        cy.get("input[class='input__input']").eq(0).type('Surname');
        cy.get("input[class='input__input']").eq(1).type('Name');
        cy.get("button[type='submit']").click();
    });
});