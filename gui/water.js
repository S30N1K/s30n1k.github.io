function extend(objectOne, objectTwo) {
    OOP.forEach(objectOne, function (i, j) {
        objectTwo[j] = i;
    });
    return objectTwo;
}

let newWater = function (option) {
    option = extend(option, {
        x: 0, y: 0,
        w: 0, h: 0,
        segments: 0,
        speed: 0,
        fillColor: '',
        strokeColor: '',
        strokeWidth: 0,
        force: 0
    });

    let polygon = game.newPolygonObject({
        x: option.x, y: option.y,
        strokeColor: option.strokeColor,
        fillColor: option.fillColor,
        strokeWidth: option.strokeWidth,
        userData: {
            segments: option.segments,
            speed: option.speed,
            force: option.force,
            width: option.w
        }
    });

    polygon.w = option.w;
    polygon.h = option.h;

    let _w = null, _h = null;

    polygon.draw = function (e) {
        return function () {

            if (polygon.points.length !== polygon.segments + 3 || _h !== polygon.h || _w !== polygon.w) {
                _h = polygon.h;
                _w = polygon.w;
                polygon.points = [];
                polygon.addPoint(point(0, _h));
                OOP.forInt(polygon.segments, (i) => polygon.addPoint(point(((i / polygon.segments) * _w), 0)));
                polygon.addPoint(point(_w, 0));
                polygon.addPoint(point(_w, polygon.h));
            }

            OOP.forArr(polygon.getPoints(), (e, i, a) => {
                if (i !== 0 && i !== a.length - 1) {
                e.y = Math.sin((game.getTime() / 1000) * polygon.speed + i) * polygon.force + polygon.force;
            }
        });

            return e.apply(this, arguments);
        }
    }(polygon.draw);

    return polygon;
};