/// <reference types= "cypress"/>
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel')
            .click()
    })

    it.only('Deve adicionar um produto ao carrinho', () => {

        let quantidade = 10
        

        cy.get('.product-block')
        .contains('Arcadio Gym Short').click()

        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Arcadio Gym Short” foram adicionados no seu carrinho')

    });

})