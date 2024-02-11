/**
 * Модуль экспортирует класс 
 * 
 * 
 */

export class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: any, x: number, y: number) {
        super(scene, x, y, 'phaser-logo');
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setCollideWorldBounds(true)
            .setBounce(0.6)
            .setInteractive()
            .on('pointerdown', () => {
              this.setVelocityY(-400);
        });
    }
}