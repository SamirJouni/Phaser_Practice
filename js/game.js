// Scene

const gameScene  = new Phaser.Scene('Game');

// Preload

gameScene.preload = function () {
	this.load.image('background', 'assets/background.png');
	this.load.image('player', 'assets/player.png');
	this.load.image('dragon', 'assets/dragon.png');
}

// Create

gameScene.create = function () {

	const gameW = this.sys.game.config.width;
	const gameH = this.sys.game.config.height;

	// background

	const bg = this.add.sprite(0, 0, 'background');
	// bg.setOrigin(0,0);
	bg.setPosition(gameW/2, gameH/2);

	// player

	this.player = this.add.sprite(70, gameH/2, 'player');
	// player.depth = 1;

	this.player.setScale(.5);

	// enemy

	this.enemy = this.add.sprite(250, gameH/2, 'dragon');
	// this.enemy.scaleX = 2;
	// this.enemy.scaleY = 2;
	// this.enemy.flipX = true;

	// this.enemy.angle = 45;
	// this.enemy.setAngle(-45);
	// this.enemy.setOrigin(0,0);
	// this.enemy.rotation = Math.PI / 4;
	// this.enemy.setRotation(Math.PI / 4);

	// enemy2

	// const enemy2 = this.add.sprite(450, gameH/2, 'dragon');
	// enemy2.displayWidth = 100;
	// enemy2.flipY = true;

}

// Update
 gameScene.update = function () {
	 this.enemy.angle += 1;

	 if (this.player.scaleX < 2 ) {
		 this.player.scaleX += 0.01;
		 this.player.scaleY += 0.01;
	 }
 };

// Config

const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scene: gameScene
}

// Game

const game = new Phaser.Game(config);