class Point {
    constructor(y = 0, x = 0) {
        this._y = y;
        this._x = x;
    }

    get y() {
        return this._y;
    }

    get x() {
        return this._x;
    }

    set y(newY) {
        if(newY >= 0) this._y = newY;
    }

    set x(newX) {
        if(newX >= 0) this._x = newX;
    }

}

module.exports = Point;