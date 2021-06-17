describe('Displays list of series', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'viaplay_response.json',
    })
    cy.visit('/')
  })

  it('is expected to show Viaplays logo', () => {
    cy.get('[data-cy=logo]').should(
      'have.attr',
      'src',
      'https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
    )
  })

  it('is expected to show a list of 10 movies', () => {
    cy.get('[data-cy=serie-card]').should('have.length', 10)
  })

  it('is expected to present the series through images', () => {
    cy.get('[data-cy=serie-card]')
      .first()
      .find('img')
      .should(
        'have.attr',
        'src',
        'https://i-viaplay-com.akamaized.net/viaplay-prod/440/976/1603974960-2dad0c0eef922590320e519ed36a633af15f49a6.jpg?width=960&height=540&template=abcstudios'
      )
  })
})
