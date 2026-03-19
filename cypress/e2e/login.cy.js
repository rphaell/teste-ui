/// <reference types= "cypress"/>


context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {        
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('[name="username"]').type('aaaluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('[name="username"]').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.comaaa')
        cy.get('[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})

