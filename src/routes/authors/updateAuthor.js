const { readData, writeData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readData('authors.json');

  const author = authors.find(({ id }) => id === authorId);

  const { name, avatar, email, username, website, bio } = req.body;

  const updatedAuthor = {
    id: author.id,
    name: name || authors.name,
    avatar: avatar || authors.avatar,
    email: email || authors.email,
    username: username || authors.username,
    website: website || authors.website,
    bio: bio || authors.bio
  };

  if (
    !updatedAuthor.name ||
    updatedAuthor.name.length < 3 ||
    !updatedAuthor.avatar ||
    !updatedAuthor.email ||
    updatedAuthor.email.length < 7 ||
    !updatedAuthor.username ||
    updatedAuthor.username.length < 7 ||
    !updatedAuthor.website ||
    updatedAuthor.website.length < 6 ||
    !updatedAuthor.bio ||
    updatedAuthor.bio.length < 12
  ) {
    throw new Error('Invalid data input');
  }

  const updatedAuthors = authors.map(author => {
    return author.id === authorId ? updatedAuthor : author;
  });

  await writeData(updatedAuthors, 'authors.json');

  res.json(updatedAuthor);
};
