/*
 * @Author: June
 * @Description: 
 * @Date: 2024-09-27 21:56:03
 * @LastEditors: June
 * @LastEditTime: 2024-09-27 22:54:08
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './lib/.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
