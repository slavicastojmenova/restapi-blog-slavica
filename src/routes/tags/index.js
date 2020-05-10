const express = require('express');
const router = express.Router();

const tags = require('./tags');
const tagSlug = require('./tagsSlug');
const tagArticles = require('./tagsArticles');

router.get('/', tags);
router.get('/:slug', tagSlug);
router.get('/:slug/articles', tagArticles);

module.exports = router;
