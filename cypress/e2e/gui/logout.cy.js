describe('Logout da aplicação', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Logout com sucesso', () => {
    cy.logout()

    cy.url()
        .should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`) //Verifica se a URL é a URL de Logout
  })
})
