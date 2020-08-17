let canvas = document.getElementById('sketchpad')
let c = canvas.getContext('2d');

canvas.width = 0.95*window.innerWidth;
canvas.height = 0.8 * window.innerHeight;


let drawing = false;
let mx =0, my = 0;
let globalDecrement = .025*(window.innerWidth); // this is to account for margin on body
let ctrl = false;
let keys = new Array(250).fill(0);
console.log(keys);

//user controlled variables
let fillColor = 'rgba(0, 0, 0, 0.3)'; // user changable
let strokeColor = 'rgba(0, 0, 0, 1)';
let brushSize = 1; // this will be radius of brush
let brushType = 'circle'; // options will currently by brush triangle and square (maybe add rectangle)


//can be butt round or square (make user choose)
c.lineCap = "round";

document.getElementById('ranger').oninput = function(){
	brushSize = this.value;
	console.log(this.value, brushSize, 'OW');
}

document.addEventListener('mousedown', function(e){
	console.log(e);
	drawing = true;
	mx = e.clientX;
	my = e.clientY;
	ctrl = e.ctrlKey; // if theyre holding the control key its eraser
});

document.addEventListener('keydown', function(e){
	console.log(e)
	keys[e.keyCode] = true;
	c.beginPath();
	c.moveTo(mx, my);
	if(keys[16] && keys[17]){
		c.clearRect(0, 0, canvas.width, canvas.height);
	}
})

document.addEventListener('keyup', function(e){
	keys[e.keyCode] = false;
	c.beginPath();
})
document.addEventListener('mousemove', function(e){
	mx = e.clientX;
	my = e.clientY;
	drawing && !ctrl ? sketch() : drawing && ctrl ? erase() : null;
})

document.addEventListener('mouseup', function(){
	c.beginPath();
	drawing = false;
	ctrl = false;
})

let sketch = () => {
/*	c.fillStyle = fillColor;
	c.fillRect(mx - brushSize/2, my - brushSize/2, brushSize/2, brushSize/2);
*/	
	c.strokeStyle = strokeColor;
	c.lineWidth = brushSize;
	c.lineTo(mx - globalDecrement, my - globalDecrement);
	c.stroke();
	console.log('ow');
}

let erase = () => {
	c.strokeStyle = 'white';
	c.lineWidth = brushSize;
	c.lineTo(mx - globalDecrement, my - globalDecrement);
	c.stroke();
	console.log('oh!');
}


let animate = () => {
	requestAnimationFrame(animate);

//	if(drawing && !ctrl) sketch(brushSize, brushType);
	if(drawing && ctrl) erase(brushSize, brushType);
}

animate();


