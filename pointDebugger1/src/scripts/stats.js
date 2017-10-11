const $ = require('./shtml');

// Настройки
let config = JSON.parse(localStorage.getItem('point.debugger')) || {

    // Режимы
    // 0 - Диаграммой отображается кол-во фпс и скорость выполнения скрипта за последние несколько секунд. Под диаграммой выводятся минимальные и максимальные значения.
    // 1 - Диаграмма не отображается, отображается в текстовом виде кол-во фпс и скорость выполнения, а так же минимальные и максимальные значения.
    // 2 - Диаграмма не отображается, отображается в текстовом виде кол-во фпс и скорость выполнения (без минимальных и максимальных значений).
    mode: 1
};

// Сохранение настроек
const configSave = function () {
    localStorage.setItem('point.debugger', JSON.stringify(config));
};

// Высота диаграммы
const statsHeight = 60;

// Канвас, на котором будем рисовать
const canvas = $.createElement('canvas').addClass('pointDebugger');
const context = canvas.selector[0].getContext('2d');

// Добавляем канвас после загрузки страницы
$.ready(() => $('body').append(canvas));

// Изменяем режимы при клике на холст
canvas.on('click', e => setMode(config.mode === 2 ? 0 : config.mode + 1));

// Размер блока для каждого из режимов
const statsSize = [[300, 105], [150, 32], [80, 32]];

// Переключение режимов
const setMode = function (mode, saveConfig = true) {
    config.mode = mode;

    canvas.selector[0].width = statsSize[config.mode][0];
    canvas.selector[0].height = statsSize[config.mode][1];
    canvas.css({
        width: statsSize[config.mode][0],
        height: statsSize[config.mode][1]
    });

    saveConfig && configSave();
};

setMode(config.mode);

// Отрисовать линию
const drawLine = function (option) {
    context.strokeStyle = option.color;
    context.lineWidth = option.width;
    context.beginPath();
    context.moveTo(option.x1, option.y1);
    context.lineTo(option.x2, option.y2);
    context.closePath();
    context.stroke();
};

// Отрисовать текст
const drawText = function (option) {
    context.font = `bold ${option.size}px Helvetica,Arial,sans-serif`;
    context.fillStyle = option.color;
    context.fillText(option.text, option.x, option.y);
};

const speed = {
    min: 0,
    max: 0,
    current: 0,
    list: [],
    color: '#0f0'
};

const fps = {
    min: 0,
    max: 60,
    current: 0,
    list: [],
    color: '#00FFFF'
};

for (let i = 0; i < statsSize[0][0]; i++) {
    speed.list[i] = 0;
    fps.list[i] = 0;
}

(function update() {

    // Очищаем весь холст
    context.clearRect(0, 0, statsSize[config.mode][0], statsSize[config.mode][1]);

    speed.list[statsSize[0][0] - 1] = speed.current;
    fps.list[statsSize[0][0] - 1] = fps.current;

    speed.min = Math.min.apply(null, speed.list);
    speed.max = Math.max.apply(null, speed.list);

    fps.min = Math.min.apply(null, fps.list);
    if (fps.current > fps.max) {
        fps.max = fps.current;
    }
    const maxFps = Math.max.apply(null, fps.list);

    if (config.mode === 0 || config.mode === 1) {
        for (let i = 0; i < statsSize[0][0]; i++) {
            if (statsSize[0][0] === i + 1) {
                continue;
            }

            if (config.mode === 0) {
                drawLine({
                    color: speed.color,
                    width: .5,
                    x1: i,
                    y1: Math.round((1 - (speed.list[i] / speed.max)) * statsHeight),
                    x2: i + 1,
                    y2: Math.round((1 - (speed.list[i + 1] / speed.max)) * statsHeight)
                });

                drawLine({
                    color: fps.color,
                    width: .5,
                    x1: i,
                    y1: Math.round((1 - (fps.list[i] / fps.max)) * statsHeight),
                    x2: i + 1,
                    y2: Math.round((1 - (fps.list[i + 1] / fps.max)) * statsHeight)
                });
            }

            speed.list[i] = speed.list[i + 1];
            fps.list[i] = fps.list[i + 1];
        }
    }

    if (config.mode === 0) {
        drawLine({
            color: '#000000',
            width: .5,
            x1: 0,
            y1: statsHeight + 3,
            x2: statsSize[0][0],
            y2: statsHeight + 3
        });
    }

    drawText({
        x: 2,
        y: config.mode === 0 ? statsHeight + 19 : 12,
        size: 11,
        text: `FPS: ${fps.current}` + (config.mode < 2 ? ` (${fps.min}-${maxFps})` : ''),
        color: fps.color
    });

    drawText({
        x: 2,
        y: config.mode === 0 ? statsHeight + 37 : 27,
        size: 11,
        text: `SPEED: ${speed.current.toFixed(2)}` + (config.mode < 2 ? ` (${speed.min.toFixed(2)}-${speed.max.toFixed(2)})` : ''),
        color: speed.color
    });

    (requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame || function (cb) {
        setTimeout(cb, 1000 / 60)
    })(update);
})();

let beginTime = 0;
let prevTime = beginTime;
let frames = 0;

module.exports = {
    canvas, setMode,
    start: function () {
        beginTime = (performance || Date).now();
    },
    end: function () {
        frames++;

        let time = ( performance || Date ).now();

        speed.current = time - beginTime;

        if (time >= prevTime + 1000) {

            fps.current = parseInt((frames * 1000) / (time - prevTime));

            prevTime = time;
            frames = 0;

        }

        beginTime = time;
    }
};