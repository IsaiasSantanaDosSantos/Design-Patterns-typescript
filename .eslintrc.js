module.exports = {
  parser: "@typescript-eslint/parser", // Define o parser do TypeScript
  parserOptions: {
    ecmaVersion: 11, // Permite o parsing de features modernas do ECMAScript
    sourceType: "module", // Permite o uso de imports
  },
  extends: [
    "eslint:recommended", // Usa as regras recomendadas pelo ESLint
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", // Usa as regras recomendadas pelo @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended", // Habilita o eslint-plugin-prettier e exibe erros do Prettier como erros do ESLint. Certifique-se de que este é o último no array extends.
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    // Coloque suas regras de substituição aqui
    "@typescript-eslint/no-empty-function": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        usePrettierrc: false,
      },
    ],
  },
  env: {
    browser: true, //
    node: true, // Habilita variáveis globais do Node.js como 'global' e 'process'
    es6: true, // Habilita todas as funcionalidades do ECMAScript 6
  },
};
