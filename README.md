# Node.js Blog RESTful API

Create a RESTful API for the Blog project.

## Endpoints:

### articles

- `/articles` — lists all articles 
- `/articles/:articleId` — get article
- `/articles/:articleId/comments` — list all comments for the article with `articleId`
- `/articless/:articlesId` — create articles
- `/articless/:articlesId` — update articles
- `/articless/:articlesId` — create articles
- `/articless/:articlesId` — delete articles

### authors
- `/authors` — lists all authors
- `/authors/:authorId` — get author details
- `/authors/:authorId/articles` — list all author articles
- `/authors/:authorId` — create author
- `/authors/:authorId` — update author
- `/authors/:authorId` — create author
- `/authors/:authorId` — delete author

### tags
- `/tags` — lists all tags
- `/tags/:slug` — get tag details
- `/tags/:slug/articles` — list all tags
