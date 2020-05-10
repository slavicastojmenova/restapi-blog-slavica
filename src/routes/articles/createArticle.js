const { readData, writeData } = require('../../utils');

const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  const articles = await readData('articles.json');

  const { authorId, title, summary, body, tags } = req.body;

  if (!authorId) {
    throw new Error('Author Id is required');
  }

  if (!title || title.length < 4) {
    throw new Error('Invalid title');
  }

  if (!summary || summary.length < 20) {
    throw new Error('Invalid summary');
  }

  if (!body || body.length < 30) {
    throw new Error('Invalid article body');
  }

  if (!tags || tags.length < 1) {
    throw new Error('Invalid article tags');
  }

  const newArticle = {
    date: new Date(),
    id: uuidv4(),
    authorId,
    title,
    summary,
    body,
    tags
  };

  await writeData([...articles, newArticle], 'articles.json');

  res.json(newArticle);
};
