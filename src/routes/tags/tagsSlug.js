const { readData } = require('../../utils');

module.exports = async (req, res) => {
  const { slug } = req.params;

  const tags = await readData('tags.json');

  const tag = tags[slug];

  if (!tag) {
    throw new Error('Invalid tag');
  }

  res.json(tag);
};
