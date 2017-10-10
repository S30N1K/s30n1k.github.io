const pjs = new PointJS;
const game = pjs.game;
const vector = pjs.vector;
const point = vector.point;
const OOP = pjs.OOP;
const brush = pjs.brush;
const sys = pjs.system;
const math = pjs.math;
const random = math.random;
sys.initFullPage();

pjs.mouseControl.initMouseControl();

pjs.debug(true);

let items = [];
let gameSize = game.getWH();

function getRandomSpeed() {
    return random(1, 5) / 10;
}

OOP.forInt(200, i => {
    items.push(game.newCircleObject({
        x: random(0, gameSize.w),
        y: random(0, gameSize.h),
        radius: 1,
        fillColor: '#ffffff',
        userData: {
            _x: random(0, 1) ? -getRandomSpeed() : getRandomSpeed(),
            _y: random(0, 1) ? -getRandomSpeed() : getRandomSpeed()
        }
    }));
});



game.newLoopFromClassObject('a', new function () {

    this.update = function () {
        game.fill('#000000');

        let gameSize = game.getWH();

        OOP.forArr(items, e => {

            e.x += e._x;
            e.y += e._y;

            if (e.x < 0) {
                e._x = getRandomSpeed();
            }
            if (e.x > gameSize.w) {
                e._x = -getRandomSpeed();
            }
            if (e.y < 0) {
                e._y = getRandomSpeed();
            }
            if (e.y > gameSize.h) {
                e._y = -getRandomSpeed();
            }

            e.draw();

            OOP.forArr(items, j => {
                if (vector.getDistance(e.getPosition(), j.getPosition()) < 70) {
                    brush.drawLineAS({
                        x1: e.x,
                        y1: e.y,
                        x2: j.x,
                        y2: j.y,
                        strokeColor: '#7698cc',
                        strokeWidth: .07
                    });
                }
            });
        });
    };
});

game.startLoop('a');