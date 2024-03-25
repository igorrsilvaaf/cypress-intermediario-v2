const options = {env: {snapshot: true}}

describe('Alterando uma etiqueta', options, () => {
	const projectId = Cypress._.random(1000, 9999);
	const projectName = 'Cypress edit {projectId}';

	const setLabelOnIssueId = Cypress._.random(1000, 9999);
	const setLabelOnIssueName = `issue editada ${setLabelOnIssueId}`;

	const labelId = Cypress._.random(1000, 9999);
	const labelName = `opa mudei a label e alterei a cor para #ffaabb ${labelId}`;

	const issue = {
		title: setLabelOnIssueName,
		description: 'Criada a issue',

		project: {
			title: projectId,
			description: 'Criado o projeto'
		}
	}

	const label = {
		name: labelName,
		color:  '#ffaabb'
	}

	beforeEach(() => {
		cy.api_deleteProjects()
		cy.login()

		cy.api_createIssue(issue)
			.then(response => {
				cy.api_edtLabel(response.body.projectId, label)
				cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
			})
	})

	it('Adicionada label a issue com sucesso', () => {
		cy.gui_setLabelOnIssue(label)

		cy.get('.qa-labels-block')
			.should('contain', label.name)
    	cy.get('.qa-labels-block span')
      		.should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
	} )
})