describe('Rancid Tomatillo', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/581392', { fixture: 'test_movie.js' })
            .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'test_films.js' })
            .visit('http://localhost:3000/')
    });

    it('Should display the home page and navigation bar', () => {
        cy.get('header').contains('h4', 'RANCID TOMATILLOS')
            .get('img').should('have.class', 'tomato')
            .get('.home').should('be.visible').and('have.class', 'nav-btn')
            .get('.nav-btn').should('be.visible').contains('PROFILE')
            .get('.gridDisplay').children().should('have.class', 'movie')
    });

    it('Should display all movies', () => {
        cy.get('.gridDisplay')
            .get('.movie').children()
            .should('exist').and('have.attr', 'href')
    });

    it('Should select a single movie and change URL path', () => {
        cy.get('.mainCoverImage').eq(2).click()
            .url().should('include', '/337401')
    });

    // it('Should display all movie details', () => {
    //     cy.get('.gridDisplay')
    //         .get('.movie')
    //         .first().click().get('.movie-details-container')
    //         .get('[alt="Movie Poster"]').should('be.visible')
    //         .get('h1').contains('Peninsula')
    //         .get('h4').contains('Escape The Apocalypse')
    //         .get('p').contains('7')
    //         .get('p').contains('114')
    //         .get('h3').should('have.class', 'overview')
    //         .get('p').contains('$17,000,000')
    //         .get('p').contains('$35,878,266')
    //         .get('h4').contains('July 14, 2020')
    // });

    it('Should have a functional back button', () => {
        cy.get('.gridDisplay')
            .get('.movie')
            .first().click()
            .get('.backArrow').click()
            .get('.gridDisplay')
    });

    it('Should have a search bar', () => {
        cy.get('form')
            .get('input')
            .should('exist')
    });

    it('Should execute a movie search', () => {
        cy.get('input[type=text]').type('Peninsula')
            .should('have.value', 'Peninsula')
            .get('.submit-btn').click()
            .get('.movie').children()
            .get('img').should('have.attr', 'alt')
    });

    it('Should handle searchField casetypes', () => {
        cy.get('input[type=text]').type('ROGUE')
            .should('have.value', 'ROGUE')
            .get('.submit-btn').click()
            .get('.mainCoverImage').first().click()
    });

    it('should go back to main view by clicking go back button', () => {
        cy.get('input[type=text]').type('peninsula')
            .get('.submit-btn').click()
            .get('.mainCoverImage').first().click()
            .url().should('include', '/581392')
            .get('.backArrow').click()
            .get('.gridDisplay')
    });
})

describe('Error Handling', () => {
    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'test_films.js' })
            .visit('http://localhost:3000/')
    });

    it('Should show the error screen when an error is present', () => {
        cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/581393`, {
            statusCode: 404,
            body: 'failure!'
        })
        cy.visit('http://localhost:3000/581393').get('a')
    });

    it('Should show the descriptive error screen when field is left empty', () => {
        cy.get('input[type=text]')
            .should('have.value', '')
            .get('.submit-btn').click()
        cy.get('h3').contains('Please try again and enter a title.')
    });

    it('Should show the error screen when field has value but movie is not present', () => {
        cy.get('input[type=text]')
            .type('avalanche').should('have.value', 'avalanche')
            .get('.submit-btn').click()
        cy.get('h3').contains('Sorry, there are no movies with that title.')
    });
})

