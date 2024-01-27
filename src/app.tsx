import React from 'react';

import { PhaserGame } from './phaser-game';
import { GameContainer } from './component';

import './app.scss';

window.addEventListener('load', () => {
  PhaserGame.scene.start('bootstrap');
});

export const App = () => {
  // TODO Сделать роутинг
  return (
    <div className="inherit-size">
      <GameContainer />
    </div>
  );
};
