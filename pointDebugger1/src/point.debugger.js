require('./style/common.scss');

let pjs, OOP, random, mouse, key, point, vector, size, game;

PointJS = function (e) {
    return function () {
        e.apply(this, arguments);

        pjs = this;
        OOP = pjs.OOP;
        random = pjs.math.random;
        mouse = pjs.mouseControl;
        key = pjs.keyControl;
        vector = pjs.vector;
        point = vector.point;
        size = vector.size;
        game = pjs.game;

        // Проверка вхождения курсора в обьект
        pjs.mouseControl.isObject = function (object) {
            const mp = pjs.mouseControl.getPosition();
            return mp.x > object.x && mp.x < object.x + object.w && mp.y > object.y && mp.y < object.y + object.h
        };


        const visualEditor = require('./scripts/visualEditor.menu');
        const stats = require('./scripts/stats');

        let isDebug = false;
        pjs.debug = function (e) {
            isDebug = e;
            stats.canvas.css('display', e ? 'block' : 'none');
        };


        mouse.position = point();
        game.size = size();

        game.newLoopFromClassObject = function (e) {
            return function () {
                if (typeof arguments[1].update === 'function') {
                    arguments[1].update = function (e) {
                        return function () {
                            mouse.position = mouse.getPosition();
                            game.size = game.getWH();
                            if (isDebug) {
                                stats.start();
                                const apply = e.apply(this, arguments);
                                stats.end();
                                visualEditor.draw();
                                return apply;
                            } else {
                                return e.apply(this, arguments);
                            }
                        }
                    }(arguments[1].update);
                }
                return e.apply(this, arguments);
            }
        }(game.newLoopFromClassObject);
    }
}(PointJS);

export {pjs, OOP, random, mouse, key, point, vector, size, game};