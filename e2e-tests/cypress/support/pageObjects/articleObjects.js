import faker from "faker";
import { userSelectors, articleSelectors } from "../selectors.js";

export class Article {
  clickNewPostButton() {
    cy.get(userSelectors.newPost).click();
  }

  newArticleContent(
    title = faker.random.words(3),
    about = faker.lorem.sentence(),
    article = faker.lorem.paragraphs(1),
    tags
  ) {
    cy.get('[data-testid="title"]').type(title);
    cy.get('[data-testid="about"]').type(about);
    cy.get('[data-testid="article"]').type(article);
    cy.get('[data-testid="tags"]')
      .type(`${faker.lorem.word()}{enter}`)
      .type(`${faker.lorem.word()}{enter}`)
      .type(`${faker.lorem.word()}{enter}`);
  }

  updateArticleContent() {
    cy.get(articleSelectors.articleContent).type(
      `{enter}{enter}${faker.lorem.paragraphs(1)}`
    );
  }

  clickPublishArticleButton() {
    cy.get(articleSelectors.articlePublishButton).click();
  }

  clickEditArticleButton() {
    cy.get(articleSelectors.editArticle).should("be.visible").click();
  }

  clickDeleteArticleButton() {
    cy.get(articleSelectors.deleteArticle).should("be.visible").click();
  }

  editArticleButtonIsVisible() {
    cy.get(articleSelectors.editArticle).should("be.visible");
  }

  deleteArticleButtonIsVisible() {
    cy.get(articleSelectors.editArticle).should("be.visible");
  }

  clickFavoriteArticleButton() {
    cy.get(articleSelectors.favoriteArticle).click();
  }

  clickMultipleFavoriteArticleButton() {
    cy.get(articleSelectors.favoriteArticle).click({ multiple: true });
  }

  clickFirstFavoriteArticleButton() {
    cy.get(articleSelectors.favoriteArticle).first().click();
  }

  favouriteIconIsVisible() {
    cy.get(articleSelectors.favoriteArticle).should("be.visible");
  }

  newCommentBoxIsVisible() {
    cy.get(articleSelectors.articleCommentInput).should("be.visible");
  }

  fillNewComment(comment = faker.lorem.paragraph()) {
    cy.get(articleSelectors.articleCommentInput)
      .should("be.visible")
      .click()
      .type(comment);
  }

  clickPostCommentButton() {
    cy.get(articleSelectors.articleCommentButton).click();
  }

  clickDeleteCommentButton() {
    cy.get(articleSelectors.articleCommentDeleteButton).click();
  }

  articleCommentIsVisibleAndNotEmpty() {
    cy.get(articleSelectors.articleFilledComment).should("be.visible");
    cy.get(articleSelectors.articleFilledCommentContent).should("not.be.empty");
  }

  clickFirstArticleFromGlobalFeed() {
    cy.get(":nth-child(1) > .preview-link > h1").click();
  }
}

export const newArticle = new Article();
