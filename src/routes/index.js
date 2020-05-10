const express = require('express');
const router = express.Router();

const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

router.use('/articles', articles);
router.use('/authors', authors);
router.use('/tags', tags);

router.get('/', (req, res) => {
  res.json('RestApi Blog');
});

module.exports = router;
