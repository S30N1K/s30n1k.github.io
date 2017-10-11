import {game, random} from "../point.debugger";

const $ = require('./shtml');

const options = {
    x: 'number',
    y: 'number',
    w: 'number',
    h: 'number',
    fillColor: 'color',
    strokeColor: 'color',
    strokeWidth: 'number',
    angle: 'number',
    alpha: 'number',
    visible: 'bool',
    radius: 'number'
};

const list = [];

let frames = 0;

const close = function (element) {
    const index = list.findIndex(e => e.element === element);
    if (index > -1){
        list.splice(index, 1);
        $(`[visualeditor-id="${element.id}"]`).remove();
        $(`.pointDebugger > .items > [item-id="${element.id}"]`).removeClass('active');
    }
};

module.exports = {
    add: function (element) {
        const container = $.createElement('div').addClass('visualEditor').attr('visualEditor-id', element.id);
        const title = $.createElement('div').addClass('title').html(`#${element.id} - ${element.type}`);
        const closeButton = $.createElement('div').addClass('closeButton').html('X');
        const content = $.createElement('div').addClass('content');


        const x = random(0, game.size.w - 300 - 300);
        const y = random(0, game.size.h - 289);

        container.css({
            padding: 100,
            top: y  + 'px',
            left: x + 'px'
        });

        $.ready(() => $('body').append(container));

        // container.on('mousedown', () => {
        //    OOP.forArr(list, e => e.container.css('z-index', 49998));
        //    container.css('z-index', 49999);
        // });

        title.move(container, (x, y) => {
            const el = list.find(e => e.element === element);
            el.x = x;
            el.y = y;
        });

        closeButton.on('click', e => close(element));

        container.append(title);
        container.append(closeButton);
        container.append(content);


        OOP.forEach(options, (type, e) => {
            const item = $.createElement('div').addClass('item').attr('type', e);
            const name = $.createElement('div').addClass('name').html(e);

            item.append(name);

            switch (type){
                case 'number': {
                    const value = $.createElement('input').attr('type', 'number').addClass('value');

                    value.on('mouseenter', e => {
                        value.attr('lock', true);
                    });
                    value.on('mouseleave', e => {
                        value.removeAttr('lock').attr('update', value.val());
                    });

                    item.append(value);
                    break;
                }
                case 'color': {
                    const value = $.createElement('input').attr('type', 'text').addClass('value');
                    item.append(value);
                    break;
                }
                case 'bool': {
                    const value = $.createElement('input').attr('type', 'checkbox').addClass('value');
                    item.append(value);
                    break;
                }
            }

            content.append(item);
        });


        list.push({
            element, container,
            x: parseInt(container.css('left')),
            y: parseInt(container.css('top')),
            w: parseInt(container.css('width')),
            h: parseInt(container.css('height'))
        });
    },
    remove: function (element) {
        close(element);
    },
    draw: function () {

        OOP.forArr(list, e => {
            const element = e.element;
            const container = e.container;

            if (frames === 0){
                OOP.forEach(options, (type, e) => {
                    const selector = document.querySelector(`[visualeditor-id="${element.id}"] > .content > [type="${e}"] > .value`);

                    if (selector.getAttribute('lock')){
                        return;
                    }

                    if (selector.getAttribute('update')){
                        element[e] = parseInt(selector.getAttribute('update'));
                        selector.removeAttribute('update');
                    }

                    switch (type){
                        case 'number': {
                            selector.value = element[e];
                            break;
                        }
                        case 'color': {
                            selector.value = element[e];
                            break;
                        }
                    }
                });
            }

            brush.drawLineAS({
                x1: e.x + e.w / 2,
                y1: e.y + e.h / 2,
                x2: element.x,
                y2: element.y,
                strokeColor: '#9eb9ff',
                strokeWidth: 1
            })
        });
    }
};