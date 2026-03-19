/// <reference types= "cypress"/>
const { faker } = require('@faker-js/faker');


describe('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobreNomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email(nomeFaker)

        cy.get('[name="email"]').type(emailFaker)
        cy.get('.register > :nth-child(2) > [name="password"]').type('Teste@!1654')
        cy.get('[name="register"]').click()    

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('[name="account_first_name"]').type(nomeFaker)
        cy.get('[name="account_last_name"]').type(sobreNomeFaker)
        cy.get('[name="save_account_details"]').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });

});