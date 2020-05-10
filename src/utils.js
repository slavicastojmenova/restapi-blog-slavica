const fs = require('fs').promises;
const path = require('path');

const JSON_DATA_DIR = path.resolve(__dirname, './data');

const writeData = async (data, filename) => {
  fs.writeFile(`${JSON_DATA_DIR}/${filename}`, JSON.stringify(data, null, 2));
};

const readData = async filename =>
  fs
    .readFile(`${JSON_DATA_DIR}/${filename}`)
    .then(res => JSON.parse(res.toString()));

module.exports = { writeData, readData };
