const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const { articleId } = req.params;

  const articles = await readData('articles.json');
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    throw new Error('Invalid articleId');
  }

  res.json(article);
};
