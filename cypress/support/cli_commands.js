// Cypress.Commands.add('cloneViaSSH', project => {
//   const domain = Cypress.config('baseUrl').replace('http://', '')

//   cy.exec(`C:\Users\DEV-Igor\Documents\MEGA\Cursos\Udemy - Cypress intermediario\cypress-intermediario-v2/ && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`)
// })

Cypress.Commands.add('cloneViaSSH', project => {
  const domain = Cypress.config('baseUrl').replace('http://', '')

  cy.exec(`cd Cursos\Udemy - Cypress intermediario\cypress-intermediario-v2 && git clone git@${domain}:${Cypress.env('user_name')}/${project.name}.git`, { log: false })
})