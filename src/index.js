import Phaser from 'phaser';

// Loading assets (images, music, animations, etc.)
function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
}

function create() {
  this.add.image(0, 0, 'sky').setOrigin(0);
  this.add.sprite(config.width / 10, config.height / 2, 'bird').setOrigin(0);
}

const config = {
  // WebGL
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'app',
  physics: {
    // Arcade physics plugin, manages physics simulation
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create
  }
};

new Phaser.Game(config);
