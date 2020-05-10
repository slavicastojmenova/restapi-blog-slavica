const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readData('authors.json');
  const articles = await readData('articles.json');

  const authorId = authors.filter(author => author.id === req.params.authorId);

  res.json(articles.filter(article => article.authorId === authorId[0].id));
};
