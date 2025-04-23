import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import checkFile from 'eslint-plugin-check-file';



export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
   {
          files: ['src/*.*'],
          plugins: {
              'check-file': checkFile,
          },
          rules: {
              'check-file/filename-naming-convention': [
                  'error',
                  {
                      'src/*.{js,mjs,cjs}': 'PASCAL_CASE'
                  }
              ]
          }
      }
]);