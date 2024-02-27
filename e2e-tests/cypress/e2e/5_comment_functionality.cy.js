import { newArticle } from "../support/pageObjects/articleObjects";
import { signUpPage } from "../support/pageObjects/signUpObjects";
import { newUser } from "../support/pageObjects/userObjects";

describe("Check commenr functionality for newly registred user", () => {
  beforeEach(() => {
    cy.visitMainPageAndClickSignUpButton();

    signUpPage.fillSignUpInputs();
    signUpPage.clickSignUpButton();

    newUser.userProfileIsVisible();
  });

  it("User can comment own article", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.newCommentBoxIsVisible();

    newArticle.fillNewComment();
    newArticle.clickPostCommentButton();

    newArticle.articleCommentIsVisibleAndNotEmpty();
  });

  it("User can add and then delete comment own article", () => {
    newArticle.clickNewPostButton();

    newArticle.newArticleContent();
    newArticle.clickPublishArticleButton();

    newArticle.newCommentBoxIsVisible();

    newArticle.fillNewComment();
    newArticle.clickPostCommentButton();

    newArticle.articleCommentIsVisibleAndNotEmpty();

    newArticle.clickDeleteCommentButton();
  });

  it.only("User can add comment on first article on global feed", () => {
    newUser.clickGlobalFeedButton();
    newArticle.clickFirstArticleFromGlobalFeed();

    newArticle.newCommentBoxIsVisible();

    newArticle.fillNewComment();
    newArticle.clickPostCommentButton();

    newArticle.articleCommentIsVisibleAndNotEmpty();
  });
});
