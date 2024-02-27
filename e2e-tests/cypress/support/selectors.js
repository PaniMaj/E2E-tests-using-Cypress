export const mainPageSelectors = {
  homeButton: '[data-testid="home"]',
  signInButton: '[data-testid="sign-in"]',
  signUpButton: '[data-testid="sign-up"]',
  mainPageButton: ".navbar-brand",
};

export const signInSelectors = {
  signInEmail: '[data-testid="email-input"]',
  signInPassword: '[data-testid="password-input"]',
  signInButton: '[data-testid="submit-button"]',
  errorMessage: ".error-messages",
};

export const signUpSelectors = {
  signUpUserName: '[data-testid="username"]',
  signUpEmail: '[data-testid="email"]',
  signUpPassword: '[data-testid="password"]',
  signUpButton: '[data-testid="submit"]',
};

export const userSelectors = {
  userFeed: '[data-testid="your-feed"]',
  globalFeed: '[data-testid="global-feed"]',
  userProfile: '[data-testid="profile"]',
  userSettings: '[data-testid="settings"]',
  newPost: '[data-testid="new-post"]',
  logoutButon: '[data-testid="logout"]',
};

export const articleSelectors = {
  editArticle: '[data-testid="edit-article"]',
  deleteArticle: '[data-testid="delete-article"]',
  articleTitle: '[data-testid="title"]',
  articleAbout: '[data-testid="about"]',
  articleContent: '[data-testid="article"]',
  articleTags: '[data-testid="tags"]',
  articlePublishButton: '[data-testid="publish"]',
  favoriteArticle: '[data-testid="fav-article"]',
  articleCommentInput: '[data-testid="comment-text"]',
  articleFilledComment: '[data-testid="comment"]',
  articleFilledCommentContent: ".card-text",
  articleCommentButton: '[data-testid="post-comment"]',
  articleCommentDeleteButton: '[data-testid="delete-button"]',
};

// class -> .class_name
// id -> #id_name
