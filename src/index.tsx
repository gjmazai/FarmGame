/**
 * Входная точка приложения.
 *
 * @author gjmazai
 */

import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { loadIcons } from './config/icon-loader';
import { App } from './app';
import './controls';

loadIcons();

const rootEl = document.getElementById('root');

const render = (Component: () => ReactElement) =>
	// eslint-disable-next-line react/no-render-return-value
	ReactDOM.render(
		<React.StrictMode>
			{/* <ThemeProvider theme={muiTheme}> */}
			<Component />
			{/* </ThemeProvider> */}
		</React.StrictMode>,
		rootEl
	);

render(App);
