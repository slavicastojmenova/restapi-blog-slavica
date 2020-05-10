const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const tags = await readData('tags.json');

  res.json(tags);
};
