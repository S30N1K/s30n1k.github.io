var pointDebugger = function (t) {
    function e(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
}([function (t, e, n) {
    "use strict";
    var r = n(1);
    n(2), PointJS = function (t) {
        return function () {
            t.apply(this, arguments);
            var e = this;
            e.mouseControl.isObject = function (t) {
                var n = e.mouseControl.getPosition();
                return n.x > t.x && n.x < t.x + t.w && n.y > t.y && n.y < t.y + t.h
            };
            var o = n(7)(e), i = function (t) {
                    var e = document.createElement(t);
                    return e.onmousemove = e.onmousedown = e.onmouseup = e.onselectstart = e.ondragstart = e.onmousewheel = function (t) {
                        return t.stopPropagation()
                    }, e
                }, s = (0, r.$)(i("canvas")).addClass("pointDebugger"), a = s.selector[0].getContext("2d"),
                u = (0, r.$)(i("div")).addClass("pointDebugger"), c = (0, r.$)(i("div")).addClass("wrapper"),
                l = (0, r.$)(i("div")).addClass("title"), f = (0, r.$)(i("div")).addClass("items");
            l.html("Список обьектов"), c.appendChild(l), u.appendChild(c), u.appendChild(f);
            var d = function (t) {
                var e = (0, r.$)(i("div"));
                e.html(t.type + " #" + t.id).addClass("item").addClass(t.type).attr("item-id"), e.on("click", function () {
                    e.toggleClass("active"), e.issetClass("active") ? o.add(t, ["id", "type", "x", "y"]) : o.remove(t)
                }), f.appendChild(e)
            }, p = !1;
            s.on("mouseenter", function () {
                return s.css("opacity", 1)
            }), s.on("mouseleave", function () {
                return s.css("opacity", .9)
            }), s.on("mousedown", function (t) {
                switch (t.which) {
                    case 1:
                        g(2 === h ? 0 : h + 1), localStorage.setItem("point.debugger.type", h);
                        break;
                    case 3:
                        u.css({display: "block"}), f.css({maxHeight: e.game.getWH().h - 40 + "px"}), p = !0
                }
            }), s.on("contextmenu", function (t) {
                return t.preventDefault()
            }), u.on("contextmenu", function (t) {
                return t.preventDefault()
            }), u.on("mouseleave", function () {
            }), document.onmousemove = function (t) {
                p && e.game.getWH().w - 305 > t.pageX && (u.css("display", "none"), p = !1)
            }, document.onreadystatechange = function () {
                "interactive" === document.readyState && (0, r.$)("body").appendChild(s).appendChild(u)
            };
            var h = 1, m = [[300, 105], [150, 32], [80, 32]], v = m[0][0], g = function (t) {
                h = t, s.selector[0].width = m[h][0], s.selector[0].height = m[h][1], s.css({
                    width: m[h][0],
                    height: m[h][1]
                })
            }, b = localStorage.getItem("point.debugger.type");
            g(null !== b ? parseInt(b) : 0);
            for (var y = function (t) {
                a.strokeStyle = t.color, a.lineWidth = t.width, a.beginPath(), a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2), a.closePath(), a.stroke()
            }, A = function (t) {
                a.font = "bold " + t.size + "px Helvetica,Arial,sans-serif", a.fillStyle = t.color, a.fillText(t.text, t.x, t.y)
            }, x = {min: 0, max: 0, current: 0, list: [], color: "#0f0"}, w = {
                min: 0,
                max: 60,
                current: 0,
                list: [],
                color: "#00FFFF"
            }, C = 0; C < v; C++) x.list[C] = 0, w.list[C] = 0;
            !function t() {
                a.clearRect(0, 0, m[h][0], m[h][1]), x.list[v - 1] = x.current, w.list[v - 1] = w.current, x.min = Math.min.apply(null, x.list), x.max = Math.max.apply(null, x.list), w.min = Math.min.apply(null, w.list), w.current > w.max && (w.max = w.current);
                var e = Math.max.apply(null, w.list);
                if (0 === h || 1 === h) for (var n = 0; n < v; n++) v !== n + 1 && (0 === h && (y({
                    color: x.color,
                    width: .5,
                    x1: n,
                    y1: Math.round(60 * (1 - x.list[n] / x.max)),
                    x2: n + 1,
                    y2: Math.round(60 * (1 - x.list[n + 1] / x.max))
                }), y({
                    color: w.color,
                    width: .5,
                    x1: n,
                    y1: Math.round(60 * (1 - w.list[n] / w.max)),
                    x2: n + 1,
                    y2: Math.round(60 * (1 - w.list[n + 1] / w.max))
                })), x.list[n] = x.list[n + 1], w.list[n] = w.list[n + 1]);
                0 === h && y({color: "#000000", width: .5, x1: 0, y1: 63, x2: v, y2: 63}), A({
                    x: 2,
                    y: 0 === h ? 79 : 12,
                    size: 11,
                    text: "FPS: " + w.current + (h < 2 ? " (" + w.min + "-" + e + ")" : ""),
                    color: w.color
                }), A({
                    x: 2,
                    y: 0 === h ? 97 : 27,
                    size: 11,
                    text: "SPEED: " + x.current.toFixed(2) + (h < 2 ? " (" + x.min.toFixed(2) + "-" + x.max.toFixed(2) + ")" : ""),
                    color: x.color
                }), (requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame || function (t) {
                    setTimeout(t, 1e3 / 60)
                })(t)
            }();
            var O = 0, j = O, R = 0, S = function () {
                O = (performance || Date).now()
            }, U = function () {
                R++;
                var t = (performance || Date).now();
                x.current = t - O, t >= j + 1e3 && (w.current = parseInt(1e3 * R / (t - j)), j = t, R = 0), O = t
            }, k = !1;
            e.debug = function (t) {
                k = t, s.css("display", t ? "block" : "none")
            }, e.OOP.forArr(["newBaseObject", "newTriangleObject", "newRectObject", "newRoundRectObject", "newCircleObject", "newEllipsObject", "newTextObject", "newPolygonObject", "newImageObject", "newAnimationObject"], function (t) {
                e.game[t] = function (t) {
                    return function () {
                        var e = t.apply(this, arguments);
                        return d(e), e
                    }
                }(e.game[t])
            }), e.game.newLoopFromClassObject = function (t) {
                return function () {
                    return "function" == typeof arguments[1].update && (arguments[1].update = function (t) {
                        return function () {
                            k && S();
                            var e = t.apply(this, arguments);
                            return k && U(), k && o.draw(), e
                        }
                    }(arguments[1].update)), t.apply(this, arguments)
                }
            }(e.game.newLoopFromClassObject)
        }
    }(PointJS)
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o = function (t) {
        return this.version = .4, this.selector = "string" == typeof t ? document.querySelectorAll(t) : t, this.selector.length || (this.selector = [this.selector]), this.all = function (t) {
            for (var e = 0; e < this.selector.length; e++) "object" === r(this.selector[e]) && t(this.selector[e]);
            return this
        }, this.appendChild = function (t) {
            return this.all(function (e) {
                if ("object" === r(t.selector)) for (var n = 0; n < t.selector.length; n++) e.appendChild(t.selector[n]); else e.appendChild(t)
            })
        }, this.addClass = function (t) {
            return this.all(function (e) {
                return e.classList.add(t)
            })
        }, this.removeClass = function (t) {
            return this.all(function (e) {
                return e.classList.remove(t)
            })
        }, this.issetClass = function (t) {
            return this.selector[0].classList.contains(t)
        }, this.toggleClass = function (t) {
            return this.all(function (e) {
                e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
            })
        }, this.css = function (t, e) {
            if ("string" == typeof t) return "string" == typeof e || "number" == typeof e ? this.all(function (n) {
                return n.style[t] = e
            }) : window.getComputedStyle(this.selector[0], null)[t];
            for (var n in t) this.css(n, t[n]);
            return this
        }, this.html = function (e) {
            return void 0 === e ? t.innerHTML : this.all(function (t) {
                return t.innerHTML = e
            })
        }, this.attr = function (e, n) {
            if ("string" == typeof e) return void 0 !== n ? all(function (t) {
                return t.setAttribute(e, n)
            }) : t.getAttribute(e);
            for (var r in e) this.attr(r, e[r]);
            return this
        }, this.removeAttr = function (t) {
            return all(function (e) {
                return object.removeAttribute(t)
            })
        }, this.parent = function () {
        }, this.val = function (t) {
            return t ? this.all(function (e) {
                return e.value = t
            }) : this.selector[0].value
        }, this.on = function (t, e) {
            return this.all(function (n) {
                return n.addEventListener(t, e)
            })
        }, this
    }, i = function (t) {
        return new o(t)
    };
    e.$ = i
}, function (t, e, n) {
    var r = n(3);
    "string" == typeof r && (r = [[t.i, r, ""]]);
    var o = {hmr: !0};
    o.transform = void 0;
    n(5)(r, o);
    r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    e = t.exports = n(4)(void 0), e.push([t.i, ".pointDebugger {\n  display: none;\n  background: #3d3d3d;\n  z-index: 50000;\n  position: fixed;\n  top: 5px;\n  right: 5px;\n}\n\ncanvas.pointDebugger {\n  opacity: 0.9;\n}\n\ncanvas.pointDebugger:hover {\n  cursor: pointer;\n  opacity: 1;\n}\n\ndiv.pointDebugger {\n  width: 300px;\n}\n\ndiv.pointDebugger .wrapper {\n  color: #ffffff;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII=);\n}\n\ndiv.pointDebugger .wrapper .title {\n  padding: 5px;\n  color: #ffffff;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII=);\n}\n\ndiv.pointDebugger .items {\n  overflow-y: scroll;\n  height: auto;\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar {\n  width: 10px;\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar-thumb {\n  background-color: #181818;\n}\n\ndiv.pointDebugger .items .item {\n  padding: 5px;\n  border-bottom: 1px solid #000000;\n  color: #ffffff;\n  font-size: small;\n  font-weight: bold;\n}\n\ndiv.pointDebugger .items .item.CircleObject {\n  border-left: 3px solid #ffffff;\n}\n\ndiv.pointDebugger .items .item:hover {\n  background: #1d1d1d;\n  cursor: pointer;\n}\n\ndiv.pointDebugger .items .item.active {\n  background: #000000;\n}\n\n", ""])
}, function (t, e) {
    function n(t, e) {
        var n = t[1] || "", o = t[3];
        if (!o) return n;
        if (e && "function" == typeof btoa) {
            var i = r(o);
            return [n].concat(o.sources.map(function (t) {
                return "/*# sourceURL=" + o.sourceRoot + t + " */"
            })).concat([i]).join("\n")
        }
        return [n].join("\n")
    }

    function r(t) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }

    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var r = n(e, t);
                return e[2] ? "@media " + e[2] + "{" + r + "}" : r
            }).join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var s = t[o];
                "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
            }
        }, e
    }
}, function (t, e, n) {
    function r(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n], o = h[r.id];
            if (o) {
                o.refs++;
                for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
                for (; i < r.parts.length; i++) o.parts.push(l(r.parts[i], e))
            } else {
                for (var s = [], i = 0; i < r.parts.length; i++) s.push(l(r.parts[i], e));
                h[r.id] = {id: r.id, refs: 1, parts: s}
            }
        }
    }

    function o(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o], s = e.base ? i[0] + e.base : i[0], a = i[1], u = i[2], c = i[3],
                l = {css: a, media: u, sourceMap: c};
            r[s] ? r[s].parts.push(l) : n.push(r[s] = {id: s, parts: [l]})
        }
        return n
    }

    function i(t, e) {
        var n = v(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = y[y.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), y.push(e); else if ("bottom" === t.insertAt) n.appendChild(e); else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = v(t.insertInto + " " + t.insertAt.before);
            n.insertBefore(e, o)
        }
    }

    function s(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = y.indexOf(t);
        e >= 0 && y.splice(e, 1)
    }

    function a(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", c(e, t.attrs), i(t, e), e
    }

    function u(t) {
        var e = document.createElement("link");
        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", c(e, t.attrs), i(t, e), e
    }

    function c(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n])
        })
    }

    function l(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function () {
            };
            t.css = i
        }
        if (e.singleton) {
            var c = b++;
            n = g || (g = a(e)), r = f.bind(null, n, c, !1), o = f.bind(null, n, c, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), r = p.bind(null, n, e), o = function () {
            s(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = a(e), r = d.bind(null, n), o = function () {
            s(n)
        });
        return r(t), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                r(t = e)
            } else o()
        }
    }

    function f(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = x(e, o); else {
            var i = document.createTextNode(o), s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i)
        }
    }

    function d(t, e) {
        var n = e.css, r = e.media;
        if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n; else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
        }
    }

    function p(t, e, n) {
        var r = n.css, o = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || i) && (r = A(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var s = new Blob([r], {type: "text/css"}), a = t.href;
        t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
    }

    var h = {}, m = function (t) {
        var e;
        return function () {
            return void 0 === e && (e = t.apply(this, arguments)), e
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), v = function (t) {
        var e = {};
        return function (n) {
            if (void 0 === e[n]) {
                var r = t.call(this, n);
                if (r instanceof window.HTMLIFrameElement) try {
                    r = r.contentDocument.head
                } catch (t) {
                    r = null
                }
                e[n] = r
            }
            return e[n]
        }
    }(function (t) {
        return document.querySelector(t)
    }), g = null, b = 0, y = [], A = n(6);
    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = m()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = o(t, e);
        return r(n, e), function (t) {
            for (var i = [], s = 0; s < n.length; s++) {
                var a = n[s], u = h[a.id];
                u.refs--, i.push(u)
            }
            if (t) {
                r(o(t, e), e)
            }
            for (var s = 0; s < i.length; s++) {
                var u = i[s];
                if (0 === u.refs) {
                    for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                    delete h[u.id]
                }
            }
        }
    };
    var x = function () {
        var t = [];
        return function (e, n) {
            return t[e] = n, t.filter(Boolean).join("\n")
        }
    }()
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host, r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var o = e.trim().replace(/^"(.*)"$/, function (t, e) {
                return e
            }).replace(/^'(.*)'$/, function (t, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t;
            var i;
            return i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
        })
    }
}, function (t, e, n) {
    "use strict";
    var r = function (t) {
        var e = t.mouseControl.initMouseControl(), n = t.game, r = t.math.random, o = [];
        return {
            remove: function (t) {
                var e = o.findIndex(function (e) {
                    return e.element === t
                });
                e > -1 && o.splice(e, 1)
            }, add: function (t, e) {
                var i = n.getWH(), s = null;
                OOP.forArr(e, function (e) {
                    var n = t[e], r = OOP.getTextWidth({size: 15, text: e + ": " + n});
                    (null === s || s < r) && (s = r)
                });
                var a = 10 + 15 * e.length;
                o.push({x: r(0, i.w - 300 - s + 10), y: r(0, i.h - a), w: s, h: a, isMove: !1, element: t, options: e})
            }, draw: function () {
                OOP.forArr(o, function (t) {
                    var n = t.element, r = e.getPosition();
                    e.isObject(t) && e.isPress("LEFT") && (t.isMove = point(r.x - t.x, r.y - t.y)), t.isMove && (t.x = r.x - t.isMove.x, t.y = r.y - t.isMove.y, e.isUp("LEFT") && (t.isMove = !1));
                    var o = [];
                    t.w = null, OOP.forArr(t.options, function (e, r) {
                        var i = n[e];
                        "number" == typeof i && (i = parseInt(i));
                        var s = {x: t.x + 5, y: t.y + 5 + 15 * r, color: "#ffffff", size: 15, text: e + ": " + i},
                            a = OOP.getTextWidth(s);
                        (null === t.w || t.w < a) && (t.w = a), o.push(s)
                    }), t.w += 10;
                    var i = point(t.x + t.w / 2, t.y + t.h / 2), s = n.getPositionC();
                    brush.drawLineAS({
                        x1: i.x,
                        y1: i.y,
                        x2: s.x,
                        y2: s.y,
                        strokeWidth: 1,
                        strokeColor: "#cc88bd"
                    }), brush.drawRoundRect({
                        x: t.x,
                        y: t.y,
                        w: t.w,
                        h: t.h,
                        fillColor: "#373737",
                        strokeColor: "#3f3f3f",
                        strokeWidth: 1,
                        radius: 5
                    }), OOP.forArr(o, function (t) {
                        return brush.drawText(t)
                    })
                })
            }
        }
    };
    t.exports = r
}]);