import React from 'react';
import ReactDOM from 'react-dom';

import { loadIcons } from './config/icon-loader';
import { App } from './App';
import './controls';

loadIcons();

const rootEl = document.getElementById('root');

const render = Component =>
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
