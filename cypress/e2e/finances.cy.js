/// <reference types="cypress" />

context('Dev Finance Agilizei', () => {
    beforeEach(() => {
        cy.visit('http://devfinance-agilizei.netlify.app');
        cy.get('#data-table tbody tr').should('have.length', 0);
    })

    it('Cadastrar entradas', () => {
        cy.get('#transaction .button').click();
        cy.get('#description').type('Mesada');
        cy.get('[name=amount]').type(12);
        cy.get('[type=date]').type('2022-06-20');
        cy.get('button').contains('Salvar').click();
    });

    it.only('Cadastrar saídas', () => {
        cy.get('#transaction .button').click();
        cy.get('#description').type('Mesada');
        cy.get('[name=amount]').type(-12);
        cy.get('[type=date]').type('2022-06-20');
        cy.get('button').contains('Salvar').click();

        cy.get('#data-table tbody tr').should('have.length', 1);
    });

    it('Remover entradas e saídas', () => {
        
    });
});