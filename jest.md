## setup common logic for test env if needed
package.json:
  "jest": {
    "setupTestFrameworkScriptFile": "./tests/setup.js"
  },

## test suite timeout
jest.setTimeout(30000);
