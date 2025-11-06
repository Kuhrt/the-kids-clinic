import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintPluginPrettierRecommended,
  {
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports
    }
  },
  {
    rules: {
      // ESLINT
      'no-extra-boolean-cast': 'off',
      // UNUSED IMPORTS
      'unused-imports/no-unused-imports': 'error',
      // IMPORT SORT
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error'
    }
  },
  {
    files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // `react` first, `next` second, then packages starting with a character
            [
              '^react',
              '^next',
              '^[a-z]',
              '^@',
              '^components(/.*|$)',
              '^stores(/.*|$)',
              '^utils(/.*|$)',
              '^hooks(/.*|$)',
              '^services(/.*|$)',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ],
            // Models and types (new Array makes blank space between groups)
            ['^models']
          ]
        }
      ]
    }
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ])
]);

export default eslintConfig;
