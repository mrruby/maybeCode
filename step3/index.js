const { inc3, toUpper } = require('../utils');
const Maybe = require('crocks/Maybe');
const safe = require('crocks/Maybe/safe');
const { isNumber, isString } = require('crocks/predicates');

// const safeNum = val =>
//   typeof val === 'number' ? Maybe.Just(val) : Maybe.Nothing();
const safeNum = safe(isNumber);
const safeStr = safe(isString);

const input = safeNum(7);
const result = input.map(inc3).option('default');

// const input = safeStr('test');
// const result = input.map(toUpper).option('default');

result;
