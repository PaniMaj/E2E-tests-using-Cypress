import faker from "faker";
import { newArticle } from "../support/pageObjects/articleObjects";
import { newUser } from "../support/pageObjects/userObjects";

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password();

describe("Check favorite article functionality for newly registered user", () => {
  beforeEach(() => {
    // Rejestracja użytkownika
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/users",
      body: {
        user: {
          email,
          password,
          username,
        },
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      // Logowanie użytkownika po rejestracji
      cy.request({
        method: "POST",
        url: "http://localhost:3000/api/users/login",
        body: {
          user: {
            email,
            password,
          },
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        authToken = response.body.user.token; // zapisujemy token autoryzacyjny
        cy.setCookie("token", authToken);
      });
    });
  });

  it.only("User can post an article and mark it as favorite", () => {
    expect(authToken).to.exist;

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

  it("User mark as favourite first article from global feed", () => {
    newUser.clickGlobalFeedButton();

    newArticle.clickFirstFavoriteArticleButton();
    newArticle.favouriteIconIsVisible();
  });
});
