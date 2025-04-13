import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    "import/no-named-as-default": "warn",
    "import/no-named-as-default-member": "warn",
    "import/no-extraneous-dependencies": "warn",
    "import/no-cycle": "warn",
    "import/no-deduplicates": "warn",
    "import/no-self-import": "warn",
    "import/no-useless-path-segments": "warn",
    "import/no-relative-packages": "warn",
      "import/no-unresolved": [
      "error",
      {
        "caseSensitive": true
      }
    ]
    },
  },
]
