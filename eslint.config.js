import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJs from '@eslint/js'
import pluginTs from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

/** @type {Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    ignores: ['**/dist', '**/node_modules', '**/out', '.vscode', 'package-lock.json', '**/*.d.ts'],
  },
  {
    files: ['**/*.{js,ts}'],
  },
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parser: parser,
      parserOptions: {
        project: true,
        sourceType: 'module',
      },
    },
    plugins: { '@typescript-eslint': pluginTs },
    rules: {
      ...pluginTs.configs.recommended.rules,
    },
  },
  eslintConfigPrettier,
]
