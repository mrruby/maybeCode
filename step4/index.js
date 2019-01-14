const propPath = require('crocks/Maybe/propPath');

const user = {
  nick: 'mats',
  email: 'mats@gmail.com',
  address: {
    street: 'MainStreet',
    city: 'Katowice',
    state: 'PA',
    postCode: '41-500'
  }
};

const getPostCode = propPath(['address', 'postCode']);
const zip = getPostCode(user).option('not available');

zip;
