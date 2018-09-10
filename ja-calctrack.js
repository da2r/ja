window.JACalcTrack = {}

JACalcTrack.calc = function (x1, x2, y1, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    if (adx < ady) {
        step = ady
        tx = JACalcTrack.traj(x1, step, dx)
        ty = JACalcTrack.linear(y1, step, dy > 0)
    } else if (adx > ady) {
        step = adx
        tx = JACalcTrack.linear(x1, step, dx > 0)
        ty = JACalcTrack.traj(y1, step, dy)
    } else {
        step = adx
        tx = JACalcTrack.linear(x1, step, dx > 0)
        ty = JACalcTrack.linear(y1, step, dy > 0)
    }

    return {
        tx: tx,
        ty: ty
    }
}

JACalcTrack.linear = function (start, step, plus) {
    const result = [];
    for (let idx = 0; idx <= step; idx++) {
        if (plus) {
            result[idx] = (start + idx);
        } else {
            result[idx] = (start - idx);
        }
    }
    return result;
}

JACalcTrack.traj = function (start, step, yaw) {
    const result = []
    let span = yaw * 1000 / step;
    const rounder = (yaw > 0) ? 500 : -500;
    for (let idx = 0; idx <= step; idx++) {
        const offset = Math.floor(((span * idx) + rounder) / 1000);
        result.push(start + offset);
    }
    return result;
}