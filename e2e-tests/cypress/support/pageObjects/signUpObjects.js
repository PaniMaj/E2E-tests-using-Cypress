import faker from "faker";
import { signUpSelectors } from "../selectors.js";

export class SignUp {
  fillSignUpInputs(
    username = faker.internet.userName(),
    email = faker.internet.email(),
    password = faker.internet.password()
  ) {
    cy.get(signUpSelectors.signUpUserName).type(username);
    cy.get(signUpSelectors.signUpEmail).type(email);
    cy.get(signUpSelectors.signUpPassword).type(password, {
      log: false,
    });
  }

  clickSignUpButton() {
    cy.get(signUpSelectors.signUpButton).click();
  }
}

export const signUpPage = new SignUp();
