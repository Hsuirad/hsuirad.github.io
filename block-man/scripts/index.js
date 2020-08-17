let canvas = document.getElementById('map');
let c = canvas.getContext('2d');

// if height is lower height width is lower width
canvas.height = (window.innerHeight > window.innerWidth ? window.innerWidth: window.innerHeight);
canvas.width = (window.innerHeight > window.innerWidth ? window.innerWidth: window.innerHeight);


const mapHeight = 31; //map height to be scaled
const mapWidth = 28; //map width to be scaled

// this will be the directional move variable
let move = "";

// how to make sounds function
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
    this.setVol = function(vol){
        this.sound.volue = vol
    }
}

// sounds
let hurtSound = new sound('../resources/hurt.wav')
let bonusSound = new sound('../resources/bonus.wav')
let backgroundMusic = new sound('../resources/background.wav')

// this is the event listener, when you press an arrow key it sets the direction to move in
document.addEventListener('keydown', (e) => {
    //console.log(e.key);
    switch(e.key){
        case "ArrowLeft":
        case "a":
            move ="left";
            break;
        case "ArrowUp":
        case "w":
            move = "up";
            break;
        case "ArrowRight":
        case "d":
            move = "right";
            break;
        case "ArrowDown":
        case "s":
            move = "down";
            break;
    }
})

class BlockMan{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.dx = 0;
        this.dy = 0;
    }

    draw = () => {
        c.beginPath();
        c.strokeStyle = 'black';
        c.fillStyle = this.color;
        //c.rect(this.x*scaleX+(0.05*scaleX), this.y*scaleY+(0.05*scaleY), scaleX*0.9, 0.9*scaleY);
        c.arc(this.x*scaleX + scaleX/2, this.y*scaleY+scaleY/2, scaleY/2, 0, 2*Math.PI)
        c.font=`${Math.round(scaleX/2)}px Verdana`;
        c.stroke();
        c.fill()

        c.fillStyle = 'white'
        c.fillText('Player', this.x*scaleX-scaleX/4, this.y*scaleY+scaleY*1.3)
    }

    update = () => {
        // where to move after player keypress
        switch(move){
            case "left":
                this.dx = -1;
                this.dy = 0;
                break;
            case "right":
                this.dx = 1;
                this.dy = 0;
                break;
            case "up":
                this.dy = -1;
                this.dx = 0;
                break;
            case "down":
                this.dy = 1;
                this.dx = 0;
                break;
        }

        //console.log(gameMap[13][8], this.x, this.y)

        // collision, if the index its trying to go to is a wall and
        // its velocity is in that direction then it doesnt go there
        if(gameMap[this.y][this.x+1]==0 && this.dx>0) this.dx=0;
        if(gameMap[this.y][this.x-1]==0 && this.dx<0) this.dx=0;
        if(gameMap[this.y+1][this.x]==0 && this.dy>0) this.dy=0;
        if(gameMap[this.y-1][this.x]==0 && this.dy<0) this.dy=0;

        this.x+=this.dx;
        this.y+=this.dy;
        if(this.x < 0) this.x = 27;
        if(this.x > 27) this.x = 0
        
        this.draw();
    }
}

let o = 0; // i made o = 0 so that in the array i could put "o" so itd be easier to visualize

class Map{
    constructor(seed){
        this.seed = seed; // i was planning on making multiple maps with different seeds (each seed is a new map), but i never got around to it
        this.mapArray; // just setting up an array of the game map
    }

    // map returner
    generateMap(){
        if(this.seed == 1){
            // hand drawn 28x31 size game map, same pac-man uses (1 & 2 are white squares, "o" is black)
            this.mapArray = [
                [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o],
                [o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o],
                [o, 1, o, o, 1, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, 1, o, o, 1, o],
                [o, 1, o, o, 1, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, 1, o, o, 1, o],
                [o, 1, o, o, 1, 1, 1, o, o, 1, 1, 1, 1, o, o, 1, 1, 1, 1, o, o, 1, 1, 1, o, o, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, o, o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, o, 1, o],
                [o, 1, o, o, 1, o, o, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, o, o, 1, o, o, 1, o],
                [o, 1, o, o, 1, o, o, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, o, o, 1, o, o, 1, o],
                [o, 1, 1, 1, 1, 1, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, o, o, 1, o, o, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, o, 1, 1, 1, 1, 1, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, 1, 1, o, o, 1, 1, 1, 1, o, 2, 2, 2, 2, 2, 2, o, 1, 1, 1, 1, o, o, o, o, 1, o],
                [o, o, o, 1, o, o, 1, o, o, 1, o, 2, 2, 2, 2, 2, 2, o, 1, o, o, 1, o, o, 1, 1, 1, o],
                [o, o, o, 1, o, o, 1, o, o, 1, o, 2, 2, 2, 2, 2, 2, o, 1, o, o, 1, o, o, 1, o, o, o],
                [o, o, o, 1, 1, 1, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, 1, 1, 1, o, o, o],
                [o, o, o, 1, o, o, 1, o, o, 1, 1, 1, 1, o, o, 1, 1, 1, 1, o, o, 1, o, o, 1, o, o, o],
                [o, o, o, 1, o, o, 1, o, o, o, o, o, 1, o, o, 1, o, o, o, o, o, 1, o, o, 1, o, o, o],
                [o, o, o, 1, o, o, 1, o, o, o, o, o, 1, o, o, 1, o, o, o, o, o, 1, o, o, 1, o, o, o],
                [o, 1, 1, 1, o, o, 1, o, o, 1, 1, 1, 1, o, o, 1, 1, 1, 1, o, o, 1, o, o, 1, 1, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o],
                [o, 1, o, o, o, o, o, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, o, o, o, o, o, 1, o],
                [o, 1, o, o, o, o, o, o, o, 1, o, o, o, o, o, o, o, o, 1, o, o, o, o, o, o, o, 1, o],
                [o, 1, 1, 1, 1, 1, 1, o, o, 1, o, o, 1, 1, 1, 1, o, o, 1, o, o, 1, 1, 1, 1, 1, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, o, o, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, 1, o, o, o, o, 1, o],
                [o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o, o, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, o],
                [o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o, o]
            ]
        }

        return this.mapArray;
    }

    drawMap(){
        this.generateMap()
        
        // loops through map 2d array and prints it all out
        for(let i = 0; i < this.mapArray.length; i++){
            for(let j = 0; j < this.mapArray[0].length; j++){
                c.beginPath();
                // sets the filling color (i used something called a ternary operator, basically a short if statement, to set the color)
                c.fillStyle = (this.mapArray[i][j] != 0 ? 'gray' : 'black');
                c.fillRect(scaleX*j, scaleY*i, scaleX+1, scaleY+1);
            }
        }
    }
}

let start;
let end;
let liveticker = 20;

class Ghost{
    // setting up the parameters
    constructor(x, y, timeDelay, color){
        this.x = x; // x position
        this.y = y; // y position
        this.timeDelay = timeDelay; // delay before it is spawned in game (in milliseconds)
        this.color = color; // color of ghost
        this.dx = 0; // x velocity
        this.first = true; // this is a junk variable i used to tell if its the first run
        this.dy = 0; // y velocity
        if(this.color == "orange") this.moveUpdateTicks = 100; // the amount of time before updating where to go
        if(this.color == 'orange') this.index = 0; // see below
        if(this.color == 'red') this.moveUpdateTicks = 100;
        if(this.color == 'red') this.index = 0;
        this.temp =0;
    }

    // draw function
    draw = () => {
        c.beginPath();
        c.strokeStyle = 'white';
        c.fillStyle = this.color;
        c.rect(this.x*scaleX+(0.05*scaleX), this.y*scaleY+(0.05*scaleY), scaleX*0.9, 0.9*scaleY);
        c.stroke();
        c.fill()
        c.font=`${Math.round(scaleX/2)}px Verdana`;
        c.fillStyle = 'white'
        c.fillText('Enemy', this.x*scaleX-scaleX/4, this.y*scaleY+scaleY*1.3)
    }

    //update function
    update = () => {
        //logic for orange ghost, he follows where the player is going to
        if(this.color == "orange"){
            if(this.first){
                this.y = 11;
                this.first =false;
            }
            //go down a path to get closer unless you can go into a hole
            if((this.dx == 0 && this.dy == 0) || time%this.moveUpdateTicks==0){
                start = graph.grid[this.y][this.x];
                if(bman.dx != 0 && (bman.y != this.y)){
                    if(bman.dx < 0){
                        while(gameMap[bman.y][bman.x+this.temp]!=0){
                            end = graph.grid[bman.y][bman.x+this.temp];
                            this.temp--
                        }
                        this.temp = 0;
                    }
                    else{
                        while(gameMap[bman.y][bman.x+this.temp]!=0){
                            end = graph.grid[bman.y][bman.x+this.temp];
                            this.temp++
                        }
                        this.temp = 0;
                    }
                }
                else if(bman.dy != 0 && (bman.x != this.x)){
                    if(bman.dy < 0){
                        while(gameMap[bman.y+this.temp][bman.x]!=0){
                            end = graph.grid[bman.y+this.temp][bman.x];
                            this.temp--
                        }
                        this.temp = 0;
                    }
                    else{
                        while(gameMap[bman.y+this.temp][bman.x]!=0){
                            end = graph.grid[bman.y+this.temp][bman.x];
                            this.temp++
                        }
                        this.temp = 0;
                    }
                }
                else{
                    end = graph.grid[bman.y][bman.x]
                }
                result = astar.search(graph, start, end);
            }

            
            // every fifth step the ghost waits to let the player have head start
            if(this.index != 5){
                this.x = (result.length>0 ? result[0].y : this.x);
                this.y = (result.length>0 ? result[0].x : this.y);
                this.index++;
            }
            else{
                this.index=0;
            }
        }
        // logic for red ghost, he follows the current player position
        else if(this.color == "red"){
            if(this.first){
                this.y = 11;
                this.first =false;
            }
            //go down a path to get closer unless you can go into a hole
            if((this.dx == 0 && this.dy == 0) || time%this.moveUpdateTicks==0){
                start = graph.grid[this.y][this.x];
                end = graph.grid[bman.y][bman.x];
                result = astar.search(graph, start, end);
            }

            
            //result.shift();
            if(this.index != 5){
                this.x = (result.length>0 ? result[0].y : this.x);
                this.y = (result.length>0 ? result[0].x : this.y);
                this.index++;
            }
            else{
                this.index=0;
            }
            liveticker == 0 ? null : liveticker--;
        }

        if(bman.x == this.x && bman.y == this.y && liveticker == 0){
            if(liveticker == 0){
                lives == 1 ? dead = true : lives--;
                liveticker = 10;
                c.fillStyle = 'rgba(255, 0, 0, 0.8)'
                c.fillRect(0, 0, canvas.width, canvas.height);
                hurtSound.play()
            }
        }

        this.draw();
    }
}

let scores = new Array(0); // an array of all the scores
let swap = 0; // a temporary value used for swaping in bubble sort
let sorted = false; // boolean for whether or not its sorted

// reset all variables and show leaderboard
function death(){
    // push the current score to the scores array and make everything reset
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    map = new Map(1);
    bman = new BlockMan(8, 13, 'yellow')
    redGhost = new Ghost(12, 13, 1000, "red")
    orangeGhost = new Ghost(14, 13, 2000, "orange")
    scores.push(score);
    c.font = '30pt Verdana';
    c.fillStyle = 'white'

    // bubble sort the leaderboard
    sorted = false
    while(!sorted){
        sorted = true;
        for(let i = 0; i < scores.length-1; i++){
            if(scores[i+1]>scores[i]){
                sorted = false;
                console.log(swap, scores[i+1], scores[i])
                swap = scores[i+1];
                scores[i+1] = scores[i];
                scores[i] = swap
                console.log(swap, scores[i+1], scores[i])
            }
        }
    }

    // reset lives and make new bonus points
    lives = 3;
    extras = [];
    for(let i =0; i < 100; i++){
        extras.push(new Extra(Math.round(Math.random()*25+1), Math.round(Math.random()*29+1), false));
    }
    
    // shows leaderboard
    c.fillText('LEADERBOARD', 0, 60)
    c.fillText(`First place: ${scores[0]}`, 0, 60*2)
    c.fillText(`Second place: ${scores.length>1?scores[1]:'-'}`, 0, 60*3)
    c.fillText(`Third place: ${scores.length>2?scores[2]:'-'}`, 0, 60*4)
    c.fillText(`Fourth place: ${scores.length>3?scores[3]:'-'}`, 0, 60*5)
    c.fillText(`Fifth place: ${scores.length>4?scores[4]:'-'}`, 0, 60*6)

    // wait 5 seconds (5000 milliseconds) then restart game
    setTimeout(()=>{dead=false;interval = setInterval(animate, timeInt)}, 5000)
    score = 0;
}

// this is the class for the extra point balls
class Extra{
    constructor(x, y, isSquare){
        this.x = x;
        this.y = y;
        this.touched = false;
        this.isSquare = isSquare; // the variable for whether or not its the 1000 square
    }

    draw = () => {
        if(!this.touched && gameMap[this.y][this.x] == 1){
            c.beginPath();
            c.fillStyle = 'green'
            if(this.isSquare){
                c.rect(this.x*scaleX, this.y*scaleY, scaleX, scaleY);
            }
            else{
                c.arc(this.x*scaleX+scaleX/2, this.y*scaleY+scaleX/2, scaleX/3, 0, 2*Math.PI)
            }
            c.fill()
        }
    }

    update = () => {
        if(this.x == bman.x && this.y == bman.y){
            this.touched = true;
            score+=(this.isSquare?1000:250);
            bonusSound.play()
        }
        else{
            this.draw();
        }
    }
}

// if its lives == 0 dead will be true and function death() will be run
let dead = false;

// the scale values, each index will take up a certain scaled square size
let scaleX = canvas.width/28 
let scaleY = canvas.height/31
let map = new Map(1); // create a new map
let bman = new BlockMan(8, 13, "yellow") // create a new player

var graph = new Graph(map.generateMap()); // create a new graph (see astar.js)
let result; // used for result
// create a map array
let gameMap = map.generateMap();

let redGhost = new Ghost(12, 13, 1000, "red")
let orangeGhost = new Ghost(14, 13, 2000, "orange")

let time = 0; // the total time passed;
let timeInt = 100; // one frame every 100 milliseconds (0.1 seconds)
let score = 0
let lives = 3;

// array for bonus points
let extras = [];

for(let i =0; i < 100; i++){
    extras.push(new Extra(Math.round(Math.random()*24+2), Math.round(Math.random()*28+2), false));
}

let animate = () => {
    backgroundMusic.play();
    if(!dead){    
        c.clearRect(0, 0, canvas.width, canvas.height)
        map.drawMap();
        if(time>redGhost.timeDelay) redGhost.update();
        if(time>orangeGhost.timeDelay) orangeGhost.update();

        extras.forEach(elem=>elem.update());
        console.log(extras)

        bman.update();
        time+=timeInt;
        score+=timeInt/10;
        c.fillStyle = 'white'
        c.font = "20px Verdana"
        c.fillText(`Lives: ${lives}`, 0, 31/2)
        c.fillText(`High score: ${scores.length>0?scores[0]>score?scores[0]:score:score}`, canvas.width*1/3, 31/2)
        c.fillText(`Score: ${score}`, 0, 31*scaleY);

    }
    // if its dead do death actions and stop the game
    else{
        clearInterval(interval)
        death();
        time =0;
        score = 0;
    }

}

let interval; // this is the interval variable, used to create a game loop

// start screen stuff and instructions
c.fillStyle = 'black';
c.font = '50px Verdana';
c.fillText('WELCOME TO BLOCK-MAN!!', 0, 50)
c.fillText('WASD or Arrow keys to move', 0, 100);

// gives you the start screen for 5 seconds (5000 milliseconds) and then starts the game
setTimeout(function(){
    begin();
}, 5000);

// this begins the game
function begin(){
    interval = setInterval(animate, timeInt)
}
