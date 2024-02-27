import { mainPageSelectors } from "../selectors.js";

export class Main {
  visitMainPage() {
    cy.visit("/");
  }
  clickSignInButton() {
    cy.get(mainPageSelectors.signInButton).click();
  }

  clickSignUpButton() {
    cy.get(mainPageSelectors.signUpButton).click();
  }
}

export const mainPage = new Main();
