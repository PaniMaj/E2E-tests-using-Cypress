import { newArticle } from "../support/pageObjects/articleObjects";
import { signUpPage } from "../support/pageObjects/signUpObjects";
import { newUser } from "../support/pageObjects/userObjects";

describe("Check article functionality for newly registred user", () => {
  beforeEach(() => {
    cy.visitMainPageAndClickSignUpButton();

    signUpPage.fillSignUpInputs();
    signUpPage.clickSignUpButton();

    newUser.userProfileIsVisible();
  });

  it("User can post an article", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.editArticleButtonIsVisible();
  });

  it("User can post and then delete posted article", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.clickDeleteArticleButton();

    newUser.userFeedIsVisible();
  });

  it("User can post and then edit posted article", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.clickEditArticleButton();
    newArticle.updateArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.editArticleButtonIsVisible();
  });
});
