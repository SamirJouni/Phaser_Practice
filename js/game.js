// Scene

const gameScene  = new Phaser.Scene('Game');

// Preload

gameScene.preload = function () {
	this.load.image('background', 'assets/background.png');
	this.load.image('player', 'assets/player.png');
	this.load.image('dragon', 'assets/dragon.png');
	this.load.image('treasure', 'assets/treasure.png');
}

// Create

gameScene.create = function () {

	// dimensions

	const gameW = this.sys.game.config.width;
	const gameH = this.sys.game.config.height;

	// background

	const bg = this.add.sprite(0, 0, 'background');
	bg.setPosition(gameW/2, gameH/2);

	// player

	this.player = this.add.sprite(70, gameH/2, 'player');
	this.player.setScale(.5);

	// dragon

	this.dragon = this.add.sprite(250, gameH/2, 'dragon');

}

// Update
 gameScene.update = function () {

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