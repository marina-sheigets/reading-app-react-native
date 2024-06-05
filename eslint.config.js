module.exports = {
    "plugins": [
      "@typescript-eslint",
      "unused-imports",
      "react-native"
    ],
    "parserOptions": {
      "ecmaVersion": 12,
      "sourceType": "module",
      "tsConfig": "tsconfig.json"
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-native/recommended"
    ],
    "rules": {
      "no-console": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "react-native/no-raw-text-children": "error",
      "react-native/no-debug-logs": "error"
    }
  };