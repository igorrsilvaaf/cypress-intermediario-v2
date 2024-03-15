describe('Create Project', () => {
    beforeEach(() => cy.api_deleteProjects())

    it('Criado com sucesso', () => {
        const projectId = Cypress._.random(1000, 9999);
        const projectName = `Meu Novo Projeto com Cypress ${projectId}`;

        const project = {
            name: projectName,
            description: 'Este é o meu novo projeto para testes.'
        }

        cy.api_createProject(project)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.name).to.equal(project.name)
                expect(response.body.description).to.equal(project.description)
        })
    })
})