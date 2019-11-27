
var enemyW = 128,
    enemyH = 128,
    enemyHP = 25,
    enemyFric = 0.8, //Grim reaper friction
    enemyVel = 0, //Enemy velocity
    enemyx = Math.floor(Math.random() * (WIDTH - 30)) + 30, //Enemy x
    enemyy = 40, //Enemy y
    enemySpeed = 4; //Enemey speed

function enemyScript(){

    /**/ //Enemy boundscheck and auto move
    if (enemyy > HEIGHT){
        charHP += -1;
        enemyy = 40;
        enemyx = Math.floor(Math.random() * (WIDTH - enemyW)) + 30;
    }
    /**/

    /**/ //Setting speed and velocity val 
    if (enemyVel < enemySpeed){
        enemyVel++;
    }
    /**/

    /**/ //Enemy friction and moves enemy
    enemyVel *= enemyFric;
    enemyy += enemyVel;
    /**/

    enemyImg = document.getElementById("enemy");

    
    if (enemyHP > 0){
        enemy = createImage(enemyImg, enemyx, enemyy , enemyW, enemyH);

    } else if (enemyHP <= 0){
        ctx.font = "100px Arial";
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.fillText("Win", WIDTH/2, HEIGHT/2);
    }

    var bulletx = bulletxc + bulletWidth;
    var bullety = bulletyc + bulletHeight;
    var combineEx = enemyx + enemyW;
    var combineEy = enemyy + enemyH;
    if ((bulletyc <= combineEy && enemyy <= bullety) && (enemyx <= bulletx && combineEx >= bulletxc)) {
        /**/ //Checking if the bullt has been shot to the enemy and gets hit if deflection has been done
        enemyHP += -2;
        enemyy = 40;
        enemyx = Math.floor(Math.random() * (WIDTH - 30)) + 30;
        /**/
    }
    /**/

}