/**/ //Setting up the canvas
const WIDTH = 1024;
const HEIGHT = 768;

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.setAttribute("class", "border");
canvas.width = WIDTH;
canvas.height = HEIGHT;
/**/

var dy = 0;
var dx = 0;
var angle = 0;

/**/ //createText function for easy text creation
createText = function(fillStyles, fonts, fontsize, text, x, y) {
    ctx.font = fontsize + " " + fonts;
    ctx.fillStyle = fillStyles;
    ctx.fillText(text, x, y);
};
/**/

/**/ //Create image function for easier image creation and nameing
createImage = function(img, x, y, dheight, dwidth){
    ctx.drawImage(img, x, y, dheight, dwidth);
};
/**/
function update(){
    requestAnimationFrame(update);
    ctx.clearRect(0,0,WIDTH,HEIGHT);

    if (charHP <= 0){
        ctx.font = "100px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText("Lost", WIDTH/2, HEIGHT/2);
    } else{
        walkingScript();
        enemyScript();
    }
    
}

update();

/**/ //Appending canvas to main
let main = document.getElementsByTagName('main')[0];
main.appendChild(canvas);
/**/