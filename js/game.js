// Scene

const gameScene  = new Phaser.Scene('Game');

// Preload

gameScene.preload = function () {
	this.load.image('background', 'assets/background.png');
	this.load.image('player', 'assets/player.png');
}

// Create

gameScene.create = function () {
	let bg = this.add.sprite(0, 0, 'background');
	bg.setOrigin(0,0)
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