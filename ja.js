const ja = {}

ja.counter = 0;

ja.game = new JAGame();
ja.animator = new JAAnimator();
ja.canvas = new JACanvas();

ja.game.init();
ja.animator.init();
ja.canvas.init();

ja.nextCounter = function () {
    return ++ja.counter;
}

