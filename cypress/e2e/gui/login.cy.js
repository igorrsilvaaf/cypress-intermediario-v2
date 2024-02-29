describe('login', () => {
  it('Login com sucesso', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)

    cy.get('.qa-user-avatar')
      .should('be.visible')

    cy.get('[data-qa-selector="search_term_field"]')
        .should('be.visible')
    
    cy.get('.blank-state-text')
    .contains('Projects are where you store your code, access issues, wiki and other features of GitLab.')
  })
})