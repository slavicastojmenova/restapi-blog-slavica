const { readData, writeData } = require('../../utils');

const { v4: uuidv4 } = require('uuid');

module.exports = async (req, res) => {
  const authors = await readData('authors.json');

  const { name, avatar, email, username, website, bio } = req.body;

  if (
    !name ||
    name.length < 3 ||
    !avatar ||
    !email ||
    email.length < 7 ||
    !username ||
    username.length < 7 ||
    !website ||
    website.length < 6 ||
    !bio ||
    bio.length < 12
  ) {
    throw new Error('Invalid data input');
  }

  const newAuthor = {
    id: uuidv4(),
    name,
    avatar,
    email,
    username,
    website,
    bio
  };

  await writeData([...authors, newAuthor], 'authors.json');

  res.json(newAuthor);
};
