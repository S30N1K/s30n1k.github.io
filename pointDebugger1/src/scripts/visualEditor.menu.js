const $ = require('./shtml');
import {pjs, mouse, game, OOP} from "../point.debugger";
const visualEditor = require('./visualEditor');

const canvas = require('./stats').canvas;
const menu = $.createElement('div').addClass('pointDebugger');
const wrapper = $.createElement('div').addClass('wrapper');
const title = $.createElement('div').addClass('title');
const items = $.createElement('div').addClass('items');

title.html('Список обьектов');

wrapper.append(title);
menu.append(wrapper);
menu.append(items);

let isActive = false;

canvas.on('contextmenu', () => {
    menu.css('display', 'block');
    items.css('maxHeight', pjs.game.getWH().h - 40 + 'px');
    isActive = true;
});

document.onmousemove = function () {
    if (isActive && game.size.w - 305 > mouse.position.x) {
        menu.css('display', 'none');
        isActive = false;
    }
};

$.ready(() => $('body').append(menu));


const addItem = function (e) {
    const item = $.createElement('div');
    item.html(`${e.type} #${e.id}`).addClass('item').addClass(e.type).attr('item-id', e.id);

    item.on('click', () => {
        item.toggleClass('active');
        if (item.issetClass('active')) {
            // dbg.add(e, ['id', 'type', 'x', 'y']);
            visualEditor.add(e);
        } else {
            // dbg.remove(e);
            visualEditor.remove(e);
        }
    });
    items.append(item);
};

// Обьекты, которые будем отлавливать
const objects = [
    'newBaseObject',
    'newTriangleObject',
    'newRectObject',
    'newRoundRectObject',
    'newCircleObject',
    'newEllipsObject',
    'newTextObject',
    'newPolygonObject',
    'newImageObject',
    'newAnimationObject'
];
OOP.forArr(objects, object => {
    game[object] = function (e) {
        return function () {
            const item = e.apply(this, arguments);
            addItem(item);
            return item;
        }
    }(game[object]);
});

module.exports = visualEditor;