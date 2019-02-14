// Scene

const gameScene  = new Phaser.Scene('Game');

// Preload

gameScene.preload = function () {
	this.load.image('background', 'assets/background.png');
	this.load.image('player', 'assets/player.png');
}

// Create

gameScene.create = function () {
	const bg = this.add.sprite(0, 0, 'background');

	// bg.setOrigin(0,0);

	const gameW = this.sys.game.config.width;
	const gameH = this.sys.game.config.height;
	bg.setPosition(gameW/2, gameH/2);
}

// Config

const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 360,
	scene: gameScene
}

// Game

const game = new Phaser.Game(config);