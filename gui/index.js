let pjs = new PointJS('2d');
let game = pjs.game;
let camera = pjs.camera;
let brush = pjs.brush;
let key = pjs.keyControl;
let mouse = pjs.mouseControl;
let point = pjs.vector.point;
let OOP = pjs.OOP;
pjs.system.initFullPage();
pjs.system.setStyle({backgroundColor: '#404040'});
pjs.system.setSettings({isAutoClear: true});
mouse.initMouseControl();
key.initKeyControl();


let color = '#30a7de';

let water = newWater({
    x: 110, y: 110,
    w: 550, h: 150,
    segments: 10,
    speed: 2,
    fillColor: color,
    strokeColor: color,
    strokeWidth: 1,
    force: 10
});

let gui = newGui(700, 100, 'GUI');

gui.slider('x', 0, game.getWH().w, 1, water.x, function (e) {
    water.x = e;
});
gui.slider('y', 0, game.getWH().h, 1, water.y, function (e) {
    water.y = e;
});
gui.slider('Ширина', 0, game.getWH().w, 1, water.w, function (e) {
    water.w = e;
});
gui.slider('Высота', 0, game.getWH().h, 1, water.h, function (e) {
    water.h = e;
});
gui.slider('Кол-во', 1, 20, 1, water.segments, function (e) {
    water.segments = e;
});
gui.slider('Скорость', 1, 10, 1, water.speed, function (e) {
    water.speed = e;
});
gui.slider('Сила', 3, 30, 1, water.force, function (e) {
    water.force = e;
});
gui.checkbox('Заливка', true, function (e) {
    water.fillColor = e ? color : '';
});
gui.button('Перекрасить в черный', function () {
    color = '#000';
    water.strokeColor = color;
    water.fillColor = water.fillColor === '' ? '' : color;
});
gui.button('Перекрасить в красный', function () {
    color = '#ff9dab';
    water.strokeColor = color;
    water.fillColor = water.fillColor === '' ? '' : color;
});
gui.button('Перекрасить в зеленый', function () {
    color = '#a4bf85';
    water.strokeColor = color;
    water.fillColor = water.fillColor === '' ? '' : color;
});
gui.button('Перекрасить в голубой', function () {
    color = '#30a7de';
    water.strokeColor = color;
    water.fillColor = water.fillColor === '' ? '' : color;
});

game.newLoopFromClassObject('game', new function () {

    this.update = function () {

        let move = point(0, 0);
        key.isDown('W') && (move.y -= 5);
        key.isDown('S') && (move.y += 5);
        key.isDown('A') && (move.x -= 5);
        key.isDown('D') && (move.x += 5);
        camera.move(move);

        water.draw();
        gui.draw();
    }

});

game.startLoop('game');