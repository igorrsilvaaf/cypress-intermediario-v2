describe('Create issue', () => {
    beforeEach(() => cy.api_deleteProjects())

    it('Criado com sucesso', () => {
        const issuetId = Cypress._.random(1000, 9999);
        const issuetName = `Nova issue criada por API ${issuetId}`;

        const projectId = Cypress._.random(1000, 9999);
        const projectName = `Nova issue criada por API ${projectId}`;

        const issue = {
            title: issuetName,
            description: 'Nova issue para teste',
            project: {
                name: projectName,
                description: 'Novo projeto criado'
            }
        }

        cy.api_createIssue(issue)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.title).to.equal(issue.title)
                expect(response.body.description).to.equal(issue.description)
            })

    })
})