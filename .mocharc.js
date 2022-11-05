'use strict';
module.exports = {
  recursive: true,
  timeout: 5000,
  'node-option': [
    'experimental-specifier-resolution=node',
    'loader=ts-node/esm',
  ],
};
