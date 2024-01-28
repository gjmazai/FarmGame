import Phaser from 'phaser';

import { BootstrapScene, GameScene } from './service';

const config = {
  type: Phaser.WEBGL,
  backgroundColor: '#000000',
  parent: 'game-root',
  canvas: document.getElementById('game-canvas') as HTMLCanvasElement,
  width: window.visualViewport.width,
  height: window.visualViewport.height - 4,
  pixelArt: true,
  scene: [BootstrapScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 },
    },
  },
};

export const PhaserGame = new Phaser.Game(config);

(window as any).game = PhaserGame;
