let pjs = new PointJS('2D');
let game = pjs.game;
let camera = pjs.camera;
let vector = pjs.vector;
let point = vector.point;
let OOP = pjs.OOP;
let brush = pjs.brush;
let sys = pjs.system;
let size = vector.size;
let math = pjs.math;
let random = math.random;
let colors = pjs.colors;
sys.initFullPage();

let key = pjs.keyControl.initKeyControl();

let stats = {
    colors: {
        fps: '#0ff',
        ms: '#0f0',
        memory: colors.hex2rgba('#690034', 1)
    },
    fps: 0,
    ms: 0,
    memory: 0,
    beginTime: 0,
    prevTime: 0,
    frames: 0,
    x: 500, y: 300,
    w: 150, h: 60,

    list: {
        fps: [],
        ms: []
    },
    begin: function () {
        this.beginTime = ( performance || Date ).now();
    },
    end: function () {
        this.frames++;
        let time = ( performance || Date ).now();
        this.ms = time - this.beginTime;
        if (time > this.prevTime + 1000) {

            this.fps = ( this.frames * 1000 ) / ( time - this.prevTime );

            this.prevTime = time;
            this.frames = 0;

            this.memory = {
                current: performance.memory.usedJSHeapSize / 1048576,
                max: performance.memory.jsHeapSizeLimit / 1048576
            }

        }

        this.beginTime = time;
    },
    draw: function () {
        if (!this.memory.max) {
            return;
        }

        this.x = game.getWH().w - this.w - 7;
        this.y = 10;

        brush.drawLineAS({
            strokeWidth: .1,
            strokeColor: '#000000',
            x1: this.x, y1: this.y,
            x2: this.x, y2: this.y + this.h
        });
        OOP.forInt(5, i => {
            brush.drawLineAS({
                strokeWidth: .1,
                strokeColor: '#000000',
                x1: this.x, y1: this.y + (i * 15),
                x2: this.x + this.w, y2: this.y + (i * 15)
            })
        });

        OOP.forInt(6, i => {
            brush.drawLineAS({
                strokeWidth: .1,
                strokeColor: '#000000',
                x1: this.x + (this.w - (((game.getTime() * 1.2) - i * 5000) / 20 % this.w) ), y1: this.y,
                x2: this.x + (this.w - (((game.getTime() * 1.2) - i * 5000) / 20 % this.w) ), y2: this.y + this.h
            });
        });

        brush.drawLineAS({
            strokeWidth: .1,
            strokeColor: '#000000',
            x1: this.x + this.w, y1: this.y,
            x2: this.x + this.w, y2: this.y + this.h
        });

        let max = {
            fps: Math.max.apply(null, this.list.fps),
            ms: Math.max.apply(null, this.list.ms)
        };

        let min = {
            fps: Math.min.apply(null, this.list.fps),
            ms: Math.min.apply(null, this.list.ms)
        };

        OOP.forInt(this.w, i => {

            OOP.forArr(['ms', 'fps'], name => {
                let list = this.list[name];

                if (list.length === i + 1) {
                    return;
                }

                let currentPoint = list[i];
                let nextPoint = list[i + 1];

                currentPoint = Math.round(( 1 - ( currentPoint / max[name] ) ) * this.h);
                nextPoint = Math.round(( 1 - ( nextPoint / max[name] ) ) * this.h);

                brush.drawLineAS({
                    x1: this.x + i, y1: this.y + currentPoint,
                    x2: this.x + i + 1, y2: this.y + nextPoint,
                    strokeColor: this.colors[name],
                    strokeWidth: .5
                });

                list[i] = list[i + 1];
            })

        });

        this.list.fps[this.w - 1] = this.fps;
        this.list.ms[this.w - 1] = this.ms;

        brush.drawText({
            x: this.x - 80,
            y: this.y,
            color: this.colors.fps,
            style: 'bold',
            text: `${parseInt(this.fps)} FPS (${parseInt(min.fps)} - ${parseInt(max.fps)})`
        });
        brush.drawText({
            x: this.x - 80,
            y: this.y + 25,
            color: this.colors.ms,
            style: 'bold',
            text: `${parseInt(this.ms)} MS (${parseInt(min.ms)} - ${parseInt(max.ms)})`
        });
        brush.drawText({
            x: this.x - 80,
            y: this.y + 50,
            color: this.colors.memory,
            style: 'bold',
            text: `${parseInt(this.memory.current)} / ${parseInt(this.memory.max)} MB`
        });
    }
};

OOP.forInt(stats.w, i => {
    OOP.forArr(['ms', 'fps'], name => {
        stats.list[name][i] = 0;
    })
});

let count = 2000;

game.newLoopFromClassObject('index', new function () {
    this.update = function () {
        stats.begin();

        game.fill('#6c6c6c');

        OOP.forInt(count, i => {
            brush.drawCircle({
                x: Math.cos(game.getTime() / 1000 + i * 0.01) * 196 + 256,
                y: Math.sin(game.getTime() / 1000 + i * 0.01234) * 196 + 256,
                fillColor: colors.hex2rgba('#000000', .3),
                radius: 3
            });
        });

        brush.drawTextLines({
            lines: [`count: ${count}`, 'W = +100', 'S = -100'],
            x: 20, y: 20,
            color: "black",
            size: 21,
            style: 'bold'
        });

        if (key.isPress('W')){
            count += 100;
        }
        if (key.isPress('S')){
            count -= 100;
        }

        stats.end();
        stats.draw();
    }
});

game.startLoop('index');