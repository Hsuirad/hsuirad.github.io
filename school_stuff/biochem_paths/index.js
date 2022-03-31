let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let image = document.getElementById('path')

canvas.width = image.offsetWidth;
canvas.height = image.offsetHeight;
let W = canvas.width;
let H = canvas.height;

c.fillStyle = "brown";

window.addEventListener('resize', () => {
    canvas.width = image.offsetWidth;
    canvas.height = image.offsetHeight;
    W = canvas.width;
    H = canvas.height
    testDraw();
})

let clicks = [];

canvas.addEventListener('mousedown', (e) => {
    if(clicks.length == 2){
        clicks = []
    }

    
    let x = (e.clientX - image.getBoundingClientRect().left)/ W
    let y = (e.clientY - image.getBoundingClientRect().top) / H
    clicks.push([x, y])

    console.log([x, y])

    if(clicks.length == 2){
        console.log(`
        x0: ${clicks[0][0]},
        y0: ${clicks[0][1]},
        dx: ${clicks[1][0] - clicks[0][0]},
        dy: ${clicks[1][1] - clicks[0][1]},`)
    }

    let del= "", data="";

    Object.keys(mlcs).forEach(e => {
        if(x > mlcs[e].x0 && x < mlcs[e].x0+mlcs[e].dx
        && y > mlcs[e].y0 && y < mlcs[e].y0+mlcs[e].dy){
            del = e;
            data = mlcs[e]
            console.log(true)
        }
    })
    if(del.length>0){
        delete mlcs[del];
        console.log("FUCK: " + del)

        setTimeout(() => {console.log(del, data); mlcs[del] = data; c.clearRect(0, 0, W, H);testDraw();}, 4000)
    }
    c.clearRect(0, 0, W, H);
    testDraw();
})

let testDraw = () => {
    Object.keys(mlcs).forEach((e,i) => {
        if(i == Object.keys(mlcs).length - 1 || 1)
            c.fillRect(mlcs[e].x0*W, mlcs[e].y0*H, mlcs[e].dx*W, mlcs[e].dy*H)
    });
}
    
testDraw();