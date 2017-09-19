let newGui = function (x, y, _title) {

    let maxElements = 8;

    let container = game.newRectObject({
        w: 300, h: 35 * maxElements, x: 0, y: 28,
        fillColor: '#2b2b2b'
    });

    container.setShadow({
        shadowColor: "#000",
        shadowBlur: 5
    });

    let title = game.newTextObject({
        text: _title, size: 11,
        style: 'bold', color: '#fff'
    });

    let header = game.newImageObject({
        x: 100, y: 100, w: 300, h: title.size + 20,
        file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII='
    });

    let header2 = game.newImageObject({
        x: 100, y: 100, w: 150, h: title.size + 20,
        file: 'data:image/png;base64,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'
    });


    let offsetY = 0;
    let move = false;
    let elements = [];

    function addElement(_option) {
        let option = {
            type: '',
            name: '',
            min: 0,
            max: 10,
            step: 1,
            value: 5,
            checked: false,
            cb: function () {
            }
        };

        OOP.forEach(_option, function (i, j) {
            option[j] = i;
        });

        let colors = {
            slider: '#81a3e6',
            button: '#734d9a',
            checkbox: '#a4bf85'
        };

        option.color = colors[option.type];

        option.wrapper = game.newRectObject({
            w: 300, h: 30
        });

        option.name = game.newTextObject({
            size: 11, style: 'bold', color: '#e0e0e0', text: option.name
        });

        elements.push(option);

        return {};
    }

    return {
        // Добавить кнопку
        button: (name, cb) => addElement({type: 'button', name: name, cb: cb}),

        // Добавить слайдер
        slider: (name, min, max, step, value, cb) => addElement({
        type: 'slider',
        name: name,
        min: min,
        max: max,
        step: step,
        value: value,
        cb: cb
    }),

        // Добавить чекбокс
        checkbox: (name, checked, cb) => addElement({type: 'checkbox', name: name, checked: checked, cb: cb}),

        // Добавить поле для ввода текста
        text: () => addElement({}),

        draw: function () {
        let mp = mouse.getPosition();
        let cm = camera.getPosition();
        let gs = game.getWH();


        if (!move && mouse.isPress('LEFT') && mouse.isInObject(header)) {
            move = point(mp.x - header.x, mp.y - header.y);
        }

        if (move) {
            x = mp.x - move.x - cm.x;
            y = mp.y - move.y - cm.y;


            if (mouse.isUp('LEFT')) {
                move = null;
            }
        }

        x < 0 && (x = 0);
        y < 0 && (y = 0);
        x + header.w > gs.w && (x = gs.w - header.w);
        y + container.h > gs.h && (y = gs.h - container.h);

        container.x = header.x = x + cm.x;
        container.y = header.y = y + cm.y;

        header2.x = container.x + 150;
        header2.y = container.y;

        title.x = container.x + 9;
        title.y = container.y + 9;

        container.draw();

        if (elements.length && mouse.isInObject(container)) {
            let firstWrapper = elements[0].wrapper;
            let lastWrapper = elements[elements.length - 1].wrapper;

            mouse.isWheel('UP') && firstWrapper.y < container.y + firstWrapper.h && (offsetY += 31);
            mouse.isWheel('DOWN') && lastWrapper.y + lastWrapper.h > container.y + container.h && (offsetY -= 31);

        }

        OOP.forArr(elements, function (e, i) {

                e.wrapper.x = header.x;
                e.wrapper.y = header.y + header.h + (i * e.wrapper.h) + i * 1 + offsetY;

                e.name.x = header.x + 10;
                e.name.y = e.wrapper.y + 10;

                if (e.wrapper.y > header.y && !(e.wrapper.y + e.wrapper.h > container.y + container.h)) {

                    let isHover = mouse.isInObject(e.wrapper);

                    e.wrapper.fillColor = isHover ? '#202020' : '#2b2b2b';

                    e.wrapper.draw();
                    e.name.draw();

                    // Линия слева
                    brush.drawLine({
                        strokeWidth: 4,
                        strokeColor: e.color,
                        x1: e.wrapper.x + 2,
                        y1: e.wrapper.y,
                        x2: 0, y2: e.wrapper.h
                    });

                    // Линия снизу
                    brush.drawLine({
                        strokeWidth: .2,
                        strokeColor: '#000000',
                        x1: e.wrapper.x,
                        y1: e.wrapper.y + e.wrapper.h + 1,
                        x2: e.wrapper.w, y2: 0
                    });

                    switch (e.type) {
                        case 'slider': {

                            if ((e.sliderPosition || e.numberPosition) && mouse.isMove()) {
                                if (e.sliderPosition && Math.abs(e.sliderPosition.x - mp.x) > 5) {
                                    e.value += e.sliderPosition.x < mp.x ? e.step : -e.step;
                                    e.value < e.min && (e.value = e.min);
                                    e.value > e.max && (e.value = e.max);
                                    e.cb(e.value);
                                    e.sliderPosition = mp;
                                }
                                if (e.numberPosition && Math.abs(e.numberPosition.y - mp.y) > 5) {
                                    e.value += e.numberPosition.y > mp.y ? e.step : -e.step;
                                    e.value < e.min && (e.value = e.min);
                                    e.value > e.max && (e.value = e.max);
                                    e.cb(e.value);
                                    e.numberPosition = mp;
                                }

                                mouse.isUp('LEFT') && (e.sliderPosition = false);
                                mouse.isUp('LEFT') && (e.numberPosition = false);
                            }

                            let isSliderHover = (
                                e.sliderPosition ||
                                mp.x > e.wrapper.x + 150 && mp.x < e.wrapper.x + 250 &&
                                mp.y > e.wrapper.y + 6 && mp.y < e.wrapper.y + 26
                            );

                            let isNumberHover = (
                                e.numberPosition ||
                                mp.x > e.wrapper.x + 255 && mp.x < e.wrapper.x + 295 &&
                                mp.y > e.wrapper.y + 6 && mp.y < e.wrapper.y + 26
                            );

                            brush.drawRect({
                                x: e.wrapper.x + 150,
                                y: e.wrapper.y + 6,
                                w: 100, h: 20,
                                fillColor: isSliderHover ? '#3c3c3c' : '#494949'
                            });

                            brush.drawRect({
                                x: e.wrapper.x + 150,
                                y: e.wrapper.y + 6,
                                w: ((e.value - e.min) / (e.max - e.min) * 100), h: 20,
                                fillColor: '#2FA1D6'
                            });

                            brush.drawRect({
                                x: e.wrapper.x + 255,
                                y: e.wrapper.y + 6,
                                w: 40, h: 20,
                                fillColor: isNumberHover ? '#3c3c3c' : '#494949'
                            });

                            brush.drawText({
                                x: e.wrapper.x + 260,
                                y: e.wrapper.y + 10,
                                color: '#fff',
                                text: e.value,
                                size: 11
                            });

                            if (isSliderHover && mouse.isPress('LEFT')) {
                                e.sliderPosition = mp;
                            }

                            if (isNumberHover && mouse.isPress('LEFT')) {
                                e.numberPosition = mp;
                            }

                            break
                        }
                        case 'button': {
                            isHover && mouse.isPress('LEFT') && e.cb();
                            break
                        }
                        case 'checkbox': {
                            brush.drawRoundRect({
                                x: e.wrapper.x + 150,
                                y: e.wrapper.y + 2.5,
                                w: 49, h: 25,
                                radius: 6,
                                fillColor: '#3c3c3c'
                            });

                            brush.drawCircle({
                                fillColor: e.checked ? '#747474' : '#282828',
                                strokeWidth: 1,
                                strokeColor: '#171717',
                                x: e.wrapper.x + (e.checked ? 175 : 151),
                                y: e.wrapper.y + 3.5,
                                radius: 11
                            });

                            isHover && mouse.isPress('LEFT') && e.cb(e.checked = !e.checked);
                            break
                        }
                        case'text': {
                            break
                        }
                    }
                }
            }
        );


        header.draw();
        header2.draw();
        title.draw();
    }
}
};