const options = { env: { snapshotOnly: true }}

describe('Criação de um novo projeto', options, () => {
    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
    })

    it('Criação com sucesso', () => {
        const projectId = Cypress._.random(1000, 9999);
        const projectName = `Meu Novo Projeto com Cypress ${projectId}`;

        const project = {
            name: projectName,
            description: 'Este é o meu novo projeto para testes.'
        }

        cy.gui_createProject(project)

        cy.url().should('include', `/${Cypress.env('user_name')}/${project.name.toLowerCase().replace(/\s+/g, '-')}/issues/new`)

        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    });
});