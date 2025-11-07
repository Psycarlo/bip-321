import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/*.min.js"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unnecessary-condition": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-return": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",

      "no-console": "warn",
      "no-debugger": "error",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "no-throw-literal": "error",
      "no-return-await": "error",
      "require-await": "off",
      "no-async-promise-executor": "error",
      "no-promise-executor-return": "error",

      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-useless-concat": "error",
      "prefer-template": "error",
      "no-lonely-if": "error",
      "no-else-return": "error",
      "no-unneeded-ternary": "error",
      "prefer-destructuring": [
        "warn",
        { array: false, object: true },
        { enforceForRenamedProperties: false },
      ],

      "import/no-unresolved": "off",
      "import/named": "error",
      "import/no-duplicates": "error",
      "import/no-cycle": "error",
      "import/no-self-import": "error",

      "no-await-in-loop": "warn",
    },
  },
  {
    files: ["example.ts", "example.js"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];
