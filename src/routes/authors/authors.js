const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readData('authors.json');

  res.json(authors);
};
