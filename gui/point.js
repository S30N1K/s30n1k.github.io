function PointJS($b, da, ea, Ya) {
    this._logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABcCAYAAACYyxCUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAA10RVh0YXV0aG9yAFNrYW5lcrXlqu8AAAfJSURBVHic7Z1PaBRXHMe/M278GxW6CnalhEQMIlqUgiE2DUguha6g12Ih4sVrD70VevKUiwoKq8XFeOjBgxZ68aAXDYEKhUKpoMiaSCTR4EaINjtJ5vWQmXXcnTfz/r/ZzX7gHZKZ9/v93vvN7/ebNzM7A3To0KE9+A0AEWzfWLC37Wia2IWFBcJLtVqNc9Ata6NqMeqTVigUuCeflT179kSd84vVETfg2DYAwNcAHgGA4zjwfd+octd1QQgJ/7Q+H65F3eNYO0IfeZ4HQohxZwCA7/sghKBWqwEfo8Yato4IAiB6ZGYKx6lPi/H5MR0hBAAhhEg5o1QqwXVdOI4T21zXRalUEjfyo33WI0YXBAApl8vcBbivr0/0VLep7du3j1v/tWvXwv67TUyUiZDkTk+RlKEVQZu0GqczZf0IgIyMjDANvFKp1FOOKUJ9U1NTqfsSQjA8PAy0aAoLa0UqV65cUZaSZFupVGKyGRqdouNwZEpRvu9jw4YNGtTL4/t+aqQG25XPn2qBTM4wmZZkYByHC4URo7KGpDrj3r17LeMMYG3C79+/T90ejNUHMKZMpyI5qc5oJUfEwTC2AQB/yupRMUtt74wQhjFKD1Q2ZT0G1oczgOSxkI8rezkdkv3JenFGFJ2RIhMhZGRkhLqRxxnLy8vK2/T0NK5fv47+/n6JIfKPbWhoCLCweExc+CFh8RXXTFMsFpUsJGnAhkNonDlzJvMOicJra7SdO3cuTa4RyIkTJ2KNmJ+fV3qkmUTEbgCkWq3GyhscHBRyCm/xWQXgEkpREy3iNHmmUW2/SIHnLerKnZElRA8M2tiJwKkwj0Oogm3cC9eF7WjlihCasVm9amsSVVHC6hCqwKtXr7LqahlEo6RcLkvrZk38xPM8dHV1NQtQUDtsp4k4VBb4Wq2GzZs3AwzzzRIhowBinVGpVBi6ry9mZmaa/rdp0yalOsjx48eVnrs3Np1rB1GmpqaUjufo0aMEwK9pk80Sl8HYYzorOtWlyU+DRf+BAwfw5MkTbfLjSJmvRKFpGhcBbItToHLdodMhJuSz6mRxSFoN2VYoFISN6vAp+XweAH5I2iftENCergIlQv1aLUIiMqmCbT793iGGJIf00Ta0w3Ur3YjOUVIvQvsBjWqHtGPKoumVSlnValXKoA7NzM3NAcAXtO2JEWKioAeKhPq1YoQEcj0Ascv3TlG3w0baBm6HrKysyJnSIRFuh1y8eFGHHW3J5cuXuftwO+Tu3bvcStYrd+7c4e7D7ZCnT59yK7HJli1brOl+9uwZd5+2L+ofPnwQ6jc9Pa3YEjZyvB36+/vx5s0bHbZwE1ysa6KrqwvPnz/H1q1bhWX39PQI9w3Zv38/dx9uh5w6dQoTExPcinQwPz9v24RETp8+zd2He2G4srISeztXBtGFm050PiuQdPmEu4bkctxB1XLYvHja9kWdl/fv31vVn+iQhYUFU3Zkhu7ubq3yg4uL39O2t/Tld9WYGJfM5fefsjJRusnlcpm56dbS99RVoMsRnXvqHBSLReMvumEl9Ry2UCjg1atXJmzRgud52Lt3byYWkcGVhb+T9klNWUBicVKCrTt6OtH1oBy183op+CLIzA1TDRkcHBRWYAMSvDOREILDhw/bNgcAcOTIEWWyFkF5ortSqWTu6fcLFy4w7aerzczMJNmaCvMPdmq1GjZubL43b/MHOyk/IwMAvHjxAr29vULyRYgby9LSUnijTFnRox7JpVIpUxFis928eVMqOnjRNjGqHZK0n+d5sbJu376tbRw8DuEJIRJ4pXkDIXBd8TVmnEwWWFJWdL+kdylqfCgOAD4HMMsih2cWqRZneT0QhWan53m6VTM5AxC4dMJ6VGad7u5uOI6DfD4v/aPMlOjQ+moNB0D4QuEm3r59yynOHouLi9i5c6e0ze/evYv9/7Fjx6Tk8vAtEgrY2bNnM1vUfd+PldPb2ytUxM+fP59mmzFYzioy5xAA5PXr17GyTp48qfqs6jO9LmiGDA8Pc08Wz8DSYJUXt09ctKiweWBgwHh0hEwmGcY7QJWNZsfk5CTZsWNH/e/R0VEhexnGLIz0W0mxZiFdgYVT4kZ7QhuS7IzuxyM7pn8XAOHfbMjeMXQihsSSNglZ4dat9C/pMTjjMSScoRLWULaWssbGxqi2ra6uqkhTmTvyUg1/8OCB1RoSbfl8nmzfvj1V1sOHD406oy0/V9GoX9fLOQO5/wEQf8y+AdVPnaTWFADRr6ApI/xApAq5LHKCMf4Dhc4A9DwGxOQUYG3gN27c0GBCxBiO6BgfH2dyaCBzEUA27g8zQgCQoaGhxBwc8vLlS6m64bouU+2Ia7Tbro1EFn1f6po03YuEPwB8B/Cd/orkfMdxuNOVoE1a50z3k4tFRFIY6xtMwxxOCMHBgweZ+6Rx6NChT2SzcOnSJaufYtXJMhhOjVkol8skl8tRU1AulxP6qmgjEZnGsOHx+gBZj1LTRCIiD8DoTR4bD1s7iKQxx3HCT2dbZWlpKfoA9n9Ys9H4Hbcs5MR6mGTgA/d/AfjKqAENZOHnCGHETBBC6kfprl27tCnM5/N1PYEz3MAGq87IMrHFem5ujrswz87O0or/z5bG1haouOj4u3GrBchCDZFlN4AerBXif5HBy+AdWpj/AazZcTP7IXuyAAAAAElFTkSuQmCC";
    var g = window, W = this, va = !0, Za = !0, vb = !1, fa = !1, Fa = !0, p = da, q = ea, L = p / 2, M = q / 2, f = {
        x: 0,
        y: 0
    }, t = {
        fillStyle: "black",
        strokeStyle: "black",
        globalAlpha: 1,
        font: "sans-serif",
        textBaseline: "top"
    }, C = function (a) {
        console.log("[PointJS] : ", a)
    }, Ga = function (a) {
        var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, "")), b = b.split(/\n/), b = ("" == b[2] ? b[0] : b[1]).split("/"), b = b[b.length - 1].split(":");
        console.log('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
    };
    this.game = {};
    this.camera =
        {};
    this.keyControl = {};
    this.mouseControl = {};
    this.touchControl = {};
    this.system = {};
    this.vector = {};
    this.math = {};
    this.colors = {};
    this.brush = {};
    this.audio = {};
    this.wAudio = {};
    this.dialogs = {};
    this.resources = {};
    this.tiles = {};
    this.OOP = {};
    this.GUI = {};
    this.GL = {};
    this.memory = {};
    this.system.log = C;
    this.system.consoleLog = function (a) {
        this.log = !0 === a ? console.log : C
    };
    this.system.setSettings = function (a) {
        va = r(a.isShowError) ? a.isShowError : !0;
        Za = r(a.isStopForError) ? a.isStopForError : !0;
        vb = r(a.isAutoClear) ? a.isAutoClear : !1;
        r(a.isZBuffer)
    };
    this.system.setDefaultSettings = function (a) {
        for (var b in a)t[b] = a[b];
        h.save()
    };
    this.system.setSmoothing = function (a) {
        Fa = a;
        wb()
    };
    var ac = {
        name: "PointJS",
        desc: "HTML5 2D Game Engine for JavaScript",
        author: "Skaner (skaner0@yandex.ru)",
        version: "0.0.6.5"
    };
    this.system.getInfo = function () {
        return ac
    };
    var xb = "", yb = "", zb = function (a, b) {
        var c = k.createShader(a);
        k.shaderSource(c, b);
        k.compileShader(c);
        return k.getShaderParameter(c, k.COMPILE_STATUS) ? c : (C("Error shader compilation : " + k.getShaderInfoLog(c)), k.deleteShader(c),
            null)
    }, Q, k = !1, u = !1, bc = function () {
        u = g.document.createElement("canvas");
        u.width = l.width;
        u.height = l.height;
        u.style.position = "fixed";
        u.style.left = 0;
        u.style.top = 0;
        u.style.zIndex = l.style.zIndex + 1;
        u.id = "PointJS-canvas_1";
        u.style.backgroundColor = "black";
        m.attach(u);
        m.addEvent("onload", "hideSourceCanvas", function () {
            l.style.display = "none"
        });
        k = u.getContext("webgl") || u.getContext("experimental-webgl");
        k.viewport(0, 0, p, q);
        k.clearColor(0, 0, 0, 1);
        k.clear(k.COLOR_BUFFER_BIT)
    }, $a, ab, Ab, Bb, bb, cb, cc = function () {
        var a =
            k.createBuffer();
        k.bindBuffer(k.ARRAY_BUFFER, a);
        k.bufferData(k.ARRAY_BUFFER, new Float32Array([0, 0, p, 0, 0, q, 0, q, p, 0, p, q]), k.STATIC_DRAW);
        ab = k.getAttribLocation(Q, "aPosition");
        Ab = k.getUniformLocation(Q, "uResolution");
        $a = k.getAttribLocation(Q, "aTextCoord");
        bb = k.getUniformLocation(Q, "uInversion");
        cb = k.getUniformLocation(Q, "uMirrorX");
        k.uniform2f(Ab, p, q);
        k.enableVertexAttribArray(ab);
        k.vertexAttribPointer(ab, 2, k.FLOAT, !1, 0, 0);
        a = k.createBuffer();
        k.bindBuffer(k.ARRAY_BUFFER, a);
        k.bufferData(k.ARRAY_BUFFER,
            new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), k.STATIC_DRAW);
        k.enableVertexAttribArray($a);
        k.vertexAttribPointer($a, 2, k.FLOAT, !1, 0, 0);
        Bb = k.createTexture();
        k.bindTexture(k.TEXTURE_2D, Bb);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.NEAREST);
        k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST)
    };
    this.GL.filter = function (a, b) {
        if (!k)return C("GL is not inited. Use a initGL() function.");
        "inversion" == a && k.uniform1i(bb, 1);
        "mirror-x" == a && k.uniform1i(cb, 1)
    };
    var d = function (a, b) {
        return {x: a, y: b}
    }, y = function (a, b) {
        return {w: a, h: b}
    }, oa = function (a, b) {
        return {x: a.x + b.x, y: a.y + b.y}
    }, db = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y}
    }, I = function (a, b, c) {
        if (0 != c) {
            var e = w(c);
            c = a.x - b.x;
            a = a.y - b.y;
            var aa = Math.cos(e), e = Math.sin(e);
            return d(c * aa - a * e + b.x, c * e + a * aa + b.y)
        }
        return d(a.x, a.y)
    }, eb = function (a, b) {
        return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
    }, ga = function (a, b) {
        if (3 > b.length)return !1;
        var c = 0, e = b.length - 1,
            d = b[e].y < a.y, f, h;
        f = 0;
        for (h = b.length; f < h; ++f) {
            var g = b[f].y < a.y, e = db(b[e], a), k = db(b[f], a), e = e.x * (k.y - e.y) - e.y * (k.x - e.x);
            g && !d && 0 < e && (c += 1);
            !g && d && 0 > e && (c += 1);
            e = f;
            d = g
        }
        return 0 != (c & 1)
    };
    this.vector.point = d;
    this.vector.v2d = d;
    this.vector.size = y;
    this.vector.w2h = y;
    this.vector.getPointAngle = I;
    this.vector.isPointIn = ga;
    this.vector.pointMinus = db;
    this.vector.pointPlus = oa;
    this.vector.pointInc = function (a, b) {
        return {x: a.x * b.x, y: a.y * b.y}
    };
    this.vector.pointDiv = function (a, b) {
        return {
            x: a.x / (0 != b.x ? b.x : 1), y: a.y / (0 != b.y ?
                b.y : 1)
        }
    };
    this.vector.pointAbs = function (a) {
        return {x: Math.abs(a.x), y: Math.abs(a.y)}
    };
    this.vector.getMidPoint = function (a, b) {
        return r(b) ? d((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
    };
    this.vector.getDistance = function (a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    };
    this.vector.isSame = function (a, b) {
        return r(b) ? a.x == b.x && a.y == b.y : !1
    };
    this.vector.getAngle2Points = eb;
    this.vector.newStaticBox = function (a, b, c, e) {
        return {x: a, y: b, w: a + c, h: b + e}
    };
    this.vector.newDynamicBoxRect = function (a, b, c, e) {
        return [d(a, b), d(a + c, b),
            d(a + c, b + e), d(a, b + e)]
    };
    var w = function (a) {
        return Math.PI / 180 * a
    }, X = function (a, b, c) {
        var e = Math.floor(Math.random() * (b - a + 1) + a);
        return c && 0 == e ? X(a, b, c) : e
    }, fb = function (a) {
        return 0 > a ? -1 : 1
    };
    this.math.limit = function (a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        return a < b ? a * fb(a) : b * fb(b)
    };
    this.math.sign = fb;
    this.math.a2r = w;
    this.math.random = X;
    this.math.toInt = function (a) {
        return a >> 0
    };
    var dc = 0, m = {
        loaded: !1,
        events: {onload: [], preLoop: [], postLoop: [], gameBlur: [], gameFocus: [], gameResize: []},
        addEvent: function (a, b, c) {
            "onload" == a &&
            m.loaded ? c() : m.events[a].push({id: b, func: c})
        },
        delEvent: function (a, b) {
            x(m.events[a], function (a, e, d) {
                a.id == b && d.splice(e, 1)
            })
        },
        runEvent: function (a) {
            x(m.events[a], function (a) {
                "function" == typeof a.func && a.func()
            })
        },
        attach: function (a) {
            var b = function () {
                g.document.body.appendChild(a)
            };
            m.loaded ? b() : m.addEvent("onload", "attachElement_PointJS" + dc++, b)
        },
        getWH: function () {
            return {
                w: parseInt(g.document.documentElement.clientWidth || g.innerWidth || g.document.body.clientWidth),
                h: parseInt(g.document.documentElement.clientHeight ||
                    g.innerHeight || g.document.body.clientHeight)
            }
        }
    };
    this.system.delEvent = function (a, b) {
        m.delEvent(a, b)
    };
    this.system.addEvent = function (a, b, c) {
        m.addEvent(a, b, c)
    };
    this.system.attachDOM = function (a) {
        m.attach(a)
    };
    this.system.newDOM = function (a) {
        a = g.document.createElement(a);
        a.style.position = "fixed";
        a.style.left = 0;
        a.style.top = 0;
        a.style.zIndex = l.style.zIndex + 1;
        a.style.border = "none";
        m.attach(a);
        return a
    };
    var l = g.document.createElement("canvas");
    l.crossOrigin = "anonymous";
    l.width = parseInt(da);
    l.height = parseInt(ea);
    l.style.position = "fixed";
    l.style.left = 0;
    l.style.top = 0;
    l.style.zIndex = 1E3;
    l.id = "PointJS-canvas_0";
    l.style.backgroundColor = "black";
    if ("object" == typeof Ya)for (var gb in Ya)gb.match(/margin|padding|position/) || (l.style[gb] = Ya[gb]);
    m.addEvent("onload", "Window_Hide_Scroll", function () {
        g.document.body.style.overflow = "hidden";
        hb = {x: parseInt(l.style.left), y: parseInt(l.style.top)}
    });
    var hb = d(0, 0), h = null, k = null, Y = !1, h = l.getContext("2d");
    "GL2D" == $b ? (bc(), yb = "attribute vec2 aPosition; attribute vec2 aTextCoord; uniform vec2 uResolution; uniform int uMirrorX; varying vec2 vTextureCoord; void main() {    vec2 zeroToOne = aPosition / uResolution;    vec2 zeroToTwo = zeroToOne * 2.0;    vec2 clipSpace = zeroToTwo - 1.0;    gl_Position = vec4(clipSpace * vec2((uMirrorX == 1 ? -1 : 1), -1), 0, 1);    vTextureCoord = aTextCoord; }",
        xb = "precision mediump float; uniform sampler2D texture; varying vec2 vTextureCoord; uniform int uInversion; void main() { \tvec4 texColor = texture2D(texture,vTextureCoord.xy); \tvec4 finalColor; \tfinalColor = texColor; \tif (uInversion == 1) \t\tfinalColor = 1.0 - finalColor; \tgl_FragColor = finalColor; }", Q = k.createProgram(), k.attachShader(Q, zb(k.VERTEX_SHADER, yb)), k.attachShader(Q, zb(k.FRAGMENT_SHADER, xb)), k.linkProgram(Q), k.getProgramParameter(Q, k.LINK_STATUS) || C("Can't install shader"), k.useProgram(Q),
        cc(), Y = !0, m.addEvent("postLoop", "drawGL", function () {
        k ? (k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, k.RGBA, k.UNSIGNED_BYTE, l), k.drawArrays(k.TRIANGLES, 0, 6), k.uniform1i(bb, 0), k.uniform1i(cb, 0)) : C("GL is not inited. Use a initGL() function.")
    })) : (m.attach(l), h.textBaseline = t.textBaseline);
    this.system.setStyle = function (a) {
        if ("object" == typeof a)for (var b in a)l.style[b] = a[b]
    };
    this.system.getContext = function () {
        return h
    };
    this.system.resize = function (a, b) {
        p = a || da;
        q = b || ea;
        L = p / 2;
        M = q / 2;
        l.width = p;
        l.height = q;
        Y && (u.width =
            l.width, u.height = l.height, k.viewport(0, 0, p, q))
    };
    this.system.initFullPage = function () {
        m.addEvent("gameResize", "PointJS_resizeGame", function () {
            p = m.getWH().w;
            q = m.getWH().h;
            L = p / 2;
            M = q / 2;
            l.width = p;
            l.height = q;
            Y && (u.width = l.width, u.height = l.height, k.viewport(0, 0, p, q))
        });
        m.runEvent("gameResize", "PointJS_resizeGame")
    };
    var R = !1, ec = function () {
        R || (this.requestFullscreen ? (this.requestFullscreen(), R = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), R = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(),
            R = !0), p = m.getWH().w, q = m.getWH().h, L = p / 2, M = q / 2, l.width = p, l.height = q, Y && (u.width = l.width, u.height = l.height, k.viewport(0, 0, p, q)))
    }, ib = function (a) {
        R = Cb(g.document.fullscreenElement || g.document.mozFullScreenElement || g.document.webkitFullscreenElement)
    };
    g.document.addEventListener("webkitfullscreenchange", ib);
    g.document.addEventListener("mozfullscreenchange", ib);
    g.document.addEventListener("fullscreenchange", ib);
    this.system.initFullScreen = function () {
        R || (g.document.documentElement.onclick = ec, wa || (m.addEvent("gameResize",
            "PointJS_initFullScreen", function () {
                p = m.getWH().w;
                q = m.getWH().h;
                L = p / 2;
                M = q / 2;
                l.width = p;
                l.height = q;
                Y && (u.width = l.width, u.height = l.height, k.viewport(0, 0, p, q))
            }), m.runEvent("gameResize", "PointJS_initFullScreen")))
    };
    this.system.exitFullScreen = function () {
        R && (m.delEvent("gameResize", "PointJS_initFullScreen"), g.document.exitFullscreen ? (g.document.exitFullscreen(), R = !1) : g.document.mozCancelFullScreen ? (g.document.mozCancelFullScreen(), R = !1) : g.document.webkitExitFullscreen && (g.document.webkitExitFullscreen(),
            R = !1), p = da, q = ea, L = p / 2, M = q / 2, l.width = p, l.height = q, Y && (u.width = l.width, u.height = l.height, k.viewport(0, 0, p, q)), g.document.documentElement.onclick = function () {
        })
    };
    this.system.isFullScreen = function () {
        return R
    };
    this.system.exitFullPage = function () {
        p = da;
        q = ea;
        L = p / 2;
        M = q / 2;
        l.width = p;
        l.height = q;
        Y && (u.width = l.width, u.height = l.height, k.viewport(0, 0, p, q))
    };
    var T = !1, wa = !1, Db = da, Eb = ea, Fb = !1;
    this.system.initFullScale = function (a) {
        wa || (a && (Fb = !0), m.addEvent("gameResize", "PointJS_initFullScale", function () {
            var a = Db, c = Eb,
                e = m.getWH();
            Fb ? (a = e.w, c = e.h) : e.w < e.h ? (c = e.w / p, a = e.w, c *= q) : e.h < e.w && (a = e.h / q, c = e.h, a *= p);
            Db = a;
            Eb = c;
            T = {w: a / p, h: c / q};
            l.style.width = a + "px";
            l.style.height = c + "px";
            Y && (u.style.width = l.style.width, u.style.height = l.style.height, k.viewport(0, 0, p, q))
        }), m.runEvent("gameResize", "PointJS_initFullScale"), wa = !0)
    };
    this.system.exitFullScale = function () {
        wa && (wa = !1, m.delEvent("gameResize", "PointJS_initFullScale"), l.style.width = da + "px", l.style.height = ea + "px", Y && (u.style.width = l.style.width, u.style.height = l.style.height,
            k.viewport(0, 0, p, q)))
    };
    this.system.getWH = function () {
        return m.getWH()
    };
    var fc = [], gc = 0, pa = function (a, b) {
        var c = g.document.createElement(a);
        c.style.position = "fixed";
        c.style.zIndex = l.style.zIndex + 1;
        c.style.outline = "none";
        c.style.left = b.x ? b.x + "px" : 0;
        c.style.top = b.y ? b.y + "px" : 0;
        b.w && (c.style.width = b.w + "px");
        b.h && (c.style.height = b.h + "px");
        c.style.backgroundColor = b.fillColor ? b.fillColor : "";
        c.style.color = b.color ? b.color : "black";
        c.style.border = (b.strokeWidth || 0) + "px solid " + (b.strokeColor || "");
        c.onmousedown =
            c.onmouseup = c.onmousemove = c.onclick = c.onkeydown = c.onkeypress = c.onkeyup = function (a) {
                a.stopPropagation()
            };
        c.oncontextmenu = c.onselectstart = c.ondragstart = function (a) {
            a.stopPropagation();
            return !1
        };
        this.w = b.w || 0;
        this.h = b.h || 0;
        this.el = c;
        this.id = gc++;
        this.visible = !0;
        if (b.events) this.onEvents(b.events);
        b.style && this.setStyle(b.style);
        fc.push(this)
    };
    pa.prototype = {
        onEvents: function (a) {
            "function" == typeof a.keyPress && (this.el.onkeypress = function (b) {
                b.stopPropagation();
                var c = !1;
                0 != b.which && 0 != b.charCode && 32 <= b.which &&
                (c = String.fromCharCode(b.which));
                return a.keyPress(c)
            });
            "function" == typeof a.change && (this.el.oninput = function (b) {
                b.stopPropagation();
                a.change()
            });
            "function" == typeof a.mouseOver && (this.el.onmouseover = function (b) {
                b.stopPropagation();
                a.mouseOver()
            });
            "function" == typeof a.mouseOut && (this.el.onmouseleave = function (b) {
                b.stopPropagation();
                a.mouseOut()
            });
            "function" == typeof a.click && (this.el.onclick = function (b) {
                b.stopPropagation();
                a.click()
            });
            "function" == typeof a.mousePress && (this.el.onmousedown = function (b) {
                b.stopPropagation();
                a.mousePress()
            });
            "function" == typeof a.mouseUp && (this.el.onmouseup = function (b) {
                b.stopPropagation();
                a.mouseUp()
            })
        }, getID: function () {
            return this.id
        }, move: function (a) {
            this.el.style.left = parseInt(this.el.style.left) + a.x + "px";
            this.el.style.top = parseInt(this.el.style.top) + a.y + "px"
        }, setPosition: function (a) {
            this.el.style.left = a.x + "px";
            this.el.style.top = a.y + "px"
        }, setPositionC: function (a) {
            this.el.style.left = a.x - this.w / 2 + "px";
            this.el.style.top = a.y - this.h / 2 + "px"
        }, getPosition: function () {
            return d(parseInt(this.el.style.left),
                parseInt(this.el.style.top))
        }, getPositionC: function () {
            return d(parseInt(this.el.style.left) + this.w / 2, parseInt(this.el.style.top) + this.h / 2)
        }, setSize: function (a) {
            this.w = a.w;
            this.h = a.h;
            this.el.style.width = a.w + "px";
            this.el.style.height = a.h + "px"
        }, getSize: function () {
            return y(this.w, this.h)
        }, setStyle: function (a) {
            for (var b in a)this.el.style[b] = a[b]
        }, setVisible: function (a) {
            if (this.visible = a)return this.el.style.display = "block";
            this.el.style.display = "none"
        }, isVisible: function () {
            return this.visible
        }, setEnabled: function (a) {
            this.enabled =
                a;
            this.el.disabled = !a
        }, setText: function (a) {
            this.el.innerHTML && (this.el.innerHTML = a, this.w = parseInt(this.el.offsetWidth), this.h = parseInt(this.el.offsetHeight));
            this.el.value && (this.el.value = a)
        }, getText: function () {
            if (this.el.innerHTML)return this.el.innerHTML;
            this.el.value && (this.el.value = text)
        }
    };
    this.GUI.newButton = function (a) {
        var b = new pa("input", a);
        b.el.type = "button";
        b.el.value = a.text ? a.text : "Button " + b.id;
        m.attach(b.el);
        return b
    };
    this.GUI.newInput = function (a) {
        var b = new pa("input", a);
        b.el.type = "text";
        b.el.value = a.text ? a.text : "Button " + b.id;
        b.el.oncontextmenu = b.el.onselectstart = b.el.ondragstart = function (a) {
        };
        m.attach(b.el);
        return b
    };
    this.GUI.newPanel = function (a) {
        var b = new pa("div", a);
        b.el.innerHTML = a.text ? a.text : "Panel " + b.id;
        m.attach(b.el);
        return b
    };
    this.GUI.newImage = function (a) {
        var b = new pa("img", a);
        if (!a.file)return C("error in GUI.newImage : Where image file?");
        b.el.src = a.file;
        m.attach(b.el);
        b.el.onload = function () {
            b.w || (b.w = parseInt(this.width));
            b.h || (b.h = parseInt(this.height))
        };
        return b
    };
    this.GUI.newHTML = function (a) {
        var b = new pa("div", a);
        b.el.innerHTML = a.text ? a.text.toString() : "Your HTML Text";
        m.attach(b.el);
        m.addEvent("onload", "getWH_HTMLPanel" + b.id, function () {
            b.w || (b.w = parseInt(b.el.offsetWidth));
            b.h || (b.h = parseInt(b.el.offsetHeight))
        });
        return b
    };
    var Ha = {
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
    }, hc = {
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
    }, ic = {
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
        for (a in Ha)b.push(a);
        return b
    };
    var qa = {}, xa = {}, ha = {}, ya = !1, za = !1, Ia = !1, jc = function (a) {
        ia(ha, function (a, c, e) {
            1 == a && (e[c] = 2)
        })
    };
    this.keyControl.isDown =
        function (a) {
            return 1 == qa[Ha[a]]
        };
    this.keyControl.isUp = function (a) {
        return 1 == xa[Ha[a]]
    };
    this.keyControl.isPress = function (a) {
        return 1 == ha[Ha[a]]
    };
    this.keyControl.getInputChar = function () {
        return ya
    };
    this.keyControl.getInputKey = function () {
        return hc[za]
    };
    this.keyControl.setInputMode = function (a) {
        Ia = a
    };
    this.keyControl.isInputMode = function () {
        return Ia
    };
    this.keyControl.exitKeyControl = function () {
        g.onkeydown = function () {
        };
        g.onkeypress = function () {
        };
        g.onkeyup = function () {
        };
        m.delEvent("postLoop", "PointJS_clearAllKeyUp");
        qa = {};
        xa = {};
        ha = {};
        Ia = za = ya = !1
    };
    this.keyControl.initKeyControl = function () {
        g.onkeydown = function (a) {
            if (Ia)return za = a.keyCode, ic[a.keyCode] ? (a.preventDefault(), !1) : !0;
            a.preventDefault();
            2 != ha[a.keyCode] && (ha[a.keyCode] = 1);
            qa[a.keyCode] = !0;
            return !1
        };
        g.onkeypress = function (a) {
            var b = !1;
            0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
            ya = b
        };
        g.onkeyup = function (a) {
            a.preventDefault();
            1 == qa[a.keyCode] && (xa[a.keyCode] = !0);
            qa[a.keyCode] = !1;
            delete ha[a.keyCode];
            return !1
        };
        m.addEvent("postLoop",
            "PointJS_clearAllKeyUp", function () {
                xa = {};
                jc();
                za = ya = !1
            });
        return this
    };
    var B = d(0, 0), Ja = d(0, 0);
    d(0, 0);
    var Aa = !0, jb = "", Ka = !1, ja = d(0, 0), La = !1, kb = {
        LEFT: 1,
        RIGHT: 3,
        MIDDLE: 2
    }, Ma = {}, Na = {}, Ba = {}, Ca = 0, Gb = function () {
        Ma = {};
        Na = {};
        Ba = {};
        Ca = 0;
        La = !1
    }, kc = function () {
        ia(Ba, function (a, b, c) {
            1 == a && (c[b] = 2)
        })
    }, Oa = function (a) {
        var b = 0, c = 0;
        a && (b = f.x, c = f.y);
        return d(b + B.x, c + B.y)
    };
    this.mouseControl.getPosition = function () {
        return Oa(1)
    };
    this.mouseControl.getPositionS = function () {
        return Oa()
    };
    this.mouseControl.setCursorImage = function (a) {
        jb =
            'url("' + a + '"), auto';
        g.document.body.style.cursor = jb
    };
    this.mouseControl.setVisible = function (a) {
        !Aa && !a || Aa && a || (Aa = 1 == a, g.document.body.style.cursor = Aa ? jb : "none")
    };
    this.mouseControl.isVisible = function () {
        return Aa
    };
    this.mouseControl.isDown = function (a) {
        return Ma[kb[a]]
    };
    this.mouseControl.isUp = function (a) {
        return Na[kb[a]]
    };
    this.mouseControl.isPress = function (a) {
        return 1 == Ba[kb[a]]
    };
    this.mouseControl.isMove = function () {
        return La
    };
    this.mouseControl.isInStatic = function (a) {
        var b = Oa(1);
        return b.x >= a.x && b.x <=
            a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.mouseControl.isInDynamic = function (a) {
        return ga(Oa(1), a)
    };
    this.mouseControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.mouseControl.isWheel = function (a) {
        return "UP" == a && 0 < Ca || "DOWN" == a && 0 > Ca
    };
    var Hb = function (a) {
        a.preventDefault();
        Ca = a.wheelDelta ? a.wheelDelta : -a.detail;
        return !1
    }, Pa = !1, Ib = function () {
        Pa && (Ka = r(g.document.pointerLockElement) || r(g.document.mozPointerLockElement) ? !0 : !1)
    };
    this.mouseControl.initMouseLock = function () {
        m.addEvent("onload", "initPointerLock", function () {
            Pa = l.requestPointerLock || l.mozRequestPointerLock || !1;
            g.document.exitPointerLock = g.document.exitPointerLock || g.document.mozExitPointerLock || !1;
            "onpointerlockchange" in g.document ? g.document.addEventListener("pointerlockchange", Ib, !1) : "onmozpointerlockchange" in g.document && g.document.addEventListener("mozpointerlockchange", Ib, !1);
            if (!Pa)return C("error in initMouseLock : not supported");
            Ka || (l.onclick = Pa)
        })
    };
    this.mouseControl.exitMouseLock = function () {
        g.document.exitPointerLock();
        l.onclick = function () {
        };
        ja = d(0, 0)
    };
    this.mouseControl.unlockMouse = function () {
        ja = d(0, 0);
        g.document.exitPointerLock()
    };
    this.mouseControl.isMouseLock = function () {
        return Ka
    };
    this.mouseControl.getSpeed = function () {
        return d(ja.x, ja.y)
    };
    this.mouseControl.isPeekStatic = function (a, b) {
        return this.isPress(a) ? this.isInStatic(b) : !1
    };
    this.mouseControl.isPeekDynamic = function (a, b) {
        return this.isPress(a) ? this.isInDynamic(b) : !1
    };
    this.mouseControl.isPeekObject =
        function (a, b) {
            return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
        };
    this.mouseControl.initMouseControl = function () {
        g.onmousemove = function (a) {
            a.preventDefault();
            a.stopPropagation();
            if (Ka) {
                var b = a.movementY || a.mozMovementY || 0;
                B.x += a.movementX || a.mozMovementX || 0;
                B.y += b;
                return !1
            }
            B.x = a.pageX - hb.x;
            B.y = a.pageY - hb.y;
            T && (B.x /= T.w, B.y /= T.h);
            ja.x = B.x - Ja.x;
            ja.y = B.y - Ja.y;
            Ja.x = B.x;
            Ja.y = B.y;
            La = !0;
            return !1
        };
        g.onmousedown = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button &
            1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            Ma[a.which] = !0;
            Ba[a.which] = 1
        };
        g.onmouseup = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            Ma[a.which] = !1;
            Na[a.which] = !0;
            delete Ba[a.which]
        };
        g.oncontextmenu = g.onselectstart = g.ondragstart = function () {
            return !1
        };
        g.onmousewheel = Hb;
        g.addEventListener("DOMMouseScroll", Hb, !1);
        m.addEvent("postLoop", "PointJS_clearAllMouseUp", function () {
            Na = {};
            kc();
            Ca = 0;
            La = !1;
            ja =
                d(0, 0)
        });
        return this
    };
    this.mouseControl.exitMouseControl = function () {
        g.onmousemove = g.onmousedown = g.onmouseup = g.oncontextmenu = g.onselectstart = g.ondragstart = g.onmousewheel = function () {
        };
        m.delEvent("postLoop", "PointJS_clearAllMouseUp");
        Gb()
    };
    var Qa = !1, Ra = 0, Sa = 0, D = 0, E = 0, v = d(0, 0), Da = d(0, 0), Ta = d(0, 0);
    this.touchControl.isTouchSupported = function () {
        return !!("ontouchstart" in window)
    };
    this.touchControl.isMobileDevice = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g.navigator.userAgent)
    };
    var Jb = function () {
        Qa = !1;
        Sa = Ra = 0;
        v = d(0, 0);
        E = D = 0
    };
    this.touchControl.getFixPositionS = function () {
        return v.x || v.y ? d(v.x, v.y) : !1
    };
    this.touchControl.getFixPosition = function () {
        return v.x || v.y ? d(v.x + f.x, v.y + f.y) : !1
    };
    this.touchControl.getRun = function () {
        var a = 0, b = 0;
        v.x && v.x != D && (a = D - v.x);
        v.y && v.y != E && (b = E - v.y);
        return d(a, b)
    };
    this.touchControl.getVector = function () {
        var a = 0, b = 0;
        v.x && v.x != D && (a = D > v.x ? 1 : -1);
        v.y && v.y != E && (b = E > v.y ? 1 : -1);
        return d(a, b)
    };
    this.touchControl.getSpeed = function () {
        return d(Da.x, Da.y)
    };
    this.touchControl.isDown =
        function () {
            return Qa
        };
    this.touchControl.isPress = function () {
        return 1 == Ra
    };
    this.touchControl.isUp = function () {
        return 1 == Sa
    };
    this.touchControl.getPosition = function () {
        return d(D + f.x, E + f.y)
    };
    this.touchControl.getPositionS = function () {
        return d(D, E)
    };
    this.touchControl.isPeekStatic = function (a) {
        return this.isPress() ? this.isInStatic(a) : !1
    };
    this.touchControl.isPeekDynamic = function (a) {
        return this.isPress() ? this.isInDynamic(a) : !1
    };
    this.touchControl.isPeekObject = function (a) {
        return this.isPress() && a.visible ? this.isInDynamic(a.getDynamicBox()) :
            !1
    };
    this.touchControl.isInStatic = function (a) {
        var b = this.getPosition();
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.touchControl.isInDynamic = function (a) {
        return ga(this.getPosition(), a)
    };
    this.touchControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.touchControl.initTouchControl = function () {
        g.addEventListener("touchstart", function (a) {
            a.preventDefault();
            D = a.targetTouches[0].pageX;
            E = a.targetTouches[0].pageY;
            T && (D /= T.w, E /= T.h);
            v.x = D;
            v.y = E;
            Qa = !0;
            Ra = 1;
            return !1
        }, !1);
        g.addEventListener("touchmove", function (a) {
            a.preventDefault();
            D = a.targetTouches[0].pageX;
            E = a.targetTouches[0].pageY;
            T && (D /= T.w, E /= T.h);
            Da.x = D - Ta.x;
            Da.y = E - Ta.y;
            return !1
        }, !1);
        g.addEventListener("touchend", function (a) {
            a.preventDefault();
            v.x = 0;
            v.y = 0;
            Qa = !1;
            Sa = 1;
            return !1
        }, !1);
        W.touchControl.vibrate = function (a) {
            if (g.navigator.vibrate)return g.navigator.vibrate(a);
            if (g.navigator.oVibrate)return g.navigator.oVibrate(a);
            if (g.navigator.mozVibrate)return g.navigator.mozVibrate(a);
            if (g.navigator.webkitVibrate)return g.navigator.webkitVibrate(a)
        };
        m.addEvent("postLoop", "PointJS_touchStopPress", function () {
            Sa = Ra = 0;
            Ta.x = D;
            Ta.y = E;
            Da = d(0, 0)
        });
        return this
    };
    this.touchControl.exitTouchControl = function () {
        g.ontouchstart = g.ontouchmove = g.ontouchend = function (a) {
        };
        m.delEvent("postLoop", "PointJS_touchStopPress");
        Jb()
    };
    var Ua = function (a, b, c, e) {
        return "rgba(" + a + ", " + b + ", " + c + ", " + (e ? e : 1) + ")"
    }, Kb = function (a, b) {
        a = "#" == a[0] ? a.substr(1, 6) : a;
        var c = parseInt(a.substr(0, 2), 16), e = parseInt(a.substr(2, 2),
            16), d = parseInt(a.substr(4, 2), 16);
        return Ua(c, e, d, b)
    };
    this.colors.rgb = function (a, b, c) {
        return Ua(a, b, c, 1)
    };
    this.colors.rgba = function (a, b, c, e) {
        return Ua(a, b, c, e)
    };
    this.colors.hex2rgb = function (a) {
        return Kb(a, 1)
    };
    this.colors.hex2rgba = function (a, b) {
        return Kb(a, b)
    };
    this.colors.randomColor = function (a, b, c) {
        return Ua(X(a, b), X(a, b), X(a, b), c || 1)
    };
    var r = function (a) {
        return "undefined" == typeof a || null == a ? !1 : !0
    }, Cb = function (a) {
        return r(a) && "" !== a && 0 !== a ? !0 : !1
    }, ia = function (a, b) {
        for (var c in a)a[c] && b(a[c], c, a)
    }, x =
        function (a, b) {
            if (0 != a.length) {
                var c, e;
                c = 0;
                for (e = a.length; c < e; c++)a[c] && b(a[c], c, a)
            }
        };
    this.OOP.insertArrElement = function (a, b) {
        var c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.insertRandArrElement = function (a) {
        var b = X(0, a.length - 1), c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.drawArr = function (a) {
        var b, c;
        b = 0;
        for (c = a.length; b < c; b++)a[b].isInCamera && a[b].draw && a[b].isInCamera() && a[b].draw()
    };
    this.OOP.readJSON = function (a, b) {
        var c = {}, e = new XMLHttpRequest;
        e.open("GET", a, !0);
        z.add();
        e.onreadystatechange = function () {
            4 ==
            e.readyState && (c = e.responseText, c = JSON.parse(c), z.load(), b(c))
        };
        e.send()
    };
    this.OOP.toString = function (a, b) {
        var c, e = 0, d, f = "[";
        for (c in a)d = a[c], "number" == typeof d && b && (d = parseInt(d)), f += (0 < e ? ", " : "") + c + " : " + d, e++;
        return f + "]"
    };
    this.OOP.sendGET = function (a, b, c) {
        var e = new XMLHttpRequest, d = "?";
        ia(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        e.open("GET", a + d, !0);
        e.onreadystatechange = function () {
            4 == e.readyState && c(e.responseText)
        };
        e.send()
    };
    this.OOP.sendPOST = function (a, b, c) {
        var e = new XMLHttpRequest,
            d = "";
        ia(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        e.open("POST", a, !0);
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.onreadystatechange = function () {
            4 == e.readyState && c(e.responseText)
        };
        e.send(d)
    };
    this.OOP.sendPOSTScreen = function (a, b, c) {
        var e = new XMLHttpRequest;
        b = b + "=" + l.toDataURL("image/png");
        e.open("POST", a, !0);
        e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        e.onreadystatechange = function () {
            4 == e.readyState && c(e.responseText)
        };
        e.send(b)
    };
    this.OOP.isDef =
        r;
    this.OOP.isSet = Cb;
    this.OOP.forEach = ia;
    this.OOP.forInt = function (a, b) {
        var c;
        for (c = 0; c < a; c++)b(c)
    };
    this.OOP.forXY = function (a, b, c) {
        var e, d;
        for (d = 0; d < b; d++)for (e = 0; e < a; e++)c(e, d)
    };
    this.OOP.forArr = x;
    this.OOP.clearArr = function (a) {
        a.length = 0
    };
    this.OOP.fillArr = function (a, b, c) {
        a.length = 0;
        var e;
        for (e = 0; e < b; e++)a.push(c(e, 0 < e ? a[e - 1] : !1));
        return a
    };
    this.OOP.randArrElement = function (a) {
        return a[X(0, a.length - 1)]
    };
    this.OOP.readJSONSync = function (a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send();
        a = b.responseText;
        return a = JSON.parse(a)
    };
    this.OOP.sendGETSync = function (a, b) {
        var c = new XMLHttpRequest, e = "?";
        ia(b, function (a, b) {
            e += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("GET", a + e, !1);
        c.send();
        return c.responseText
    };
    this.OOP.sendPOSTSync = function (a, b) {
        var c = new XMLHttpRequest, e = "";
        ia(b, function (a, b) {
            e += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("POST", a, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.send(e);
        return c.responseText
    };
    this.OOP.runCode = function (a) {
        (new Function("", a))()
    };
    var F =
        {};
    this.OOP.includeSync = function (a, b) {
        if (F[a]) F[a].loaded && !b && F[a].code(); else {
            F[a] = {
                loaded: !1, code: function () {
                    console.log(a + " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            F[a].code = new Function("", c.responseText);
            F[a].loaded = !0;
            F[a].code()
        }
    };
    this.OOP.include = function (a, b) {
        if (F[a]) F[a].loaded && !b && F[a].code(); else {
            F[a] = {
                loaded: !1, code: function () {
                    console.log(a + " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !0);
            c.onreadystatechange = function () {
                4 == c.readyState && (F[a].code =
                    new Function("", c.responseText), F[a].loaded = !0, F[a].code())
            };
            c.send()
        }
    };
    var ka = 60, G = Date.now(), Va = 0, Wa = -1, Lb = G, la = {};
    this.game.setFPS = function (a) {
        ka = 0 < a ? a : 60
    };
    this.game.getFPS = function () {
        return ka
    };
    this.game.getDT = function (a) {
        a || (a = 1E3);
        return Va / a
    };
    this.game.getTime = function () {
        return G
    };
    var Mb = function () {
        return g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || function (a) {
                g.setTimeout(a, 1E3 / ka)
            }
    }, Ea = Mb(), Nb = function () {
        G =
            Date.now();
        if (vb) {
            var a = d(0, 0), b = d(p, q);
            h.clearRect(a.x, a.y, b.x, b.y)
        }
        m.runEvent("preLoop")
    }, Ob = function () {
        m.runEvent("postLoop");
        -1 != Wa && (Va = G - Wa);
        Wa = G
    }, J = {
        func: function () {
            console.log('please, use a "setLoop" function.');
            Ea = function () {
            }
        }, start: !1, end: !1, audio: !1, fps: !1
    }, Pb = function () {
        J.audio && x(J.audio, function (a) {
            a.stop()
        })
    };
    this.game.newLoop = function (a, b, c, e) {
        "function" == typeof b ? la[a] = {
            func: b,
            start: c || !1,
            end: e || !1,
            audio: !1,
            fps: !1
        } : ba("error in newLoop : " + b + " is not a function")
    };
    this.game.newLoopFromClassObject =
        function (a, b) {
            if (!b.update)return ba('error in newLoopFromClassObject : function "update" not found');
            la[a] = {func: b.update, start: b.entry || !1, end: b.exit || !1, audio: !1, fps: !1}
        };
    this.game.setLoopSound = function (a, b) {
        var c;
        la[a].audio || (la[a].audio = []);
        for (c = 0; c < b.length; c++)b[c].setNextPlay(b[c + 1 == b.length ? 0 : c + 1]), la[a].audio.push(b[c])
    };
    this.game.setLoop = function (a) {
        if (!la[a])return ba("setLoop : " + a + " is no a Loop");
        Pb();
        Gb();
        qa = {};
        xa = {};
        ha = {};
        za = ya = !1;
        Jb();
        lb(d(0, 0));
        J.end && J.end();
        J = la[a];
        J.start &&
        J.start();
        J.audio && J.audio[0].play()
    };
    var Qb = function () {
        if (60 > ka) {
            var a = 1E3 / ka;
            try {
                G = Date.now(), G - Lb > a && (Nb(), J.func(Va), Lb = G, Ob())
            } catch (b) {
                va && Ga(b), Za && (va || Ga(b), ba())
            }
        } else try {
            Nb(), J.func(Va), Ob()
        } catch (b) {
            va && Ga(b), Za && (va || Ga(b), ba())
        }
        Ea(Qb)
    }, Rb = function (a) {
        fa || (fa = !0, ka = a || 60, Ea(Qb))
    }, ba = function (a) {
        if (!fa)return C(r(a) ? a : "game is stop");
        fa = !1;
        Pb();
        Ea = function () {
            C(r(a) ? a : "game is stop")
        }
    };
    this.game.getWH = function () {
        return {w: p, h: q, w2: L, h2: M}
    };
    this.game.startLoop = function (a, b) {
        this.setLoop(a);
        this.start(b)
    };
    this.game.start = Rb;
    this.game.stop = ba;
    this.game.resume = function (a) {
        fa || (J.audio && J.audio[0].play(), C(a || "game is run"), Ea = Mb(), Wa = -1, Rb(ka))
    };
    var lc = [], mc = 0, ca = function (a, b) {
        b.prototype = Object.create(a.prototype);
        b.prototype.constructor = b
    }, A = function (a) {
        this.type = "BaseObject";
        this.id = mc++;
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.w = a.w || 1;
        this.h = a.h || 1;
        this.ondraw = a.ondraw ? a.ondraw : !1;
        this.parent = !1;
        this.children = [];
        this.fillColor = a.fillColor || !1;
        this.strokeColor = a.strokeColor || t.strokeStyle;
        this.strokeWidth = a.strokeWidth || 0;
        this.angle = a.angle || 0;
        this.alpha = r(a.alpha) ? a.alpha : 1;
        this.center = d(0, 0);
        this.box = {x: 0, y: 0, w: 0, h: 0};
        this.visible = r(a.visible) ? a.visible : !0;
        this.flip = d(0, 0);
        this.setShadow(a);
        a.userData && this.setUserData(a.userData);
        a.center && this.setCenter(a.center);
        a.box && this.setBox(a.box);
        a.size && this.setSize(a.size);
        a.sizeC && this.setSizeC(a.sizeC);
        a.position && this.setPosition(a.position);
        a.positionC && this.setPositionC(a.positionC);
        lc.push(this)
    };
    A.prototype = {
        getID: function () {
            return this.id
        },
        getType: function () {
            return this.type
        }, getParent: function () {
            return this.parent
        }, addChild: function (a) {
            a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(I(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
        }, delChild: function (a) {
            a.parent = !1;
            var b, c;
            b = 0;
            for (c = this.children.length; b < c; b += 1)if (this.children[b].id == a.id) {
                this.children.splice(b, 1);
                break
            }
        }, delParent: function () {
            this.parent.delChild(this)
        }, setBox: function (a) {
            a.offset && (this.box.x =
                a.offset.x || 0, this.box.y = a.offset.y || 0);
            a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
        }, isArrIntersect: function (a) {
            var b, c;
            b = 0;
            for (c = a.length; b < c; b++)if (a[b].id != this.id && this.isIntersect(a[b]))return a[b];
            return !1
        }, isArrInside: function (a) {
            var b, c;
            b = 0;
            for (c = a.length; b < c; b++)if (this.isDynamicInside(a[b].getDynamicBox()))return a[b];
            return !1
        }, getNearest: function (a) {
            var b, c = 0, e = !1, d;
            b = 0;
            for (d = a.length; b < d; b++)if (this.id != a[b].id) {
                !1 === e && (e = this.getDistanceC(a[b].getPositionC()), c = b);
                var f =
                    this.getDistanceC(a[b].getPositionC());
                f < e && (e = f, c = b)
            }
            return a[c]
        }, setFlip: function (a, b) {
            r(a) && this.flip.x != a && (this.flip.x = a);
            r(b) && this.flip.y != b && (this.flip.y = b)
        }, setUserData: function (a) {
            for (var b in a)r(this[b]) || (this[b] = a[b])
        }, setShadow: function (a) {
            this.shadowColor = a.shadowColor || !1;
            this.shadowBlur = r(a.shadowBlur) ? a.shadowBlur : 3;
            this.shadowX = a.shadowX || 0;
            this.shadowY = a.shadowY || 0
        }, getDynamicBox: function () {
            var a = this.getPosition(1);
            return 0 == this.angle ? [d(this.x + this.box.x, this.y + this.box.y),
                d(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), d(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), d(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [I(d(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), I(d(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), I(d(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), I(d(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h), a, this.getAngle())]
        },
        isDynamicIntersect: function (a) {
            if (3 > a.length)return !1;
            var b = this.getDynamicBox(), c, e;
            c = 0;
            for (e = b.length; c < e; c++)if (ga(b[c], a))return !0;
            c = 0;
            for (e = a.length; c < e; c++)if (ga(a[c], b))return !0;
            return !1
        }, isIntersect: function (a) {
            return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
        }, isDynamicInside: function (a) {
            if (3 > a.length)return !1;
            var b = this.getDynamicBox(), c, e, d = 0;
            c = 0;
            for (e = b.length; c < e; c++)ga(b[c], a) && d++;
            return d == b.length ? !0 : !1
        }, drawDynamicBox: function (a) {
            K(this,
                1);
            h.shadowColor = "transparent";
            ra(d(this.x + this.box.x, this.y + this.box.y), y(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            Sb(d(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow");
            H()
        }, drawStaticBox: function (a) {
            h.shadowColor = "transparent";
            ra(d(this.x + this.box.x, this.y + this.box.y), y(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            Sb(d(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow")
        }, isStaticIntersect: function (a) {
            return this.y + this.box.y +
                this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
        }, getStaticBox: function () {
            return {x: this.x + this.box.x, y: this.y + this.box.y, w: this.w + this.box.w, h: this.h + this.box.h}
        }, setAlpha: function (a) {
            this.alpha != a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
        }, transparent: function (a) {
            this.setAlpha(this.alpha + a)
        }, getAlpha: function () {
            return this.alpha
        }, rotate: function (a) {
            this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
        },
        setCenter: function (a) {
            this.center = d(a.x, a.y)
        }, nullCenter: function (a) {
            a || (a = d(0, 0));
            this.center = d(-this.w / 2 + a.x, -this.h / 2 + a.y)
        }, getCenter: function () {
            return d(this.center.x, this.center.y)
        }, getBox: function () {
            return this.box
        }, move: function (a) {
            this.prevPosition = this.getPosition();
            "none" != a.x && (this.x += a.x);
            "none" != a.y && (this.y += a.y);
            if (this.children.length) {
                var b, c;
                b = 0;
                for (c = this.children.length; b < c; b += 1)this.children[b].move(a)
            }
        }, circling: function (a, b, c) {
            r(this.circlingAnglePointJS) || (this.circlingAnglePointJS =
                0);
            this.x = a.x + b * Math.cos(w(this.circlingAnglePointJS));
            this.y = a.y + b * Math.sin(w(this.circlingAnglePointJS));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, circlingC: function (a, b, c) {
            r(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.setPositionC(d(a.x + b * Math.cos(w(this.circlingAnglePointJS)), a.y + b * Math.sin(w(this.circlingAnglePointJS))));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, motion: function (a, b, c) {
            r(this.motionPercentPointJS) ||
            (this.motionPercentPointJS = 0);
            this.x = a.x + b.w * Math.cos(w(this.motionPercentPointJS));
            this.y = a.y + b.h * Math.sin(w(this.motionPercentPointJS));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        }, motionC: function (a, b, c) {
            r(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.setPositionC(d(a.x + b.w * Math.cos(w(this.motionPercentPointJS)), a.y + b.h * Math.sin(w(this.motionPercentPointJS))));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS +
            c
        }, scale: function (a) {
            "none" != a.w && (this.w += a.w);
            "none" != a.h && (this.h += a.h)
        }, scaleC: function (a) {
            this.scale(a);
            this.move(d(-(a.w / 2), -(a.h / 2)))
        }, getPosition: function (a) {
            return 1 == a ? d(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 == a ? (a = d(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = I(a, this.getPosition(1), this.angle)), d(a.x, a.y)) : d(this.x, this.y)
        }, getPositionC: function () {
            return d(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y))
        }, getPositionS: function () {
            return d(this.x +
                f.x, this.y + f.x)
        }, getPositionCS: function () {
            return d(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
        }, setPosition: function (a) {
            var b = this.getPosition();
            "none" != a.x && (this.x = a.x);
            "none" != a.y && (this.y = a.y);
            if (this.children.length) {
                var c;
                a = 0;
                for (c = this.children.length; a < c; a += 1)this.children[a].move(d(-b.x + this.x, -b.y + this.y))
            }
        }, setPositionS: function (a) {
            var b = this.getPosition();
            "none" != a.x && (this.x = a.x + f.x);
            "none" != a.y && (this.y = a.y + f.y);
            if (this.children.length) {
                var c;
                a = 0;
                for (c = this.children.length; a <
                c; a += 1)this.children[a].move(d(-b.x + this.x, -b.y + this.y))
            }
        }, setPositionC: function (a) {
            var b = this.getPosition();
            "none" != a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
            "none" != a.y && (this.y = -(this.h / 2 + this.center.y) + a.y);
            if (this.children.length) {
                var c;
                a = 0;
                for (c = this.children.length; a < c; a += 1)this.children[a].move(d(-b.x + this.x, -b.y + this.y))
            }
        }, setPositionCS: function (a) {
            var b = this.getPosition();
            "none" != a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
            "none" != a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y);
            if (this.children.length) {
                var c;
                a = 0;
                for (c = this.children.length; a < c; a += 1)this.children[a].move(d(-b.x + this.x, -b.y + this.y))
            }
        }, getSize: function () {
            return y(this.w, this.h)
        }, setSize: function (a) {
            "none" != a.w && (this.w = a.w);
            "none" != a.h && (this.h = a.h)
        }, setSizeC: function (a) {
            "none" != a.w && (this.w = a.w, this.move(d(-(a.w / 2), "none")));
            "none" != a.h && (this.h = a.h, this.move(d("none", -(a.h / 2))))
        }, turn: function (a) {
            this.angle += a;
            if (this.children.length) {
                var b, c;
                b = 0;
                for (c = this.children.length; b < c; b += 1)this.children[b].turn(a)
            }
        }, rotateForAngle: function (a, b) {
            var c =
                Math.abs(a);
            90 > Math.abs(this.angle) || 180 - c <= 2 * b && this.setAngle(a);
            this.angle < a ? this.turn(b) : this.turn(-b)
        }, moveTo: function (a, b) {
            var c = w(eb(this.getPosition(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveToC: function (a, b) {
            var c = w(eb(this.getPositionC(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveAngle: function (a, b) {
            b = w(r(b) ? b : this.angle);
            this.prevPosition = this.getPosition();
            this.x += a * Math.cos(b);
            this.y += a * Math.sin(b)
        },
        moveTime: function (a, b) {
            b = b || 1;
            var c = this.getPosition();
            this.move(d((a.x - c.x) / b, (a.y - c.y) / b))
        }, moveTimeC: function (a, b) {
            b = b || 1;
            var c = this.getPosition(1);
            this.move(d((a.x - c.x) / b, (a.y - c.y) / b))
        }, getAngle: function () {
            return this.angle
        }, setAngle: function (a) {
            this.angle != a && (this.angle = a % 360);
            if (this.children.length) {
                var b, c;
                b = 0;
                for (c = this.children.length; b < c; b += 1)this.children[b].turn(a)
            }
        }, getDistance: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
        },
        getDistanceC: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
        }, setVisible: function (a) {
            this.visible = 1 == a
        }, isVisible: function () {
            return this.visible
        }, isInCamera: function () {
            return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
        }, isInCameraStatic: function () {
            return this.x + this.w < f.x || this.x > f.x + p || this.y + this.h < f.y || this.y > f.y + q ? !1 : !0
        }, isInCameraDynamic: function () {
            var a = this.getDynamicBox(), b = [d(f.x, f.y), d(f.x + p, f.y), d(f.x + p, f.y + q), d(f.x,
                f.y + q)], c, e, h = 0;
            c = 0;
            for (e = a.length; c < e; c++)ga(a[c], b) && h++;
            return 0 < h
        }, onCollision: function (a) {
        }, onArrCollision: function (a) {
            var b, c;
            b = 0;
            for (c = a.length; b < c; b++)if (this.id != a[b].id) this.onCollision(a[b])
        }, draw: function () {
        }
    };
    this.game.newBaseObject = function (a) {
        return new A(a)
    };
    var mb = function (a) {
        A.call(this, a);
        this.type = "RectObject"
    };
    ca(A, mb);
    mb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) K(this), a = !0;
            ra(d(this.x, this.y), y(this.w, this.h),
                this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newRectObject = function (a) {
        return new mb(a)
    };
    var nb = function (a) {
        A.call(this, a);
        this.type = "RoundRectObject";
        this.radius = a.radius || 1
    };
    ca(A, nb);
    nb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) K(this), a = !0;
            ob(d(this.x, this.y), y(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newRoundRectObject = function (a) {
        return new nb(a)
    };
    var ma = function (a) {
        A.call(this, a);
        this.radius = a.radius || 5;
        this.w = 2 * this.radius;
        this.h = 2 * this.radius;
        this.type = "CircleObject";
        a.positionC && this.setPositionC(a.positionC)
    };
    ca(A, ma);
    ma.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) K(this), a = !0;
            sa(d(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    ma.prototype.scale =
        function (a) {
            this.w += a || 0;
            this.h += a || 0;
            this.radius += a ? a / 2 : 0
        };
    ma.prototype.scaleC = function (a) {
        this.w += a || 0;
        this.h += a || 0;
        this.radius += a ? a / 2 : 0;
        this.move(d(-(a / 2), -(a / 2)))
    };
    ma.prototype.getRadius = function () {
        return this.radius
    };
    ma.prototype.setRadius = function (a) {
        a && this.radius != a && (this.radius = a, this.w = 2 * a, this.h = 2 * a)
    };
    this.game.newCircleObject = function (a) {
        return new ma(a)
    };
    var pb = function (a) {
        this.file = a.file;
        this.w = a.w;
        this.h = a.h;
        this.countX = a.countX;
        this.countY = a.countY;
        this.fullW = this.countX * this.w;
        this.fullH = this.countY * this.h;
        this.cnv = g.document.createElement("canvas");
        this.cnv.width = this.w;
        this.cnv.height = this.h;
        this.ctx = this.cnv.getContext("2d");
        this.loaded = !1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        a = g.document.createElement("img");
        var b = this;
        a.onload = function () {
            b.ctx.drawImage(this, 0, 0, b.w, b.h);
            b.loaded = !0;
            z.load()
        };
        a.src = this.file;
        z.add()
    };
    pb.prototype.draw = function () {
        if (this.loaded) {
            var a = -f.x + this.x, b = -f.y + this.y, c, e;
            for (e = 0; e < this.countY; e++)if (!(this.y + e * this.h + this.h < f.y || this.y + e * this.h > f.y +
                q))for (c = 0; c < this.countX; c++)this.x + c * this.w + this.w < f.x || this.x + c * this.w > f.x + p || h.drawImage(this.cnv, a + c * this.w, b + e * this.h, this.w, this.h)
        }
    };
    pb.prototype.getSize = function () {
        return this.loaded ? y(this.fullW, this.fullH) : y()
    };
    this.game.newBackgroundObject = function (a) {
        return new pb(a)
    };
    var qb = function (a) {
        A.call(this, a);
        this.type = "EllipsObject"
    };
    ca(A, qb);
    qb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            K(this);
            sa(d(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            H()
        }
    };
    this.game.newEllipsObject = function (a) {
        return new qb(a)
    };
    var U = function (a) {
        A.call(this, a);
        this.type = "TextObject";
        this.text = a.text || "TextObject";
        this.color = a.color || "";
        this.size = a.size || 10;
        this.font = a.font || "sans-serif";
        this.style = a.style || "";
        this.align = "left";
        this.padding = a.padding || 2;
        this.w = rb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || !1;
        this.strokeWidthText = a.strokeWidthText || !1;
        this.textDY = -this.size / 7;
        a.positionC && this.setPositionC(a.positionC)
    };
    ca(A, U);
    U.prototype.reStyle = function (a) {
        this.text = a.text || this.text;
        this.color = a.color || this.color;
        this.size = a.size || this.size;
        this.font = a.font || this.font;
        this.style = a.style || this.style;
        this.padding = a.padding || this.padding;
        this.w = rb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || this.strokeColorText;
        this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
        this.strokeColor =
            a.strokeColor || this.strokeColor;
        this.strokeWidth = a.strokeWidth || this.strokeWidth;
        this.fillColor = a.fillColor || this.fillColor;
        this.textDY = -this.size / 7
    };
    U.prototype.setText = function (a) {
        this.text != a && this.reStyle({text: a})
    };
    U.prototype.getText = function () {
        return this.text
    };
    U.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) K(this), a = !0;
            (this.fillColor || this.strokeColor) && ra(d(this.x, this.y), y(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
            na(d(this.x + this.padding, this.textDY + this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    U.prototype.scale = function (a) {
        this.reStyle({size: this.size + a})
    };
    U.prototype.scaleC = function (a) {
        this.reStyle({size: this.size + a});
        this.move(d(-a / 2, -a / 2))
    };
    U.prototype.setSize = function (a) {
        this.size != a && this.reStyle({size: a})
    };
    U.prototype.setSizeC = function (a) {
        this.size != a && (this.reStyle({size: a}), this.move(d(-a /
            2, -a / 2)))
    };
    var rb = function (a, b, c, e) {
        var d = g.document.createElement("canvas").getContext("2d");
        d.font = b + c + "px " + e;
        return d.measureText(a).width
    };
    this.OOP.getTextWidth = function (a) {
        return rb(a.text, a.style || "", a.size || 10, a.font || "sans-serif")
    };
    this.game.newTextObject = function (a) {
        return new U(a)
    };
    var N = function (a) {
        A.call(this, a);
        this.type = "PolygonObject";
        this.points = [];
        this.dX = this.dY = 0;
        var b = this;
        a.points && x(a.points, function (a) {
            b.addPoint(a)
        });
        this.pointColor = a.pointColor || !1
    };
    ca(A, N);
    N.prototype.addPoint =
        function (a) {
            this.dY = this.dX = 0;
            var b = this;
            this.y + a.y < this.y && (this.dY = Math.abs(this.y + a.y - this.y), x(this.points, function (a) {
                a.y += b.dY
            }));
            this.x + a.x < this.x && (this.dX = Math.abs(this.x + a.x - this.x), b = this, x(this.points, function (a) {
                a.x += b.dX
            }));
            this.points.push(d(a.x + this.dX, a.y + this.dY));
            this.h = this.w = 0;
            b = this;
            x(this.points, function (a) {
                b.h += b.y + a.y > b.y + b.h ? a.y - b.h : 0;
                b.w += b.x + a.x > b.x + b.w ? a.x - b.w : 0
            })
        };
    N.prototype.delPoint = function (a) {
        var b, c, e = this.getPoints();
        this.clearPoints();
        b = 0;
        for (c = e.length; b < c; b++)b !=
        a && this.addPoint(e[b])
    };
    N.prototype.clearPoints = function () {
        this.points = [];
        this.count = 0
    };
    N.prototype.getPoints = function () {
        return this.points
    };
    N.prototype.getCount = function () {
        return this.points.length
    };
    N.prototype.getPoint = function (a) {
        return this.points[a]
    };
    N.prototype.scale = function (a) {
    };
    N.prototype.drawDynamicBox = function (a) {
        var b = !1;
        if (this.angle || 1 != this.alpha || this.shadowColor) K(this), b = !0;
        Tb(this.x, this.y, this.points, this.fillColor, a || "yellow", 2, "red");
        b && H()
    };
    N.prototype.getDynamicBox = function () {
        var a =
            [];
        if (this.angle) {
            var b = this.getPosition(1), c = this;
            x(this.points, function (e) {
                a.push(I(oa(e, d(c.x, c.y)), b, c.getAngle()))
            })
        } else {
            var c = this;
            x(this.points, function (b) {
                a.push(oa(b, d(c.x, c.y)))
            })
        }
        return a
    };
    N.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) K(this), a = !0;
            Tb(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    this.game.newPolygonObject = function (a) {
        return new N(a)
    };
    var ta = function (a) {
        A.call(this, a);
        this.type = "ImageObject";
        this.w = a.w || 0;
        this.h = a.h || 0;
        this.loaded = !1;
        this.file = "";
        this.forOnLoad = a.onload || !1;
        Ub(a.file, this, a.scale || 1)
    };
    ca(A, ta);
    ta.prototype.draw = function () {
        if (this.visible && this.alpha && this.loaded) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor || this.flip.x || this.flip.y) K(this), a = !0;
            Vb(d(this.x, this.y), y(this.w, this.h), this.file);
            if (this.ondraw) this.ondraw();
            a && H()
        }
    };
    ta.prototype.simpleDraw = function (a) {
        if (this.loaded) {
            var b = !1;
            if (this.angle ||
                1 != this.alpha || this.shadowColor) K(this), b = !0;
            Vb(d(a.x, a.y), y(this.w, this.h), this.file);
            b && H()
        }
    };
    ta.prototype.setImage = function (a, b) {
        this.file != a && (r(n[a]) ? this.file = a : (this.loaded = !1, this.origHeight = this.origWidth = 0, Ub(a, this)))
    };
    ta.prototype.getImage = function () {
        return this.file
    };
    this.game.newImageObject = function (a) {
        return new ta(a)
    };
    var S = function (a) {
        A.call(this, a);
        this.type = "AnimationObject";
        this.frame = 0;
        this.anim = a.animation;
        this.step = a.delay || 10;
        this.toFrameStep = this.difStep = 0;
        a.scale && (this.w *=
            a.scale, this.h *= a.scale)
    };
    ca(A, S);
    S.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) K(this), a = !0;
            sb(this.anim, d(this.x, this.y), y(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep++;
            a && H()
        }
    };
    S.prototype.drawFrames = function (a, b, c) {
        if (this.visible && this.alpha) {
            if (this.frame < a || this.frame > b) this.frame = a;
            c = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) K(this), c = !0;
            sb(this.anim, d(this.x, this.y), y(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep++;
            c && H()
        }
    };
    S.prototype.drawFrame = function (a) {
        if (this.visible && this.alpha) {
            var b = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) K(this), b = !0;
            sb(this.anim, d(this.x, this.y), y(this.w, this.h), a);
            if (this.ondraw) this.ondraw();
            b && H()
        }
    };
    S.prototype.drawToFrame = function (a) {
        if (this.visible && this.alpha) {
            if (this.frame < a) this.toFrameStep = 1; else if (this.frame > a) this.toFrameStep = -1; else {
                this.drawFrame(a);
                return
            }
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep++
        }
    };
    S.prototype.drawReverFrames = function (a, b) {
        if (this.visible && this.alpha) {
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ?
                (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame = this.frame <= this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep++
        }
    };
    S.prototype.setAnimation = function (a) {
        this.anim = a
    };
    S.prototype.getAnimation = function () {
        return this.anim
    };
    S.prototype.setDelay = function (a) {
        this.step = 0 < a ? a : this.step
    };
    S.prototype.getDelay = function () {
        return this.step
    };
    this.game.newAnimationObject = function (a) {
        return new S(a)
    };
    var ua = function (a) {
        this.file = a;
        this.loaded = !1;
        this.h = this.w =
            0;
        this.toLoad = [];
        var b = g.document.createElement("img"), c = this;
        b.onload = function () {
            c.loaded = !0;
            c.w = this.width;
            c.h = this.height;
            c.img = g.document.createElement("canvas");
            c.img.width = this.width;
            c.img.height = this.height;
            c.context = c.img.getContext("2d");
            c.context.drawImage(this, 0, 0);
            c.toLoad.length && x(c.toLoad, function (a) {
                a.func(c.context, a.w, a.h, a.r)
            });
            z.load()
        };
        b.src = a;
        z.add()
    };
    ua.prototype.onContext = function (a) {
        this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({w: this.w, h: this.h, r: 1, func: a})
    };
    ua.prototype.getAnimation = function (a, b, c, e, d) {
        var f = function (a, b, c, e, d, f) {
            this.image = a;
            this.x = b;
            this.y = c;
            this.w = e;
            this.h = d;
            this.r = f ? f - 1 : 0
        };
        f.prototype = {
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
        return new f(this, a, b, c, e, d)
    };
    var tb = function (a, b) {
        this.loaded = !0;
        this.w = a;
        this.h = b;
        this.img = g.document.createElement("canvas");
        this.img.width =
            a;
        this.img.height = b;
        this.context = this.img.getContext("2d")
    };
    tb.prototype.onContext = ua.prototype.onContext;
    tb.prototype.getAnimation = ua.prototype.getAnimation;
    this.tiles.newDrawImage = function (a, b) {
        return new tb(a, b)
    };
    this.tiles.newImage = function (a) {
        return new ua(a)
    };
    this.tiles.newAnimation = function (a, b, c, e) {
        return (new ua(a)).getAnimation(0, 0, b, c, e)
    };
    var sb = function (a, b, c, e) {
        a.image.loaded && h.drawImage(a.image.img, a.x + a.w * e, a.y, a.w, a.h, b.x + -f.x, b.y + -f.y, c.w, c.h)
    }, n = {}, Ub = function (a, b, c) {
        if (r(n[a])) {
            b.loaded = !0;
            b.file = a;
            var e, d;
            if (b.w && !b.h) {
                var f = b.w / n[a].w;
                e = b.w;
                d = n[a].h * f
            } else!b.w && b.h ? (f = b.h / n[a].h, d = b.h, e = n[a].w * f) : b.w && b.h ? (e = b.w, d = b.h) : (e = n[a].w, d = n[a].h);
            c && (e *= c, d *= c);
            b.w = e;
            b.h = d;
            b.forOnLoad && b.forOnLoad()
        } else e = g.document.createElement("img"), e.onload = function () {
            n[a] = {};
            n[a].img = this;
            n[a].w = this.width;
            n[a].h = this.height;
            if (r(b)) {
                b.loaded = !0;
                var e, d;
                if (b.w && !b.h) {
                    var f = b.w / n[a].w;
                    e = b.w;
                    d = n[a].h * f
                } else!b.w && b.h ? (f = b.h / n[a].h, d = b.h, e = n[a].w * f) : b.w && b.h ? (e = b.w, d = b.h) : (e = n[a].w, d = n[a].h);
                c && (e *=
                    c, d *= c);
                b.w = e;
                b.h = d;
                b.file = a;
                b.forOnLoad && b.forOnLoad()
            }
            z.load()
        }, e.src = a, z.add()
    }, Vb = function (a, b, c) {
        c && h.drawImage(n[c].img, 0, 0, n[c].w, n[c].h, a.x + -f.x, a.y + -f.y, b.w, b.h)
    }, Wb = function (a) {
        this.type = "Mesh";
        this.objs = [];
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.angle = a.angle || 0;
        this.count = 0;
        var b = this;
        a.add && x(a.add, function (a) {
            b.add(a)
        });
        this.angle && this.setAngle(this.angle)
    };
    Wb.prototype = {
        getCount: function () {
            return this.count
        }, getObjects: function () {
            return this.objs
        }, add: function (a) {
            this.count++;
            this.objs.push(a);
            a.offsetMesh = a.getPosition(1);
            a.turn(this.angle);
            a.setPositionC(d(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
        }, del: function (a) {
            var b = this;
            x(this.objs, function (c) {
                c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
            })
        }, draw: function (a) {
            x(this.objs, function (a) {
                a.draw()
            })
        }, move: function (a) {
            this.x += a.x || 0;
            this.y += a.y || 0;
            var b = this;
            x(this.objs, function (a) {
                a.setPositionC(d(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
            })
        }, turn: function (a) {
            if (0 != a) {
                this.angle %= 360;
                this.angle += a;
                var b = d(this.x, this.y), c = this;
                x(this.objs,
                    function (e) {
                        e.turn(a);
                        e.setPositionC(I(d(c.x + e.offsetMesh.x, c.y + e.offsetMesh.y), b, c.angle))
                    })
            }
        }, setAngle: function (a) {
            if (a != this.angle) {
                this.angle = a %= 360;
                var b = d(this.x, this.y), c = this;
                x(this.objs, function (e) {
                    e.setAngle(a);
                    e.setPositionC(I(d(c.x + e.offsetMesh.x, c.y + e.offsetMesh.y), b, c.angle))
                })
            }
        }, setPosition: function (a) {
            if (this.x != a.x || this.y != a.y) {
                this.x = a.x || this.x;
                this.y = a.y || this.y;
                var b = this;
                x(this.objs, function (a) {
                    b.angle ? a.setPositionC(I(d(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), d(b.x, b.y), b.angle)) :
                        a.setPositionC(d(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
                })
            }
        }, isDynamicIntersect: function (a) {
            if (3 > a.length)return !1;
            var b = !1;
            x(this.objs, function (c) {
                if (c.isDynamicIntersect(a))return b = c
            });
            return b
        }, isStaticIntersect: function (a) {
            var b = !1;
            x(this.objs, function (c) {
                if (c.isStaticIntersect(a))return b = c
            });
            return b
        }, isIntersect: function (a) {
            var b = !1;
            x(this.objs, function (c) {
                if (c.isIntersect(a))return b = c
            });
            return b
        }
    };
    this.game.newMesh = function (a) {
        return new Wb(a)
    };
    this.camera.circling = function (a, b, c) {
        r(this.circlingAnglePointJS) ||
        (this.circlingAnglePointJS = c);
        f.x = a.x + b * Math.cos(w(this.circlingAnglePointJS));
        f.y = a.y + b * Math.sin(w(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.circlingC = function (a, b, c) {
        r(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        f.x = -L + a.x + b * Math.cos(w(this.circlingAnglePointJS));
        f.y = -M + a.y + b * Math.sin(w(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS +
        c
    };
    this.camera.motion = function (a, b, c) {
        r(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        f.x = a.x + b.w * Math.cos(w(this.motionPercentPointJS));
        f.y = a.y + b.h * Math.sin(w(this.motionPercentPointJS));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.motionC = function (a, b, c) {
        r(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        this.setPositionC(d(a.x + b.w * Math.cos(w(this.motionPercentPointJS)), a.y + b.h * Math.sin(w(this.motionPercentPointJS))));
        this.motionPercentPointJS =
            360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.move = function (a) {
        f.x += a.x || 0;
        f.y += a.y || 0
    };
    this.camera.moveTime = function (a, b) {
        b = b || 1;
        var c = d(f.x, f.y);
        this.move(d((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.moveTimeC = function (a, b) {
        b = b || 1;
        var c = d(f.x + L, f.y + M);
        this.move(d((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.setPosition = function (a) {
        lb(d("none" != a.x ? a.x : f.x, "none" != a.y ? a.y : f.y))
    };
    this.camera.setPositionC = function (a) {
        lb(d("none" != a.x ? a.x - L : f.x, "none" != a.y ? a.y - M : f.y))
    };
    this.camera.getPosition =
        function (a) {
            return a ? d(f.x + L, f.y + M) : d(f.x, f.y)
        };
    this.camera.getPositionC = function () {
        return d(f.x + L, f.y + M)
    };
    this.camera.getStaticBox = function () {
        return {x: f.x, y: f.y, w: f.x + p, h: f.y + q}
    };
    this.camera.getDynamicBox = function () {
        return [d(f.x, f.y), d(f.x + p, f.y), d(f.x + p, f.y + q), d(f.x, f.y + q)]
    };
    var lb = function (a) {
        f = d(a.x, a.y)
    }, wb = function () {
        h.mozImageSmoothingEnabled = Fa;
        h.msImageSmoothingEnabled = Fa;
        h.imageSmoothingEnabled = Fa
    }, H = function (a) {
        h.restore();
        h.globalAlpha = t.globalAlpha;
        h.fillStyle = "black";
        h.strokeStyle = "black";
        wb()
    }, K = function (a, b) {
        h.save();
        var c = a.getPositionC();
        a.angle && (h.translate(-f.x + c.x, -f.y + c.y), h.rotate(w(a.angle)), h.translate(-c.x + f.x, -c.y + f.y));
        1 != a.alpha && (h.globalAlpha = a.alpha);
        if (a.flip.x || a.flip.y) h.translate(-f.x + c.x, -f.y + c.y), h.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), h.translate(-c.x + f.x, -c.y + f.y);
        a.shadowColor && (h.shadowBlur = a.shadowBlur, h.shadowColor = a.shadowColor, h.shadowOffsetX = a.shadowX, h.shadowOffsetY = a.shadowY);
        if ("EllipsObject" == a.type && !b) {
            var c = a.w / 2, e = a.h / 2, g = d(-f.x + a.x, -f.y + a.y);
            h.translate(g.x, g.y);
            h.scale(c / e, 1);
            h.translate(-g.x, -g.y)
        }
    };
    this.system.setContextSettings = function (a) {
        h.save();
        for (var b in a)h[b] = a[b]
    };
    this.system.defaultSettings = function () {
        H()
    };
    this.game.clear = function () {
        var a = d(0, 0), b = d(p, q);
        h.clearRect(a.x, a.y, b.x, b.y)
    };
    this.game.fill = function (a) {
        h.fillStyle = a;
        h.fillRect(0, 0, p, q)
    };
    var Tb = function (a, b, c, e, g, k, l) {
        if (!(3 > c.length)) {
            var aa;
            if (e && !(3 > c.length)) {
                h.fillStyle = e;
                e = -f.x + a;
                aa = -f.y + b;
                var m;
                h.beginPath();
                h.moveTo(e + c[0].x, aa + c[0].y);
                for (m = 1; m < c.length; m++)h.lineTo(e +
                    c[m].x, aa + c[m].y);
                h.closePath();
                h.fill()
            }
            for (e = 0; e < c.length; e++)aa = e + 1 < c.length ? e + 1 : 0, g && V(oa(c[e], d(a, b)), oa(c[aa], d(a, b)), g, k), l && Xa(oa(c[e], d(a, b)), l)
        }
    };
    this.brush.drawPolygon = function (a) {
        var b = a.points || [], c = a.fillColor || !1, e = a.strokeColor || !1, d = a.strokeWidth || 1;
        a = a.pointColor || !1;
        if (!(3 > b.length)) {
            var g;
            if (c && !(3 > b.length)) {
                h.fillStyle = c;
                c = -f.x;
                g = -f.y;
                var k;
                h.beginPath();
                h.moveTo(c + b[0].x, g + b[0].y);
                for (k = 1; k < b.length; k++)h.lineTo(c + b[k].x, g + b[k].y);
                h.closePath();
                h.fill()
            }
            for (c = 0; c < b.length; c++)g =
                c + 1 < b.length ? c + 1 : 0, e && V(b[c], b[g], e, d), a && Xa(b[c], a)
        }
    };
    var na = function (a, b, c, e, d, g, k, l, m) {
        h.textAlign = k;
        h.lineWidth = m;
        h.font = (g ? g + " " : "") + e + "px " + d;
        e = -f.x;
        d = -f.y;
        c && (h.fillStyle = c, h.fillText(b, e + a.x, d + a.y));
        l && (h.strokeStyle = l, h.strokeText(b, e + a.x, d + a.y))
    };
    this.brush.drawMultiText = function (a) {
        var b, c = a.text.split("\n");
        for (b = 0; b < c.length; b++)na(d(a.x, a.y + a.size * b), c[b], a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawMultiTextS =
        function (a) {
            var b, c = a.text.split("\n"), e = a.size || 10;
            for (b = 0; b < c.length; b++)na(d(a.x + f.x, a.y + f.y + e * b), c[b], a.color || t.fillStyle, e, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        };
    this.brush.drawText = function (a) {
        na(d(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextS = function (a) {
        na(d((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1,
            a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextLines = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b++)na(d(a.x, a.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    this.brush.drawTextLinesS = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b++)na(d(a.x + f.x, a.y + f.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1,
                a.strokeWidth || 2)
        }
    };
    var Sb = function (a, b, c) {
        V(d(a.x - b, a.y), d(a.x + b, a.y), c, 2);
        V(d(a.x, a.y - b), d(a.x, a.y + b), c, 2)
    }, ra = function (a, b, c, e, d) {
        h.fillStyle = c;
        h.strokeStyle = e;
        h.lineWidth = d;
        e = -f.x + (d ? d / 2 : 0);
        var g = -f.y + (d ? d / 2 : 0);
        c && h.fillRect(a.x + e, a.y + g, b.w, b.h);
        d && h.strokeRect(a.x + e, a.y + g, b.w, b.h)
    };
    this.brush.drawRect = function (a) {
        ra(d(a.x, a.y), y(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRectS = function (a) {
        ra(d(a.x + f.x, a.y + f.y), y(a.w, a.h), a.fillColor || !1, a.strokeColor ||
            t.strokeStyle, a.strokeWidth || !1)
    };
    var Xa = function (a, b) {
        (h.fillStyle = b) && h.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
    };
    this.brush.drawPoint = function (a) {
        Xa(d(a.x, a.y), a.fillColor || !1)
    };
    this.brush.drawPointS = function (a) {
        Xa(d(a.x + f.x, a.y + f.y), a.fillColor || !1)
    };
    var ob = function (a, b, c, e, d, g) {
        h.fillStyle = e;
        h.strokeStyle = d;
        h.lineWidth = g;
        d = -f.x + a.x + (g ? g / 2 : 0);
        a = -f.y + a.y + (g ? g / 2 : 0);
        h.beginPath();
        h.moveTo(d + c, a);
        h.lineTo(d + b.w - c, a);
        h.quadraticCurveTo(d + b.w, a, d + b.w, a + c);
        h.lineTo(d + b.w, a + b.h - c);
        h.quadraticCurveTo(d + b.w,
            a + b.h, d + b.w - c, a + b.h);
        h.lineTo(d + c, a + b.h);
        h.quadraticCurveTo(d, a + b.h, d, a + b.h - c);
        h.lineTo(d, a + c);
        h.quadraticCurveTo(d, a, d + c, a);
        h.closePath();
        e && h.fill();
        g && h.stroke()
    };
    this.brush.drawRoundRect = function (a) {
        ob(d(a.x, a.y), y(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRoundRectS = function (a) {
        ob(d(f.x + a.x, f.y + a.y), y(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var sa = function (a, b, c, e, d) {
        h.fillStyle = c;
        h.strokeStyle =
            e;
        h.lineWidth = d;
        e = -f.x + b + (d ? d / 2 : 0);
        var g = -f.y + b + (d ? d / 2 : 0);
        h.beginPath();
        h.arc(a.x + e, a.y + g, b, 0, 2 * Math.PI, !0);
        h.closePath();
        c && h.fill();
        d && h.stroke()
    };
    this.brush.drawCircle = function (a) {
        sa(d(a.x, a.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawCircleS = function (a) {
        sa(d(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var V = function (a, b, c, e) {
        h.strokeStyle = c;
        h.lineWidth = e;
        c = -f.x;
        e = -f.y;
        h.beginPath();
        h.moveTo(c + a.x, e +
            a.y);
        h.lineTo(c + b.x, e + b.y);
        h.closePath();
        h.stroke()
    };
    this.brush.drawLineAngle = function (a) {
        var b = I(d(a.x + a.length, a.y), d(a.x, a.y), a.angle);
        V(d(a.x, a.y), d(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAngleS = function (a) {
        var b = I(d(f.x + a.x + a.length, f.y + a.y), d(f.x + a.x, f.y + a.y), a.angle);
        V(d(f.x + a.x, f.y + a.y), d(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLine = function (a) {
        V(d(a.x1, a.y1), d(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth ||
            1)
    };
    this.brush.drawLineS = function (a) {
        V(d(f.x + a.x1, f.y + a.y1), d(f.x + a.x2, f.y + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineA = function (a) {
        V(d(a.x1, a.y1), d(a.x2, a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAS = function (a) {
        V(d(a.x1 + f.x, a.y1 + f.y), d(a.x2 + f.x, a.y2 + f.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawEllips = function (a) {
        var b = a.w / 2, c = a.h / 2, e = d(-f.x + a.x, -f.y + a.y);
        h.save();
        h.translate(e.x, e.y);
        h.scale(b / c, 1);
        h.translate(-e.x,
            -e.y);
        sa(d(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawEllipsS = function (a) {
        var b = a.w / 2, c = a.h / 2, e = d(a.x, a.y);
        h.save();
        h.translate(e.x, e.y);
        h.scale(b / c, 1);
        h.translate(-e.x, -e.y);
        sa(d(f.x + a.x, f.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawImageS = function (a) {
        if (a.file)if (r(n[a.file])) {
            if (n[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0, e, d;
                if (a.w && !a.h) {
                    var f = a.w / n[a.file].w;
                    e = a.w;
                    d = n[a.file].h * f
                } else!a.w && a.h ? (f = a.h / n[a.file].h, d = a.h, e = n[a.file].w *
                    f) : a.w && a.h ? (e = a.w, d = a.h) : (e = n[a.file].w, d = n[a.file].h);
                a.scale && (e *= a.scale, d *= a.scale);
                h.drawImage(n[a.file].img, 0, 0, n[a.file].w, n[a.file].h, b, c, e, d)
            }
        } else n[a.file] = {}, n[a.file].loaded = !1, b = g.document.createElement("img"), b.onload = function () {
            n[a.file].loaded = !0;
            n[a.file].img = this;
            n[a.file].w = this.width;
            n[a.file].h = this.height;
            z.load()
        }, b.src = a.file, z.add()
    };
    this.brush.drawImage = function (a) {
        if (a.file)if (r(n[a.file])) {
            if (n[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0, e, d;
                if (a.w && !a.h) {
                    var k = a.w / n[a.file].w;
                    e = a.w;
                    d = n[a.file].h * k
                } else!a.w && a.h ? (k = a.h / n[a.file].h, d = a.h, e = n[a.file].w * k) : a.w && a.h ? (e = a.w, d = a.h) : (e = n[a.file].w, d = n[a.file].h);
                a.scale && (e *= a.scale, d *= a.scale);
                h.drawImage(n[a.file].img, 0, 0, n[a.file].w, n[a.file].h, -f.x + b, -f.y + c, e, d)
            }
        } else n[a.file] = {}, n[a.file].loaded = !1, b = g.document.createElement("img"), b.onload = function () {
            n[a.file].loaded = !0;
            n[a.file].img = this;
            n[a.file].w = this.width;
            n[a.file].h = this.height;
            z.load()
        }, b.src = a.file, z.add()
    };
    this.brush.getPixelColor = function (a, b) {
        var c = h.getImageData(a,
            b, 1, 1).data;
        return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
    };
    this.brush.setPixelColor = function (a, b, c) {
        var e = h.createImageData(1, 1);
        e.data[0] = c.r || e.data[0];
        e.data[1] = c.g || e.data[1];
        e.data[2] = c.b || e.data[2];
        e.data[3] = c.a || 255;
        h.putImageData(e, a, b)
    };
    this.brush.onPixel = function (a, b, c) {
        var e = h.getImageData(a, b, 1, 1), d = {
            r: e.data[0],
            g: e.data[1],
            b: e.data[2],
            a: e.data[3] ? e.data[3] : 255
        };
        c(d);
        e.data[0] = d.r;
        e.data[1] = d.g;
        e.data[2] = d.b;
        e.data[3] = d.a;
        h.putImageData(e, a, b)
    };
    this.brush.onPixels = function (a, b, c, e, d) {
        c = h.getImageData(a,
            b, c, e);
        var f;
        e = 0;
        for (f = c.data.length; e < f; e += 4) {
            var g = {r: c.data[e], g: c.data[e + 1], b: c.data[e + 2], a: c.data[e + 3] ? c.data[e + 3] : 255};
            d(g);
            c.data[e] = g.r;
            c.data[e + 1] = g.g;
            c.data[e + 2] = g.b;
            c.data[e + 3] = g.a
        }
        h.putImageData(c, a, b)
    };
    this.brush.onRawPixels = function (a, b, c, e, d) {
        c = h.getImageData(a, b, c, e);
        d(c.data, c.data.length);
        h.putImageData(c, a, b)
    };
    var O = g.AudioContext || g.webkitAudioContext || !1;
    (O = O ? new O : !1) && O.listener.setPosition(0, 0, 0);
    var P = function (a, b) {
        O || C('module "wAudio" is not supported! use a "audio"');
        this.vol =
            b && 1 >= b && 0 < b ? b : 1;
        this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
        this.pausedTime = this.duration = this.startTime = 0;
        var c = this, e = new XMLHttpRequest;
        e.open("GET", a, !0);
        e.responseType = "arraybuffer";
        e.onload = function (a) {
            O.decodeAudioData(this.response, function (a) {
                c.wABuffer = a;
                c.duration = c.wABuffer.duration;
                c.wAGain = O.createGain();
                c.wAGain.gain.value = c.vol;
                c.wAPanner = O.createPanner();
                c.wAPanner.setPosition(0, 0, 1);
                c.wAPanner.panningModel = "equalpower";
                z.load();
                c.loaded = !0;
                c.loadPlay && c.replay()
            }, function (a) {
                C("error in wAudio.newAudio : error decoding file",
                    a)
            })
        };
        a ? e.send() : C("error in wAudio.newAudio : Where is file?");
        z.add()
    };
    P.prototype.play = function (a) {
        if (!this.loaded) this.loadPlay = !0; else if (!this.playing) {
            this.playing = !0;
            this.wASource = O.createBufferSource();
            this.wASource.buffer = this.wABuffer;
            this.wAListener = O.destination;
            this.wASource.connect(this.wAGain);
            this.wAGain.connect(this.wAPanner);
            this.wAPanner.connect(this.wAListener);
            this.wASource.start(0, this.pausedTime, this.duration);
            this.startTime = O.currentTime;
            var b = this;
            this.wASource.onended = function () {
                b.playing = !1;
                b.startTime = 0;
                b.pausedTime = 0;
                b.nextPlay && b.nextPlay.replay()
            }
        }
    };
    P.prototype.replay = function (a) {
        this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
    };
    P.prototype.stop = function () {
        this.pause();
        this.pausedTime = this.startTime = 0
    };
    P.prototype.pause = function () {
        if (this.playing) {
            this.pausedTime = this.getProgress();
            this.playing = !1;
            this.wASource.stop(0);
            var a = this;
            this.wASource.onended = function () {
                a.playing = !1
            }
        }
    };
    P.prototype.getProgress = function () {
        return this.playing ? O.currentTime - this.startTime + this.pausedTime :
            this.pausedTime
    };
    P.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    P.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    P.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.wAGain.gain.value = this.vol
    };
    P.prototype.getVolume = function () {
        return this.vol
    };
    P.prototype.setSide = function (a) {
        this.side = a;
        this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
    };
    P.prototype.getSide = function () {
        return this.side
    };
    this.wAudio.newAudio = function (a, b) {
        return new P(a,
            b)
    };
    var Z = function (a, b) {
        var c, e, d = g.document.createElement("audio");
        if ("string" == typeof a) {
            var f = g.document.createElement("source");
            f.src = a;
            d.appendChild(f)
        } else for (c = 0, e = a.length; c < e; c++)f = g.document.createElement("source"), f.src = a[c], d.appendChild(f);
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.playing = 0;
        this.audio = d;
        this.nextPlay = this.loaded = !1;
        this.audio.volume = this.vol;
        var h = this;
        this.audio.onloadeddata = function () {
            h.loaded = !0;
            z.load()
        };
        this.audio.onended = function () {
            h.playing = !1;
            h.nextPlay && h.nextPlay.play()
        };
        this.audio.load();
        z.add()
    };
    Z.prototype.play = function (a) {
        this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
    };
    Z.prototype.replay = function (a) {
        a && this.setVolume(a);
        this.playing = !0;
        this.audio.currentTime = 0;
        this.audio.play()
    };
    Z.prototype.stop = function () {
        this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
    };
    Z.prototype.pause = function () {
        this.playing && (this.playing = !1, this.audio.pause())
    };
    Z.prototype.playPause = function () {
        this.playing ?
            this.pause() : this.play()
    };
    Z.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    Z.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.audio.volume = this.vol
    };
    Z.prototype.getVolume = function () {
        return this.vol
    };
    this.audio.newAudio = function (a, b) {
        return new Z(a, b)
    };
    this.dialogs.openLine = function (a, b) {
        W.game.stop();
        var c = g.document.createElement("input");
        c.type = "text";
        c.style.position = "fixed";
        c.style.border = "none";
        c.style.zIndex = l.style.zIndex + 1;
        c.style.outline = "none";
        c.style.backgroundColor =
            a.fillColor || "white";
        c.style.color = a.color || "black";
        c.style.top = (a.y ? a.y >> 0 : 0) + "px";
        c.style.left = (a.x ? a.x >> 0 : 0) + "px";
        c.style.width = (a.w ? a.w >> 0 : 0) + "px";
        c.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
        c.onclick = function (a) {
            a.stopPropagation()
        };
        c.onkeydown = function (a) {
            a.stopPropagation();
            if (27 == a.keyCode || 13 == a.keyCode) a = c.value.trim(), "function" == typeof b && b("" != a ? a : !1), g.document.body.removeChild(c), W.game.resume()
        };
        m.attach(c);
        c.focus()
    };
    this.dialogs.openArea = function (a, b) {
        W.game.stop();
        var c = g.document.createElement("textarea");
        c.style.position = "fixed";
        c.style.border = "none";
        c.style.zIndex = l.style.zIndex + 1;
        c.style.overflowY = "scroll";
        c.style.outline = "none";
        c.style.backgroundColor = a.fillColor || "white";
        c.style.color = a.color || "black";
        c.style.top = (a.y ? a.y >> 0 : 0) + "px";
        c.style.left = (a.x ? a.x >> 0 : 0) + "px";
        c.style.width = (a.w ? a.w >> 0 : 0) + "px";
        c.style.height = (a.h ? a.h >> 0 : 0) + "px";
        c.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
        c.style.maxWidth = (a.w ? a.w >> 0 : 0) + "px";
        c.style.maxHeight = (a.h ? a.h >> 0 : 0) + "px";
        c.onclick = function (a) {
            a.stopPropagation()
        };
        c.onkeydown = function (a) {
            a.stopPropagation();
            27 == a.keyCode && (a = c.value.trim(), "function" == typeof b && b("" != a ? a : !1), g.document.body.removeChild(c), W.game.resume())
        };
        m.attach(c);
        c.focus()
    };
    this.dialogs.openTouchLine = function (a, b, c) {
        W.game.stop();
        W.touchControl.exitTouchControl();
        var e = g.document.createElement("input");
        e.type = "text";
        e.style.position = "fixed";
        e.style.border = "none";
        e.style.zIndex = l.style.zIndex + 1;
        e.style.outline = "none";
        e.style.backgroundColor = a.fillColor || "white";
        e.style.color = a.color || "black";
        e.style.top = (a.y ? a.y >> 0 : 0) + "px";
        e.style.left = (a.x ? a.x >> 0 : 0) + "px";
        e.style.width = (a.w ? a.w >> 0 : 0) + "px";
        e.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
        var d = g.document.createElement("div");
        d.style.padding = (b.padding || 10) + "px";
        d.align = "center";
        d.style.position = "fixed";
        d.style.border = "none";
        d.style.zIndex = l.style.zIndex + 1;
        d.style.backgroundColor = b.fillColor || "white";
        d.style.color = b.color || "black";
        d.innerHTML = b.text || "OK";
        d.style.top = (b.y ? b.y >> 0 : 0) + "px";
        d.style.left = (b.x ? b.x >> 0 : 0) + "px";
        b.w && (d.style.width = (b.w >>
            0) + "px");
        b.h && (d.style.height = (b.h >> 0) + "px");
        d.style.fontSize = (b.size ? b.size >> 0 : 10) + "px";
        d.addEventListener("touchstart", function (a) {
            a.preventDefault();
            a.stopPropagation();
            W.touchControl.initTouchControl();
            a = e.value.trim();
            "function" == typeof c && c("" != a ? a : !1);
            g.document.body.removeChild(e);
            g.document.body.removeChild(d);
            W.game.resume()
        }, !0);
        m.attach(e);
        m.attach(d);
        e.focus()
    };
    var z = {
        count: 0, loaded: 0, errored: 0, add: function () {
            this.count += 1
        }, load: function () {
            this.loaded += 1
        }, error: function () {
            this.errored +=
                1
        }
    };
    this.resources.isLoaded = function () {
        return z.count == z.loaded
    };
    this.resources.getProgress = function () {
        return Math.ceil(z.loaded / z.count * 100)
    };
    var Xb = 0, Yb = 0, ub = 0;
    this.system.initFPSCheck = function () {
        m.addEvent("postLoop", "fpsCheckUpdate", function () {
            ub += 1;
            1E3 <= G - Yb && (Xb = ub, ub = 0, Yb = G)
        })
    };
    this.system.getFPS = function () {
        return Xb
    };
    this.OOP.newRever = function (a, b, c) {
        var e = function (a, b, c) {
            this.min = a;
            this.max = b;
            this.step = c;
            this.value = a;
            this.to = c
        };
        e.prototype = {
            update: function () {
                var a = this.value;
                this.value <=
                this.min ? this.to = this.step : this.value >= this.max && (this.to = -this.step);
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
        return new e(a, b, c)
    };
    var Zb = {};
    this.OOP.once = function (a, b) {
        Zb[a] || (Zb[a] = !0, b())
    };
    this.OOP.newTimer = function (a, b) {
        if (0 >= a)return ba("error in system.newTimer : variable < 0, Timer is not created");
        var c = {
            time: 0 < a ? a : 1E3, func: b, startTime: !1, ending: !1,
            start: function () {
                this.ending || this.startTime || (this.startTime = G)
            }, run: function () {
                !this.ending && this.startTime && G - this.startTime >= this.time && (this.func(), this.ending = !0)
            }, end: function () {
                this.ending || (this.ending = !0, this.func())
            }, restart: function (a) {
                this.startTime || this.start();
                if (this.ending) {
                    if (a && 0 >= a)return ba("error in Timer.restart : variable < 0");
                    a && (this.time = a);
                    this.ending = !1;
                    this.startTime = G
                }
            }, stop: function () {
                this.ending || (this.ending = !0)
            }
        };
        m.addEvent("postLoop", "timer" + X(-100, 100) * X(-100,
                100) + G, function () {
            c.run()
        });
        return c
    };
    this.memory.local = {
        storage: g.localStorage, clear: function () {
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
        },
        loadAsNumber: function (a) {
            return parseFloat(this.values[a])
        }
    };
    g.onload = function () {
        for (var a in t)h[a] = t[a];
        h.save();
        m.runEvent("onload");
        m.loaded = !0;
        return !1
    };
    g.onblur = function () {
        if (fa)return m.runEvent("gameBlur"), !1
    };
    g.onfocus = function () {
        if (!fa)return g.document.activeElement.blur(), g.focus(), m.runEvent("gameFocus"), !1
    };
    g.onresize = function () {
        m.runEvent("gameResize");
        h.textBaseline = t.textBaseline;
        return !1
    };
    g.onclick = function () {
        g.document.activeElement.blur();
        g.focus()
    }
};