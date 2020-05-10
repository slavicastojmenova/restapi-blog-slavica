const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const { comment } = req.query;
  const comments = await readData('comments.json');

  res.json(comments.filter(({ articleId }) => articleId === comment));
};
