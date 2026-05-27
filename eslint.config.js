import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import simpleImport from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import ts from 'typescript-eslint';

import svelteConfig from './svelte.config.js';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	prettier,
	svelte.configs.prettier,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		rules: {
			// typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
			// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
			'no-undef': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},

	{
		plugins: {
			'simple-import-sort': simpleImport,
			'unused-imports': unusedImports
		},
		// Override or add rule settings here, such as:
		// 'svelte/button-has-type': 'error'
		rules: {
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'unused-imports/no-unused-imports': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			]
		}
	}
);
