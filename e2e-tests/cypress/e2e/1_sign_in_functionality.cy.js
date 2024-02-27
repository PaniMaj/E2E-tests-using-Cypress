import { signInPage } from '../support/pageObjects/signInObjects'
import { newUser } from '../support/pageObjects/userObjects'

const userEmail = Cypress.env().email
const userValidPassword = Cypress.env().password
const userInvalidPassword = Cypress.env().wrongPassword

describe('Check login functionality', () => {
  beforeEach(() => {
    cy.visitMainPageAndClickSignInButton()
  })

  it('POSITIVE: login to the site as an existing user', () => {
    signInPage.fillSignInInputs(userEmail, userValidPassword)
    signInPage.clickSignInButton()

    newUser.userProfileIsVisible()
  })

  it('NEGATIVE: login to the site as non-existing user', () => {
    signInPage.fillSignInInputs(userEmail, userInvalidPassword)
    signInPage.clickSignInButton()

    signInPage.userInvalidCredentials()
  })
})
