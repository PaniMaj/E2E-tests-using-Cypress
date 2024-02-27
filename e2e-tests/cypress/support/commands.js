import { mainPage } from './pageObjects/mainPageObjects'

Cypress.Commands.add('visitMainPageAndClickSignInButton', () => {
  mainPage.visitMainPage()
  mainPage.clickSignInButton()
})

Cypress.Commands.add('visitMainPageAndClickSignUpButton', () => {
  mainPage.visitMainPage()
  mainPage.clickSignUpButton()
})
