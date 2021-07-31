module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/typescript", "prettier"],
  rules: {
    "vue/no-unused-vars": "error",
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
