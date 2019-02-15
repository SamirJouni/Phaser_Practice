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

	const player = this.add.sprite(70, gameH/2, 'player');
	// player.depth = 1;

	player.setScale(.8);

	// enemy

	const enemy = this.add.sprite(250, gameH/2, 'dragon');
	enemy.scaleX = 2;
	enemy.scaleY = 2;

	// enemy2

	const enemy2 = this.add.sprite(450, gameH/2, 'dragon');

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