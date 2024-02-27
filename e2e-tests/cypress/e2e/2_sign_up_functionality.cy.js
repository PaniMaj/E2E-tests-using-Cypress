import { signUpPage } from "../support/pageObjects/signUpObjects";
import { newUser } from "../support/pageObjects/userObjects";

describe("Check registration functionality", () => {
  before(() => {
    cy.visitMainPageAndClickSignUpButton();
  });

  it("User can register to the site as new user", () => {
    signUpPage.fillSignUpInputs();
    signUpPage.clickSignUpButton();

    newUser.userProfileIsVisible();
  });
});
