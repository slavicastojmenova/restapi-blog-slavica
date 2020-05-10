const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const { authorId } = req.params;

  const authors = await readData('authors.json');
  const author = authors.find(({ id }) => id === authorId);

  if (!author) {
    throw new Error('Invalid articleId');
  }

  res.json(author);
};
