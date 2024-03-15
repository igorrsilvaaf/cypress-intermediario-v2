const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`
Cypress.Commands.add('api_createProject', project => {
    cy.request({
        method: 'POST',
        url: `/api/v4/projects/`,
        body: {
            name: project.name,
            description: project.description,
            project_visibility_level_10: true,
            initialize_with_readme: true
        },
         headers: {Authorization: accessToken}
    })
})

Cypress.Commands.add('api_getAllProjects', () => {
    cy.request({
        method: 'GET',
        url: `/api/v4/projects/`,
        headers: {Authorization: accessToken}
    })
})

Cypress.Commands.add('api_deleteProjects', () =>{
    cy.api_getAllProjects() // Chama a função para obter todos os projetos
        .then(res => {
            // Verifica se há projetos para excluir
            if (res.body.length > 0) {
                // Itera sobre cada projeto e envia uma solicitação DELETE
                res.body.forEach(project => {
                    cy.request({
                        method: 'DELETE',
                        url: `/api/v4/projects/${project.id}`,
                        headers: { Authorization: accessToken }
                    })
                })
            }
        })
})

Cypress.Commands.add('api_createIssue', issue => {
    cy.api_createProject(issue.project)
        .then(response => {
            cy.request({
                method: 'POST',
                url: `/api/v4/projects/${response.body.id}/issues`,
                body: {
                    title: issue.title,
                    description: issue.description
                },
                headers: {
                    Authorization: accessToken
                }
            })
        })
})