/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;


    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += speed;
        console.log('left: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= speed;
        console.log('right: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= speed;
    }
    this.moveDown = function () {
        this.top += speed;
    }


}

pikachu = new Hero('pikachu.png', 20, 30, 200, 5);
luffy = new Hero('luffy.png', 200, 30, 200, 200);

function start() {
    if (pikachu.left < window.innerWidth - pikachu.size) {
        pikachu.moveRight();
        // pikachu.moveDown();
        // pikachu.moveUp();
        // pikachu.moveLeft();
    }
    document.getElementById('pikachu').innerHTML = pikachu.getHeroElement();
    setTimeout(start, 500)

    if (luffy.left < window.innerWidth - luffy.size) {
        luffy.moveRight();
    }
    document.getElementById('luffy').innerHTML = luffy.getHeroElement();
    setTimeout(start, 500);
}

start();