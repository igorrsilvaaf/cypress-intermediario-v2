describe('Criação de issue', () => {
    const issue = {
        title: 'criando uma issue',
        description: 'Qualquer coisa pode ser acicionada aqui',
        project: {
            name: 'automatizando a criação de issue',
            description: 'kakdakdkakds'
        }
    }

    beforeEach(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    it('Criação com sucesso', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
            .should('contain', issue.title)
            .and('contain', issue.description)
    });
})

