const options = { env: { snapshotOnly: true }}

describe('Criar Issue', options, () => {
  const issue = {
    title: 'Minha Nova Issue',
    description: 'Esta é uma descrição da minha nova issue.',
    project: {
      name: 'Meu Novo Projeto com Cypress',
      description: 'Este é o meu novo projeto para testes.'
    }
  }

  // pré condiçao para o teste, pois o usuario precisa estar logado e precisa ter um projeto
  beforeEach(() => {
    cy.api_deleteProjects() //Deleta os projetos

    cy.login()
    cy.api_createProject(issue.project)
  })

  it('Criação com sucesso', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details') // Classe .issue-details onde contes titulo e descriçao
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})
