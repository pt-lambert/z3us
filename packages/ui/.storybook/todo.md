## addons

```
addons: [
'@storybook/addon-links',
'@storybook/addon-essentials',
'@storybook/addon-a11y',
'@storybook/addon-actions',
'@storybook/addon-viewport',
'@storybook/addon-storysource',
'storybook-addon-designs',
'storybook-addon-pseudo-states',
'storybook-dark-mode',
'@storybook/preset-scss',
],
```

## OLD preview

```
import React from 'react'
import { addDecorator } from '@storybook/react'
import { useDarkMode } from 'storybook-dark-mode'
import { darkTheme, globalStyles } from '../src/theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'
import { handlers } from '../.mocks/handlers'

// msw
initializeWorker()
addDecorator(mswDecorator)

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		// -  defaultViewport: 'iphonex',
	},
	backgrounds: {
		default: 'white',
		values: [
			{
				name: 'white',
				value: '#fff',
			},
		],
	},
	darkMode: {
		// -  current: 'light',
		current: 'dark',
	},
	msw: handlers,
}

export const decorators = [
	Story => {
		globalStyles()
		const element = window.document.body
		const isDarkMode = useDarkMode()
		if (isDarkMode) {
			element.classList.add(darkTheme)
		} else {
			element.classList.remove(darkTheme)
		}

		return (
			<div style={{ padding: '10px' }}>
				<Story />
			</div>
		)
	},
```
