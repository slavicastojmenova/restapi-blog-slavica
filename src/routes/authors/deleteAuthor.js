const { readData, writeData } = require('../../utils');

module.exports = async (req, res) => {
  const { authorId } = req.params;

  const authors = await readData('authors.json');
  const comments = await readData('comments.json');
  const articles = await readData('articles.json');

  const author = authors.find(({ id }) => id === authorId);

  if (!author) {
    throw new Error('Invalid authorId');
  }

  await writeData(
    authors.filter(({ id }) => id !== authorId),
    'authors.json'
  );
  await writeData(
    comments.filter(({ userId }) => userId !== authorId),
    'comments.json'
  );

  await writeData(
    articles.filter(article => article.authorId !== authorId),
    'articles.json'
  );

  res.json(author);
};
