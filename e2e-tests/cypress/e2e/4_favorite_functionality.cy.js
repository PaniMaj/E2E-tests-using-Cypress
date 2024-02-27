import { signUpPage } from "../support/pageObjects/signUpObjects";
import { newUser } from "../support/pageObjects/userObjects";
import { newArticle } from "../support/pageObjects/articleObjects";

describe("Check favorite article functionality for newly registred user", () => {
  beforeEach(() => {
    cy.visitMainPageAndClickSignUpButton();

    signUpPage.fillSignUpInputs();
    signUpPage.clickSignUpButton();

    newUser.userProfileIsVisible();
  });

  it("User can post an article and mark it as favorite", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();
    newArticle.editArticleButtonIsVisible();

    newUser.clickUserProfile();
    newArticle.clickFavoriteArticleButton();
    newArticle.favouriteIconIsVisible();
  });

  it("User mark as favourite articles from global feed", () => {
    newUser.clickGlobalFeedButton();

    newArticle.clickMultipleFavoriteArticleButton();
    newArticle.favouriteIconIsVisible();
  });

  it("User mark as favourite firs article from global feed", () => {
    newUser.clickGlobalFeedButton();

    newArticle.clickFirstFavoriteArticleButton();
    newArticle.favouriteIconIsVisible();
  });
});
