describe('Add new payment', () => {

    it ('Visit site', () => {

        cy.visit('https://finance.dev.fabrique.studio/accounts/login/',{
            auth: {
                username: 'fabrique',
                password: 'fabrique'
            }
        });
        cy.get("input[type='email']").type('admin@admin.ad');
        cy.get("input[type='password']").type('admin');
        cy.get("button[type='submit']").click();

    });
});