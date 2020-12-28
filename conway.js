canvas.width = document.querySelector('nav').clientWidth;

let offset = document.querySelector('nav').clientHeight;
canvas.height = document.getElementById("codething").clientHeight+offset

let mx = 0;
let my = 0;

let scaleX = canvas.width/100;
let scaleY = scaleX
let pause = false;

document.addEventListener("click", event => {
    mx = event.clientX;
    my = event.clientY-offset;
    mx = Math.floor(mx/scaleX);
    my = Math.floor(my/scaleY);
    cubes[my][mx].filled = !cubes[my][mx].filled;
})

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

console.log(window.mobileAndTabletCheck());

window.addEventListener("resize", () => {
    if(!window.mobileAndTabletCheck()){
        canvas.height = document.getElementById("codething").clientHeight
        canvas.width = window.innerWidth
        offset = document.querySelector('nav').clientHeight;
        scaleY = scaleX = canvas.width/100;
    }
})

document.onkeydown = e => {
    e.key == 'p'?pause = true:pause=false;
}

class Cube{
    constructor(x, y, filled){
        this.x = x;
        this.y = y;
        this.filled =(filled>0.5?true:false);
        this.neighbors = 0;
    }

    draw = () => {
        c.fillStyle = 'rgba(0, 0, 0, 0.8)'
        this.filled?c.fillRect(this.x*scaleX, this.y*scaleY+offset, scaleX, scaleY):null;
    }

    update = () => {
        if(this.neighbors > 3 || this.neighbors < 2){
            this.filled = false;
        }
        else if(this.neighbors == 3){
            this.filled = true;
        }

        this.draw();
    }

    getNeighbors = () => {
        this.neighbors = 0;
        for(let z = (this.y!=0?-1:0); z <= (this.y!=cubes.length-1?1:0); z++){
            for(let m = (this.x!=0?-1:0); m <= (this.x!=cubes[0].length-1?1:0); m++){
                if(cubes[this.y+z][this.x+m].filled == true){
                    this.neighbors++;
                }
            }
        }
        if(cubes[this.y][this.x].filled) this.neighbors--;
    }
}

c.clearRect(0, 0, canvas.width, canvas.height);

let numOfBlocks = Math.floor(canvas.width/scaleX*canvas.height/scaleY)

let cubes = new Array(Math.floor(canvas.height/scaleY));

for(let i =0; i < cubes.length;i++){
    cubes[i]=new Array(Math.floor(canvas.width/scaleX))
}

for(let i = 0; i < Math.floor(canvas.height/scaleY); i++){
    for(let j = 0; j < Math.floor(canvas.width/scaleX); j++){
        cubes[i][j]=(new Cube(j, i, (Math.round(Math.random()*0.7))))
    }
}


cubes.forEach(e => e.forEach(i => i.draw()));

let animate = () => {
    if(document.querySelector('nav div').classList.contains('show') == true){
        offset = document.querySelector('nav').clientHeight;
        canvas.height = document.getElementById("codething").clientHeight+offset
    } else{
        offset = document.querySelector('nav').clientHeight;
        canvas.height = document.getElementById("codething").clientHeight+offset
    }
    c.clearRect(0, 0, canvas.width, canvas.height)
    if(!pause){
        cubes.forEach(e => e.forEach(i => i.getNeighbors()));
        cubes.forEach(e => e.forEach(i => i.update()));
    }
    else{
        cubes.forEach(e => e.forEach(i => i.draw()));
    }
}

let interval = setInterval(animate, 70);