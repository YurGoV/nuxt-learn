module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // ?
    'plugin:nuxt/recommended'
    // "plugin:prettier/recommended",
    //
    // 'plugin:vue/vue3-essential',
    // 'eslint:recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
