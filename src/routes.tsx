import React from 'react';

import { GameContainer } from './widgets/game';
import { Page } from './config/constants';

const Routes: Map<Page, JSX.Element> = new Map<Page, JSX.Element>();
Routes.set(Page.GAME, <GameContainer />);

export default Routes;
