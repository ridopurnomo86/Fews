module.exports = {
    root: true,
    extends: [
      '@nuxtjs/eslint-config-typescript',
      '@vue/eslint-config-airbnb-with-typescript',
      'plugin:prettier/recommended',
    ],
    rules: {
      'import/no-extraneous-dependencies': 0,
      'vue/multi-word-component-names': 0,
      'vue/no-multiple-template-root': 0,
      'vuejs-accessibility/click-events-have-key-events': 'off',
      "import/prefer-default-export": "off" | "warn" | "error"
    },
  };