class JAGame {
    init() {
        this.entityList = [];
    }

    applyAnimation(animation) {
        
    }

    addEntity(entity) {
        this.entityList.push(entity);
    }

    removeEntity(uid) {
        for (let idx = 0; idx < this.entityList.length; idx++) {
            const entity = this.entityList[idx];
            if (entity.uid = uid) {
                array.splice(idx, 1);
                return true;
            }
        }
        return false;
    }
}