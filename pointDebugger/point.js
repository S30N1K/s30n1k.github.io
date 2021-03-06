function PointJS(ea, fa, ob, Ec) {
    this._logo = "http://pointjs.ru/PjsMin.png";
    var h = window, q = this, Ca = !0, pb = !0, Lb = !0, ka = !1, Da = !0, n = ea, p = fa, O = n / 2, P = p / 2,
        f = {x: 0, y: 0},
        t = {fillStyle: "black", strokeStyle: "black", globalAlpha: 1, font: "sans-serif", textBaseline: "top"},
        U = function (a) {
            console.log("[PointJS] : ", a)
        };
    "undefined" != typeof POINTJS_USER_LOG && (U = POINTJS_USER_LOG);
    var Pa = function (a) {
        // var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, ""));
        // b = b.split(/\n/);
        // b = ("" == b[2] ? b[0] : b[1]).split("/");
        // b = b[b.length -
        // 1].split(":");
        // U('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2]);
        console.log(a);
    };


    this.game = {};
    this.levels = {};
    this.camera = {};
    this.keyControl = {};
    this.mouseControl = {};
    this.touchControl = {};
    this.actionControl = {};
    this.system = {};
    this.vector = {};
    this.math = {};
    this.layers = {};
    this.colors = {};
    this.brush = {};
    this.audio = {};
    this.wAudio = {};
    this.resources = {};
    this.tiles = {};
    this.OOP = {};
    this.memory = {};
    this.zList = {};
    this.filters = {};
    this.system.log = U;
    this.system.consoleLog = function (a) {
        this.log = !0 ===
        a ? console.log : U
    };
    this.system.setTitle = function (a) {
        h.document.title = a
    };
    this.system.setSettings = function (a) {
        Ca = u(a.isShowError) ? a.isShowError : !0;
        pb = u(a.isStopForError) ? a.isStopForError : !0;
        Lb = u(a.isAutoClear) ? a.isAutoClear : !1;
        u(a.isZBuffer)
    };
    this.system.setDefaultSettings = function (a) {
        for (var b in a) t[b] = a[b];
        g.save()
    };
    this.system.setSmoothing = function (a) {
        Da = a;
        g.msImageSmoothingEnabled = Da;
        g.imageSmoothingEnabled = Da
    };
    var rc = {
        name: "PointJS", desc: "HTML5 Game Engine for JavaScript", author: "Skaner (skaner0@yandex.ru)",
        version: "0.2.1.0"
    };
    this.system.getInfo = function () {
        return rc
    };
    var ba = function (a, b) {
        b.prototype = Object.create(a.prototype);
        b.prototype.constructor = b
    }, ha = function (a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    };
    ha.prototype = {
        abs: function () {
            return new ha(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
        }, invert: function () {
            return new ha(-this.x, -this.y, -this.z)
        }, plus: function (a) {
            return new ha(this.x + a.x, this.y + a.y, this.z + a.z)
        }, minus: function (a) {
            return new ha(this.x - a.x, this.y - a.y, this.z - a.z)
        }, inc: function (a) {
            return new ha(this.x *
                a.x, this.y * a.y, this.z * a.z)
        }, div: function (a) {
            return new ha(this.x / a.x, this.y / a.y, this.z / a.z)
        }
    };
    var e = function (a, b, c) {
        return new ha(a, b, c)
    }, C = function (a, b, c) {
        return {w: a, h: b, d: c}
    }, ua = function (a, b) {
        return {x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}
    }, E = function (a, b, c) {
        if (0 != c) {
            var d = x(c);
            c = a.x - b.x;
            a = a.y - b.y;
            var m = Math.cos(d);
            d = Math.sin(d);
            return e(c * m - a * d + b.x, c * d + a * m + b.y)
        }
        return e(a.x, a.y)
    }, Ea = function (a, b) {
        return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
    }, la = function (a, b) {
        var c, d = 0;
        var m = 0;
        var e = b.length;
        for (c = b.length -
            1; m < e; c = m++) b[m].y > a.y != b[c].y > a.y && a.x < (b[c].x - b[m].x) * (a.y - b[m].y) / (b[c].y - b[m].y) + b[m].x && (d = !d);
        return d
    };
    this.vector.point = e;
    this.vector.v2d = e;
    this.vector.size = C;
    this.vector.getPointAngle = E;
    this.vector.isPointIn = la;
    this.vector.pointMinus = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y, z: a.z - b.z}
    };
    this.vector.pointPlus = ua;
    this.vector.pointInc = function (a, b) {
        return {x: a.x * b.x, y: a.y * b.y, z: a.z * b.z}
    };
    this.vector.pointDiv = function (a, b) {
        return {x: a.x / (0 != b.x ? b.x : 1), y: a.y / (0 != b.y ? b.y : 1), z: a.z / (0 != b.z ? b.z : 1)}
    };
    this.vector.pointAbs = function (a) {
        return {x: Math.abs(a.x), y: Math.abs(a.y), z: Math.abs(a.z)}
    };
    this.vector.getMidPoint = function (a, b) {
        return u(b) ? e((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
    };
    this.vector.getDistance = function (a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    };
    this.vector.isSame = function (a, b) {
        return u(b) ? a.x == b.x && a.y == b.y : !1
    };
    this.vector.getAngle2Points = Ea;
    this.vector.newStaticBox = function (a, b, c, d) {
        return {x: a, y: b, w: a + c, h: b + d}
    };
    this.vector.newDynamicBoxRect = function (a, b, c, d) {
        return [e(a, b), e(a +
            c, b), e(a + c, b + d), e(a, b + d)]
    };
    this.vector.moveCollision = function (a, b, c, d, m) {
        for (var f = e(c.x, c.y), g = 0, h = b.length, Fa; g < h; g += 1) if (Fa = b[g], !m || Fa.isInCameraStatic()) {
            var k = Fa.getStaticBox();
            if (a.isIntersect(Fa)) {
                var l = a.getStaticBox(), n = Math.abs(c.x), p = Math.abs(c.y);
                l.x + l.w > k.x + 10 + n && l.x < k.x + k.w - 10 - n && (0 < c.y && l.y + l.h < k.y + k.h / 2 + p ? f.y = 0 : 0 > c.y && l.y > k.y + k.h - k.h / 2 - p && (f.y = 0));
                l.y + l.h > k.y + 10 + p && l.y < k.y + k.h - 10 - p && (0 < c.x && l.x + l.w < k.x + k.w / 2 + n ? f.x = 0 : 0 > c.x && l.x > k.x + k.w - k.w / 2 - n && (f.x = 0));
                d && d(a, Fa)
            }
        }
        a.move(f);
        return f
    };
    this.vector.moveCollisionAngle = function (a, b, c, d, m, f) {
        var g = e();
        m = math.a2r(OOP.isDef(m) ? m : a.angle);
        g.x = c * Math.cos(m);
        g.y = c * Math.sin(m);
        c = 0;
        m = b.length;
        for (var h; c < m; c += 1) if (h = b[c], !f || h.isInCamera()) {
            var y = h.getStaticBox();
            if (a.isIntersect(h)) {
                var k = a.getStaticBox(), l = Math.abs(g.x), n = Math.abs(g.y);
                k.x + k.w > y.x + 10 + l && k.x < y.x + y.w - 10 - l && (0 < g.y && k.y + k.h < y.y + y.h / 2 + n ? g.y = 0 : 0 > g.y && k.y > y.y + y.h - y.h / 2 - n && (g.y = 0));
                k.y + k.h > y.y + 10 + n && k.y < y.y + y.h - 10 - n && (0 < g.x && k.x + k.w < y.x + y.w / 2 + l ? g.x = 0 : 0 > g.x && k.x > y.x + y.w - y.w / 2 - l &&
                    (g.x = 0));
                d && d(a, h)
            }
        }
        a.move(g);
        return g
    };
    var Mb = {}, qb = function () {
        var a = (new Date).getTime();
        Mb[a] && (a = qb());
        Mb[a] = !0;
        return a
    }, x = function (a) {
        return Math.PI / 180 * a
    }, ca = function (a, b, c) {
        var d = Math.floor(Math.random() * (b - a + 1) + a);
        return c && 0 == d ? ca(a, b, c) : d
    }, rb = function (a) {
        return 0 > a ? -1 : 1
    };
    this.math.limit = function (a, b) {
        var c = rb(a);
        a = Math.abs(a);
        b = Math.abs(b);
        return a < b ? a * c : b * c
    };
    this.math.sign = rb;
    this.math.a2r = x;
    this.math.random = ca;
    this.math.toInt = function (a) {
        return a >> 0
    };
    this.math.uid = qb;
    this.math.toZiro =
        function (a, b) {
            if (0 == a) return 0;
            var c = rb(a);
            b = Math.abs(b);
            a = Math.abs(a);
            return 0 < a && (a -= b, a < b) ? 0 : a * c
        };
    var Nb = function (a, b) {
        return a ? a : b ? b : !1
    }, Ob = [], sc = function (a, b) {
        var c;
        this.canvas = c = h.document.createElement("canvas");
        var d = c.style, m = r.style;
        d.position = "fixed";
        d.top = m.top;
        d.left = m.left;
        c.width = r.width;
        c.height = r.height;
        d.width = m.width;
        d.height = m.height;
        d.zIndex = m.zIndex + a;
        b && (d.opacity = Nb(b.alpha, 1), d.backgroundColor = Nb(b.backgroundColor, "transparent"));
        k.attach(c);
        (this.context = c.getContext("2d")).textBaseline =
            t.textBaseline;
        this.isAutoClear = !0;
        this.clear = function () {
            this.context.clearRect(0, 0, n, p)
        };
        this.on = function (a) {
            g = this.context;
            this.isAutoClear && this.clear();
            a(this);
            g = Pb
        };
        this.setVisible = function (a) {
            this.canvas.style = a ? "block" : "none"
        };
        Ob.push(this)
    }, va = function () {
        v(Ob, function (a) {
            a.canvas.width = n;
            a.canvas.height = p;
            a.canvas.style.width = r.style.width;
            a.canvas.style.height = r.style.height;
            a.context.textBaseline = t.textBaseline
        })
    };
    this.layers.newLayer = function (a, b) {
        return new sc(a, b)
    };
    var Qb = 0, k = {
        loaded: !1,
        events: {onload: [], preLoop: [], postLoop: [], gameBlur: [], gameFocus: [], gameResize: []},
        addEvent: function (a, b, c) {
            "onload" == a && k.loaded ? c() : k.events[a].push({id: b, func: c})
        },
        delEvent: function (a, b) {
            v(k.events[a], function (a, d, m) {
                a.id == b && m.splice(d, 1)
            })
        },
        runEvent: function (a) {
            v(k.events[a], function (a) {
                "function" == typeof a.func && a.func()
            })
        },
        attach: function (a) {
            var b = function () {
                h.document.body.appendChild(a)
            };
            k.loaded ? b() : k.addEvent("onload", "attachElement_PointJS" + (Qb += 1), b)
        },
        remove: function (a) {
            var b = function () {
                h.document.body.removeChild(a)
            };
            k.loaded ? b() : k.addEvent("onload", "attachElement_PointJS" + (Qb += 1), b)
        },
        getWH: function () {
            return {
                w: parseInt(h.document.documentElement.clientWidth || h.innerWidth || h.document.body.clientWidth),
                h: parseInt(h.document.documentElement.clientHeight || h.innerHeight || h.document.body.clientHeight)
            }
        }
    };
    this.system.delEvent = function (a, b) {
        k.delEvent(a, b)
    };
    this.system.addEvent = function (a, b, c) {
        k.addEvent(a, b, c)
    };
    this.system.removeDOM = function (a) {
        k.remove(a)
    };
    this.system.attachDOM = function (a) {
        k.attach(a)
    };
    this.system.newDOM =
        function (a, b) {
            var c = h.document.createElement(a);
            c.style.position = "fixed";
            c.style.left = 0;
            c.style.top = 0;
            c.style.zIndex = ma.style.zIndex + 1;
            c.style.border = "none";
            if (b) {
                var d = function (a) {
                    a.stopPropagation()
                };
                c.addEventListener("touchstart", d, !1);
                c.addEventListener("touchend", d, !1);
                c.addEventListener("touchmove", d, !1);
                c.addEventListener("mousedown", d, !1);
                c.addEventListener("mousepress", d, !1);
                c.addEventListener("mouseup", d, !1);
                c.addEventListener("mousemove", d, !1);
                c.addEventListener("keypress", d, !1);
                c.addEventListener("keydown",
                    d, !1);
                c.addEventListener("keyup", d, !1);
                c.addEventListener("click", d, !1);
                c.addEventListener("wheel", d, !1);
                c.addEventListener("mousewheel", d, !1);
                c.addEventListener("contextmenu", d, !1);
                c.addEventListener("selectstart", d, !1);
                c.addEventListener("dragstart", d, !1);
                c.addEventListener("DOMMouseScroll", d, !1)
            }
            k.attach(c);
            return c
        };
    var g = null, Pb = null;
    var r = h.document.createElement("canvas");
    Pb = g = r.getContext("2d");
    g.textBaseline = t.textBaseline;
    r.crossOrigin = "anonymous";
    r.width = parseInt(ea);
    r.height = parseInt(fa);
    r.style.position = "fixed";
    r.style.left = 0;
    r.style.top = 0;
    r.style.zIndex = 1E4;
    r.id = "PointJS-canvas_0";
    if ("object" == typeof ob) for (var sb in ob) sb.match(/margin|padding|position/) || (r.style[sb] = ob[sb]);
    k.addEvent("onload", "Window_Hide_Scroll", function () {
        h.document.body.style.overflow = "hidden";
        tb = {x: parseInt(r.style.left), y: parseInt(r.style.top)}
    });
    var ma = h.document.createElement("div");
    (function () {
        var a = ma.style;
        a.position = "fixed";
        a.top = a.left = 0;
        a.width = a.height = "100%";
        a.zIndex = 2E4
    })();
    k.attach(ma);
    var tb =
        e(0, 0);
    k.attach(r);
    this.system.setStyle = function (a) {
        if ("object" == typeof a) for (var b in a) r.style[b] = a[b]
    };
    this.system.getCanvas = function () {
        return r
    };
    this.system.getContext = function () {
        return g
    };
    this.system.resize = function (a, b) {
        n = a || ea;
        p = b || fa;
        O = n / 2;
        P = p / 2;
        r.width = n;
        r.height = p
    };
    this.system.initFullPage = function () {
        k.addEvent("gameResize", "PointJS_resizeGame", function () {
            n = k.getWH().w;
            p = k.getWH().h;
            O = n / 2;
            P = p / 2;
            r.width = n;
            r.height = p;
            g.textBaseline = t.textBaseline;
            va()
        });
        k.runEvent("gameResize", "PointJS_resizeGame")
    };
    var V = !1, tc = function () {
        V || (this.requestFullscreen ? (this.requestFullscreen(), V = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), V = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(), V = !0), n = k.getWH().w, p = k.getWH().h, O = n / 2, P = p / 2, r.width = n, r.height = p, va())
    }, ub = function (a) {
        V = Rb(h.document.fullscreenElement || h.document.mozFullScreenElement || h.document.webkitFullscreenElement)
    };
    h.document.addEventListener("webkitfullscreenchange", ub);
    h.document.addEventListener("mozfullscreenchange",
        ub);
    h.document.addEventListener("fullscreenchange", ub);
    this.system.initFullScreen = function () {
        V || (h.document.documentElement.onclick = tc, Ga || (k.addEvent("gameResize", "PointJS_initFullScreen", function () {
            n = k.getWH().w;
            p = k.getWH().h;
            O = n / 2;
            P = p / 2;
            r.width = n;
            r.height = p;
            g.textBaseline = t.textBaseline;
            va()
        }), k.runEvent("gameResize", "PointJS_initFullScreen")))
    };
    this.system.exitFullScreen = function () {
        V && (k.delEvent("gameResize", "PointJS_initFullScreen"), h.document.exitFullscreen ? (h.document.exitFullscreen(), V = !1) :
            h.document.mozCancelFullScreen ? (h.document.mozCancelFullScreen(), V = !1) : h.document.webkitExitFullscreen && (h.document.webkitExitFullscreen(), V = !1), n = ea, p = fa, O = n / 2, P = p / 2, r.width = n, r.height = p, va(), h.document.documentElement.onclick = function () {
        })
    };
    this.system.isFullScreen = function () {
        return V
    };
    this.system.exitFullPage = function () {
        k.delEvent("gameResize", "PointJS_resizeGame");
        n = ea;
        p = fa;
        O = n / 2;
        P = p / 2;
        r.width = n;
        r.height = p;
        va()
    };
    var X = !1, Ga = !1, Sb = ea, Tb = fa, Ub = !1;
    this.system.initFullScale = function (a) {
        Ga || (a && (Ub =
            !0), k.addEvent("gameResize", "PointJS_initFullScale", function () {
            var a = Sb, c = Tb, d = k.getWH();
            Ub ? (a = d.w, c = d.h) : d.w < d.h ? (c = d.w / n, a = d.w, c *= p) : d.h < d.w && (a = d.h / p, c = d.h, a *= n);
            Sb = a;
            Tb = c;
            X = {w: a / n, h: c / p};
            r.style.width = a + "px";
            r.style.height = c + "px";
            va()
        }), k.runEvent("gameResize", "PointJS_initFullScale"), Ga = !0)
    };
    this.system.exitFullScale = function () {
        Ga && (Ga = !1, k.delEvent("gameResize", "PointJS_initFullScale"), r.style.width = ea + "px", r.style.height = fa + "px")
    };
    this.system.getWH = function () {
        return k.getWH()
    };
    var F = !1;
    this.actionControl.initActionControl =
        function () {
            q.touchControl.isTouchSupported() && (F = !0, q.touchControl.initTouchControl());
            q.mouseControl.initMouseControl();
            return this
        };
    this.actionControl.isPress = function () {
        return F ? q.touchControl.isPress() : q.mouseControl.isPress("LEFT")
    };
    this.actionControl.isDown = function () {
        return F ? q.touchControl.isDown() : q.mouseControl.isDown("LEFT")
    };
    this.actionControl.isUp = function () {
        return F ? q.touchControl.isUp() : q.mouseControl.isUp("LEFT")
    };
    this.actionControl.isInObject = function (a) {
        return F ? q.touchControl.isInObject(a) :
            q.mouseControl.isInObject(a)
    };
    this.actionControl.isInStatic = function (a) {
        return F ? q.touchControl.isInStatic(a) : q.mouseControl.isInStatic(a)
    };
    this.actionControl.isInDynamic = function (a) {
        return F ? q.touchControl.isInDynamic(a) : q.mouseControl.isInDynamic(a)
    };
    this.actionControl.isPeekObject = function (a) {
        return F ? q.touchControl.isPeekObject(a) : q.mouseControl.isPeekObject("LEFT", a)
    };
    this.actionControl.isPeekStatic = function (a) {
        return F ? q.touchControl.isPeekStatic(a) : q.mouseControl.isPeekStatic("LEFT", a)
    };
    this.actionControl.isPeekDynamic =
        function (a) {
            return F ? q.touchControl.isPeekDynamic(a) : q.mouseControl.isPeekDynamic("LEFT", a)
        };
    this.actionControl.getPosition = function (a) {
        return F ? q.touchControl.getPosition() : q.mouseControl.getPosition()
    };
    this.actionControl.getPositionS = function (a) {
        return F ? q.touchControl.getPositionS() : q.mouseControl.getPositionS()
    };
    this.actionControl.getMouse = function () {
        return q.mouseControl
    };
    this.actionControl.getTouch = function () {
        return F ? q.touchControl : !1
    };
    this.actionControl.getActiveControl = function () {
        return F ?
            q.touchControl : q.mouseControl
    };
    this.actionControl.getActiveControlName = function () {
        return F ? "touchControl" : "mouseControl"
    };
    this.actionControl.getSpeed = function () {
        if (!F) return q.mouseControl.getSpeed() || q.touchControl.getSpeed()
    };
    var vb = !1, Qa = {
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40,
        SPACE: 32,
        CTRL: 17,
        SHIFT: 16,
        ALT: 18,
        ESC: 27,
        ENTER: 13,
        MINUS: 189,
        PLUS: 187,
        CAPS_LOCK: 20,
        BACKSPACE: 8,
        TAB: 9,
        Q: 81,
        W: 87,
        E: 69,
        R: 82,
        T: 84,
        Y: 89,
        U: 85,
        I: 73,
        O: 79,
        P: 80,
        A: 65,
        S: 83,
        D: 68,
        F: 70,
        G: 71,
        H: 72,
        J: 74,
        K: 75,
        L: 76,
        Z: 90,
        X: 88,
        V: 86,
        B: 66,
        N: 78,
        M: 77,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        C: 67,
        9: 57,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123
    }, wa = {
        37: "LEFT",
        39: "RIGHT",
        38: "UP",
        40: "DOWN",
        32: "SPACE",
        17: "CTRL",
        16: "SHIFT",
        18: "ALT",
        27: "ESC",
        13: "ENTER",
        189: "MINUS",
        187: "PLUS",
        20: "CAPS_LOCK",
        8: "BACKSPACE",
        9: "TAB",
        81: "Q",
        87: "W",
        69: "E",
        82: "R",
        84: "T",
        89: "Y",
        85: "U",
        73: "I",
        79: "O",
        80: "P",
        65: "A",
        83: "S",
        68: "D",
        70: "F",
        71: "G",
        72: "H",
        74: "J",
        75: "K",
        76: "L",
        90: "Z",
        88: "X",
        86: "V",
        66: "B",
        78: "N",
        77: "M",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        67: "C",
        57: "9",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12"
    }, uc = {
        8: !0,
        9: !0,
        13: !0,
        18: !0,
        16: !0,
        17: !0,
        27: !0,
        112: !0,
        113: !0,
        114: !0,
        115: !0,
        116: !0,
        117: !0,
        118: !0,
        119: !0,
        120: !0,
        121: !0,
        122: !0,
        123: !0
    };
    this.keyControl.getKeyList = function () {
        var a, b = [];
        for (a in Qa) b.push(a);
        return b
    };
    var Y = {}, Ha = {}, na = {}, Ia = !1, Ja = !1, Ra = !1, Sa = !1, vc = function (a) {
        D(na, function (a, c, d) {
            1 == a && (d[c] = 2)
        })
    };
    this.keyControl.getCountKeysDown =
        function () {
            var a = 0;
            D(Y, function (b, c) {
                b && a++
            });
            return a
        };
    this.keyControl.getAllKeysDown = function () {
        var a = [];
        D(Y, function (b, c) {
            b && a.push(wa[c])
        });
        return a
    };
    this.keyControl.getLastKeyPress = function () {
        return Sa ? wa[Sa] : !1
    };
    this.keyControl.isDown = function (a) {
        return 1 == Y[Qa[a]]
    };
    this.keyControl.isUp = function (a) {
        return 1 == Ha[Qa[a]]
    };
    this.keyControl.isPress = function (a) {
        return 1 == na[Qa[a]]
    };
    this.keyControl.getInputChar = function () {
        return Ia
    };
    this.keyControl.getInputKey = function () {
        return wa[Ja]
    };
    this.keyControl.setInputMode =
        function (a) {
            Ra = a
        };
    this.keyControl.isInputMode = function () {
        return Ra
    };
    this.keyControl.exitKeyControl = function () {
        h.onkeydown = function () {
        };
        h.onkeypress = function () {
        };
        h.onkeyup = function () {
        };
        z.clear("key:down");
        z.clear("key:press");
        z.clear("key:up");
        k.delEvent("postLoop", "PointJS_clearAllKeyUp");
        k.delEvent("preLoop", "PointJS_KeyDownEvent");
        Y = {};
        Ha = {};
        na = {};
        vb = Ra = Ja = Ia = !1
    };
    this.keyControl.initControl = this.keyControl.initKeyControl = function () {
        if (vb) return this;
        vb = !0;
        h.onkeydown = function (a) {
            if (Ra) return Ja =
                a.keyCode, uc[a.keyCode] ? (a.preventDefault(), !1) : !0;
            a.preventDefault();
            2 != na[a.keyCode] && (na[a.keyCode] = 1, Sa = a.keyCode, z.run("key:press", wa[a.keyCode]));
            Y[a.keyCode] = !0;
            return !1
        };
        h.onkeypress = function (a) {
            var b = !1;
            0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
            Ia = b
        };
        h.onkeyup = function (a) {
            a.preventDefault();
            1 == Y[a.keyCode] && (Ha[a.keyCode] = !0);
            Y[a.keyCode] = !1;
            z.run("key:up", wa[a.keyCode]);
            delete na[a.keyCode];
            delete Y[a.keyCode];
            return !1
        };
        k.addEvent("postLoop", "PointJS_clearAllKeyUp",
            function () {
                Ha = {};
                vc();
                Sa = Ja = Ia = !1
            });
        k.addEvent("preLoop", "PointJS_KeyDownEvent", function () {
            z.isEvent("key:down") && D(Y, function (a, b) {
                a && z.run("key:down", wa[b])
            })
        });
        return this
    };
    var wb = !1, G = e(0, 0), Ta = e(0, 0);
    e(0, 0);
    var Ka = !0, Ua = "", Va = !1, oa = e(0, 0), Wa = !1, xb = {LEFT: 1, RIGHT: 3, MIDDLE: 2},
        yb = {1: "LEFT", 3: "RIGHT", 2: "MIDDLE"}, Xa = !1, Ya = {}, Za = {}, La = {}, xa = 0, Vb = function () {
            Ya = {};
            Za = {};
            La = {};
            xa = 0;
            Wa = !1
        }, wc = function () {
            D(La, function (a, b, c) {
                1 == a && (c[b] = 2)
            })
        }, $a = function (a) {
            var b = 0, c = 0;
            a && (b = f.x, c = f.y);
            return e(b + G.x, c +
                G.y)
        };
    this.mouseControl.getPosition = function () {
        return $a(1)
    };
    this.mouseControl.getPositionS = function () {
        return $a()
    };
    this.mouseControl.setCursorImage = function (a) {
        a = "url('" + a + "'), auto";
        Ua != a && (Ua = a, h.document.body.style.cursor = Ua)
    };
    this.mouseControl.setVisible = function (a) {
        !Ka && !a || Ka && a || (Ka = 1 == a, h.document.body.style.cursor = Ka ? Ua : "none")
    };
    this.mouseControl.isVisible = function () {
        return Ka
    };
    this.mouseControl.isDown = function (a) {
        return Ya[xb[a]]
    };
    this.mouseControl.isUp = function (a) {
        return Za[xb[a]]
    };
    this.mouseControl.isPress =
        function (a) {
            return 1 == La[xb[a]]
        };
    this.mouseControl.isMove = function () {
        return Wa
    };
    this.mouseControl.isInStatic = function (a) {
        var b = $a(1);
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.mouseControl.isInDynamic = function (a) {
        return la($a(1), a)
    };
    this.mouseControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.mouseControl.isWheel = function (a) {
        return "UP" == a && 0 < xa || "DOWN" == a && 0 > xa
    };
    var Wb = function (a) {
        a.preventDefault();
        xa = a.wheelDelta ? a.wheelDelta : -a.detail;
        z.run("mouse:wheel", 0 > xa ? "DOWN" : "UP");
        return !1
    }, ab = !1, Xb = function () {
        ab && (Va = u(h.document.pointerLockElement) || u(h.document.mozPointerLockElement) ? !0 : !1)
    };
    this.mouseControl.initMouseLock = function () {
        k.addEvent("onload", "initPointerLock", function () {
            ab = ma.requestPointerLock || ma.mozRequestPointerLock || !1;
            h.document.exitPointerLock = h.document.exitPointerLock || h.document.mozExitPointerLock || !1;
            "onpointerlockchange" in h.document ? h.document.addEventListener("pointerlockchange",
                Xb, !1) : "onmozpointerlockchange" in h.document && h.document.addEventListener("mozpointerlockchange", Xb, !1);
            if (!ab) return U("error in initMouseLock : not supported");
            Va || (ma.onclick = ab)
        })
    };
    this.mouseControl.exitMouseLock = function () {
        h.document.exitPointerLock();
        ma.onclick = function () {
        };
        oa = e(0, 0)
    };
    this.mouseControl.unlockMouse = function () {
        oa = e(0, 0);
        h.document.exitPointerLock()
    };
    this.mouseControl.isMouseLock = function () {
        return Va
    };
    this.mouseControl.getSpeed = function () {
        return e(oa.x, oa.y)
    };
    this.mouseControl.isPeekStatic =
        function (a, b) {
            return this.isPress(a) ? this.isInStatic(b) : !1
        };
    this.mouseControl.isPeekDynamic = function (a, b) {
        return this.isPress(a) ? this.isInDynamic(b) : !1
    };
    this.mouseControl.isPeekObject = function (a, b) {
        return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
    };
    this.mouseControl.initControl = this.mouseControl.initMouseControl = function () {
        if (wb) return this;
        wb = !0;
        h.onmousemove = function (a) {
            a.preventDefault();
            a.stopPropagation();
            if (Va) {
                var b = a.movementY || a.mozMovementY || 0;
                G.x += a.movementX || a.mozMovementX ||
                    0;
                G.y += b
            } else G.x = a.pageX - tb.x, G.y = a.pageY - tb.y, X && (G.x /= X.w, G.y /= X.h);
            oa.x = G.x - Ta.x;
            oa.y = G.y - Ta.y;
            Ta.x = G.x;
            Ta.y = G.y;
            z.run("mouse:move");
            Wa = !0;
            return !1
        };
        h.onmousedown = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            z.run("mouse:press", yb[a.which]);
            Xa = yb[a.which];
            Ya[a.which] = !0;
            La[a.which] = 1
        };
        h.onmouseup = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which =
                2 : a.button & 2 && (a.which = 3));
            z.run("mouse:up", yb[a.which]);
            Xa = !1;
            Ya[a.which] = !1;
            Za[a.which] = !0;
            delete La[a.which]
        };
        h.oncontextmenu = h.onselectstart = h.ondragstart = function () {
            return !1
        };
        h.onmousewheel = Wb;
        h.addEventListener("DOMMouseScroll", Wb, !1);
        k.addEvent("preLoop", "PointJS_MouseEventDown", function () {
            Xa && z.run("mouse:down", Xa)
        });
        k.addEvent("postLoop", "PointJS_clearAllMouseUp", function () {
            Za = {};
            wc();
            xa = 0;
            Wa = !1;
            oa = e(0, 0)
        });
        return this
    };
    this.mouseControl.exitMouseControl = function () {
        z.clear("mouse:press");
        z.clear("mouse:down");
        z.clear("mouse:up");
        z.clear("mouse:move");
        z.clear("mouse:wheel");
        h.onmousemove = h.onmousedown = h.onmouseup = h.oncontextmenu = h.onselectstart = h.ondragstart = h.onmousewheel = function () {
        };
        k.delEvent("postLoop", "PointJS_clearAllMouseUp");
        k.delEvent("preLoop", "PointJS_MouseEventDown");
        Vb();
        wb = !1
    };
    var zb = !1, Ma = !1, bb = 0, cb = 0, I = 0, J = 0, w = e(0, 0), db = [], Na = e(0, 0), eb = e(0, 0);
    this.touchControl.isTouchSupported = function () {
        return !!("ontouchstart" in window)
    };
    this.touchControl.isMobileDevice = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(h.navigator.userAgent)
    };
    var Yb = function () {
        Ma = !1;
        cb = bb = 0;
        w = e(0, 0);
        db = [];
        J = I = 0
    };
    this.touchControl.getFixPositionS = function () {
        return w.x || w.y ? e(w.x, w.y) : !1
    };
    this.touchControl.getFixPosition = function () {
        return w.x || w.y ? e(w.x + f.x, w.y + f.y) : !1
    };
    this.touchControl.getRun = function () {
        var a = 0, b = 0;
        w.x && w.x != I && (a = I - w.x);
        w.y && w.y != J && (b = J - w.y);
        return e(a, b)
    };
    this.touchControl.getVector = function () {
        var a = 0, b = 0;
        w.x && w.x != I && (a = I > w.x ? 1 : -1);
        w.y && w.y != J && (b = J > w.y ? 1 : -1);
        return e(a, b)
    };
    this.touchControl.getSpeed = function () {
        return e(Na.x, Na.y)
    };
    this.touchControl.isDown = function () {
        return Ma
    };
    this.touchControl.isPress = function () {
        return 1 == bb
    };
    this.touchControl.isUp = function () {
        return 1 == cb
    };
    this.touchControl.getPosition = function () {
        return e(I + f.x, J + f.y)
    };
    this.touchControl.getPositionS = function () {
        return e(I, J)
    };
    this.touchControl.isPeekStatic = function (a) {
        return this.isPress() ? this.isInStatic(a) : !1
    };
    this.touchControl.isPeekDynamic = function (a) {
        return this.isPress() ? this.isInDynamic(a) : !1
    };
    this.touchControl.isPeekObject = function (a) {
        return this.isPress() &&
        a.visible ? this.isInDynamic(a.getDynamicBox()) : !1
    };
    this.touchControl.isInStatic = function (a) {
        var b = this.getPosition();
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.touchControl.isInDynamic = function (a) {
        return la(this.getPosition(), a)
    };
    this.touchControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.touchControl.getTouches = function () {
        return db
    };
    this.touchControl.initControl = this.touchControl.initTouchControl =
        function () {
            if (zb) return this;
            zb = !0;
            h.addEventListener("touchstart", function (a) {
                a.preventDefault();
                I = a.targetTouches[0].pageX;
                J = a.targetTouches[0].pageY;
                db = a.targetTouches;
                X && (I /= X.w, J /= X.h);
                z.run("touch:press");
                w.x = I;
                w.y = J;
                Ma = !0;
                bb = 1;
                return !1
            }, {passive: !1});
            h.addEventListener("touchmove", function (a) {
                I = a.targetTouches[0].pageX;
                J = a.targetTouches[0].pageY;
                db = a.targetTouches;
                X && (I /= X.w, J /= X.h);
                Na.x = I - eb.x;
                Na.y = J - eb.y;
                z.run("touch:move");
                return !1
            }, !1);
            h.addEventListener("touchend", function (a) {
                w.x = 0;
                w.y =
                    0;
                Ma = !1;
                cb = 1;
                z.run("touch:up");
                return !1
            }, !1);
            q.touchControl.vibrate = function (a) {
                if (h.navigator.vibrate) return h.navigator.vibrate(a);
                if (h.navigator.oVibrate) return h.navigator.oVibrate(a);
                if (h.navigator.mozVibrate) return h.navigator.mozVibrate(a);
                if (h.navigator.webkitVibrate) return h.navigator.webkitVibrate(a)
            };
            k.addEvent("preLoop", "PointJS_TouchDownEvent", function () {
                Ma && z.run("touch:down")
            });
            k.addEvent("postLoop", "PointJS_touchStopPress", function () {
                cb = bb = 0;
                eb.x = I;
                eb.y = J;
                Na = e(0, 0)
            });
            return this
        };
    this.touchControl.exitTouchControl = function () {
        h.ontouchstart = h.ontouchmove = h.ontouchend = function (a) {
        };
        k.delEvent("postLoop", "PointJS_touchStopPress");
        k.delEvent("preLoop", "PointJS_TouchDownEvent");
        Yb();
        zb = !1
    };
    var fb = function (a, b, c, d) {
        return d ? "rgba(" + a + ", " + b + ", " + c + ", " + d + ")" : "rgb(" + a + ", " + b + ", " + c + ")"
    }, Zb = function (a, b) {
        a = "#" == a[0] ? a.substr(1, 6) : a;
        var c = parseInt(a.substr(0, 2), 16), d = parseInt(a.substr(2, 2), 16), m = parseInt(a.substr(4, 2), 16);
        return fb(c, d, m, b)
    };
    this.colors.rgb = function (a, b, c) {
        return fb(a,
            b, c)
    };
    this.colors.rgba = function (a, b, c, d) {
        return fb(a, b, c, d)
    };
    this.colors.hex2rgb = function (a) {
        return Zb(a)
    };
    this.colors.hex2rgba = function (a, b) {
        return Zb(a, b)
    };
    this.colors.randomColor = function (a, b, c) {
        return fb(ca(a, b), ca(a, b), ca(a, b), c || 1)
    };
    var u = function (a) {
        return "undefined" == typeof a || null == a ? !1 : !0
    }, Rb = function (a) {
        return u(a) && "" !== a && 0 !== a ? !0 : !1
    }, D = function (a, b) {
        var c, d;
        for (c in a) if ("undefined" != typeof a[c] && (d = b(a[c], c, a)) && "break" == d) break
    }, v = function (a, b) {
        if (a.length) for (var c = a.length - 1, d; 0 <=
        c && ("undefined" === typeof a[c] || !(d = b(a[c], c, a) || !1) || "break" !== d); c--) ;
    };
    this.OOP.extractArrElement = function (a, b) {
        var c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.extractRandArrElement = function (a) {
        var b = ca(0, a.length - 1), c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.drawEach = function (a, b) {
        D(a, function (a) {
            a && a.draw && a.isInCamera() && (a.draw(), b && b(a))
        })
    };
    this.OOP.drawArr = function (a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) a[d] && a[d].draw && a[d].isInCamera() && (a[d].draw(), b && b(a[d], d))
    };
    var $b = function (a) {
        a.length =
            0
    }, xc = function (a, b) {
        var c = !1, d = qb(), m = !1, f = new XMLHttpRequest, e = function () {
            f.open("GET", a, !0);
            f.send()
        };
        f.onreadystatechange = function () {
            4 == f.readyState && (b(f.responseText), c && (m ? setTimeout(e, m) : e()))
        };
        this.start = function () {
            a = a.match(/\?/) ? a + ("&session_id=" + d) : a + ("?session_id=" + d);
            e();
            c = !0
        };
        this.setSID = function (a) {
            d = a
        };
        this.setTime = function (a) {
            m = a
        };
        this.stop = function () {
            c = !1
        };
        this.isActive = function () {
            return c
        }
    };
    this.OOP.readJSON = function (a, b) {
        var c = {}, d = new XMLHttpRequest;
        d.open("GET", a, !0);
        A.add();
        d.onreadystatechange = function () {
            4 == d.readyState && (c = d.responseText, c = JSON.parse(c), A.load(), b(c))
        };
        d.send()
    };
    this.OOP.toString = function (a, b) {
        var c, d = 0, m = "[";
        for (c in a) if (a.hasOwnProperty(c)) {
            var f = a[c];
            "number" == typeof f && b && (f = parseInt(f));
            m += (0 < d ? ", " : "") + c + " : " + f;
            d += 1
        }
        return m + "]"
    };
    this.OOP.sendGET = function (a, b, c) {
        var d = new XMLHttpRequest, m = "?";
        D(b, function (a, b) {
            m += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("GET", a + m, !0);
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send()
    };
    this.OOP.sendPOST = function (a, b, c) {
        var d = new XMLHttpRequest, m = "";
        D(b, function (a, b) {
            m += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send(m)
    };
    this.OOP.sendPOSTScreen = function (a, b, c) {
        var d = new XMLHttpRequest;
        b = b + "=" + r.toDataURL("image/png");
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 ==
            d.readyState && c(d.responseText)
        };
        d.send(b)
    };
    this.OOP.isDef = u;
    this.OOP.isSet = Rb;
    this.OOP.forEach = D;
    this.OOP.forInt = function (a, b) {
        var c, d;
        for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1) ;
    };
    this.OOP.forXY = function (a, b, c) {
        var d, m, f;
        for (m = 0; m < b; m += 1) for (d = 0; d < a && (!(f = c(d, m)) || "break" != f); d += 1) ;
    };
    this.OOP.forArr = v;
    this.OOP.clearArr = $b;
    this.OOP.fillArr = function (a, b, c) {
        a.length = 0;
        var d;
        for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
        return a
    };
    this.OOP.delObject = function (a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) if (a[d] ==
            b) return a.splice(d, 1), !0
    };
    this.OOP.randArrElement = function (a) {
        return a[ca(0, a.length - 1)]
    };
    this.OOP.readJSONSync = function (a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send();
        a = b.responseText;
        return a = JSON.parse(a)
    };
    this.OOP.sendGETSync = function (a, b) {
        var c = new XMLHttpRequest, d = "?";
        D(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("GET", a + d, !1);
        c.send();
        return c.responseText
    };
    this.OOP.sendPOSTSync = function (a, b) {
        var c = new XMLHttpRequest, d = "";
        D(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) +
                "&"
        });
        c.open("POST", a, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.send(d);
        return c.responseText
    };
    this.OOP.newAJAXListener = function (a, b) {
        return new xc(a, b)
    };
    this.OOP.runCode = function (a) {
        (new Function("", a))()
    };
    var K = {};
    this.OOP.includeSync = function (a, b) {
        if (K[a]) K[a].loaded && !b && K[a].code(); else {
            K[a] = {
                loaded: !1, code: function () {
                    console.log(a + " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            K[a].code = new Function("", c.responseText);
            K[a].loaded = !0;
            K[a].code()
        }
    };
    this.OOP.include = function (a, b, c) {
        if (K[a]) K[a].loaded && !c && K[a].code(), b && b(); else {
            K[a] = {
                loaded: !1, code: function () {
                    console.log(a + " is loading")
                }
            };
            var d = new XMLHttpRequest;
            d.open("GET", a, !0);
            d.onreadystatechange = function () {
                4 == d.readyState && (K[a].code = new Function("", d.responseText), K[a].loaded = !0, K[a].code(), b && b())
            };
            d.send()
        }
    };
    this.OOP.clone = function (a, b) {
        var c = ac(a);
        D(a, function (a, b) {
            -1 === ["id", "type"].indexOf(b) && (c[b] = a)
        });
        b && (c.onClone = b, c.onClone(c), delete c.onClone);
        return c
    };
    var yc =
        function () {
            var a = [];
            this.fillFromArr = function (b) {
                a.length = 0;
                v(b, function (b) {
                    a.push(b)
                })
            };
            this.fill = function (b, c) {
                a.length = 0;
                q.OOP.fillArr(a, b, c)
            };
            this.draw = function (b) {
                for (var c = a.length - 1; 0 <= c; c--) a[c].isInCamera() && (a[c].draw(), b && b(a[c], c))
            };
            this.update = function (b, c) {
                for (var d = a.length - 1; 0 <= d; d--) c && !a[d].isInCamera() || b(a[d], d)
            };
            this.add = function (b) {
                a.push(b)
            };
            this.del = function (b) {
                q.OOP.delObject(a, b)
            }
        };
    this.OOP.newGroup = function () {
        return new yc
    };
    var ya = 60, L = Date.now(), gb = 0, hb = -1, bc = L, ia = {}, ib =
        0;
    this.game.setFPS = function (a) {
        ya = 0 < a ? a : 60
    };
    this.game.getFPS = function () {
        return ya
    };
    this.game.getDT = function (a) {
        a || (a = 1E3);
        return gb / a
    };
    this.game.getTime = function () {
        return L
    };
    var cc = function () {
        return h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame || function (a) {
            h.setTimeout(a, 1E3 / ya)
        }
    }, za = cc(), dc = function () {
        L = Date.now();
        Lb && g.clearRect(0, 0, n, p);
        k.runEvent("preLoop")
    }, ec = function () {
        k.runEvent("postLoop");
        -1 != hb &&
        (gb = L - hb);
        hb = L
    }, M = {
        func: function () {
            console.log('please, use a "setLoop" function.');
            za = function () {
            }
        }, events: !1, start: !1, end: !1, audio: !1, fps: !1, name: "NotLoop"
    }, fc = function () {
        M.audio && v(M.audio, function (a) {
            a.stop()
        })
    };
    this.game.newLoop = function (a, b, c, d, m) {
        "function" == typeof b ? ia[a] = {
            events: m || !1,
            func: b,
            start: c || !1,
            end: d || !1,
            audio: !1,
            fps: !1,
            name: a
        } : ja("error in newLoop : " + b + " is not a function")
    };
    this.game.newLoopFromClassObject = function (a, b) {
        if (!b.update) return ja('error in newLoopFromClassObject : function "update" not found');
        ia[a] = {
            events: b.events || !1,
            func: b.update,
            start: b.entry || !1,
            end: b.exit || !1,
            audio: !1,
            fps: !1,
            name: a
        }
    };
    this.game.newLoopFromConstructor = function (a, b) {
        q.game.newLoopFromClassObject(a, new b)
    };
    this.game.setLoopSound = function (a, b) {
        var c;
        ia[a].audio || (ia[a].audio = []);
        for (c = 0; c < b.length; c += 1) ia[a].audio.length = 0, b[c].setNextPlay(b[c + 1 == b.length ? 0 : c + 1]), ia[a].audio.push(b[c])
    };
    this.game.setLoop = function (a) {
        if (!ia[a]) return ja("setLoop : " + a + " is no a Loop");
        fc();
        Vb();
        Y = {};
        Ha = {};
        na = {};
        Ja = Ia = !1;
        Yb();
        Ab(e(0, 0));
        M.end && M.end();
        M = ia[a];
        z.loadFromEvents(M.events);
        M.start && M.start();
        M.audio && M.audio[0].play()
    };
    var z = new function () {
        var a = {"mouse:click": []}, b = this;
        this.add = function (b, d) {
            a[b] || (a[b] = []);
            a[b].push(d)
        };
        this.run = function (b, d) {
            a[b] && v(a[b], function (a) {
                return a(d)
            })
        };
        this.clear = function (b) {
            a[b] && (a[b].length = 0)
        };
        this.clearAll = function () {
            D(a, function (a) {
                a.length = 0
            })
        };
        this.loadFromEvents = function (a) {
            b.clearAll();
            a && D(a, function (a, c) {
                b.add(c, a)
            })
        };
        this.isEvent = function (b) {
            return !!a[b]
        }
    };
    this.game.tick =
        function (a, b) {
            ib == a && b()
        };
    var jb = {};
    this.game.skip = function (a, b, c) {
        u(jb[a]) || (jb[a] = 0);
        jb[a]++ >= b && (c(), jb[a] = 0)
    };
    var Bb = function () {
        60 > ib ? ib++ : ib = 0;
        if (60 > ya) {
            var a = 1E3 / ya;
            try {
                L = Date.now(), L - bc > a && (dc(), M.func(gb), bc = L, ec())
            } catch (b) {
                Ca && Pa(b), pb && (Ca || Pa(b), ja())
            }
            za(Bb);
            return !1
        }
        try {
            dc(), M.func(gb), ec()
        } catch (b) {
            Ca && Pa(b), pb && (Ca || Pa(b), ja())
        }
        za(Bb)
    }, gc = function (a) {
        ka || (ka = !0, ya = a || 60, za(Bb))
    }, ja = function (a) {
        if (!ka) return U(u(a) ? a : "game is stop");
        ka = !1;
        fc();
        za = function () {
            U(u(a) ? a : "game is stop")
        }
    };
    this.game.getWH = function () {
        return {w: n, h: p, w2: O, h2: P}
    };
    this.game.getWH2 = function () {
        return {w: n / 2, h: p / 2}
    };
    this.game.getResolution = function () {
        return Math.min(n / ea, p / fa)
    };
    this.game.startLoop = function (a, b) {
        this.setLoop(a);
        this.start(b)
    };
    this.game.start = gc;
    this.game.stop = ja;
    this.game.resume = function (a) {
        if (!ka) return M.audio && M.audio[0].play(), U(a || "game is run"), za = cc(), hb = -1, gc(), !1
    };
    var zc = [], Ac = 0, B = function (a) {
        this.type = "BaseObject";
        this.id = Ac += 1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.w = a.w || 0;
        this.h = a.h ||
            0;
        this.ondraw = a.ondraw ? a.ondraw : !1;
        this.parent = !1;
        this.children = [];
        this.fillColor = a.fillColor || !1;
        this.strokeColor = a.strokeColor || t.strokeStyle;
        this.strokeWidth = a.strokeWidth || 0;
        this.angle = a.angle || 0;
        this.alpha = u(a.alpha) ? a.alpha : 1;
        this.center = e(0, 0);
        this.box = {x: 0, y: 0, w: 0, h: 0};
        this.visible = u(a.visible) ? a.visible : !0;
        this.flip = e(0, 0);
        this.setShadow(a);
        a.userData && this.setUserData(a.userData);
        a.center && this.setCenter(a.center);
        a.box && this.setBox(a.box);
        a.size && this.setSize(a.size);
        a.sizeC && this.setSizeC(a.sizeC);
        a.position && this.setPosition(a.position);
        a.positionC && this.setPositionC(a.positionC);
        "function" == typeof a.oncreate && (this.oncreate = a.oncreate, this.oncreate(), delete this.oncreate);
        zc.push(this)
    };
    B.prototype = {
        getID: function () {
            return this.id
        }, getType: function () {
            return this.type
        }, getParent: function () {
            return this.parent
        }, addChild: function (a) {
            a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(E(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
        },
        delChild: function (a) {
            a.parent = !1;
            var b;
            var c = 0;
            for (b = this.children.length; c < b; c += 1) if (this.children[c].id == a.id) {
                this.children.splice(c, 1);
                break
            }
        }, delParent: function () {
            this.parent.delChild(this)
        }, setBox: function (a) {
            a.offset && (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
            a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
        }, isArrIntersect: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1) if (a[c].id != this.id && this.isIntersect(a[c])) return a[c];
            return !1
        }, isArrInside: function (a) {
            var b;
            var c =
                0;
            for (b = a.length; c < b; c += 1) if (this.isDynamicInside(a[c].getDynamicBox())) return a[c];
            return !1
        }, getNearest: function (a) {
            var b = 0, c = !1, d;
            var m = 0;
            for (d = a.length; m < d; m += 1) if (this.id != a[m].id) {
                !1 === c && (c = this.getDistanceC(a[m].getPositionC()), b = m);
                var f = this.getDistanceC(a[m].getPositionC());
                f < c && (c = f, b = m)
            }
            return a[b]
        }, setFlip: function (a, b) {
            u(a) && this.flip.x != a && (this.flip.x = a);
            u(b) && this.flip.y != b && (this.flip.y = b)
        }, setUserData: function (a) {
            for (var b in a) u(this[b]) || (this[b] = a[b])
        }, setShadow: function (a) {
            this.shadowColor =
                a.shadowColor || !1;
            this.shadowBlur = u(a.shadowBlur) ? a.shadowBlur : 3;
            this.shadowX = a.shadowX || 0;
            this.shadowY = a.shadowY || 0
        }, getDynamicBox: function () {
            var a = this.getPosition(1);
            return 0 == this.angle ? [e(this.x + this.box.x, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [E(e(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), E(e(this.x + this.box.x +
                this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), E(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), E(e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h), a, this.getAngle())]
        }, isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(), c;
            var d = 0;
            for (c = b.length; d < c; d += 1) if (la(b[d], a)) return !0;
            d = 0;
            for (c = a.length; d < c; d += 1) if (la(a[d], b)) return !0;
            return !1
        }, isIntersect: function (a) {
            return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) :
                this.isStaticIntersect(a.getStaticBox()) : !1
        }, isDynamicInside: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(), c, d = 0;
            var f = 0;
            for (c = b.length; f < c; f += 1) la(b[f], a) && (d += 1);
            return d == b.length ? !0 : !1
        }, drawDynamicBox: function (a) {
            N(this, 1);
            g.shadowColor = "transparent";
            Aa(e(this.x + this.box.x, this.y + this.box.y), C(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            hc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow");
            H()
        }, drawStaticBox: function (a) {
            g.shadowColor = "transparent";
            Aa(e(this.x + this.box.x, this.y + this.box.y), C(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            hc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow")
        }, isStaticIntersect: function (a) {
            return this.y + this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
        }, getStaticBox: function () {
            return {x: this.x + this.box.x, y: this.y + this.box.y, w: this.w + this.box.w, h: this.h + this.box.h}
        }, setAlpha: function (a) {
            this.alpha !=
            a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
        }, transparent: function (a) {
            this.setAlpha(this.alpha + a)
        }, getAlpha: function () {
            return this.alpha
        }, rotate: function (a) {
            this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
        }, setCenter: function (a) {
            this.center = e(a.x, a.y)
        }, nullCenter: function (a) {
            a || (a = e(0, 0));
            this.center = e(-this.w / 2 + a.x, -this.h / 2 + a.y)
        }, getCenter: function () {
            return e(this.center.x, this.center.y)
        }, getBox: function () {
            return this.box
        }, move: function (a) {
            this.prevPosition = this.getPosition();
            this.x += a.x;
            this.y += a.y
        }, circling: function (a, b, c) {
            u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.x = a.x + b * Math.cos(x(this.circlingAnglePointJS));
            this.y = a.y + b * Math.sin(x(this.circlingAnglePointJS));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, circlingC: function (a, b, c) {
            u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.setPositionC(e(a.x + b * Math.cos(x(this.circlingAnglePointJS)), a.y + b * Math.sin(x(this.circlingAnglePointJS))));
            this.circlingAnglePointJS =
                360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, motion: function (a, b, c) {
            u(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.x = a.x + b.w * Math.cos(x(this.motionPercentPointJS));
            this.y = a.y + b.h * Math.sin(x(this.motionPercentPointJS));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        }, motionC: function (a, b, c) {
            u(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.setPositionC(e(a.x + b.w * Math.cos(x(this.motionPercentPointJS)), a.y + b.h * Math.sin(x(this.motionPercentPointJS))));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        }, scale: function (a) {
            this.w *= a;
            this.h *= a
        }, scaleC: function (a) {
            var b = this.w, c = this.h;
            this.scale(a);
            this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
        }, getPosition: function (a) {
            return 1 == a ? e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 == a ? (a = e(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = E(a, this.getPosition(1), this.angle)), e(a.x, a.y)) : e(this.x, this.y)
        }, getPositionC: function () {
            return e(this.x + (this.w /
                2 + this.center.x), this.y + (this.h / 2 + this.center.y))
        }, getPositionS: function () {
            return e(this.x + f.x, this.y + f.x)
        }, getPositionCS: function () {
            return e(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
        }, setPosition: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x);
            !1 !== a.y && (this.y = a.y)
        }, setPositionS: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x + f.x);
            !1 !== a.y && (this.y = a.y + f.y)
        }, setPositionC: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
            !1 !==
            a.y && (this.y = -(this.h / 2 + this.center.y) + a.y)
        }, setPositionCS: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y)
        }, getSize: function () {
            return C(this.w, this.h)
        }, setSize: function (a) {
            this.w = a.w;
            this.h = a.h
        }, setSizeC: function (a) {
            this.w = a.w;
            this.h = a.h;
            this.move(e(-(a.w / 2), -(a.h / 2)))
        }, turn: function (a) {
            this.angle += a
        }, rotateForAngle: function (a, b) {
            0 > this.angle && (this.angle += 360);
            0 > a && (a += 360);
            var c = this.angle - a;
            180 < c ? c -= 360 : -180 >
                c && (c += 360);
            c >= -b - .5 && c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
        }, rotateForPoint: function (a, b) {
            var c = Ea(this.getPositionC(), a);
            this.rotateForAngle(c, b)
        }, rotateForObject: function (a, b) {
            var c = Ea(this.getPositionC(), a.getPositionC());
            this.rotateForAngle(c, b)
        }, moveTo: function (a, b) {
            var c = x(Ea(this.getPosition(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveToC: function (a, b) {
            var c = x(Ea(this.getPositionC(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveAngle: function (a, b) {
            b = x(u(b) ? b : this.angle);
            this.prevPosition = this.getPosition();
            this.x += a * Math.cos(b);
            this.y += a * Math.sin(b)
        }, moveTime: function (a, b) {
            b = b || 1;
            var c = this.getPosition();
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        }, moveTimeC: function (a, b) {
            b = b || 1;
            var c = this.getPosition(1);
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        }, getAngle: function () {
            return this.angle
        }, setAngle: function (a) {
            this.angle != a && (this.angle = a % 360)
        }, getDistance: function (a) {
            return Math.sqrt(Math.pow(a.x -
                this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
        }, getDistanceC: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
        }, setVisible: function (a) {
            this.visible = 1 == a
        }, isVisible: function () {
            return this.visible
        }, isInCamera: function () {
            return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
        }, isInCameraStatic: function () {
            return this.x + this.w < f.x || this.x > f.x + n || this.y + this.h < f.y || this.y > f.y + p ? !1 : !0
        }, isInCameraDynamic: function () {
            var a =
                    this.getDynamicBox(), b = [e(f.x, f.y), e(f.x + n, f.y), e(f.x + n, f.y + p), e(f.x, f.y + p)], c,
                d = 0;
            var m = 0;
            for (c = a.length; m < c; m += 1) la(a[m], b) && (d += 1);
            return 0 < d
        }, draw: function () {
        }
    };
    this.game.newBaseObject = function (a) {
        return new B(a)
    };
    var kb = function (a) {
        B.call(this, a);
        this.type = "TriangleObject"
    };
    ba(B, kb);
    kb.prototype.getDynamicBox = function () {
        var a = this.getPositionC();
        return 0 == this.angle ? [e(this.x + this.w / 2, this.y), e(this.x + this.w, this.y + this.h), e(this.x, this.y + this.h)] : [E(e(this.x + this.w / 2, this.y), a, this.getAngle()),
            E(e(this.x + this.w, this.y + this.h), a, this.getAngle()), E(e(this.x, this.y + this.h), a, this.getAngle())]
    };
    kb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            Oa(this.x, this.y, [e(this.w / 2, 0), e(this.w, this.h), e(0, this.h)], this.fillColor, this.strokeWidth ? this.strokeColor : !1, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newTriangleObject = function (a) {
        return new kb(a)
    };
    var Cb = function (a) {
        B.call(this, a);
        this.type = "RectObject"
    };
    ba(B, Cb);
    Cb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            Aa(e(this.x, this.y), C(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newRectObject = function (a) {
        return new Cb(a)
    };
    var Db = function (a) {
        B.call(this, a);
        this.type = "RoundRectObject";
        this.radius = a.radius || 1
    };
    ba(B, Db);
    Db.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha ||
                this.shadowColor) N(this), a = !0;
            Eb(e(this.x, this.y), C(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newRoundRectObject = function (a) {
        return new Db(a)
    };
    var pa = function (a) {
        B.call(this, a);
        this.radius = a.radius || 5;
        a.scale && (this.radius *= a.scale);
        this.w = 2 * this.radius;
        this.h = 2 * this.radius;
        this.type = "CircleObject";
        a.positionC && this.setPositionC(a.positionC)
    };
    ba(B, pa);
    pa.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a =
                !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            Ba(e(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    pa.prototype.scale = function (a) {
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a ? a / 2 : 0
    };
    pa.prototype.scaleC = function (a) {
        var b = this.w, c = this.h;
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a;
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    pa.prototype.getRadius = function () {
        return this.radius
    };
    pa.prototype.setRadius = function (a) {
        a && this.radius !=
        a && (this.radius = a, this.w = 2 * a, this.h = 2 * a)
    };
    this.game.newCircleObject = function (a) {
        return new pa(a)
    };
    var Fb = function (a) {
        this.file = a.file;
        this.w = a.w;
        this.h = a.h;
        this.read = {x: 0, y: 0, w: 0, h: 0};
        a.read && (this.read.w = a.read.w || 0, this.read.h = a.read.h || 0, this.read.x = a.read.x || 0, this.read.y = a.read.y || 0);
        this.countX = a.countX;
        this.countY = a.countY;
        this.fullW = this.countX * this.w;
        this.fullH = this.countY * this.h;
        this.cnv = h.document.createElement("canvas");
        this.cnv.width = this.w;
        this.cnv.height = this.h;
        this.ctx = this.cnv.getContext("2d");
        this.loaded = !1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        a = h.document.createElement("img");
        var b = this;
        a.onload = function () {
            b.ctx.drawImage(this, b.read.x ? b.read.x : 0, b.read.y ? b.read.y : 0, b.read.w ? b.read.w : this.width, b.read.h ? b.read.h : this.height, 0, 0, b.w, b.h);
            b.loaded = !0;
            A.load()
        };
        a.src = this.file;
        A.add()
    };
    Fb.prototype.draw = function () {
        if (this.loaded) {
            var a = -f.x + this.x, b = -f.y + this.y, c, d;
            for (d = 0; d < this.countY; d += 1) if (!(this.y + d * this.h + this.h < f.y || this.y + d * this.h > f.y + p)) for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w <
            f.x || this.x + c * this.w > f.x + n || g.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
        }
    };
    Fb.prototype.getSize = function () {
        return this.loaded ? C(this.fullW, this.fullH) : C()
    };
    this.game.newBackgroundObject = function (a) {
        return new Fb(a)
    };
    var Gb = function (a) {
        B.call(this, a);
        this.type = "EllipsObject"
    };
    ba(B, Gb);
    Gb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            N(this);
            Ba(e(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            H()
        }
    };
    this.game.newEllipsObject =
        function (a) {
            return new Gb(a)
        };
    var Z = function (a) {
        B.call(this, a);
        this.type = "TextObject";
        this.text = a.text || "TextObject";
        this.color = a.color || "";
        this.size = a.size || 10;
        a.scale && (this.size *= a.scale);
        this.font = a.font || "sans-serif";
        this.style = a.style || "";
        this.align = "left";
        this.padding = a.padding || 2;
        this.w = Hb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || !1;
        this.strokeWidthText = a.strokeWidthText || !1;
        this.textDY = -this.size / 7;
        a.positionC &&
        this.setPositionC(a.positionC)
    };
    ba(B, Z);
    Z.prototype.reStyle = function (a) {
        this.text = a.text || this.text;
        this.color = a.color || this.color;
        this.size = a.size || this.size;
        this.font = a.font || this.font;
        this.style = a.style || this.style;
        this.padding = a.padding || this.padding;
        this.w = Hb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || this.strokeColorText;
        this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
        this.strokeColor = a.strokeColor ||
            this.strokeColor;
        this.strokeWidth = a.strokeWidth || this.strokeWidth;
        this.fillColor = a.fillColor || this.fillColor;
        this.textDY = -this.size / 7
    };
    Z.prototype.setText = function (a) {
        this.text != a && this.reStyle({text: a})
    };
    Z.prototype.getText = function () {
        return this.text
    };
    Z.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            (this.fillColor || this.strokeColor) && Aa(e(this.x, this.y), C(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
            qa(e(this.x + this.padding, this.textDY + this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    Z.prototype.scale = function (a) {
        this.reStyle({size: this.size * a})
    };
    Z.prototype.scaleC = function (a) {
        var b = this.w, c = this.h;
        this.reStyle({size: this.size * a});
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    Z.prototype.setSize = function (a) {
        this.size != a && this.reStyle({size: a})
    };
    Z.prototype.setSizeC = function (a) {
        this.size !=
        a && (this.reStyle({size: a}), this.move(e(-a / 2, -a / 2)))
    };
    var Hb = function (a, b, c, d) {
        var f = h.document.createElement("canvas").getContext("2d");
        f.font = b + c + "px " + d;
        return f.measureText(a).width
    };
    this.OOP.getTextWidth = function (a) {
        return Hb(a.text, a.style || "", a.size || 10, a.font || "sans-serif")
    };
    this.game.newTextObject = function (a) {
        return new Z(a)
    };
    var Q = function (a) {
        B.call(this, a);
        this.type = "PolygonObject";
        this.points = [];
        this.dX = this.dY = 0;
        var b = this;
        a.points && v(a.points, function (a) {
            b.addPoint(a)
        });
        this.pointColor =
            a.pointColor || !1
    };
    ba(B, Q);
    Q.prototype.addPoint = function (a) {
        this.dY = this.dX = 0;
        var b = this;
        this.y + a.y < this.y && (this.dY = Math.abs(this.y + a.y - this.y), v(this.points, function (a) {
            a.y += b.dY
        }));
        this.x + a.x < this.x && (this.dX = Math.abs(this.x + a.x - this.x), b = this, v(this.points, function (a) {
            a.x += b.dX
        }));
        this.points.push(e(a.x + this.dX, a.y + this.dY));
        this.h = this.w = 0;
        b = this;
        v(this.points, function (a) {
            b.h += b.y + a.y > b.y + b.h ? a.y - b.h : 0;
            b.w += b.x + a.x > b.x + b.w ? a.x - b.w : 0
        })
    };
    Q.prototype.delPoint = function (a) {
        var b, c = this.getPoints();
        this.clearPoints();
        var d = 0;
        for (b = c.length; d < b; d += 1) d != a && this.addPoint(c[d])
    };
    Q.prototype.clearPoints = function () {
        this.points = [];
        this.count = 0
    };
    Q.prototype.getPoints = function () {
        return this.points
    };
    Q.prototype.getCount = function () {
        return this.points.length
    };
    Q.prototype.getPoint = function (a) {
        return this.points[a]
    };
    Q.prototype.scale = function (a) {
        return !1
    };
    Q.prototype.drawDynamicBox = function (a) {
        var b = !1;
        if (this.angle || 1 != this.alpha || this.shadowColor) N(this), b = !0;
        Oa(this.x, this.y, this.points, this.fillColor,
            a || "yellow", 2, "red");
        b && H()
    };
    Q.prototype.getDynamicBox = function () {
        var a = [];
        if (this.angle) {
            var b = this.getPosition(1);
            c = this;
            v(this.points, function (d) {
                a.push(E(ua(d, e(c.x, c.y)), b, c.getAngle()))
            })
        } else {
            var c = this;
            v(this.points, function (b) {
                a.push(ua(b, e(c.x, c.y)))
            })
        }
        return a
    };
    Q.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            Oa(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newPolygonObject = function (a) {
        return new Q(a)
    };
    var ra = function (a) {
        B.call(this, a);
        this.type = "ImageObject";
        this.loaded = !1;
        this.file = "";
        this.forOnLoad = a.onload || !1;
        ic(a.file, this, a.scale || 1)
    };
    ba(B, ra);
    ra.prototype.draw = function () {
        if (this.visible && this.alpha && this.loaded) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor || this.flip.x || this.flip.y) N(this), a = !0;
            jc(e(this.x, this.y), C(this.w, this.h), this.file);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    ra.prototype.simpleDraw = function (a) {
        if (this.loaded) {
            var b =
                !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), b = !0;
            jc(e(a.x, a.y), C(this.w, this.h), this.file);
            b && H()
        }
    };
    ra.prototype.setImage = function (a, b) {
        this.file != a && (u(l[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, ic(a, this)))
    };
    ra.prototype.getImage = function () {
        return this.file
    };
    ra.prototype.resize = function (a) {
        if (!1 !== a.w && !1 === a.h) {
            var b = a.w / this.w;
            this.w = a.w;
            this.h *= b
        } else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h &&
            (this.w = a.w, this.h = a.h)
    };
    this.game.newImageObject = function (a) {
        return new ra(a)
    };
    var W = function (a) {
        B.call(this, a);
        this.type = "AnimationObject";
        this.frame = 0;
        this.anim = a.animation;
        this.step = a.delay || 10;
        this.toFrameStep = this.difStep = 0;
        a.scale && (this.w *= a.scale, this.h *= a.scale)
    };
    ba(B, W);
    W.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), a = !0;
            Ib(this.anim, e(this.x, this.y), C(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
            a && H()
        }
    };
    W.prototype.drawFrames = function (a, b, c) {
        if (this.visible && this.alpha) {
            if (this.frame < a || this.frame > b) this.frame = a;
            c = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), c = !0;
            Ib(this.anim, e(this.x, this.y), C(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
            c &&
            H()
        }
    };
    W.prototype.drawFrame = function (a) {
        if (this.visible && this.alpha) {
            var b = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), b = !0;
            Ib(this.anim, e(this.x, this.y), C(this.w, this.h), a);
            if (this.ondraw) this.ondraw();
            b && H()
        }
    };
    W.prototype.drawToFrame = function (a) {
        if (this.visible && this.alpha) {
            if (this.frame < a) this.toFrameStep = 1; else if (this.frame > a) this.toFrameStep = -1; else {
                this.drawFrame(a);
                return
            }
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ?
                (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
        }
    };
    W.prototype.drawReverFrames = function (a, b) {
        if (this.visible && this.alpha) {
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame += this.toFrameStep, this.difStep = 0) : this.difStep += 1
        }
    };
    W.prototype.setAnimation = function (a) {
        a.id != this.anim.id && (this.frame = 0, this.anim = a)
    };
    W.prototype.getAnimation = function () {
        return this.anim
    };
    W.prototype.setDelay = function (a) {
        this.step = 0 < a ? a : this.step
    };
    W.prototype.getDelay = function () {
        return this.step
    };
    this.game.newAnimationObject = function (a) {
        return new W(a)
    };
    var ac = function (a) {
        var b = !1;
        "RectObject" == a.type ? b = q.game.newRectObject({}) : "CircleObject" == a.type ? b = q.game.newCircleObject({}) : "RoundRectObject" == a.type ? b = q.game.newRoundRectObject({}) : "TextObject" == a.type ? b = q.game.newTextObject({}) : "EllipsObject" == a.type ? b = q.game.newEllipsObject({}) : "ImageObject" == a.type ? b = q.game.newImageObject({file: a.file}) :
            "TriangleObject" == a.type ? b = q.game.newTriangleObject({}) : "AnimationObject" == a.type && (b = q.game.newAnimationObject({animation: a.animation}));
        return b
    }, Bc = 0, sa = function (a, b) {
        this.file = a;
        this.loaded = !1;
        this.h = this.w = 0;
        this.id = Bc++;
        this.toLoad = [];
        var c = h.document.createElement("img"), d = this;
        c.onload = function () {
            d.loaded = !0;
            d.w = this.width;
            d.h = this.height;
            d.img = h.document.createElement("canvas");
            d.img.width = this.width;
            d.img.height = this.height;
            d.context = d.img.getContext("2d");
            d.context.drawImage(this, 0, 0);
            d.toLoad.length && v(d.toLoad, function (a) {
                a.func(d.context, a.w, a.h, a.r)
            });
            b && (d.onLoad = b, d.onLoad());
            A.load()
        };
        c.src = a;
        A.add()
    };
    sa.prototype.onContext = function (a) {
        this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({w: this.w, h: this.h, r: 1, func: a})
    };
    sa.prototype.getCanvas = function () {
        return this.img
    };
    var Cc = 0;
    sa.prototype.getAnimation = function (a, b, c, d, f) {
        var e = function (a, b, c, d, f, e) {
            this.id = Cc++;
            this.image = a;
            this.x = b;
            this.y = c;
            this.w = d;
            this.h = f;
            this.endFrame = this.r = e ? e - 1 : 0;
            this.frameCount = this.r +
                1
        };
        e.prototype = {
            onContext: function (a) {
                this.image.loaded ? a(this.image.context, this.w, this.h, this.r) : this.image.toLoad.push({
                    w: this.w,
                    h: this.h,
                    r: this.r,
                    func: a
                })
            }, getImage: function () {
                return this.image
            }, getCount: function () {
                return this.r
            }
        };
        return new e(this, a, b, c, d, f)
    };
    var Jb = function (a, b) {
        this.loaded = !0;
        this.w = a;
        this.h = b;
        this.img = h.document.createElement("canvas");
        this.img.width = a;
        this.img.height = b;
        this.context = this.img.getContext("2d")
    };
    Jb.prototype.onContext = sa.prototype.onContext;
    Jb.prototype.getAnimation =
        sa.prototype.getAnimation;
    this.tiles.newDrawImage = function (a, b) {
        return new Jb(a, b)
    };
    this.tiles.newImage = function (a, b) {
        return new sa(a, b)
    };
    this.tiles.newAnimation = function (a, b, c, d) {
        return (new sa(a)).getAnimation(0, 0, b, c, d)
    };
    var Ib = function (a, b, c, d) {
        if (a && a.image.loaded) {
            var e = -f.x, h = -f.y;
            a.image.img && g.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + e, b.y + h, c.w, c.h)
        }
    }, l = {}, ic = function (a, b, c) {
        if (u(l[a])) {
            b.loaded = !0;
            b.file = a;
            if (b.w && !b.h) {
                var d = b.w / l[a].w;
                var f = b.w;
                var e = l[a].h * d
            } else !b.w && b.h ? (d = b.h /
                l[a].h, e = b.h, f = l[a].w * d) : b.w && b.h ? (f = b.w, e = b.h) : (f = l[a].w, e = l[a].h);
            c && (f *= c, e *= c);
            b.w = f;
            b.h = e;
            b.forOnLoad && b.forOnLoad()
        } else f = h.document.createElement("img"), f.onload = function () {
            l[a] = {};
            l[a].loaded = !0;
            l[a].img = this;
            l[a].w = this.width;
            l[a].h = this.height;
            if (u(b)) {
                b.loaded = !0;
                if (b.w && !b.h) {
                    var d = b.w / l[a].w;
                    var f = b.w;
                    var e = l[a].h * d
                } else !b.w && b.h ? (d = b.h / l[a].h, e = b.h, f = l[a].w * d) : b.w && b.h ? (f = b.w, e = b.h) : (f = l[a].w, e = l[a].h);
                c && (f *= c, e *= c);
                b.w = f;
                b.h = e;
                b.file = a;
                b.forOnLoad && b.forOnLoad()
            }
            A.load()
        }, f.src = a,
            A.add()
    }, jc = function (a, b, c) {
        if (c) {
            var d = -f.x, e = -f.y;
            l[c] && g.drawImage(l[c].img, 0, 0, l[c].w, l[c].h, a.x + d, a.y + e, b.w, b.h)
        }
    }, kc = function (a) {
        this.type = "Mesh";
        this.objs = [];
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.angle = a.angle || 0;
        this.count = 0;
        var b = this;
        a.add && v(a.add, function (a) {
            b.add(a)
        });
        this.angle && this.setAngle(this.angle)
    };
    kc.prototype = {
        getCount: function () {
            return this.count
        }, getObjects: function () {
            return this.objs
        }, add: function (a) {
            this.count += 1;
            this.objs.push(a);
            a.offsetMesh = a.getPosition(1);
            a.turn(this.angle);
            a.setPositionC(e(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
        }, del: function (a) {
            var b = this;
            v(this.objs, function (c) {
                c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
            })
        }, draw: function (a) {
            v(this.objs, function (a) {
                a.draw()
            })
        }, move: function (a) {
            this.x += a.x || 0;
            this.y += a.y || 0;
            var b = this;
            v(this.objs, function (a) {
                a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
            })
        }, turn: function (a) {
            if (0 != a) {
                this.angle %= 360;
                this.angle += a;
                var b = e(this.x, this.y), c = this;
                v(this.objs, function (d) {
                    d.turn(a);
                    d.setPositionC(E(e(c.x +
                        d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        }, setAngle: function (a) {
            if (a != this.angle) {
                this.angle = a %= 360;
                var b = e(this.x, this.y), c = this;
                v(this.objs, function (d) {
                    d.setAngle(a);
                    d.setPositionC(E(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        }, setPosition: function (a) {
            if (this.x != a.x || this.y != a.y) {
                this.x = a.x || this.x;
                this.y = a.y || this.y;
                var b = this;
                v(this.objs, function (a) {
                    b.angle ? a.setPositionC(E(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), e(b.x, b.y), b.angle)) : a.setPositionC(e(b.x + a.offsetMesh.x, b.y +
                        a.offsetMesh.y))
                })
            }
        }, isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = !1;
            v(this.objs, function (c) {
                if (c.isDynamicIntersect(a)) return b = c
            });
            return b
        }, isStaticIntersect: function (a) {
            var b = !1;
            v(this.objs, function (c) {
                if (c.isStaticIntersect(a)) return b = c
            });
            return b
        }, isIntersect: function (a) {
            var b = !1;
            v(this.objs, function (c) {
                if (c.isIntersect(a)) return b = c
            });
            return b
        }
    };
    this.game.newMesh = function (a) {
        return new kc(a)
    };
    this.camera.setScale = function (a) {
    };
    this.camera.circling = function (a, b, c) {
        u(this.circlingAnglePointJS) ||
        (this.circlingAnglePointJS = c);
        f.x = a.x + b * Math.cos(x(this.circlingAnglePointJS));
        f.y = a.y + b * Math.sin(x(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.circlingC = function (a, b, c) {
        u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        f.x = -O + a.x + b * Math.cos(x(this.circlingAnglePointJS));
        f.y = -P + a.y + b * Math.sin(x(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS +
            c
    };
    this.camera.motion = function (a, b, c) {
        u(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        f.x = a.x + b.w * Math.cos(x(this.motionPercentPointJS));
        f.y = a.y + b.h * Math.sin(x(this.motionPercentPointJS));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.motionC = function (a, b, c) {
        u(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        this.setPositionC(e(a.x + b.w * Math.cos(x(this.motionPercentPointJS)), a.y + b.h * Math.sin(x(this.motionPercentPointJS))));
        this.motionPercentPointJS =
            360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.follow = function (a) {
        this.moveTimeC(a.getPositionC(), 10)
    };
    this.camera.move = function (a) {
        f.x += a.x || 0;
        f.y += a.y || 0
    };
    this.camera.moveTime = function (a, b) {
        b = b || 1;
        var c = e(f.x, f.y);
        this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.moveTimeC = function (a, b) {
        b = b || 1;
        var c = e(f.x + O, f.y + P);
        this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.setPosition = function (a) {
        Ab(e(!1 !== a.x ? a.x : f.x, !1 !== a.y ? a.y : f.y))
    };
    this.camera.setPositionC = function (a) {
        Ab(e(!1 !==
        a.x ? a.x - O : f.x, !1 !== a.y ? a.y - P : f.y))
    };
    this.camera.getPosition = function (a) {
        return a ? e(f.x + O, f.y + P) : e(f.x, f.y)
    };
    this.camera.getPositionC = function () {
        return e(f.x + O, f.y + P)
    };
    this.camera.getStaticBox = function () {
        return {x: f.x, y: f.y, w: f.x + n, h: f.y + p}
    };
    this.camera.getDynamicBox = function () {
        return [e(f.x, f.y), e(f.x + n, f.y), e(f.x + n, f.y + p), e(f.x, f.y + p)]
    };
    var Ab = function (a) {
        f = e(a.x, a.y)
    }, H = function (a) {
        g.restore();
        g.globalAlpha = t.globalAlpha;
        g.fillStyle = "black";
        g.strokeStyle = "black";
        g.msImageSmoothingEnabled = Da;
        g.imageSmoothingEnabled =
            Da
    }, N = function (a, b) {
        g.save();
        var c = a.getPositionC();
        a.angle && (g.translate(-f.x + c.x, -f.y + c.y), g.rotate(x(a.angle)), g.translate(-c.x + f.x, -c.y + f.y));
        1 != a.alpha && (g.globalAlpha = a.alpha);
        if (a.flip.x || a.flip.y) g.translate(-f.x + c.x, -f.y + c.y), g.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), g.translate(-c.x + f.x, -c.y + f.y);
        a.shadowColor && (g.shadowBlur = a.shadowBlur, g.shadowColor = a.shadowColor, g.shadowOffsetX = a.shadowX, g.shadowOffsetY = a.shadowY);
        if ("EllipsObject" == a.type && !b) {
            c = a.w / 2;
            var d = a.h / 2, m = e(-f.x + a.x, -f.y + a.y);
            g.translate(m.x,
                m.y);
            g.scale(c / d, 1);
            g.translate(-m.x, -m.y)
        }
    };
    this.system.setContextSettings = function (a) {
        g.save();
        for (var b in a) g[b] = a[b]
    };
    this.system.defaultSettings = function () {
        H()
    };
    this.game.clear = function () {
        g.clearRect(0, 0, n, p)
    };
    this.game.fill = function (a) {
        g.fillStyle = a;
        g.fillRect(0, 0, n, p)
    };
    var Oa = function (a, b, c, d, m, h, k) {
        if (!(3 > c.length)) {
            if (d && !(3 > c.length)) {
                g.fillStyle = d;
                d = -f.x + a;
                var l = -f.y + b;
                var y;
                g.beginPath();
                g.moveTo(d + c[0].x, l + c[0].y);
                for (y = 1; y < c.length; y += 1) g.lineTo(d + c[y].x, l + c[y].y);
                g.closePath();
                g.fill()
            }
            for (d =
                     0; d < c.length; d += 1) l = d + 1 < c.length ? d + 1 : 0, m && aa(ua(c[d], e(a, b)), ua(c[l], e(a, b)), m, h), k && lb(ua(c[d], e(a, b)), k)
        }
    }, R = function (a) {
        a.x || (a.x = 0);
        a.y || (a.y = 0);
        a.w || (a.w = 0);
        a.h || (a.h = 0)
    };
    this.brush.drawPolygon = function (a) {
        var b = a.points || [], c = a.fillColor || !1, d = a.strokeColor || !1, e = a.strokeWidth || 1;
        a = a.pointColor || !1;
        if (!(3 > b.length)) {
            if (c && !(3 > b.length)) {
                g.fillStyle = c;
                c = -f.x;
                var h = -f.y;
                var k;
                g.beginPath();
                g.moveTo(c + b[0].x, h + b[0].y);
                for (k = 1; k < b.length; k += 1) g.lineTo(c + b[k].x, h + b[k].y);
                g.closePath();
                g.fill()
            }
            for (c =
                     0; c < b.length; c += 1) h = c + 1 < b.length ? c + 1 : 0, d && aa(b[c], b[h], d, e), a && lb(b[c], a)
        }
    };
    this.brush.drawTriangle = function (a) {
        R(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + p) return !1;
        Oa(a.x, a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    this.brush.drawTriangleS = function (a) {
        R(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > p) return !1;
        Oa(f.x + a.x, f.y + a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    var qa = function (a, b, c, d, e, h, k, l, n) {
        g.textAlign = k;
        g.lineWidth =
            n;
        g.font = (h ? h + " " : "") + d + "px " + e;
        d = -f.x;
        e = -f.y;
        c && (g.fillStyle = c, g.fillText(b, d + a.x, e + a.y));
        l && (g.strokeStyle = l, g.strokeText(b, d + a.x, e + a.y))
    };
    this.brush.drawMultiText = function (a) {
        var b, c = a.text.split("\n");
        for (b = 0; b < c.length; b += 1) qa(e(a.x, a.y + a.size * b), c[b], a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawMultiTextS = function (a) {
        var b, c = a.text.split("\n"), d = a.size || 10;
        for (b = 0; b < c.length; b += 1) qa(e(a.x + f.x, a.y + f.y + d * b), c[b],
            a.color || t.fillStyle, d || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawText = function (a) {
        qa(e(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextS = function (a) {
        qa(e((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextLines = function (a) {
        if (a.lines) {
            var b,
                c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) qa(e(a.x, a.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    this.brush.drawTextLinesS = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) qa(e(a.x + f.x, a.y + f.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    var hc = function (a, b, c) {
        aa(e(a.x - b, a.y), e(a.x + b, a.y), c, 2);
        aa(e(a.x, a.y - b), e(a.x, a.y + b),
            c, 2)
    }, Aa = function (a, b, c, d, e) {
        g.fillStyle = c;
        g.strokeStyle = d;
        g.lineWidth = e;
        d = -f.x + (e ? e / 2 : 0);
        var m = -f.y + (e ? e / 2 : 0);
        c && g.fillRect(a.x + d, a.y + m, b.w, b.h);
        e && g.strokeRect(a.x + d, a.y + m, b.w, b.h)
    };
    this.brush.drawRect = function (a) {
        R(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + p) return !1;
        Aa(e(a.x, a.y), C(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRectS = function (a) {
        R(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > p) return !1;
        Aa(e(a.x + f.x, a.y + f.y), C(a.w, a.h), a.fillColor ||
            !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var lb = function (a, b) {
        (g.fillStyle = b) && g.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
    };
    this.brush.drawPoint = function (a) {
        R(a);
        if (a.x < f.x || a.x > f.x + n || a.y < f.y || a.y > f.y + p) return !1;
        lb(e(a.x, a.y), a.fillColor || !1)
    };
    this.brush.drawPointS = function (a) {
        R(a);
        if (0 > a.x || a.x > n || 0 > a.y || a.y > p) return !1;
        lb(e(a.x + f.x, a.y + f.y), a.fillColor || !1)
    };
    var Eb = function (a, b, c, d, e, h) {
        g.fillStyle = d;
        g.strokeStyle = e;
        g.lineWidth = h;
        e = -f.x + a.x + (h ? h / 2 : 0);
        a = -f.y + a.y + (h ? h / 2 : 0);
        g.beginPath();
        g.moveTo(e +
            c, a);
        g.lineTo(e + b.w - c, a);
        g.quadraticCurveTo(e + b.w, a, e + b.w, a + c);
        g.lineTo(e + b.w, a + b.h - c);
        g.quadraticCurveTo(e + b.w, a + b.h, e + b.w - c, a + b.h);
        g.lineTo(e + c, a + b.h);
        g.quadraticCurveTo(e, a + b.h, e, a + b.h - c);
        g.lineTo(e, a + c);
        g.quadraticCurveTo(e, a, e + c, a);
        g.closePath();
        d && g.fill();
        h && g.stroke()
    };
    this.brush.drawRoundRect = function (a) {
        R(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + p) return !1;
        Eb(e(a.x, a.y), C(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRoundRectS =
        function (a) {
            R(a);
            if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > p) return !1;
            Eb(e(f.x + a.x, f.y + a.y), C(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
        };
    var Ba = function (a, b, c, d, e) {
        g.fillStyle = c;
        g.strokeStyle = d;
        g.lineWidth = e;
        d = -f.x + b + (e ? e / 2 : 0);
        var h = -f.y + b + (e ? e / 2 : 0);
        g.beginPath();
        g.arc(a.x + d, a.y + h, b, 0, 2 * Math.PI, !0);
        g.closePath();
        c && g.fill();
        e && g.stroke()
    };
    this.brush.drawCircle = function (a) {
        R(a);
        var b = 2 * a.radius;
        if (a.x + b < f.x || a.x > f.x + n || a.y + b < f.y || a.y > f.y + p) return !1;
        Ba(e(a.x, a.y),
            a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawCircleS = function (a) {
        R(a);
        var b = 2 * a.radius;
        if (0 > a.x + b || a.x > n || 0 > a.y + b || a.y > p) return !1;
        Ba(e(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var aa = function (a, b, c, d) {
        g.strokeStyle = c;
        g.lineWidth = d;
        c = -f.x;
        d = -f.y;
        g.beginPath();
        g.moveTo(c + a.x, d + a.y);
        g.lineTo(c + b.x, d + b.y);
        g.closePath();
        g.stroke()
    };
    this.brush.drawLineAngle = function (a) {
        var b = E(e(a.x + a.length, a.y), e(a.x, a.y), a.angle);
        aa(e(a.x, a.y), e(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAngleS = function (a) {
        var b = E(e(f.x + a.x + a.length, f.y + a.y), e(f.x + a.x, f.y + a.y), a.angle);
        aa(e(f.x + a.x, f.y + a.y), e(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLine = function (a) {
        aa(e(a.x1, a.y1), e(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineS = function (a) {
        aa(e(f.x + a.x1, f.y + a.y1), e(f.x + a.x2, f.y + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineA = function (a) {
        aa(e(a.x1, a.y1), e(a.x2, a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAS = function (a) {
        aa(e(a.x1 + f.x, a.y1 + f.y), e(a.x2 + f.x, a.y2 + f.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawEllips = function (a) {
        R(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + p) return !1;
        var b = a.w / 2, c = a.h / 2, d = e(-f.x + a.x, -f.y + a.y);
        g.save();
        g.translate(d.x, d.y);
        g.scale(b / c, 1);
        g.translate(-d.x, -d.y);
        Ba(e(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        g.restore()
    };
    this.brush.drawEllipsS = function (a) {
        R(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > p) return !1;
        var b = a.w / 2, c = a.h / 2, d = e(a.x, a.y);
        g.save();
        g.translate(d.x, d.y);
        g.scale(b / c, 1);
        g.translate(-d.x, -d.y);
        Ba(e(f.x + a.x, f.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        g.restore()
    };
    this.brush.drawImageS = function (a) {
        if (a.file) if (u(l[a.file])) {
            if (l[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0;
                if (a.w && !a.h) {
                    var d = a.w / l[a.file].w;
                    var e = a.w;
                    var f = l[a.file].h * d
                } else !a.w && a.h ? (d = a.h / l[a.file].h, f = a.h, e = l[a.file].w *
                    d) : a.w && a.h ? (e = a.w, f = a.h) : (e = l[a.file].w, f = l[a.file].h);
                a.scale && (e *= a.scale, f *= a.scale);
                if (0 > b + e || b > n || 0 > c + f || c > p) return !1;
                g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, b, c, e, f)
            }
        } else l[a.file] = {loaded: !1}, b = h.document.createElement("img"), b.onload = function () {
            l[a.file].loaded = !0;
            l[a.file].img = this;
            l[a.file].w = this.width;
            l[a.file].h = this.height;
            A.load()
        }, b.src = a.file, A.add()
    };
    this.brush.drawImage = function (a) {
        if (a.file) if (u(l[a.file])) {
            if (l[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0;
                if (a.w && !a.h) {
                    var d =
                        a.w / l[a.file].w;
                    var e = a.w;
                    var k = l[a.file].h * d
                } else !a.w && a.h ? (d = a.h / l[a.file].h, k = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, k = a.h) : (e = l[a.file].w, k = l[a.file].h);
                a.scale && (e *= a.scale, k *= a.scale);
                if (b + e < f.x || b > f.x + n || c + k < f.y || c > f.y + p) return !1;
                g.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, -f.x + b, -f.y + c, e, k)
            }
        } else l[a.file] = {}, l[a.file].loaded = !1, b = h.document.createElement("img"), b.onload = function () {
            l[a.file].loaded = !0;
            l[a.file].img = this;
            l[a.file].w = this.width;
            l[a.file].h = this.height;
            A.load()
        }, b.src =
            a.file, A.add()
    };
    this.brush.onContext = function (a) {
        a(g)
    };
    this.brush.getPixelColor = function (a, b) {
        var c = g.getImageData(a, b, 1, 1).data;
        return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
    };
    this.brush.setPixelColor = function (a, b, c) {
        var d = g.createImageData(1, 1);
        d.data[0] = c.r || d.data[0];
        d.data[1] = c.g || d.data[1];
        d.data[2] = c.b || d.data[2];
        d.data[3] = c.a || 255;
        g.putImageData(d, a, b)
    };
    this.brush.onPixel = function (a, b, c) {
        var d = g.getImageData(a, b, 1, 1),
            e = {r: d.data[0], g: d.data[1], b: d.data[2], a: d.data[3] ? d.data[3] : 255};
        c(e);
        d.data[0] =
            e.r;
        d.data[1] = e.g;
        d.data[2] = e.b;
        d.data[3] = e.a;
        g.putImageData(d, a, b)
    };
    this.brush.onPixels = function (a, b, c, d, e) {
        c = g.getImageData(a, b, c, d);
        var f;
        d = 0;
        for (f = c.data.length; d < f; d += 4) {
            var h = {r: c.data[d], g: c.data[d + 1], b: c.data[d + 2], a: c.data[d + 3] ? c.data[d + 3] : 255};
            e(h);
            c.data[d] = h.r;
            c.data[d + 1] = h.g;
            c.data[d + 2] = h.b;
            c.data[d + 3] = h.a
        }
        g.putImageData(c, a, b)
    };
    this.brush.onRawPixels = function (a, b, c, d, e) {
        c = g.getImageData(a, b, c, d);
        e(c.data, c.data.length);
        g.putImageData(c, a, b)
    };
    var S = h.AudioContext || h.webkitAudioContext ||
        !1;
    (S = S ? new S : !1) && S.listener.setPosition(0, 0, 0);
    var T = function (a, b) {
        S || U('module "wAudio" is not supported! use a "audio"');
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
        this.pausedTime = this.duration = this.startTime = 0;
        var c = this, d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function (a) {
            S.decodeAudioData(this.response, function (a) {
                c.wABuffer = a;
                c.duration = c.wABuffer.duration;
                c.wAGain = S.createGain();
                c.wAGain.gain.value = c.vol;
                c.wAPanner =
                    S.createPanner();
                c.wAPanner.setPosition(0, 0, 1);
                c.wAPanner.panningModel = "equalpower";
                A.load();
                c.loaded = !0;
                c.loadPlay && c.replay()
            }, function (a) {
                U("error in wAudio.newAudio : error decoding file", a)
            })
        };
        a ? d.send() : U("error in wAudio.newAudio : Where is file?");
        A.add()
    };
    T.prototype.play = function (a) {
        if (!this.loaded) this.loadPlay = !0; else if (!this.playing) {
            this.playing = !0;
            this.wASource = S.createBufferSource();
            this.wASource.buffer = this.wABuffer;
            this.wAListener = S.destination;
            this.wASource.connect(this.wAGain);
            this.wAGain.connect(this.wAPanner);
            this.wAPanner.connect(this.wAListener);
            this.wASource.start(0, this.pausedTime, this.duration);
            this.startTime = S.currentTime;
            var b = this;
            this.wASource.onended = function () {
                b.playing = !1;
                b.startTime = 0;
                b.pausedTime = 0;
                b.nextPlay && b.nextPlay.replay()
            }
        }
    };
    T.prototype.replay = function (a) {
        this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
    };
    T.prototype.stop = function () {
        this.pause();
        this.pausedTime = this.startTime = 0
    };
    T.prototype.pause = function () {
        if (this.playing) {
            this.pausedTime =
                this.getProgress();
            this.playing = !1;
            this.wASource.stop(0);
            var a = this;
            this.wASource.onended = function () {
                a.playing = !1
            }
        }
    };
    T.prototype.getProgress = function () {
        return this.playing ? S.currentTime - this.startTime + this.pausedTime : this.pausedTime
    };
    T.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    T.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    T.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.wAGain.gain.value = this.vol
    };
    T.prototype.getVolume = function () {
        return this.vol
    };
    T.prototype.setSide = function (a) {
        this.side = a;
        this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
    };
    T.prototype.getSide = function () {
        return this.side
    };
    this.wAudio.newAudio = function (a, b) {
        return new T(a, b)
    };
    var da = function (a, b) {
        var c, d = h.document.createElement("audio");
        if ("string" == typeof a) {
            var e = h.document.createElement("source");
            e.src = a;
            d.appendChild(e)
        } else {
            var f = 0;
            for (c = a.length; f < c; f += 1) e = h.document.createElement("source"), e.src = a[f], d.appendChild(e)
        }
        this.vol = b && 1 >= b && 0 < b ? b :
            1;
        this.playing = 0;
        this.audio = d;
        this.nextPlay = this.loaded = !1;
        d.volume = this.vol;
        var g = this;
        d.onloadeddata = function () {
            g.loaded = !0;
            A.load()
        };
        d.onended = function () {
            g.playing = !1;
            g.nextPlay && g.nextPlay.play()
        };
        d.load();
        A.add()
    };
    da.prototype.play = function (a) {
        this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
    };
    da.prototype.replay = function (a) {
        a && this.setVolume(a);
        this.playing = !0;
        this.audio.currentTime = 0;
        this.audio.play()
    };
    da.prototype.stop = function () {
        this.playing &&
        (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
    };
    da.prototype.pause = function () {
        this.playing && (this.playing = !1, this.audio.pause())
    };
    da.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    da.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    da.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.audio.volume = this.vol
    };
    da.prototype.getVolume = function () {
        return this.vol
    };
    this.audio.newAudio = function (a, b) {
        return new da(a, b)
    };
    var mb = [], ta = [];
    this.zList.useZValue =
        function () {
            this.update = function () {
                ta.length = 0;
                v(mb, function (a) {
                    a.isInCamera() && ta.push(a)
                });
                ta.sort(function (a, b) {
                    return a.z - b.z
                })
            }
        };
    this.zList.useYValue = function () {
        this.update = function () {
            ta.length = 0;
            v(mb, function (a) {
                a.isInCamera() && ta.push(a)
            });
            ta.sort(function (a, b) {
                return a.y + a.h - (b.y + b.h)
            })
        }
    };
    this.zList.add = function (a) {
        mb.push(a)
    };
    this.zList.init = function (a) {
        v(a, function (a) {
            q.zList.add(a)
        })
    };
    this.zList.draw = function (a) {
        q.OOP.drawArr(ta, a)
    };
    this.zList.del = function (a) {
        q.OOP.delObject(mb, a)
    };
    this.zList.useYValue();
    var A = {
        count: 0, loaded: 0, errored: 0, add: function () {
            this.count += 1
        }, load: function () {
            this.loaded += 1
        }, error: function () {
            this.errored += 1
        }
    };
    this.resources.isLoaded = function () {
        return A.count == A.loaded
    };
    this.resources.getProgress = function () {
        return Math.ceil(A.loaded / A.count * 100)
    };
    this.levels.forStringArray = function (a, b) {
        var c = a.offset || e(0, 0);
        v(a.source, function (d, e) {
            v(d, function (d, f) {
                " " != d && b(d, c.x + a.w * f, c.y + a.h * e, a.w, a.h)
            })
        })
    };
    var Dc = function (a) {
        "ImageObject" == a.type && "undefined" != typeof RESOURCES && a.resFile &&
        (a.file = RESOURCES[a.resFile]);
        "AnimationObject" == a.type && "undefined" != typeof ANIMATIONS && a.animId && (a.anim = ANIMATIONS[a.animId]);
        var b = ac(a);
        b.name = "";
        D(a, function (a, d) {
            "id" != d && (b[d] = a)
        });
        return b
    }, lc = function (a, b) {
        var c = {settings: {}, objects: []};
        a = JSON.parse(a);
        c.settings = a.settings;
        v(a.objects, function (a) {
            var d = Dc(a);
            d.name = a.name;
            b && b(d);
            c.objects.push(d)
        });
        return c
    }, mc = function (a, b, c) {
        var d = [], e = {};
        if (a && "json" == b) {
            b = lc(a, c);
            d = b.objects;
            e = b.settings;
            var f = a
        }
        this.backgroundColor = e.backgroundColor ?
            e.backgroundColor : !1;
        this.reload = function () {
            d = lc(f)
        };
        this.clear = function () {
            $b(d)
        };
        this.add = function (a) {
            d.push(a)
        };
        this.del = function (a) {
            v(d, function (b, c) {
                if (a.id == b.id) return d.splice(c, 1), "break"
            })
        };
        this.delById = function (a) {
            d.splice(a, 1)
        };
        this.getObjects = function () {
            return d
        };
        this.getObjectByName = function (a) {
            var b;
            var c = 0;
            for (b = d.length; c < b; c += 1) if (d[c].name == a) return d[c];
            return !1
        };
        this.getObjectById = function (a) {
            var b;
            var c = 0;
            for (b = d.length; c < b; c += 1) if (d[c].id == a) return d[c];
            return !1
        };
        this.draw = function (a) {
            this.backgroundColor &&
            q.game.fill(this.backgroundColor);
            v(d, function (b) {
                a && a(b);
                b.draw()
            })
        };
        this.getLevelAsJSON = function (a, b) {
            var c = '{"settings":' + JSON.stringify({backgroundColor: this.backgroundColor}) + ',"objects":[';
            if (!d.length) return c + "]}";
            v(d, function (d, e) {
                a && a(d);
                c += "{";
                D(d, function (a, b) {
                    "function" != typeof a && (c += '"' + b + '":' + JSON.stringify(a) + ",")
                });
                c = c.substr(0, c.length - 1) + "},";
                b && b(d)
            });
            c = c.substr(0, c.length - 1);
            return c + "]}"
        }
    };
    this.levels.newLevelFromJSON = function (a, b) {
        return new mc(a, "json", b || !1)
    };
    this.levels.newEmptyLevel =
        function (a) {
            return new mc(!1)
        };
    var nc = 0, oc = 0, Kb = 0, pc = !1;
    this.system.initFPSCheck = function () {
        pc || (pc = !0, k.addEvent("postLoop", "fpsCheckUpdate", function () {
            Kb += 1;
            1E3 <= L - oc && (nc = Kb, Kb = 0, oc = L)
        }))
    };
    this.system.getFPS = function () {
        return nc
    };
    var nb = this.filters;
    nb.setCSSFilter = function (a, b) {
        var c = (b ? b.canvas : r).style, d = "";
        D(a, function (a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.OFilter = c.MozFilter = c.WebkitFilter = c.filter = d
    };
    nb.clearCSSFilter = function (a) {
        a = (a ? a.canvas : r).style;
        a.OFilter = a.MozFilter = a.WebkitFilter = a.filter =
            "none"
    };
    nb.setCSSTransform = function (a, b) {
        var c = (b ? b.canvas : r).style, d = "perspective(" + n + "px)";
        D(a, function (a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.transform = c.MozTransform = c.WebkitTransform = d
    };
    nb.clearCSSTransform = function (a) {
        a = (a ? a.canvas : r).style;
        a.transform = a.MozTransform = a.WebkitTransform = "none"
    };
    this.OOP.newRever = function (a, b, c) {
        var d = function (a, b, c) {
            this.min = a;
            this.max = b;
            this.step = c;
            this.value = a;
            this.to = c
        };
        d.prototype = {
            update: function () {
                var a = this.value;
                this.value <= this.min ? this.to = this.step : this.value >=
                    this.max && (this.to = -this.step);
                this.value += this.to;
                return a
            }, getValue: function () {
                return this.value
            }, setValue: function (a) {
                this.value = parseFloat(a)
            }, setStep: function (a) {
                this.step = a
            }, getStep: function () {
                return this.step
            }
        };
        return new d(a, b, c)
    };
    var qc = {};
    this.OOP.once = function (a, b) {
        qc[a] || (qc[a] = !0, b())
    };
    this.OOP.newTimer = function (a, b) {
        if (0 >= a) return ja("error in system.newTimer : variable < 0, Timer is not created");
        var c = {
            time: 0 < a ? a : 1E3, func: b, startTime: !1, ending: !1, start: function () {
                this.ending || this.startTime ||
                (this.startTime = L)
            }, run: function () {
                !this.ending && this.startTime && L - this.startTime >= this.time && (this.func(), this.ending = !0)
            }, end: function () {
                this.ending || (this.ending = !0, this.func())
            }, restart: function (a) {
                this.startTime || this.start();
                if (this.ending) {
                    if (a && 0 >= a) return ja("error in Timer.restart : variable < 0");
                    a && (this.time = a);
                    this.ending = !1;
                    this.startTime = L
                }
            }, stop: function () {
                this.ending || (this.ending = !0)
            }
        };
        k.addEvent("postLoop", "timer" + ca(-100, 100) * ca(-100, 100) + L, function () {
            c.run()
        });
        return c
    };
    this.memory.local =
        {
            storage: h.localStorage, clear: function () {
            this.storage.clear()
        }, save: function (a, b) {
            this.storage.setItem(a, b)
        }, saveAsObject: function (a, b) {
            var c = JSON.stringify(b);
            this.storage.setItem(a, c)
        }, loadAsObject: function (a) {
            return JSON.parse(this.storage.getItem(a))
        }, load: function (a) {
            return this.storage.getItem(a)
        }, loadAsNumber: function (a) {
            return parseFloat(this.storage.getItem(a))
        }
        };
    this.memory.temp = {
        values: {}, save: function (a, b) {
            this.values[a] = b
        }, load: function (a) {
            return this.values[a]
        }, loadAsNumber: function (a) {
            return parseFloat(this.values[a])
        }
    };
    h.onload = function () {
        if (g) {
            for (var a in t) g[a] = t[a];
            g.save()
        }
        k.runEvent("onload");
        k.loaded = !0;
        "function" === typeof POINTJS_USER_ONLOAD && POINTJS_USER_ONLOAD();
        return !1
    };
    h.onblur = function () {
        if (ka) return k.runEvent("gameBlur"), !1
    };
    h.onfocus = function () {
        if (!ka) return h.document.activeElement.blur(), h.focus(), k.runEvent("gameFocus"), !1
    };
    h.onresize = function () {
        k.runEvent("gameResize");
        g && (g.textBaseline = t.textBaseline);
        return !1
    };
    h.onclick = function () {
        h.document.activeElement.blur();
        h.focus()
    };
    if ("undefined" !==
        typeof POINTJS_LOADED_DOM_IGNORE) h.onload()
};