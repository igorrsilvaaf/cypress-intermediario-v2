import {faker} from '@faker-js/faker'

describe('Criação de um novo projeto', () => {
    beforeEach(() => {
        cy.login()
    })    

    it('Criação com sucesso', () => {
        const project = {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }

        cy.gui_createProject(project)

        cy.url()
            .should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name)
            .should('be.visible')
        cy.contains(project.description)
            .should('be.visible')
    });
});