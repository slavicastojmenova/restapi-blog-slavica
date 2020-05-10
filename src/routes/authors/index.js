const express = require('express');
const router = express.Router();

const authors = require('./authors');
const authorId = require('./authorId');
const authorArticles = require('./authorArticles');

const createAuthor = require('./createAuthor');
const deleteAuthor = require('./deleteAuthor');
const updateAuthor = require('./updateAuthor');

router.get('/', authors);
router.get('/:authorId', authorId);
router.get('/:authorId/articles', authorArticles);

router.post('/', createAuthor);
router.post('/:authorId', updateAuthor);

router.delete('/:authorId', deleteAuthor);

module.exports = router;
