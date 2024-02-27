import { userSelectors } from "../selectors.js";

export class User {
  userFeedIsVisible() {
    cy.get(userSelectors.userFeed).should("be.visible");
  }

  globalFeedIsVisible() {
    cy.get(userSelectors.globalFeed).should("be.visible");
  }

  clickGlobalFeedButton() {
    cy.get(userSelectors.globalFeed).should("be.visible").click();
  }

  userProfileIsVisible() {
    cy.get(userSelectors.userProfile).should("be.visible");
  }

  clickUserProfile() {
    cy.get(userSelectors.userProfile).should("be.visible").click();
  }
}

export const newUser = new User();
