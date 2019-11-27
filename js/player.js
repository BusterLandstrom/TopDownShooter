var x = 480,  //Starting x for the character
    y = 370,  //Starting y for the character 
    velY = 0, //velocity on the y axis for the character
    velX = 0, //Velocity on the x axis for the character
    speed = 4, //Max speed fo the character
    friction = 0.9, //Friction for the character
    characterWidth = 64, //Character width
    characterHeight = 64, //Character height
    charHP = 10, //Character Health Points
    bulletWidth = 16, //Projectile Width
    bulletHeight = 16, //Projectile Height
    bulletxc = x, //Projectile x coordnates
    bulletyc = 6000000000, //Projectile y coordinates
    bulletVelocity = 0, // Bullet velocity
    bulletFriction = 0.8, // Bullet friction
    bulletSpeed = 2, //Projectile speed
    initpos = 1,
    shootTimeModifier = 6,
    canShoot = true, //Setting the boss shooting mechanics to true
    keys = []; //What key is pressed

function walkingScript(){
    
    /**/ //Checking if the keys are pressed down and changes velocity accordingly
    if /*W & uparrow*/ (keys[87] || keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    if /*S & downarrow*/ (keys[83] || keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if /*D & rightarrow*/ (keys[68] || keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if /*A & leftarrow*/ (keys[65] || keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }
    /**/

    /**/ // Checking for bounds On the x axis
    if (x >= 989) {
        x = 989;
    } else if (x <= 3) {
        x = 3;
    }
    /**/

    /**/ // Checking for bounds On the y axis
    if (y > 700) {
        y = 700;
    } else if (y <= 3) {
        y = 3;
    }
    /**/

    /**/ // Applying friction so the character stops and moves according to the physics
    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;
    /**/

    /**/ //Drawing the placeholder character
    characterImg = document.getElementById("character")
    character = createImage(characterImg, x, y, characterWidth, characterHeight);
    /**/

    /**/ //Drawing projectile
    bulletImg = document.getElementById('bullet');
    bullet = createImage(bulletImg, bulletxc, bulletyc, bulletWidth, bulletHeight);
    /**/

    /**/ //Bullet bounds check
    if (bulletyc < HEIGHT) {
        /**/ //Bullet moving if it is in frame
        if (bulletVelocity < bulletSpeed) {
            bulletVelocity--;
        } else {
            bulletVelocity++;
            if (bulletyc < 0){
                bulletSpeed = 6;
            }
        }
        /**/
    }
    if (canShoot == true) {
        if(keys[32]){
            if (initpos == 1){
                console.log("well it kinda worked");
                bulletxc = x + (characterWidth/2); //Setting start position
                bulletyc = y + 20; //Setting position
                initpos = 0; //Setting init value
                shootTimeModifier = 0;
            }
            bulletSpeed = 6; //Bullet speed set to 6 regardless of what has been set before
            
            canShoot = false; //Setting can shoot to false since the bullet was just shot
        }
    } else {
        /**/ //Setting shoot time delay to get smaller every second 1/60 (since 1 sec = 60 frames and it updates every 60 frames) unitl bullet can be shot again
        shootTimeModifier += 1;
        if (shootTimeModifier <= 100) {
            canShoot = false;
            initpos = 0;
        }
        else if (shootTimeModifier > 100) {
            canShoot = true;
            initpos = 1;
        }
        /**/
    } 
    
    shootDelay = bar();
    

    /**/ //Applies friction and move the projectile
    bulletVelocity *= bulletFriction;
    bulletyc += bulletVelocity;
    /**/
}

/**/ //Stamina bar
bar = function(){
    barimg = document.getElementById("noFill");
    barimgfill = document.getElementById("fill");
    barNo = createImage(barimg, 26, 80, 100, 20)
    barFill = createImage(barimgfill, 26, 80, shootTimeModifier, 20);
}
/**/

/**/ //Key down and up event listeners so the button activates on down press and deactivates on up release
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
/**/