class JACanvas {
    init() {

    }

    draw() {
        // update
        const anim = ja.animator.popAnimation();
        if (anim != null) {
            ja.game.applyAnimation(anim);
        }

        // render
        for (let idx = 0; idx < ja.game.entityList.length; idx++) {
            ja.game.entityList[idx].render();    
        }

        // still animating
        if (ja.animator.hasAnimation()) {
            window.requestAnimationFrame(draw);
        }
    }

}