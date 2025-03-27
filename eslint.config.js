import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { settings: { react: { version: 'detect'} } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },

  // "recommended rules for code correctness that you can drop in without additional configuration"
  // https://typescript-eslint.io/users/configs/#recommended
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);