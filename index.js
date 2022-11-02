const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const NUM_OF_PARTICLES = 1000;
let DEBUG_MODE = false;
let frameAdv = false;
let fallSpeed = 3;

// const COLORS = [
// 	'#ff0000',
// 	'#ff8700',
// 	'#ffd300',
// 	'#deff0a',
// 	'#a1ff0a',
// 	'#0aff99',
// 	'#0aefff',
// 	'#147df5',
// 	'#580aff',
// 	'#be0aff',
// ];

// const COLORS = [
// 	'#f72585',
// 	'#7209b7',
// 	'#3a0ca3',
// 	'#4361ee',
// 	'#4cc9f0',
// 	'#9b5de5',
// 	'#f15bb5',
// 	'#fee440',
// 	'#00bbf9',
// 	'#00f5d4',
// ];

// const COLORS = ['#8338ec'];
// const COLORS = ['#fee440'];

// const COLORS = [
// 	'#001219',
// 	'#005f73',
// 	'#0a9396',
// 	'#94d2bd',
// 	'#e9d8a6',
// 	'#ee9b00',
// 	'#ca6702',
// 	'#bb3e03',
// 	'#ae2012',
// 	'#9b2226',
// ];

const COLORS = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < NUM_OF_PARTICLES; i++) {
	particles.push(new Particle());
}

const animate = () => {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	// allow pressing 'f' key to pause and arrow key to advance
	if (!DEBUG_MODE) {
		updateParticles();
	} else {
		if (frameAdv === true) {
			updateParticles();
			frameAdv = false;
		}
	}
	drawParticles();
};

const updateParticles = () => {
	particles.forEach((p, idx) => {
		if (p.y >= canvas.height) {
			// remove particle when it goes off screen
			particles.splice(idx, 1);
			// add new particle
			// particles.push(new Particle());
		} else {
			p.update();
		}
	});
};

const drawParticles = () => {
	particles.forEach((p) => {
		p.draw();
	});
};

animate();
