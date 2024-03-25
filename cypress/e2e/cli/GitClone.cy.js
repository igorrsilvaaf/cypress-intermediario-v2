import { faker } from '@faker-js/faker'

describe('Git clone', () => {
	 const project = {
    	name: `project-${faker.datatype.uuid()}`,
    	description: faker.random.words(5)
  }

	beforeEach(() => {
    	cy.api_deleteProjects()
    	cy.api_createProject(project)
    })

	it('SuccessFully', () => {
		cy.cloneViaSSH(project)

		cy.readFile(`Documents\MEGA\Cursos\Udemy - Cypress intermediario\cypress-intermediario-v2,${project.name}/README.md`)
			.should('contains', `#${project.name}`)
			.and('contains', project.description)
	})
	
})