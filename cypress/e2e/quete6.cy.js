
describe('template spec', () => {


  beforeEach(() => {
    cy.visit('https://preprod.backmarket.fr/fr-fr')
  })

  it.skip('create a count', () => {
    
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('[data-test="icon-avatar"]').click()
    cy.get('#email').type('4f700b38-29b0-47e5-af77-60ef3757c7d7@mailslurp.info')
    cy.get('#submit-login').click()
    cy.get('#password').type("Morgan123")
    cy.get('#submit-login').click()
    cy.get('.mr-3').click()
    cy.wait(500)
    cy.get(':nth-child(4) > :nth-child(1) > .bg-transparent > .body-2-light').click()
  })

  it('change password', () => {
    cy.get('[data-qa="accept-cta"]').click()
    cy.get('[data-test="icon-avatar"]').click()
    cy.get('#email').type('4f700b38-29b0-47e5-af77-60ef3757c7d7@mailslurp.info')
    cy.get('#submit-login').click()
    cy.get('.mb-7').click()
    cy.get('[data-test="password-reset-submit-button"]').click()
    cy.mailslurp()
    .then(mailslurp => mailslurp.waitForLatestEmail('df838b6d-a361-49cb-a739-4592ef115309', 100000, true))
    .then(email => {
    cy.document().invoke('write', email.body)
    cy.get('.t_pt20px > a').click()
    cy.get('#newPassword').type('Morlina123')
    cy.get('#newPasswordConfirmation').type('Morlina123')
    cy.get('._1xMx-RYw').click()
    cy.get('#email').type('4f700b38-29b0-47e5-af77-60ef3757c7d7@mailslurp.info')
    cy.get('#submit-login').click()
    cy.get('#password').type('Morlina123')
    cy.get('#submit-login').click()
    cy.url().should('include', 'https://preprod.backmarket.fr/fr-fr');


    })
  })
})