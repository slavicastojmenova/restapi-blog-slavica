const express = require('express');

const router = express.Router();

const articles = require('./articles');
const articleId = require('./articlesArticleId');
const articleComments = require('./articlesIdComments');

const createArticle = require('./createArticle');
const updateArticle = require('./updateArticle');


router.get('/', articles);
router.get('/:articleId', articleId);
router.get('/:articleId/comments', articleComments);

router.post('/', createArticle);
router.post('/:articleId', updateArticle);


module.exports = router;
