import { type ThemeId, themes } from '$lib/theme';

type ThemeSettings = {
	activeTheme: ThemeId;
};

export async function applyActiveTheme() {
	try {
		const response = await fetch('/data/theme.json');

		if (!response.ok) {
			throw new Error('Failed to fetch theme settings');
		}

		const settings = (await response.json()) as ThemeSettings;
		const theme = themes[settings.activeTheme] ?? themes['navy-red'];

		for (const [key, value] of Object.entries(theme.colors)) {
			document.documentElement.style.setProperty(`--color-${key}`, value);
		}
	} catch (error) {
		console.error('Theme failed to load', error);

		const fallbackTheme = themes['navy-red'];

		for (const [key, value] of Object.entries(fallbackTheme.colors)) {
			document.documentElement.style.setProperty(`--color-${key}`, value);
		}
	}
}
