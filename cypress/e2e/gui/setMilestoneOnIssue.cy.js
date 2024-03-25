import {faker} from '@faker-js/faker'

const options = {env: {snapshotOnly: true}}

describe('Set milestone on issue', options, () =>{
    const issue = {
        title: `issue-${faker.datatype.UUID()}`,
        description: faker.random.words(5),
        project: {
            title: `issue-${faker.datatype.UUID()}`,
            description: faker.random.words(5),
        }
    }

    const milestone ={
        title: `milestone-${faker.random.words()}`
    }

    beforeEach(() =>{
        cy.api_deleteProjects()
        cy.login()

        cy.api_createMilestone(response.body.project_id, milestone)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
    })

    it('SuccessFully ', () => {
        cy.gui_setMilestoneOnIssue(milestone)
        cy.get('.block.milestone')
            .should('contain', milestone.title)
    });
})