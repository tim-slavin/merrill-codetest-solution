'use strict';

module.exports = require('get-env')({
  integration: ['integration', 'integrate', 'integ'],
  test: ['test', 'testing'],
  jest: ['jest']
});
