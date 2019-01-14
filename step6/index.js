const { createUrlFromName, getArticleName } = require('../utils');

const article = {
  id: 1,
  name: 'React Native Development'
};

const url = getArticleName(article)
  .map(createUrlFromName)
  .option('default');

url;
