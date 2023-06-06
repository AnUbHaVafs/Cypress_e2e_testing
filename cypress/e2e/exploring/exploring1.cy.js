/// <reference types="cypress" />

describe('Practicing testing', () => {

    beforeEach(() => {
        cy.visit('https://codedamn.com')
    })
    // it('visiting the codedamn site', () => {
    //     cy.visit('https://codedamn.com')
    //     cy.contains('Learn coding with your personal AI powered tutor and 100+ interactive courses. Become job ready 10x faster', { timeout: '10 * 1000' }).should('exist')
    //     // cy.contains('Begin').click()
    //     cy.contains('Hands-on practice').should('exist')
    // })

    // it('Every basic element exists on the web', () => {
    //     cy.visit('https://codedamn.com')
    //     cy.contains('Learn coding with your personal AI powered tutor and 100+ interactive courses. Become job ready 10x faster', { timeout: '10 * 1000' }).should('exist')
    //     cy.contains('Hands-on practice').should('exist')
    //     cy.contains('Apply as you learn').should('exist')
    //     cy.contains('codedamn').should('exist')
    //     cy.contains('Instantly').should('exist')
    //     cy.contains('practice').should('exist')
    //     cy.contains('Hands').should('exist')
    //     cy.contains('AI').should('exist')
    //     cy.contains('portfolio').should('exist')
    //     cy.contains('Discord').should('exist')
    // })

    it.only('Sign in', () => {

        // cy.contains('Get Started').should('exist')
        // cy.contains('Get Started').click()
        // cy.contains('Continue with Google', { timeout: 20 * 1000 }).should('exist')
        // cy.contains('Your email here', { timeout: 20 * 1000 }).should('exist')

        cy.contains('Login').should('exist')
        cy.contains('Login').click()
        cy.contains('Sign in').should('exist')
        cy.get('[data-testid="username"]').should('exist')
        cy.get('[data-testid="username"]').type('Sample User')
        cy.get('[data-testid="password"]').type('Sample User')
        cy.get('#remember_me').should('exist')
        cy.get('#remember_me').click()
        cy.get('[data-testid="login"]').click()
        cy.contains('Unable to authorize', { timeout: 10 * 1000 }).should('exist')

    })
})