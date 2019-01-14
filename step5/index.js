const prop = require('crocks/Maybe/prop');
const propPath = require('crocks/Maybe/propPath');

const getUser = id =>
  new Promise((resolve, reject) => {
    const result = {
      status: 200,
      body: {
        id: 1,
        nick: 'mats',
        email: 'mats@gmail.com',
        address: {
          street: 'MainStreet',
          city: 'Katowice',
          state: 'PA',
          postCode: '41-500'
        }
      }
    };
    resolve(prop('body', result));
  });

const getPostCode = propPath(['address', 'postCode']);

getUser(3)
  .then(user => user.chain(getPostCode).option('default'))
  .then(console.log);
