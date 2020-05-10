const { readData, writeData } = require('../../utils');

module.exports = async (req, res) => {
  const { articleId } = req.params;
  const { title, summary, body, tags } = req.body;

  const articles = await readData('articles.json');
  const article = await readData('articles.json').then(articles =>
    articles.find(({ id }) => id === articleId)
  );

  if (!article) {
    throw new Error('Invalid articleId');
  }

  const index = articles.indexOf(article);
  articles.splice(index, 1);

  const updatedArticle = {
    id: article.id,
    authorId: article.authorId,
    title: title || article.title,
    summary: summary || article.summary,
    body: body || article.body,
    tags: tags || article.tags
  };

  const originalTags = await readData('tags.json');
  updatedArticle.tags.forEach(tag =>
    Object.keys(originalTags).includes(tag)
      ? originalTags
      : (originalTags[tag] = tag)
  );

  await writeData(originalTags, 'tags.json');

  if (
    !updatedArticle.title ||
    updatedArticle.title.length < 2 ||
    !updatedArticle.summary ||
    updatedArticle.summary.length < 6 ||
    !updatedArticle.body ||
    updatedArticle.body.length < 6 ||
    !updatedArticle.tags ||
    updatedArticle.tags.length < 1
  ) {
    throw new Error('invalid input data');
  }

  const updatedArticles = articles.map(article => {
    return article.id === articleId ? updatedArticle : article;
  });

  await writeData(updatedArticles, 'articles.json');
  res.json(updatedArticle);
};
