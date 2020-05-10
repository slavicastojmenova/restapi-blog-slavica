const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readData('articles.json');

  res.json(articles);
};
