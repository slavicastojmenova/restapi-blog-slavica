const { readData, writeData } = require('../../utils');

module.exports = async (req, res) => {
  const { articleId } = req.params;

  const articles = await readData('articles.json');
  const comments = await readData('comments.json');
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    throw new Error('Invalid articleId');
  }

  await writeData(
    articles.filter(({ id }) => id !== articleId),
    'articles.json'
  );
  await writeData(
    comments.filter(comment => comment.articleId !== articleId),
    'comments.json'
  );

  res.json(article);
};
