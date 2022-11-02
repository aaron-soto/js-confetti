class Particle {
	constructor() {
		let xTemp = random(0, canvas.width);
		this.initialX = xTemp;
		this.x = xTemp;
		this.y = 0 - random(0, 600);
		let tempWidth = random(5, 10);
		this.initialWidth = tempWidth;
		this.width = tempWidth;
		this.height = random(10, 20);
		this.fallSpeed = random(fallSpeed, fallSpeed + 4);
		this.maxDrift = random(100, 200);
		this.driftAngle = random(1, 3);
		this.fallDir = 'right';
		this.color = COLORS[random(0, COLORS.length - 1)];
		this.ang = random(0, 90);
		this.widthDir = 'dsc';
	}

	center() {
		return {
			x: this.x + this.width / 2,
			y: this.y + this.height / 2,
		};
	}

	draw() {
		c.save();

		// randomly draw piece white to emulate a glimmer
		let randomColor = random(1, 5);
		if (randomColor <= 4) {
			c.fillStyle = this.color;
		} else {
			if (randomColor === 5) {
				c.fillStyle = '#22333b';
			} else {
				c.fillStyle = 'white';
			}
		}
		// c.globalAlpha = 0.6;
		c.translate(this.center().x, this.center().y);
		c.rotate((Math.PI / 180) * this.ang);

		c.fillRect(0, 0, this.width, this.height);
		c.restore();
	}

	update() {
		this.y += this.fallSpeed;
		this.ang += 5;

		// increase or Decrease width based on direction term
		if (this.widthDir === 'dsc' && this.width >= 0) {
			this.width -= 1;
		} else if (this.widthDir === 'asc' && this.width <= this.initialWidth) {
			this.width += 1;
		}

		// set direction term based on width
		if (this.width === 0) {
			this.widthDir = 'asc';
		} else if (this.width === this.initialWidth) {
			this.widthDir = 'dsc';
		}

		// set drift angle based on direction term
		if (this.x <= this.initialX + this.maxDrift && this.fallDir === 'right') {
			this.x += this.driftAngle;
		} else {
			this.x -= this.driftAngle;
			this.fallDir = 'left';
		}

		if (this.x >= this.initialX - this.maxDrift && this.fallDir === 'left') {
			this.x -= this.driftAngle;
		} else {
			this.x += this.driftAngle;
			this.fallDir = 'right';
		}
	}
}
