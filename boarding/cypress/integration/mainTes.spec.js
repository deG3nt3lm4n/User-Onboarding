// main tests
describe('Person App', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('sanity check', () => {
    expect(5).to.equal(5)
  })

  const textInputName = () => cy.get('input[name="first_name"]')
  const textInputLast = () => cy.get('input[name="last_name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passInput = () => cy.get('input[name="password"]')


  it('can type in input', () => {

    textInputName()
      .should('have.value', '')
      .type('JeffDeBan')
      .should('have.value', 'JeffDeBan')

    textInputLast()
      .should('have.value', '')
      .type('Pooper')
      .should('have.value', 'Pooper')

    emailInput()
      .should('have.value', '')
      .type('baby@de.com')
      .should('have.value', 'baby@de.com')

    passInput()
      .should('have.value', '')
      .type('abc123')
      .should('have.value', 'abc123')


  })

})