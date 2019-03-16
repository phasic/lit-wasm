module.exports = {
    "extends": "eslint-config-ing",
    "parser": "babel-eslint",
    "rules": {
      "import/extensions": 0,
      "import/prefer-default-export": 0,
    },
    "settings": {
      "import/resolver": {
        "node": {
          "moduleDirectory": ["node_modules", "bower_components"],
        }
      }
    },
    "globals": {
      "_": false,
      "axios": false,
      "platform": false,
      "Raven": false,
      "Redux": false,
      "ING": false,
      "Logger": false,
      "Cypress": false,
      "cy": false,
      "it": false,
      "beforeEach": false,
      "context": false,
      "before": false,
      "expect": false,
      "assert": false
    },
    "plugins": [
      "html",
      "cypress"
    ],
    "env": {
      "browser": true,
      "cypress/globals": true
    }
  };
  