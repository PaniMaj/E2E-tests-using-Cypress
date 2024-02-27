import { signInSelectors, userSelectors } from "../selectors.js";

export class SignIn {
  fillSignInInputs(email, password) {
    cy.get(signInSelectors.signInEmail).type(email);
    cy.get(signInSelectors.signInPassword).type(password, {
      log: false,
    });
  }

  clickSignInButton() {
    cy.get(signInSelectors.signInButton).click();
  }

  userInvalidCredentials() {
    cy.get(signInSelectors.errorMessage)
      .should("be.visible")
      //.should("contain", "notFound User Not Found")
      .should("include.text", "User Not Found");
  }
}

export const signInPage = new SignIn();
