/**
 * Входная точка приложения.
 *
 * @author gjmazai
 */

import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/ui/app';
import './controls';

const rootEl = document.getElementById('root');

const render = (Component: () => ReactElement) =>
	// eslint-disable-next-line react/no-render-return-value
	ReactDOM.render(
		<React.StrictMode>
			<Component />
		</React.StrictMode>,
		rootEl
	);

render(App);
