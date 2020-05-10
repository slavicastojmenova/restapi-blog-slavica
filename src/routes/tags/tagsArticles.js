const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readData('articles.json');

  const { slug } = req.params;

  const tagArticles = articles.filter(article => {
    if (article.tags.includes(slug)) {
      return article;
    }
  });

  if (!slug) {
    throw new Error('Invalid tag');
  }

  res.json(tagArticles);
};
