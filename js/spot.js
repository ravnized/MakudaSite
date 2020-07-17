!function(e) {
    function t(t) {
        for (var a, l, i = t[0], c = t[1], s = t[2], d = 0, f = []; d < i.length; d++)
            l = i[d],
            o[l] && f.push(o[l][0]),
                o[l] = 0;
        for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (u && u(t); f.length; )
            f.shift()();
        return r.push.apply(r, s || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], a = !0, i = 1; i < n.length; i++) {
                var c = n[i];
                0 !== o[c] && (a = !1)
            }
            a && (r.splice(t--, 1),
                e = l(l.s = n[0]))
        }
        return e
    }
    var a = {}
        , o = {
        1: 0
    }
        , r = [];
    function l(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, l),
            n.l = !0,
            n.exports
    }
    l.m = e,
        l.c = a,
        l.d = function(e, t, n) {
            l.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        l.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        l.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return l.d(t, "a", t),
                t
        }
        ,
        l.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        l.p = "";
    var i = window.webpackJsonp = window.webpackJsonp || []
        , c = i.push.bind(i);
    i.push = t,
        i = i.slice();
    for (var s = 0; s < i.length; s++)
        t(i[s]);
    var u = c;
    r.push([234, 0]),
        n()
}({
    11: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(9);
        t.default = (0,
            a.createBrowserHistory)()
    },
    143: function(e, t, n) {
        e.exports = n.p + "i/selected_project_img.jpg"
    },
    144: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = i(n(1))
            , r = n(4)
            , l = i(n(6));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    blockClass: n.props.blockClass
                },
                    n.progress_in_selected = o.default.createRef(),
                    n.progress_in = o.default.createRef(),
                    n.progress_w_count = o.default.createRef(),
                    n.progress_subtitle = o.default.createRef(),
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.default.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = void 0;
                        e = this.context.second_loader_play ? 0 : 1;
                        this.context.animation_on && (r.TweenMax.fromTo(this.progress_in.current, 1, {
                            scaleY: 0
                        }, {
                            scaleY: 1,
                            delay: e,
                            transformOrigin: "50% 0",
                            ease: Power2.easeInOut
                        }),
                            r.TweenMax.set(this.progress_in_selected.current, {
                                yPercent: 100 * (this.props.activeIndex - 1),
                                height: 100 / this.props.dataInner + "%"
                            }),
                            r.TweenMax.fromTo(this.progress_in_selected.current, .7, {
                                scaleY: 0
                            }, {
                                scaleY: 1,
                                delay: e + .3,
                                transformOrigin: "50% 0",
                                ease: Power2.easeInOut
                            }),
                            r.TweenMax.staggerFromTo([this.progress_w_count.current, this.progress_subtitle.current], .7, {
                                cycle: {
                                    yPercent: [-100, 100]
                                },
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                delay: e,
                                ease: Power2.easeInOut
                            }, 0))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        r.TweenMax.to(this.progress_in_selected.current, .7, {
                            yPercent: 100 * (this.props.activeIndex - 1),
                            ease: Power2.easeInOut
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = "progress_wrap " + this.state.blockClass;
                        return o.default.createElement("div", {
                            className: e
                        }, o.default.createElement("div", {
                            className: "progress"
                        }, o.default.createElement("div", {
                            className: "progress_w_count",
                            ref: this.progress_w_count
                        }, o.default.createElement("span", {
                            className: "progress_count"
                        }, o.default.createElement("span", {
                            className: "progress_count_current"
                        }, this.props.activeIndex), o.default.createElement("span", {
                            className: "progress_count_all"
                        }, " / ", this.props.dataInner))), o.default.createElement("div", {
                            className: "progress_w_in"
                        }, o.default.createElement("div", {
                            className: "progress_in_selected",
                            ref: this.progress_in_selected
                        }), o.default.createElement("div", {
                            className: "progress_in",
                            ref: this.progress_in
                        })), o.default.createElement("span", {
                            className: "progress_subtitle",
                            ref: this.progress_subtitle
                        }, "Scroll down")))
                    }
                }]),
                t
        }();
        c.contextType = l.default,
            t.default = c
    },
    145: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = s(o)
            , l = (n(7),
            n(4))
            , i = s(n(6))
            , c = s(n(11));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.mouseEnter = function(e) {
                    n.context.work_list_loaded && (n.setState({
                        hover: !0
                    }),
                        console.log("test_2"),
                        n.glitch(0))
                }
                    ,
                    n.mouseLeave = function(e) {
                        n.state.click || (n.setState({
                            hover: !1,
                            x: 0,
                            y: 0
                        }),
                            l.TweenMax.to(n.works_block_w_img.current, .5, {
                                rotationX: 0,
                                rotationY: 0,
                                ease: Power2.easeOut
                            }))
                    }
                    ,
                    n.mouseMove = function(e) {
                        if (n.state.hover) {
                            var t = e.pageX
                                , a = e.pageY
                                , o = (n.state.el.height + 3.4 * n.context.rem) * n.context.work_active
                                , r = (n.state.el.width / 2 + n.state.el.left - t) / n.state.el.width / 2 * -60
                                , i = (n.state.el.height / 2 + n.state.el.top - (a - o)) / n.state.el.height / 2 * 40;
                            n.state.el.left,
                                n.state.el.width,
                                n.state.el.top,
                                n.state.el.height;
                            l.TweenMax.to(n.works_block_w_img.current, .5, {
                                rotationX: i,
                                rotationY: r,
                                ease: Power2.easeOut
                            }),
                                n.setState({
                                    x: i,
                                    y: r,
                                    shift: o
                                })
                        }
                    }
                    ,
                    n.mouseClick = function(e) {
                        var t = n
                            , a = n.props.selected ? "selected/" + n.context.selected_slug + "-project" : "project";
                        n.setState({
                            click: !0
                        }),
                            n.context.ActiveWorkTransform({
                                x: 0,
                                y: 0,
                                el: n.state.el,
                                shift: n.state.shift,
                                active: n.context.work_active,
                                index: n.state.index
                            }),
                            l.TweenMax.to(n.works_block_w_img.current, .3, {
                                rotationX: 0,
                                rotationY: 0,
                                ease: Power2.easeOut,
                                onComplete: function() {
                                    c.default.push("/" + a + "/id-" + t.props.index)
                                }
                            }),
                            l.TweenMax.to(n.works_block_w_title.current, .3, {
                                opacity: 0,
                                ease: Power2.easeOut
                            })
                    }
                    ,
                    n.glitch = function(e) {
                        if (!n.unmonted) {
                            var t = n
                                , a = [Power3.easeOut, Power3.easeIn, Power3.easeInOut]
                                , o = t.getRandomInt(-2, 2)
                                , r = t.getRandomInt(-2, 2);
                            l.TweenMax.to(n.works_block_w_title.current, t.getRandomInt(.2, .5), {
                                x: o,
                                y: r,
                                "-webkit-filter": "blur(.05em)",
                                filter: "blur(.05em)",
                                ease: a[t.getRandomInt(0, 2)],
                                delay: e,
                                onComplete: function() {
                                    t.unmonted || (t.state.hover ? t.glitch(0) : (l.TweenMax.to(t.works_block_w_title.current, .3, {
                                        x: 0,
                                        y: 0,
                                        "-webkit-filter": "blur(0)",
                                        filter: "blur(0)"
                                    }),
                                        l.TweenMax.to(t.works_block_w_title_sub, .3, {
                                            x: 0,
                                            y: 0
                                        })))
                                }
                            }),
                                l.TweenMax.to(n.works_block_w_title_sub[0], .2, {
                                    x: t.getRandomInt(-2, 2),
                                    y: t.getRandomInt(-2, 2),
                                    delay: e,
                                    ease: a[t.getRandomInt(0, 2)]
                                }),
                                l.TweenMax.to(n.works_block_w_title_sub[1], .2, {
                                    x: t.getRandomInt(-2, 2),
                                    y: t.getRandomInt(-2, 2),
                                    delay: e,
                                    ease: a[t.getRandomInt(0, 2)]
                                }),
                                l.TweenMax.to(n.works_block_w_title_sub[2], .2, {
                                    x: t.getRandomInt(-2, 2),
                                    y: t.getRandomInt(-2, 2),
                                    delay: e,
                                    ease: a[t.getRandomInt(0, 2)]
                                })
                        }
                    }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.works_block = r.default.createRef(),
                    n.works_block_w = r.default.createRef(),
                    n.works_block_w_img = r.default.createRef(),
                    n.works_block_w_title = r.default.createRef(),
                    n.works_block_w_title_sub = [],
                    n.state = {
                        click: !1,
                        hover: !1,
                        x: 0,
                        y: 0,
                        index: n.props.index,
                        el: null,
                        shift: null,
                        el_x: 0,
                        el_y: 0,
                        el_w: null,
                        el_h: null
                    },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.unmonted = !1;
                        var e = this.works_block_w.current.getBoundingClientRect();
                        this.setState({
                            el: e
                        }),
                        this.context.back_work && 0 === this.props.index && this.context.ActiveWorkTransform({
                            el: e
                        }),
                            console.log("work active", this.props.active);
                        this.props.selected
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.unmonted = !0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props.dataInner;
                        this.props.selected;
                        return r.default.createElement("div", {
                            className: "works_block_w",
                            ref: this.works_block_w,
                            key: "block_" + this.props.index,
                            onMouseEnter: this.mouseEnter,
                            onMouseLeave: this.mouseLeave,
                            onMouseMove: this.mouseMove,
                            onClick: this.mouseClick
                        }, r.default.createElement("div", {
                            className: "works_block",
                            key: "link_" + this.props.index,
                            ref: this.works_block
                        }, r.default.createElement("div", {
                            className: "works_block_w_img",
                            ref: this.works_block_w_img,
                            key: "wbwi_" + this.props.index
                        }, r.default.createElement("div", {
                            className: "works_block_img_sub_w"
                        }, t.images.length ? r.default.createElement("img", {
                            className: "works_block_img",
                            src: t.images[0].image,
                            alt: t.title,
                            key: "wbi_" + this.props.index
                        }) : null), r.default.createElement("div", {
                            className: "works_block_w_title " + (t.prizes.length ? "prize_mod" : ""),
                            key: "wbwt_" + this.props.index,
                            ref: this.works_block_w_title
                        }, r.default.createElement("h2", {
                            className: "works_block_title accent_mod",
                            key: "wbt_" + this.props.index
                        }, t.title), r.default.createElement("h3", {
                            className: "works_block_title",
                            key: "wbtt_" + this.props.index
                        }, t.subtitle), r.default.createElement("span", {
                            className: "works_block_w_title_sub white_mod"
                        }, r.default.createElement("span", {
                            className: "works_block_title_sub accent_mod",
                            key: "wbtt_t_111111",
                            "data-text": t.title
                        }), r.default.createElement("span", {
                            className: "works_block_title_sub",
                            key: "wbtt_st_222222",
                            "data-text": t.subtitle
                        })), ["red_mod", "green_mod", "blue_mod"].map(function(n, a) {
                            return r.default.createElement("span", {
                                className: "works_block_w_title_sub " + n,
                                key: "wbtt_" + e.props.index + "_" + a,
                                ref: function(t) {
                                    return e.works_block_w_title_sub[a] = t
                                }
                            }, r.default.createElement("span", {
                                className: "works_block_title_sub accent_mod",
                                key: "wbtt_t_" + e.props.index + "_" + a,
                                "data-text": t.title
                            }), r.default.createElement("span", {
                                className: "works_block_title_sub",
                                key: "wbtt_st_" + e.props.index + "_" + a,
                                "data-text": t.subtitle
                            }))
                        })))))
                    }
                }]),
                t
        }();
        u.contextType = i.default,
            t.default = u
    },
    188: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = i(o)
            , l = i(n(187));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "map_Logo"), r.default.createElement("path", {
                d: "M24.5 51c6.351 0 11.5 1.343 11.5 3s-5.149 3-11.5 3S13 55.657 13 54s5.149-3 11.5-3zM47.927 22.965V3.917A3.9 3.9 0 0 0 44.054 0H4.934a3.9 3.9 0 0 0-3.873 3.917v19.092c0 1.4-.5 5.788 1.5 7.066C7.693 33.364 25 49 25 49s15.509-15.21 21.076-18.717c2.468-1.555 1.851-5.966 1.851-7.318z"
            }), r.default.createElement("path", {
                d: "M41.008 16.485c0 .163-.049.2-.2.2-.43-.009-.861.007-1.291-.007-.191-.007-.244.051-.243.246.007 1.573 0 3.147 0 4.721 0 .342 0 .342-.326.342H37.19c-.293 0-.266.047-.266-.262v-4.693a1.328 1.328 0 0 1 0-.167c.019-.153-.051-.187-.19-.185-.449.008-.9 0-1.346.006-.158 0-.2-.048-.2-.2.008-.6.009-1.192 0-1.788 0-.165.054-.2.2-.2.906.006 1.813 0 2.719 0 .889 0 1.777.005 2.665 0 .18 0 .231.047.228.23 0 .584 0 1.172.008 1.757zm-9.3 5.457a4.319 4.319 0 0 1-2.237-.249 3.683 3.683 0 0 1-2.229-3.972 3.559 3.559 0 0 1 3.524-3.216 4.331 4.331 0 0 1 2.037.338 3.5 3.5 0 0 1 2.113 3.381 3.615 3.615 0 0 1-3.205 3.718zm.594-4.419a1.313 1.313 0 0 0-1.543-.805 1.434 1.434 0 0 0-1.065 1.54 1.457 1.457 0 0 0 .061.451 1.363 1.363 0 0 0 1.177 1.091 1.313 1.313 0 0 0 1.343-.814 1.864 1.864 0 0 0 .03-1.463zm-7.673 1.985a5.8 5.8 0 0 1-1.177.062c-.167-.006-.221.039-.218.215.01.662 0 1.323.009 1.984 0 .2-.073.223-.237.221a63.337 63.337 0 0 0-1.9 0c-.182 0-.225-.049-.224-.23.008-1.173 0-2.346 0-3.52v-3.491c0-.285-.028-.249.251-.249h2.83a3.593 3.593 0 0 1 1.395.256 2.191 2.191 0 0 1 1.4 2.079 2.4 2.4 0 0 1-2.126 2.673zm-.58-3.014a2.672 2.672 0 0 0-.708-.045c-.088 0-.1.049-.1.124V17.493c0 .073.015.13.1.129a1.731 1.731 0 0 0 .781-.089.526.526 0 0 0 .31-.592.468.468 0 0 0-.38-.447zm-5.04.368c-.125.134-.2.185-.358.02a1.453 1.453 0 0 0-1.094-.434.986.986 0 0 0-.217.029c-.137.036-.267.091-.278.263s.108.249.241.3c.369.138.74.27 1.111.4a4.255 4.255 0 0 1 .575.263 2.119 2.119 0 0 1 .573 3.282 2.921 2.921 0 0 1-2.131 1c-.082.006-.165 0-.247 0a4.513 4.513 0 0 1-2.684-.895c-.206-.152-.2-.156-.033-.344.378-.418.759-.833 1.132-1.256.093-.1.144-.115.258-.015a2 2 0 0 0 1.393.564c.279-.007.438-.092.474-.25.042-.182-.049-.3-.338-.44a7.756 7.756 0 0 0-.823-.309 4.759 4.759 0 0 1-.879-.389 1.9 1.9 0 0 1-.967-1.809 2.275 2.275 0 0 1 1.664-2.147 3.892 3.892 0 0 1 3.682.663c.228.172.224.178.025.384-.361.373-.724.741-1.076 1.12zm-8.36-2.362a3.744 3.744 0 1 1 3.651-3.744 3.7 3.7 0 0 1-3.651 3.744z",
                fill: "#fff"
            }))
        };
        c.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 49 57"
        };
        var s = {
            width: "0",
            height: "0"
        }
            , u = {
            transform: "translate(-50%,-100%)",
            width: "10em",
            height: "10em",
            fontSize: ".5em"
        }
            , d = function(e) {
            e.text;
            return r.default.createElement("div", {
                className: "map_logo",
                style: s
            }, r.default.createElement(c, {
                style: u
            }))
        }
            , f = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "map"
                        }, r.default.createElement(l.default, {
                            bootstrapURLKeys: {
                                key: "AIzaSyBUjc_sf45hvc1vAGoMFlACK_Mw-MBcRq4"
                            },
                            defaultCenter: this.props.center,
                            defaultZoom: this.props.zoom,
                            options: this.props.options
                        }, r.default.createElement(d, {
                            lat: 55.780545,
                            lng: 37.631757,
                            text: "Spot.film"
                        })))
                    }
                }]),
                t
        }();
        f.defaultProps = {
            center: {
                lat: 55.780545,
                lng: 37.631757
            },
            zoom: 18,
            options: {
                disableDefaultUI: !0,
                styles: [{
                    elementType: "geometry",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#616161"
                    }]
                }, {
                    elementType: "labels.text.stroke",
                    stylers: [{
                        color: "#f5f5f5"
                    }]
                }, {
                    featureType: "administrative.land_parcel",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#bdbdbd"
                    }]
                }, {
                    featureType: "landscape.man_made",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }, {
                        visibility: "on"
                    }, {
                        weight: 8
                    }]
                }, {
                    featureType: "poi",
                    elementType: "geometry",
                    stylers: [{
                        color: "#eeeeee"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#757575"
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e5e5e5"
                    }]
                }, {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ffffff"
                    }]
                }, {
                    featureType: "road",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#dadbe3"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#757575"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        color: "#dadada"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{
                        color: "#000000"
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#616161"
                    }]
                }, {
                    featureType: "road.local",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e"
                    }]
                }, {
                    featureType: "transit.line",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e5e5e5"
                    }]
                }, {
                    featureType: "transit.station",
                    elementType: "geometry",
                    stylers: [{
                        color: "#eeeeee"
                    }]
                }, {
                    featureType: "water",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c9c9c9"
                    }]
                }, {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#9e9e9e"
                    }]
                }]
            }
        },
            t.default = f
    },
    195: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = c(o)
            , l = n(7)
            , i = (c(n(11)),
            n(4));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    blockClass: ""
                },
                    e.project_preview_w = r.default.createRef(),
                    e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.dataClass && this.setState({
                            blockClass: this.props.dataClass.blockClass || ""
                        }),
                            i.TweenMax.fromTo(this.project_preview_w.current, .7, {
                                xPercent: this.props.dataInner.side_mod ? 100 : -100,
                                opacity: 0
                            }, {
                                xPercent: 0,
                                opacity: 1,
                                delay: 1.3,
                                ease: Power2.easeInOut
                            })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.dataInner;
                        return r.default.createElement("div", {
                            className: "project_preview_w " + this.state.blockClass,
                            ref: this.project_preview_w
                        }, r.default.createElement(l.Link, {
                            className: "project_preview",
                            to: ""
                        }, r.default.createElement("div", {
                            className: "project_preview_w_img"
                        }, r.default.createElement("img", {
                            className: "project_preview_img",
                            src: e.srcImg,
                            alt: "FIFA 2018"
                        })), r.default.createElement("div", {
                            className: "project_preview_w_descr"
                        }, r.default.createElement("span", {
                            className: "project_preview_title accent_mod"
                        }, e.name), r.default.createElement("span", {
                            className: "project_preview_title"
                        }, e.place))))
                    }
                }]),
                t
        }();
        t.default = s
    },
    196: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = i(o)
            , l = (n(7),
            i(n(11)),
            n(4));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "play"), r.default.createElement("path", {
                d: "M44.24 55A29.48 29.48 0 1 1 55 14.75 29.47 29.47 0 0 1 44.24 55zm5.69-37.3a23.58 23.58 0 1 0-8.63 32.22 23.57 23.57 0 0 0 8.63-32.22zm-9.82 13.55L24.79 40.1c-1.41.82-2.56.15-2.57-1.48l-.08-17.87c0-1.63 1.13-2.28 2.53-1.46l15.44 9c1.4.82 1.4 2.15 0 3z",
                fill: "#fff"
            }))
        };
        c.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 59 59"
        };
        var s = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.project_video = r.default.createRef(),
                    n.project_w_title = r.default.createRef(),
                    n.project_descr_line = r.default.createRef(),
                    n.project_descr = r.default.createRef(),
                    n.project_w_team = r.default.createRef(),
                    n.project_awards = r.default.createRef(),
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        l.TweenMax.fromTo(this.project_video.current, .7, {
                            xPercent: 20,
                            opacity: 0
                        }, {
                            xPercent: 0,
                            opacity: 1,
                            delay: .2,
                            ease: Power2.easeOut
                        }),
                            l.TweenMax.fromTo(this.project_w_title.current, .7, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                delay: .4,
                                ease: Power2.easeOut
                            }),
                            l.TweenMax.fromTo(this.project_descr_line.current, .7, {
                                scaleY: 0
                            }, {
                                scaleY: 1,
                                delay: .6,
                                transformOrigin: "0% 0%",
                                ease: Power2.easeOut
                            }),
                            l.TweenMax.fromTo(this.project_descr.current, .7, {
                                xPercent: 20,
                                opacity: 0
                            }, {
                                xPercent: 0,
                                opacity: 1,
                                delay: .8,
                                ease: Power2.easeOut
                            }),
                            l.TweenMax.fromTo(this.project_w_team.current, .7, {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                delay: 1,
                                ease: Power2.easeOut
                            }),
                            l.TweenMax.fromTo(this.project_awards.current, .7, {
                                yPercent: 100,
                                opacity: 0
                            }, {
                                yPercent: 0,
                                opacity: 1,
                                delay: 1.2,
                                ease: Power2.easeOut
                            })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.dataInner;
                        return r.default.createElement("div", {
                            className: "project"
                        }, r.default.createElement("div", {
                            className: "project_w_video"
                        }, r.default.createElement("div", {
                            className: "project_video",
                            ref: this.project_video
                        }, r.default.createElement("img", {
                            className: "project_video_preview",
                            src: e.srcImg,
                            alt: e.title
                        }), r.default.createElement("div", {
                            className: "project_video_btn"
                        }, r.default.createElement(c, {
                            className: "icon icon-play accent_mod"
                        })))), r.default.createElement("div", {
                            className: "project_w_descr"
                        }, r.default.createElement("div", {
                            className: "project_w_title",
                            ref: this.project_w_title
                        }, r.default.createElement("h2", {
                            className: "project_title accent_mod"
                        }, e.name), r.default.createElement("h3", {
                            className: "project_title"
                        }, e.place)), r.default.createElement("div", {
                            className: "project_descr_w offset_mod"
                        }, r.default.createElement("span", {
                            className: "project_descr_line",
                            ref: this.project_descr_line
                        }), r.default.createElement("div", {
                            className: "project_descr",
                            ref: this.project_descr
                        }, e.descr)), r.default.createElement("div", {
                            className: "project_w_team",
                            ref: this.project_w_team
                        }, e.team.map(function(e, t) {
                            return r.default.createElement("dl", {
                                className: "project_team",
                                key: t
                            }, r.default.createElement("dt", {
                                className: "project_team_position"
                            }, e.position), r.default.createElement("dd", {
                                className: "project_team_name"
                            }, e.name))
                        })), r.default.createElement("div", {
                            className: "project_awards",
                            ref: this.project_awards
                        }, e.about)))
                    }
                }]),
                t
        }();
        t.default = s
    },
    198: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = s(o)
            , l = n(4)
            , i = (n(197),
            s(n(11)),
            s(n(6)))
            , c = s(n(68));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.timer = r.default.createRef(),
                    n.timer_text = r.default.createRef(),
                    n.timer_line = r.default.createRef(),
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.context.animation_on ? (l.TweenMax.from(this.timer.current, .5, {
                            delay: 0,
                            opacity: 0,
                            ease: Power3.easeOut
                        }),
                            l.TweenMax.to(this.timer_text.current, 5, {
                                delay: .2,
                                attr: {
                                    "data-text": 100
                                },
                                roundProps: "data-text",
                                ease: Power0.easeNone,
                                onComplete: function() {
                                    e.context.loader_play || (e.context.toggleLoaderPlay(),
                                        l.TweenMax.delayedCall(2, function() {
                                            e.context.toggleloaded_GL()
                                        })),
                                        l.TweenMax.delayedCall(4, function() {
                                            e.context.toggleLoaderHide()
                                        })
                                }
                            }),
                            l.TweenMax.from(this.timer_line.current, 5, {
                                scaleX: 0,
                                delay: .3,
                                transformOrigin: "0 50%",
                                ease: Power3.easeOut
                            })) : this.context.loader_play || (e.context.toggleLoaderPlay(),
                            e.context.toggleloaded_GL())
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "loader_b"
                        }, r.default.createElement(c.default, {
                            dataClass: "loader_mod",
                            delay: "2.5"
                        }), r.default.createElement("div", {
                            className: "timer",
                            ref: this.timer
                        }, r.default.createElement("div", {
                            className: "timer_text",
                            ref: this.timer_text,
                            "data-text": "0"
                        }, "."), r.default.createElement("div", {
                            className: "timer_line",
                            ref: this.timer_line
                        })))
                    }
                }]),
                t
        }();
        u.contextType = i.default,
            t.default = u
    },
    210: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1))
            , r = n(7);
        var l = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Route),
                a(t, [{
                    key: "componentWillAppear",
                    value: function(e) {
                        this.refs.child && this.refs.child.componentWillAppear ? (console.log("Route appear"),
                            this.refs.child.componentWillAppear(e)) : e()
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.refs.child && this.refs.child.componentWillEnter ? (console.log("Route enter"),
                            this.refs.child.componentWillEnter(e)) : e()
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.refs.child && this.refs.child.componentWillLeave ? (console.log("Route leave"),
                            this.refs.child.componentWillLeave(e)) : e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.match
                            , t = this.props
                            , n = t.children
                            , a = t.component
                            , r = t.render
                            , l = this.context.router
                            , i = l.history
                            , c = l.route
                            , s = l.staticContext
                            , u = {
                            match: e,
                            location: this.props.location || c.location,
                            history: i,
                            staticContext: s,
                            ref: "child"
                        };
                        return a ? e ? o.default.createElement(a, u) : null : r ? e ? r(u) : null : n ? "function" == typeof n ? n(u) : isEmptyChildren(n) ? null : o.default.Children.only(n) : null
                    }
                }]),
                t
        }();
        t.default = l
    },
    218: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = c(n(1))
            , r = n(7)
            , l = c(n(217))
            , i = c(n(15));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                    function(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Switch),
                a(t, [{
                    key: "render",
                    value: function() {
                        var e = this.context.router.route
                            , t = this.props.children
                            , n = this.props.location || e.location
                            , a = void 0
                            , r = void 0;
                        return o.default.Children.forEach(t, function(t) {
                            if (o.default.isValidElement(t)) {
                                var i = t.props
                                    , c = i.path
                                    , s = i.exact
                                    , u = i.strict
                                    , d = i.from
                                    , f = c || d;
                                null == a && (r = t,
                                    a = f ? (0,
                                        l.default)(n.pathname, {
                                        path: f,
                                        exact: s,
                                        strict: u
                                    }) : e.match)
                            }
                        }),
                            o.default.createElement(i.default, {
                                className: "main_section",
                                component: "div",
                                transitionMode: this.props.transitionMode
                            }, a ? o.default.cloneElement(r, {
                                location: n,
                                computedMatch: a
                            }) : null)
                    }
                }]),
                t
        }();
        t.default = s
    },
    223: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = function(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n\t\t\t  html {\n\t\t\t  \t\t    font-size:  calc(", ");\n\t\t\t  \t\t  }\n\t\t\t"], ["\n\t\t\t  html {\n\t\t\t  \t\t    font-size:  calc(", ");\n\t\t\t  \t\t  }\n\t\t\t"])
            , r = n(1)
            , l = u(r)
            , i = n(79)
            , c = (n(7),
            n(31),
            u(n(46)),
            n(19),
            u(n(15)),
            n(4),
            u(n(11)),
            u(n(45)),
            u(n(27)),
            u(n(38)),
            u(n(37)),
            u(n(24)),
            u(n(36)),
            u(n(39)),
            u(n(51)),
            u(n(50)),
            u(n(49)),
            u(n(48)),
            u(n(89)))
            , s = u(n(88));
        u(n(28)),
            u(n(6));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.handleResize = n.handleResize.bind(n),
                    n.state = {
                        windowWidth: window.outerWidth,
                        windowHeight: window.innerHeight
                    },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.handleResize();
                        var e = ["color: #fff", "background: #cf8e1f"].join(";");
                        console.info("%c%s", e, "Developed by glivera-team https://glivera-team.com/")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.setState({
                            windowWidth: window.outerWidth,
                            windowHeight: window.innerHeight
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = (0,
                            i.createGlobalStyle)(o, .56 * this.state.windowWidth > this.state.windowHeight ? "100vh / 1080 * 10" : "100vw / 1920 * 10");
                        return l.default.createElement(s.default, null, l.default.createElement(e, null), l.default.createElement(c.default, null))
                    }
                }]),
                t
        }();
        t.default = d
    },
    233: function(e, t, n) {
        "use strict";
        n(264);
        var a = c(n(1))
            , o = n(20)
            , r = n(7)
            , l = c(n(223))
            , i = c(n(11));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        (0,
            o.render)(a.default.createElement(r.Router, {
            history: i.default
        }, a.default.createElement(l.default, null)), document.getElementById("root"))
    },
    234: function(e, t, n) {
        e.exports = n(233)
    },
    24: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = m(o)
            , l = n(7)
            , i = m(n(150))
            , c = n(19)
            , s = (m(n(15)),
            m(n(145)))
            , u = m(n(144))
            , d = (m(n(80)),
            m(n(65)),
            m(n(64)),
            m(n(143)),
            m(n(6)))
            , f = n(4);
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                e.toggleloadAnim = function() {
                    e.setState(function(e) {
                        return {
                            loadAnim: !e.loadAnim
                        }
                    })
                }
                    ,
                    e.inAnim = function(t) {
                        var n = e
                            , a = e.state.active || e.context.work_active
                            , o = void 0;
                        o = n.context.second_loader_play ? 3 : 0,
                        e.state.IsSelected && (o = 1),
                            e.context.animation_on ? (f.TweenMax.set(n.section.current, {
                                opacity: 1
                            }),
                                f.TweenMax.set(e.works_list_w.current, {
                                    yPercent: 100 * a
                                }),
                                f.TweenMax.set(e.works_list_items, {
                                    yPercent: 100
                                }),
                                f.TweenMax.staggerFromTo(e.works_list_items, .8, {
                                    yPercent: 100,
                                    opacity: 0
                                }, {
                                    cycle: {
                                        delay: function(e) {
                                            return a || 0,
                                            .1 * e + o
                                        }
                                    },
                                    opacity: 1,
                                    yPercent: 0,
                                    ease: Power2.easeOut
                                }, 0, function() {
                                    n.setState({
                                        scroll: !0,
                                        animActive: !1
                                    }),
                                    n.context.work_list_loaded || n.context.toggleWorkListLoaded(),
                                        t()
                                }),
                            e.context.loaded_GL || f.TweenMax.delayedCall(o, function() {
                                n.context.toggleloaded_GL()
                            })) : (t(),
                            e.context.loaded_GL || n.context.toggleloaded_GL())
                    }
                    ,
                    e.handleScroll = function(t) {
                        var n = e
                            , a = e.state.active || e.context.work_active
                            , o = e.works_list_items.length
                            , r = []
                            , l = (0,
                            i.default)(t);
                        if (e.state.scroll && (l.pixelY < 0 && a < 0 || l.pixelY > 0 && a > 1 - o))
                            if (l.pixelY < 0 && a < 0) {
                                var c = (a += n.state.multy_d) < 0 ? a + 1 : a
                                    , s = Math.abs(a) + 4;
                                r = e.works_list_items.slice(Math.abs(c), s),
                                    console.log("scroll up", a, Math.abs(c), s, r.length),
                                    f.TweenMax.set(r, {
                                        yPercent: 100 * n.state.multy_d
                                    }),
                                    f.TweenMax.set(e.works_list_w.current, {
                                        yPercent: 100 * a
                                    }),
                                    f.TweenMax.staggerFromTo(r, .7, {
                                        yPercent: -100 * n.state.multy_d
                                    }, {
                                        yPercent: 0,
                                        ease: Power2.easeInOut
                                    }, {
                                        from: "end",
                                        amount: .15
                                    }, function() {
                                        n.setState({
                                            scroll: !0,
                                            animActive: !1
                                        })
                                    }),
                                    n.context.ActiveWork({
                                        index: a
                                    }),
                                    n.setState({
                                        scroll: !1,
                                        active: a,
                                        animActive: !0
                                    })
                            } else if (l.pixelY > 0 && a > 1 - o) {
                                var u = -1 === (a -= n.state.multy_d) ? a + 1 : a + 2
                                    , d = -1 === a ? Math.abs(a) + 4 : Math.abs(a) + 3;
                                r = e.works_list_items.slice(Math.abs(u), d),
                                    console.log("scroll down", a, Math.abs(u), d, r.length),
                                    f.TweenMax.set(r, {
                                        yPercent: 100 * n.state.multy_d
                                    }),
                                    f.TweenMax.set(e.works_list_w.current, {
                                        yPercent: 100 * a
                                    }),
                                    f.TweenMax.staggerFromTo(r, .7, {
                                        yPercent: 100 * n.state.multy_d
                                    }, {
                                        yPercent: 0,
                                        ease: Power2.easeInOut
                                    }, {
                                        from: "start",
                                        amount: .15
                                    }, function() {
                                        n.setState({
                                            scroll: !0,
                                            animActive: !1
                                        })
                                    }),
                                    n.context.ActiveWork({
                                        index: a
                                    }),
                                    n.setState({
                                        scroll: !1,
                                        active: a,
                                        animActive: !0
                                    })
                            }
                    }
                    ,
                    e.touchStart = function(t) {
                        var n = t.touches[0];
                        e.setState({
                            startX: n.clientX,
                            startY: n.clientY,
                            currentX: 0,
                            currentY: 0
                        })
                    }
                    ,
                    e.touchMove = function(t) {
                        var n = t.touches[0];
                        e.setState({
                            currentX: n.clientX,
                            currentY: n.clientY
                        })
                    }
                    ,
                    e.touchEnd = function(t) {
                        var n = e
                            , a = e.state.active || e.context.work_active
                            , o = e.works_list_items.length
                            , r = []
                            , l = {
                            touchStarted: !1
                        };
                        if (Math.abs(e.state.startX - e.state.currentX) < e.state.threshold && e.state.scroll)
                            if (l.direction = e.state.startY > e.state.currentY ? "top" : "bottom",
                            "top" === l.direction && a > -o) {
                                var i = -1 === (a -= n.state.multy_m) ? a + 1 : a + 2
                                    , c = -1 === a ? Math.abs(a) + 7 : Math.abs(a) + 6;
                                r = e.works_list_items.slice(Math.abs(i), c),
                                    console.log("scroll down", a, Math.abs(i), c, r.length),
                                    f.TweenMax.set(r, {
                                        yPercent: 100 * n.state.multy_d
                                    }),
                                    f.TweenMax.set(e.works_list_w.current, {
                                        yPercent: 100 * a
                                    }),
                                    f.TweenMax.staggerFromTo(r, .5, {
                                        yPercent: 100 * n.state.multy_d
                                    }, {
                                        yPercent: 0,
                                        ease: Power2.easeInOut
                                    }, {
                                        from: "start",
                                        amount: .15
                                    }, function() {
                                        n.setState({
                                            scroll: !0,
                                            animActive: !1
                                        })
                                    }),
                                    n.context.ActiveWork({
                                        index: a
                                    }),
                                    n.setState({
                                        scroll: !1,
                                        active: a,
                                        animActive: !0
                                    })
                            } else if ("bottom" === l.direction && a < o && a < 0) {
                                var s = (a += n.state.multy_m) < 0 ? a + 1 : a
                                    , u = Math.abs(a) + 7;
                                r = e.works_list_items.slice(Math.abs(s), u),
                                    console.log("scroll up", a, Math.abs(s), u, r.length),
                                    f.TweenMax.set(r, {
                                        yPercent: 100 * n.state.multy_d
                                    }),
                                    f.TweenMax.set(e.works_list_w.current, {
                                        yPercent: 100 * a
                                    }),
                                    f.TweenMax.staggerFromTo(r, .5, {
                                        yPercent: -100 * n.state.multy_d
                                    }, {
                                        yPercent: 0,
                                        ease: Power2.easeInOut
                                    }, {
                                        from: "end",
                                        amount: .15
                                    }, function() {
                                        n.setState({
                                            scroll: !0,
                                            animActive: !1
                                        })
                                    }),
                                    n.context.ActiveWork({
                                        index: a
                                    }),
                                    n.setState({
                                        scroll: !1,
                                        active: a,
                                        animActive: !0
                                    })
                            }
                    }
                    ,
                    e.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                ;
                return e.state = {
                    IsSelected: function(e) {
                        return (0,
                            l.matchPath)(location.pathname, {
                            path: e,
                            exact: !0
                        })
                    }("/selected/:id"),
                    loadAnim: !1,
                    scroll: !1,
                    active: null,
                    animActive: !0,
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    direction: "none",
                    threshold: 50,
                    multy_d: 1,
                    multy_m: 1
                },
                    e.works_list_items = [],
                    e.section = r.default.createRef(),
                    e.page_img = r.default.createRef(),
                    e.works_list = r.default.createRef(),
                    e.works_list_w = r.default.createRef(),
                    e.letters = {
                        letters_1: [],
                        letters_2: []
                    },
                    e.twin_up = !0,
                    e.twin_down = !0,
                    e.scroll = [],
                    e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (e.context.loader_hide || e.context.toggleLoaderHide(),
                        this.context.isOpen && (this.context.toggleCloseWithoutAnimation(),
                            this.context.toggleOpen()),
                        this.context.loader_play || this.context.toggleLoaderPlay(),
                            this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !0,
                                selected: this.state.IsSelected,
                                lang: !1,
                                menu: !this.state.IsSelected,
                                vadim: !1,
                                contact_list: !this.state.IsSelected,
                                white_mode: !0
                            }),
                            this.context.work_active ? this.setState({
                                active: this.context.work_active
                            }) : (this.context.ActiveWork({
                                index: 0
                            }),
                                this.setState({
                                    active: 0
                                })),
                            this.state.IsSelected) {
                            f.TweenMax.from(this.page_img.current, 2, {
                                scale: 1.1,
                                opacity: 0,
                                delay: 0,
                                ease: ExpoScaleEase.config(1.3, 1, Power0.easeNone)
                            }),
                                f.TweenMax.staggerFromTo(this.letters.letters_1, .7, {
                                    cycle: {
                                        x: function() {
                                            return -50 * e.getRandomInt(0, e.letters.letters_1.length)
                                        }
                                    },
                                    "-webkit-filter": "blur(10px)",
                                    filter: "blur(10px)",
                                    opacity: 0
                                }, {
                                    delay: .5,
                                    x: 0,
                                    "-webkit-filter": "blur(0)",
                                    filter: "blur(0)",
                                    opacity: 1,
                                    ease: Power3.easeOut
                                }, .01),
                                f.TweenMax.staggerFromTo(this.letters.letters_2, .7, {
                                    cycle: {
                                        x: function() {
                                            return -50 * e.getRandomInt(0, e.letters.letters_2.length)
                                        }
                                    },
                                    "-webkit-filter": "blur(10px)",
                                    filter: "blur(10px)",
                                    opacity: 0
                                }, {
                                    delay: .5,
                                    x: 0,
                                    "-webkit-filter": "blur(0)",
                                    filter: "blur(0)",
                                    opacity: 1,
                                    ease: Power3.easeOut
                                }, .01)
                        }
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.context.work_list_loaded && this.context.toggleWorkListLoaded(),
                            f.TweenMax.fromTo(this.section.current, .7, {
                                opacity: 1
                            }, {
                                opacity: 0,
                                ease: Power2.easeIn,
                                onComplete: e
                            })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = void 0
                            , n = void 0;
                        this.state.IsSelected ? (n = this.props.data,
                            t = this.props.data.works) : t = this.props.data;
                        var a = this.state.active || this.context.work_active;
                        return r.default.createElement("section", {
                            className: "section " + (this.state.IsSelected ? "selected_project_mod" : "full_mod center_mod works_all_mod") + "  ",
                            onWheel: this.handleScroll,
                            onTouchStart: this.touchStart.bind(this),
                            onTouchMove: this.touchMove.bind(this),
                            onTouchEnd: this.touchEnd.bind(this),
                            ref: this.section
                        }, this.state.IsSelected ? r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
                            className: "selected_project_w_img"
                        }, r.default.createElement("div", {
                            className: "selected_project_img_in",
                            ref: this.page_img
                        }, r.default.createElement(c.Picture, {
                            className: "selected_project_img",
                            alt: n.title,
                            sources: [{
                                srcSet: n.image.sm.split(":")[1] + ", " + n.image.sm2x.split(":")[1] + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: n.image.lg.split(":")[1] + ", " + n.image.lg2x.split(":")[1] + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        })))) : null, r.default.createElement("div", {
                            className: "works_list " + (this.state.animActive ? "no_hover" : "") + " " + (this.state.IsSelected ? "selected_project_mod" : ""),
                            ref: this.works_list
                        }, r.default.createElement("div", {
                            className: "works_list_w " + (this.state.IsSelected ? "selected_project_mod" : ""),
                            ref: this.works_list_w
                        }, t.map(function(n, o) {
                            return r.default.createElement("div", {
                                className: "works_list_item " + (e.state.IsSelected ? "selected_project_mod" : ""),
                                ref: function(t) {
                                    return e.works_list_items[o] = t
                                },
                                key: "li_" + o
                            }, r.default.createElement(s.default, {
                                key: o,
                                loadAnimFunc: e.toggleloadAnim,
                                dataInner: n,
                                index: o,
                                activeIndex: a,
                                loadAnim: e.state.loadAnim,
                                max: t.length,
                                selected: e.state.IsSelected
                            }))
                        }))), r.default.createElement(u.default, {
                            dataInner: t.length,
                            activeIndex: -1 * (a - 1),
                            blockClass: this.state.IsSelected ? "selected_project_mod" : "",
                            selected: this.state.IsSelected
                        }), this.state.IsSelected ? r.default.createElement("div", {
                            className: "selected_project_w_title"
                        }, r.default.createElement("div", {
                            className: "selected_project_title"
                        }, r.default.createElement("div", {
                            className: "selected_project_title_in"
                        }, n.title.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters.letters_1[n] = t
                                },
                                key: "title_" + n
                            }, t)
                        })), r.default.createElement("div", {
                            className: "selected_project_title_in_text"
                        }, n.description.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters.letters_2[n] = t
                                },
                                key: "descr_" + n
                            }, t)
                        })))) : null)
                    }
                }]),
                t
        }();
        p.contextType = d.default,
            t.default = p
    },
    264: function(e, t) {},
    27: function(t, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , r = a(1)
            , l = m(r)
            , i = a(7)
            , c = m(a(15))
            , s = (m(a(196)),
            m(a(195)),
            m(a(80)),
            m(a(65)),
            m(a(64)),
            m(a(28)),
            m(a(6)))
            , u = a(4)
            , d = m(a(194))
            , f = m(a(11));
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function h(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var v = function(t) {
            function n(t) {
                p(this, n);
                var a = _(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t));
                return a.inAnimation = function(e) {
                    var t = a
                        , n = void 0;
                    if (n = t.context.second_loader_play ? 1.5 : 0,
                        u.TweenMax.set(a.project_slider_w.current, {
                            opacity: 1
                        }),
                        a.context.work_active_transform) {
                        var o = a.project_video.current.getBoundingClientRect()
                            , r = t.context.work_active_transform
                            , l = r.el.bottom + r.shift - o.bottom + o.height / 4.8
                            , i = r.el.right - o.right + o.width / 5
                            , c = r.el.height / (1.02 * o.height);
                        console.log("y", l, r.el.bottom, r.shift, o.bottom);
                        var s = new TimelineMax({})
                            , d = new TimelineMax;
                        d.to(a.project_video_sub_w.current, 2, {
                            rotationX: -20,
                            transformOrigin: "100% 0",
                            ease: Power0.easeNone
                        }).to(a.project_video_sub_w.current, 3, {
                            rotationX: 0,
                            transformOrigin: "100% 0",
                            ease: Power0.easeNone
                        }),
                            s.add(d.tweenFromTo(0, 5, {
                                ease: Power2.easeInOut
                            })).fromTo(a.project_video_w.current, 5, {
                                scale: c
                            }, {
                                scale: 1,
                                ease: Power2.easeInOut,
                                onComplete: function() {
                                    t.context.ActiveWorkTransform(!1)
                                }
                            }, 0).fromTo(a.project_video_w.current, 5, {
                                x: i,
                                y: l
                            }, {
                                x: 0,
                                y: 0,
                                ease: Power2.easeInOut
                            }, 0),
                            s.timeScale(5)
                    } else
                        u.TweenMax.fromTo(a.project_video.current, .7, {
                            xPercent: 20,
                            opacity: 0
                        }, {
                            xPercent: 0,
                            opacity: 1,
                            delay: .2 + n,
                            ease: Power2.easeOut
                        });
                    u.TweenMax.fromTo(a.project_w_title.current, .7, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: .4 + n,
                        ease: Power2.easeOut
                    }),
                        u.TweenMax.fromTo(a.project_descr_line.current, .7, {
                            scaleY: 0
                        }, {
                            scaleY: 1,
                            delay: .6 + n,
                            transformOrigin: "0% 0%",
                            ease: Power2.easeOut
                        }),
                    a.state.data.type && u.TweenMax.fromTo(a.project_type.current, .7, {
                        xPercent: 20,
                        opacity: 0
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        delay: .7 + n,
                        ease: Power2.easeOut
                    }),
                        u.TweenMax.fromTo(a.project_descr.current, .7, {
                            xPercent: 20,
                            opacity: 0
                        }, {
                            xPercent: 0,
                            opacity: 1,
                            delay: .8 + n,
                            ease: Power2.easeOut
                        }),
                    a.state.data.cast.length && u.TweenMax.fromTo(a.project_w_team.current, .7, {
                        yPercent: 100,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        delay: 1 + n,
                        ease: Power2.easeOut
                    }),
                    a.state.data.prizes.length && u.TweenMax.fromTo(a.project_awards.current, .7, {
                        yPercent: 100,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        delay: 1.2 + n,
                        ease: Power2.easeOut
                    }),
                        u.TweenMax.staggerFromTo([a.project_preview_w_left.current, a.project_preview_w_right.current], .7, {
                            cycle: {
                                xPercent: [-100, 100]
                            },
                            opacity: 0
                        }, {
                            xPercent: 0,
                            opacity: 1,
                            delay: 1.3 + n,
                            ease: Power2.easeOut
                        }, .1, e)
                }
                    ,
                    a.outAnimation = function(e) {
                        var t = a
                            , n = [];
                        n.push(a.project_descr.current),
                        a.state.data.type && n.push(a.project_type.current),
                        a.state.data.cast.length && n.push(a.project_w_team.current),
                        a.state.data.prizes.length && n.push(a.project_awards.current),
                            new TimelineMax({
                                onComplete: function() {
                                    t.setState({
                                        paused: !0
                                    }),
                                        e()
                                }
                            }).addLabel("start").fromTo(a.project_video.current, 1, {
                                xPercent: 0,
                                opacity: 1
                            }, {
                                xPercent: -20,
                                opacity: 0,
                                ease: Power2.easeIn
                            }).staggerFromTo([a.project_w_title.current, a.project_descr_line.current], .9, {
                                opacity: 1
                            }, {
                                opacity: 0,
                                x: -15 * a.context.rem,
                                ease: Power2.easeIn
                            }, 0, "start+=.1").staggerFromTo(n, .8, {
                                opacity: 1
                            }, {
                                x: -12 * a.context.rem,
                                opacity: 0,
                                ease: Power2.easeIn
                            }, .1, "start+=.2").staggerFromTo([a.project_preview_w_left.current, a.project_preview_w_right.current], .7, {
                                xPercent: 0,
                                opacity: 1
                            }, {
                                cycle: {
                                    xPercent: [-50, 50]
                                },
                                opacity: 0,
                                ease: Power2.easeIn
                            }, .1, "start+=.2")
                    }
                    ,
                    a.VideoClick = function() {
                        e.preventDefault();
                        var t = a;
                        u.TweenMax.to(a.project_video_sub_w.current, .3, {
                            autoAlpha: 0
                        }, 0, function() {
                            t.setState({
                                paused: !0
                            })
                        })
                    }
                    ,
                    a.Ready = function() {
                        u.TweenMax.staggerTo([a.project_video_video_el_w.current, a.project_video_sub_w.current], .3, {
                            cycle: {
                                autoAlpha: [1, 0]
                            }
                        }, 0)
                    }
                    ,
                    a.state = {
                        el: null,
                        data: a.props.data,
                        volume: 1,
                        paused: !1
                    },
                    a.project_slider_w = l.default.createRef(),
                    a.project_video_w = l.default.createRef(),
                    a.project_video = l.default.createRef(),
                    a.project_video_sub_w = l.default.createRef(),
                    a.project_video_btn = l.default.createRef(),
                    a.project_w_title = l.default.createRef(),
                    a.project_type = l.default.createRef(),
                    a.project_descr_line = l.default.createRef(),
                    a.project_descr = l.default.createRef(),
                    a.project_w_team = l.default.createRef(),
                    a.project_awards = l.default.createRef(),
                    a.project_preview_w_left = l.default.createRef(),
                    a.project_preview_w_right = l.default.createRef(),
                    a.project_video_video_el_w = l.default.createRef(),
                    a
            }
            return h(n, r.PureComponent),
                o(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this
                            , t = this.project_video_w.current.getBoundingClientRect();
                        u.TweenMax.delayedCall(.01, function() {
                            e.setState({
                                el: t
                            })
                        }),
                            u.TweenMax.set(this.project_slider_w.current, {
                                opacity: 0
                            })
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnimation(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnimation(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.outAnimation(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.IsSelected ? "selected/" + this.context.selected_slug + "-project" : "project"
                            , t = this.props.data
                            , n = this.props.dataPrev
                            , a = this.props.dataNext;
                        return l.default.createElement("div", {
                            className: "project_slider_w",
                            ref: this.project_slider_w
                        }, l.default.createElement("div", {
                            className: "project_slider"
                        }, l.default.createElement("div", {
                            className: "project_slider_item"
                        }, l.default.createElement("div", {
                            className: "project"
                        }, l.default.createElement("div", {
                            className: "project_w_video anim_mod",
                            ref: this.project_video_w
                        }, l.default.createElement("div", {
                            className: "project_video",
                            ref: this.project_video
                        }, l.default.createElement("div", {
                            className: "project_video_sub_w",
                            ref: this.project_video_sub_w
                        }, t.images.length ? l.default.createElement("img", {
                            className: "project_video_preview",
                            src: t.images[0].image,
                            alt: t.title
                        }) : null, " ", " "), t.videos.length && t.videos[0].url ? l.default.createElement("div", {
                            className: "project_video_video_el_w",
                            ref: this.project_video_video_el_w
                        }, l.default.createElement(d.default, {
                            className: "project_video_video_el",
                            video: t.videos[0].url.split("/").slice(-1)[0],
                            muted: !1,
                            loop: !0,
                            onPlay: this.Ready,
                            autoplay: !0,
                            paused: this.state.paused
                        })) : null)), l.default.createElement("div", {
                            className: "project_w_descr anim_mod"
                        }, l.default.createElement("div", {
                            className: "project_w_title",
                            ref: this.project_w_title
                        }, l.default.createElement("h2", {
                            className: "project_title accent_mod"
                        }, t.title), l.default.createElement("h3", {
                            className: "project_title"
                        }, t.subtitle)), t.type ? l.default.createElement("div", {
                            className: "project_type",
                            ref: this.project_type
                        }, t.type) : null, l.default.createElement("div", {
                            className: "project_descr_w offset_mod"
                        }, l.default.createElement("span", {
                            className: "project_descr_line",
                            ref: this.project_descr_line
                        }), l.default.createElement("div", {
                            className: "project_descr",
                            ref: this.project_descr
                        }, t.text)), t.cast.length ? l.default.createElement("div", {
                            className: "project_w_team",
                            ref: this.project_w_team
                        }, t.cast.map(function(e, t) {
                            return l.default.createElement("dl", {
                                className: "project_team",
                                key: t
                            }, l.default.createElement("dt", {
                                className: "project_team_position"
                            }, e.position), l.default.createElement("dd", {
                                className: "project_team_name"
                            }, e.name))
                        })) : null, " ", t.prizes.length ? l.default.createElement("div", {
                            className: "project_awards_w",
                            ref: this.project_awards
                        }, t.prizes.map(function(e, t) {
                            return l.default.createElement("div", {
                                className: "project_awards",
                                key: t
                            }, e.title)
                        })) : null)))), l.default.createElement("div", {
                            className: "project_preview_w anim_mod",
                            ref: this.project_preview_w_left
                        }, l.default.createElement(i.Link, {
                            className: "project_preview",
                            to: "/" + e + "/id-" + this.props.prev
                        }, l.default.createElement("div", {
                            className: "project_preview_w_img"
                        }, n.images.length && n.images[0].image ? l.default.createElement("img", {
                            className: "project_preview_img",
                            src: n.images[0].image,
                            alt: n.title
                        }) : null), l.default.createElement("div", {
                            className: "project_preview_w_descr"
                        }, l.default.createElement("span", {
                            className: "project_preview_title accent_mod"
                        }, n.title), l.default.createElement("span", {
                            className: "project_preview_title"
                        }, n.subtitle)))), l.default.createElement("div", {
                            className: "project_preview_w right_level_mod anim_mod",
                            ref: this.project_preview_w_right
                        }, l.default.createElement(i.Link, {
                            className: "project_preview",
                            to: "/" + e + "/id-" + this.props.next
                        }, l.default.createElement("div", {
                            className: "project_preview_w_img"
                        }, a.images.length && a.images[0].image ? l.default.createElement("img", {
                            className: "project_preview_img",
                            src: a.images[0].image,
                            alt: a.title
                        }) : null), l.default.createElement("div", {
                            className: "project_preview_w_descr"
                        }, l.default.createElement("span", {
                            className: "project_preview_title accent_mod"
                        }, a.title), l.default.createElement("span", {
                            className: "project_preview_title"
                        }, a.subtitle)))))
                    }
                }]),
                n
        }();
        v.contextType = s.default;
        var y = function(e) {
            function t(e) {
                p(this, t);
                var n = _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.inAnim = function(e) {
                    var t = n
                        , a = void 0;
                    a = (t.context.second_loader_play,
                        0),
                        n.context.animation_on ? (u.TweenMax.set(n.section.current, {
                            opacity: 1
                        }),
                            n.context.work_active_transform ? (u.TweenMax.set(n.back_w.current, {
                                className: "+=dsb_mod"
                            }),
                                u.TweenMax.fromTo(n.back_w.current, 1.7, {
                                    opacity: 0,
                                    y: 200
                                }, {
                                    opacity: 1,
                                    y: 0,
                                    delay: 1.4 + a,
                                    ease: Power2.easeOut,
                                    onComplete: function() {
                                        u.TweenMax.set(t.back_w.current, {
                                            className: "-=dsb_mod"
                                        }),
                                            e()
                                    }
                                })) : (u.TweenMax.set(n.back_w.current, {
                                className: "+=dsb_mod"
                            }),
                                u.TweenMax.fromTo(n.back_w.current, .7, {
                                    opacity: 0
                                }, {
                                    opacity: 1,
                                    delay: 1.4 + a,
                                    ease: Power2.easeOut,
                                    onComplete: function() {
                                        u.TweenMax.set(t.back_w.current, {
                                            className: "-=dsb_mod"
                                        }),
                                            e()
                                    }
                                })),
                        n.context.loaded_GL || u.TweenMax.delayedCall(a, function() {
                            t.context.toggleloaded_GL()
                        })) : (n.context.loaded_GL || t.context.toggleloaded_GL(),
                            e())
                }
                    ,
                    n.clickF = function(e) {
                        var t = n.state.IsSelected ? "/selected/" + n.context.selected_slug : "/works";
                        n.context.BackWork(!0),
                            n.context.ActiveWork({
                                index: -1 * n.state.index
                            }),
                            n.setState({
                                back: !0
                            }),
                            u.TweenMax.delayedCall(.1, function() {
                                f.default.push(t)
                            })
                    }
                ;
                return console.log("pathname", n.props.history.location.pathname),
                    n.state = {
                        full_path: n.props.history.location.pathname,
                        path: n.props.history.location.pathname.split("/").slice(-1)[0],
                        index: parseInt(n.props.history.location.pathname.split("/").slice(-1)[0].split("-").slice(-1)[0]),
                        IsSelected: !!n.props.slug,
                        back: !1
                    },
                    n.section = l.default.createRef(),
                    n.back_w = l.default.createRef(),
                    n.project_video = l.default.createRef(),
                    n.project_w_title = l.default.createRef(),
                    n.project_descr_line = l.default.createRef(),
                    n.project_descr = l.default.createRef(),
                    n.project_w_team = l.default.createRef(),
                    n.project_awards = l.default.createRef(),
                    n.project_preview_w_left = l.default.createRef(),
                    n.project_preview_w_right = l.default.createRef(),
                    n
            }
            return h(t, r.Component),
                o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.isUnmounted = !1,
                        this.context.loader_hide || this.context.toggleLoaderHide(),
                        this.context.isOpen && (this.context.toggleCloseWithoutAnimation(),
                            this.context.toggleOpen()),
                        this.context.loader_play || this.context.toggleLoaderPlay(),
                            this.state.IsSelected ? this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !0,
                                selected: !0,
                                lang: !1,
                                menu: !1,
                                vadim: !1,
                                contact_list: !1,
                                white_mode: !0
                            }) : this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !1,
                                selected: !1,
                                lang: !1,
                                menu: !0,
                                vadim: !1,
                                contact_list: !1,
                                white_mode: !0
                            })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.isUnmounted = !0
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.state.back,
                            u.TweenMax.to(this.section.current, .5, {
                                opacity: 0,
                                zIndex: 1,
                                onComplete: e
                            })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (console.log("componentDidUpdate data", this.props.data, this.props.history.location.pathname),
                        !this.isUnmounted && "/" !== this.props.history.location.pathname && "/contacts" !== this.props.history.location.pathname && "/about" !== this.props.history.location.pathname && "/vacancies" !== this.props.history.location.pathname && this.props.history.location.pathname !== "/selected/" + this.context.selected_slug) {
                            var e = this.props.history.location.pathname.split("/").slice(-1)[0];
                            this.state.path !== e && "selected" !== e && "works" !== e && (console.log(this.props.history.location.pathname.split("/").slice(-1)[0]),
                                this.setState({
                                    path: this.props.history.location.pathname.split("/").slice(-1)[0],
                                    index: parseInt(this.props.history.location.pathname.split("/").slice(-1)[0].split("-").slice(-1)[0])
                                }))
                        }
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.props.history.location.pathname !== this.state.full_path && "/" !== this.props.history.location.pathname
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.data) {
                            console.log("data", this.state.data);
                            var e = this.props.data
                                , t = (this.state.IsSelected,
                                this.state.index)
                                , n = this.state.index < e.length - 1 ? this.state.index + 1 : 0
                                , a = this.state.index > 0 ? this.state.index - 1 : e.length - 1;
                            e[t],
                                e[a],
                                e[n];
                            return l.default.createElement("section", {
                                className: "section middle_level_mod single_project_mod",
                                ref: this.section
                            }, l.default.createElement(c.default, {
                                component: "div",
                                className: "project_slider_w",
                                transitionMode: "out-in"
                            }, l.default.createElement(v, {
                                data: e[t],
                                dataPrev: e[a],
                                dataNext: e[n],
                                index: t,
                                next: n,
                                prev: a,
                                amount: e.length - 1,
                                IsSelected: this.state.IsSelected,
                                key: t
                            })), l.default.createElement("div", {
                                className: "back_w anim_mod ",
                                ref: this.back_w
                            }, l.default.createElement("div", {
                                className: "btn_default back_mod",
                                onClick: this.clickF.bind(this)
                            }, "back to all")))
                        }
                    }
                }]),
                t
        }();
        y.contextType = s.default,
            n.default = y
    },
    28: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = u(o)
            , l = (n(7),
            u(n(15)))
            , i = n(4)
            , c = (n(69),
            u(n(6)))
            , s = u(n(68));
        u(n(11));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function d(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function m(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var p = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "vimeo"), r.default.createElement("path", {
                d: "M18 9a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM9.79 8c1.22-.73 1.87.3 1.25 1.46s-1.19 1.93-1.49 1.93-.55-.81-.88-2.17-.35-3.95-1.81-3.66S3.66 8 3.66 8l.43.57s.9-.71 1.19-.35 1.44 4.61 1.82 5.4 1.25 1.6 2.25.95 4.34-3.5 4.94-6.86S10.27 5 9.79 8z",
                fill: "#484747"
            }))
        };
        p.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18"
        };
        var _ = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "facebook"), r.default.createElement("path", {
                d: "M18 9a9 9 0 1 1-9-9 9 9 0 0 1 9 9zm-6.57-1.53H9.77V6.39a.44.44 0 0 1 .46-.5h1.17V4.1H9.79A2 2 0 0 0 7.6 6.28v1.19h-1v1.84h1v5.22h2.17V9.31h1.46z",
                fill: "#484747"
            }))
        };
        _.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.99 17.99"
        };
        var h = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("path", {
                d: "M9 18a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.873-11.427a2.448 2.448 0 0 0-2.446-2.446h-4.8a2.449 2.449 0 0 0-2.451 2.446v4.805a2.449 2.449 0 0 0 2.446 2.446h4.8a2.448 2.448 0 0 0 2.446-2.446zm-2.728-.529a.581.581 0 0 1 .458-.232.592.592 0 0 1 .591.591.58.58 0 0 1-.236.46 1.071 1.071 0 0 0-.813-.819zm.458.95a.582.582 0 0 0 .355-.131 1.052 1.052 0 0 1 .047.231v3.8a1.1 1.1 0 0 1-1.1 1.1h-3.8a1.1 1.1 0 0 1-1.1-1.1v-3.8A1.1 1.1 0 0 1 7.109 6h3.8a1.055 1.055 0 0 1 .239.048.58.58 0 0 0-.133.359.592.592 0 0 0 .585.587zm-2.608.013a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3.152a1.154 1.154 0 1 1 1.154-1.154 1.156 1.156 0 0 1-1.154 1.154z",
                fill: "#484747"
            }))
        };
        h.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18"
        };
        var v = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    i.TweenMax.from(n.awwwards.current, 1, {
                        opacity: 0,
                        xPercent: 100,
                        ease: Power2.easeOut,
                        onComplete: e
                    })
                }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.awwwards = r.default.createRef(),
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        i.TweenMax.to(this.awwwards.current, 1, {
                            opacity: 0,
                            xPercent: 100,
                            ease: Power2.easeOut,
                            onComplete: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            id: "awwwards",
                            className: "awwwards",
                            ref: this.awwwards
                        }, r.default.createElement("a", {
                            href: "https://www.awwwards.com/sites/spot-production",
                            target: "_blank"
                        }, r.default.createElement("svg", {
                            className: "awwwards_svg",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 53.08 171.358"
                        }, r.default.createElement("path", {
                            d: "M0,0H53.08V171.358H0Z"
                        }), r.default.createElement("path", {
                            d: "M20.048,153.585v-2l6.752-3.757H20.048v-1.9h10.23v2l-6.752,3.757h6.752v1.9Zm9.851-11.2a3.317,3.317,0,0,1-1.359,1.293,4.46,4.46,0,0,1-3.888,0,3.317,3.317,0,0,1-1.359-1.293,4.283,4.283,0,0,1,0-4.005,3.332,3.332,0,0,1,1.359-1.294,4.469,4.469,0,0,1,3.888,0,3.326,3.326,0,0,1,1.359,1.294,4.29,4.29,0,0,1,0,4.005m-1.7-3.348a2.827,2.827,0,0,0-3.2,0,1.718,1.718,0,0,0,0,2.691,2.832,2.832,0,0,0,3.2,0,1.719,1.719,0,0,0,0-2.691M22.912,135v-1.812H24.1a3.324,3.324,0,0,1-.973-.929,2.129,2.129,0,0,1-.329-1.19,2.2,2.2,0,0,1,.38-1.272,2.071,2.071,0,0,1,1.141-.79,3.143,3.143,0,0,1-1.118-.985,2.221,2.221,0,0,1-.4-1.265,2.141,2.141,0,0,1,.6-1.607,2.286,2.286,0,0,1,1.668-.585h5.218v1.812H25.37q-1.023,0-1.023.907a1.311,1.311,0,0,0,.789,1.146,4.692,4.692,0,0,0,2.28.446h2.865v1.813H25.37q-1.023,0-1.023.906a1.309,1.309,0,0,0,.826,1.147,5.165,5.165,0,0,0,2.4.446h2.7V135Zm-1.286-12.539a1.2,1.2,0,1,1,.337-.833,1.133,1.133,0,0,1-.337.833m1.286-1.739h7.366v1.813H22.912Zm0-2.05v-1.812H24.1a3.348,3.348,0,0,1-.951-1.009,2.434,2.434,0,0,1-.351-1.272,2.339,2.339,0,0,1,.57-1.644,2.13,2.13,0,0,1,1.651-.621h5.263v1.812H25.557a1.28,1.28,0,0,0-.92.285,1.026,1.026,0,0,0-.293.769,1.2,1.2,0,0,0,.351.833,2.443,2.443,0,0,0,1.03.613,4.977,4.977,0,0,0,1.615.234h2.938v1.812Zm6.921-9.539A3.33,3.33,0,0,1,28.4,110.3a4.559,4.559,0,0,1-3.612,0,3.336,3.336,0,0,1-1.432-1.169,3.374,3.374,0,0,1-.563-2,3.2,3.2,0,0,1,1.931-3.071,4.221,4.221,0,0,1,1.709-.364h.746v5.071a1.784,1.784,0,0,0,1.168-.49,1.618,1.618,0,0,0,.5-1.248A1.824,1.824,0,0,0,28.569,106a2.52,2.52,0,0,0-.863-.753l.542-1.462a3.337,3.337,0,0,1,2.148,3.348,3.374,3.374,0,0,1-.563,2m-4.085-3.574a2,2,0,0,0-1.009.52,1.419,1.419,0,0,0-.4,1.06,1.48,1.48,0,0,0,.409,1.067,1.764,1.764,0,0,0,.994.525v-3.172Zm4.085-4.677a3.33,3.33,0,0,1-1.432,1.169,4.552,4.552,0,0,1-3.612,0,3.336,3.336,0,0,1-1.432-1.169,3.374,3.374,0,0,1-.563-2,3.193,3.193,0,0,1,1.931-3.07,4.222,4.222,0,0,1,1.709-.365h.746v5.072a1.794,1.794,0,0,0,1.168-.49,1.619,1.619,0,0,0,.5-1.249,1.827,1.827,0,0,0-.277-1.031A2.541,2.541,0,0,0,27.706,97l.542-1.462A3.337,3.337,0,0,1,30.4,98.883a3.374,3.374,0,0,1-.563,2m-4.085-3.573a2,2,0,0,0-1.009.519,1.421,1.421,0,0,0-.4,1.06,1.478,1.478,0,0,0,.409,1.067,1.771,1.771,0,0,0,.994.526V97.305Zm9.733-80.379L30.7,31.9H27.433l-2.584-9.682L22.265,31.9H19L14.216,16.926h3.713L20.6,27.2l2.524-10.276h3.445L29.095,27.2l2.674-10.276Zm2.5,10.157a2.495,2.495,0,1,1-2.495,2.495,2.435,2.435,0,0,1,2.495-2.495",
                            fill: "#fff"
                        }))))
                    }
                }]),
                t
        }();
        v.contextType = c.default;
        var y = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    i.TweenMax.from(n.link.current, 1, {
                        opacity: 0,
                        ease: Power2.easeOut
                    })
                }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.link = r.default.createRef(),
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "links_list",
                            ref: this.link
                        }, r.default.createElement("a", {
                            className: "developedby_block",
                            target: "_blank",
                            href: "https://glivera-team.com/",
                            title: "Developed by Glivera-team",
                            rel: "nofollow"
                        }, r.default.createElement("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            preserveAspectRatio: "xMidYMid",
                            width: "175.69",
                            height: "46.469",
                            viewBox: "0 0 175.69 46.469"
                        }, r.default.createElement("path", {
                            d: "M175.390,29.824 C175.243,29.924 175.143,29.993 175.090,30.032 C175.063,30.064 175.003,30.118 174.910,30.192 C174.816,30.267 174.756,30.320 174.730,30.352 C174.436,30.525 174.063,30.716 173.610,30.924 C173.156,31.133 172.690,31.338 172.210,31.539 C171.730,31.741 171.270,31.917 170.830,32.070 C170.390,32.222 170.050,32.325 169.810,32.379 C169.436,32.463 169.090,32.435 168.770,32.293 C168.450,32.152 168.250,32.050 168.170,31.988 C167.530,31.625 167.183,31.197 167.130,30.702 L167.130,29.742 C167.130,29.715 167.110,29.686 167.070,29.655 C167.030,29.624 166.996,29.599 166.970,29.578 L167.050,29.080 L166.930,29.107 L166.090,29.936 C166.063,29.942 165.956,30.019 165.770,30.167 C165.610,30.337 165.403,30.524 165.150,30.727 C164.896,30.931 164.703,31.114 164.570,31.277 C164.436,31.361 164.276,31.477 164.090,31.625 C163.903,31.774 163.716,31.929 163.530,32.091 C163.343,32.253 163.176,32.405 163.030,32.544 C162.883,32.684 162.796,32.770 162.770,32.802 C162.716,32.868 162.636,32.979 162.530,33.136 C162.423,33.294 162.310,33.446 162.190,33.593 C162.070,33.740 161.970,33.869 161.890,33.980 C161.810,34.092 161.756,34.150 161.730,34.156 C161.703,34.216 161.650,34.348 161.570,34.552 C161.490,34.756 161.436,34.875 161.410,34.908 C161.383,34.940 161.350,34.981 161.310,35.030 C161.270,35.079 161.250,35.117 161.250,35.144 C161.196,35.182 161.130,35.231 161.050,35.289 C160.970,35.347 160.916,35.379 160.890,35.385 C160.863,35.391 160.776,35.417 160.630,35.463 C160.483,35.510 160.370,35.542 160.290,35.560 C160.236,35.572 160.156,35.583 160.050,35.594 C159.943,35.604 159.876,35.613 159.850,35.619 C159.823,35.598 159.770,35.510 159.690,35.355 C159.610,35.199 159.556,35.085 159.530,35.011 C159.503,34.857 159.490,34.754 159.490,34.700 C159.490,34.647 159.503,34.524 159.530,34.331 C159.530,34.278 159.550,34.213 159.590,34.137 C159.630,34.062 159.663,33.995 159.690,33.935 C160.170,33.401 160.570,32.911 160.890,32.465 C161.210,32.020 161.383,31.448 161.410,30.748 C161.356,30.334 161.150,30.086 160.790,30.007 C160.430,29.928 159.950,30.003 159.350,30.231 C158.750,30.460 158.043,30.825 157.230,31.328 C156.416,31.831 155.530,32.457 154.570,33.206 C154.463,33.284 154.323,33.402 154.150,33.561 C153.976,33.720 153.803,33.879 153.630,34.038 C153.456,34.197 153.296,34.340 153.150,34.466 C153.003,34.592 152.916,34.672 152.890,34.704 L151.930,35.880 C151.876,35.946 151.790,36.038 151.670,36.158 C151.550,36.279 151.476,36.342 151.450,36.348 C151.423,36.354 151.383,36.370 151.330,36.395 C151.276,36.421 151.223,36.439 151.170,36.451 C151.143,36.457 151.063,36.462 150.930,36.465 C150.850,36.483 150.723,36.478 150.550,36.450 C150.376,36.423 150.276,36.399 150.250,36.378 C150.223,36.358 150.190,36.285 150.150,36.160 C150.110,36.036 150.063,35.954 150.010,35.912 L149.970,35.841 L149.970,35.761 C150.023,35.696 150.083,35.555 150.150,35.340 C150.216,35.125 150.316,34.937 150.450,34.773 C150.503,34.681 150.616,34.522 150.790,34.296 C150.963,34.071 151.063,33.929 151.090,33.869 C151.143,33.831 151.256,33.745 151.430,33.612 C151.603,33.480 151.703,33.398 151.730,33.365 L152.210,32.777 C152.450,32.430 152.623,32.178 152.730,32.020 C152.836,31.863 152.943,31.666 153.050,31.428 C153.050,31.375 153.030,31.313 152.990,31.242 C152.950,31.171 152.930,31.109 152.930,31.055 C152.796,30.952 152.530,30.959 152.130,31.075 C151.730,31.192 151.423,31.314 151.210,31.442 C150.943,31.609 150.676,31.789 150.410,31.982 C149.770,32.499 149.216,32.964 148.750,33.375 C148.283,33.787 147.836,34.194 147.410,34.596 C147.169,34.824 146.908,35.062 146.654,35.296 L146.731,35.609 C146.864,35.659 146.924,35.720 146.911,35.789 C146.897,35.859 146.877,35.896 146.851,35.902 C146.824,35.935 146.757,36.003 146.651,36.107 C146.544,36.211 146.431,36.317 146.311,36.424 C146.191,36.531 146.071,36.638 145.951,36.745 C145.831,36.852 145.757,36.908 145.731,36.914 C145.651,36.959 145.457,37.109 145.151,37.365 C144.844,37.620 144.651,37.771 144.571,37.815 L143.691,38.333 C143.637,38.345 143.497,38.403 143.271,38.507 C143.044,38.612 142.904,38.670 142.851,38.682 L142.171,38.835 L141.491,38.988 C141.411,39.006 141.257,39.020 141.031,39.031 C140.804,39.042 140.664,39.041 140.611,39.026 C140.557,39.011 140.397,38.967 140.131,38.894 C139.864,38.820 139.691,38.766 139.611,38.731 C139.557,38.716 139.444,38.655 139.271,38.547 C139.097,38.440 138.984,38.378 138.931,38.363 L138.611,38.435 L138.211,38.525 C138.104,38.549 137.984,38.610 137.851,38.706 C137.717,38.803 137.584,38.906 137.451,39.016 C137.264,39.138 137.044,39.295 136.791,39.485 C136.537,39.676 136.384,39.776 136.331,39.788 C136.304,39.821 136.164,39.886 135.911,39.983 C135.657,40.080 135.464,40.157 135.331,40.213 C135.277,40.225 135.157,40.259 134.971,40.314 C134.784,40.370 134.584,40.435 134.371,40.509 C134.157,40.584 133.944,40.652 133.731,40.713 C133.517,40.775 133.357,40.817 133.251,40.841 L133.091,40.877 L132.931,40.913 C132.877,40.925 132.697,40.919 132.391,40.894 C132.084,40.870 131.864,40.846 131.731,40.823 C131.571,40.806 131.391,40.786 131.191,40.764 C130.991,40.743 130.824,40.680 130.691,40.577 C130.637,40.509 130.524,40.361 130.351,40.133 C130.186,39.918 130.080,39.779 130.023,39.706 C129.959,39.768 129.900,39.826 129.831,39.890 C129.524,40.173 129.304,40.355 129.171,40.438 C128.877,40.718 128.591,40.936 128.311,41.092 C128.031,41.248 127.624,41.520 127.091,41.906 C127.037,41.918 126.884,41.999 126.631,42.149 C126.377,42.300 126.197,42.387 126.091,42.411 C125.824,42.524 125.497,42.704 125.111,42.951 C124.724,43.198 124.491,43.344 124.411,43.389 L123.971,43.488 L123.411,43.614 C123.251,43.623 122.997,43.647 122.651,43.685 C122.304,43.723 122.104,43.748 122.051,43.759 C121.997,43.745 121.904,43.706 121.771,43.642 C121.637,43.579 121.557,43.537 121.531,43.516 C121.477,43.502 121.331,43.495 121.091,43.495 C120.851,43.496 120.704,43.489 120.651,43.474 C120.597,43.460 120.531,43.441 120.451,43.419 C120.371,43.397 120.331,43.373 120.331,43.346 C120.304,43.352 120.271,43.320 120.231,43.249 C120.191,43.178 120.171,43.116 120.171,43.062 C120.117,42.941 120.044,42.765 119.951,42.532 C119.890,42.381 119.856,42.282 119.835,42.206 C119.781,42.262 119.720,42.325 119.651,42.399 C119.385,42.686 119.185,42.884 119.051,42.994 C119.025,43.000 118.965,43.034 118.871,43.095 C118.778,43.156 118.731,43.200 118.731,43.226 C118.571,43.316 118.305,43.516 117.931,43.826 C117.558,44.137 117.211,44.368 116.891,44.520 C116.465,44.749 116.105,44.923 115.811,45.043 C115.518,45.162 115.238,45.258 114.971,45.332 C114.705,45.405 114.451,45.462 114.211,45.503 C113.971,45.543 113.705,45.597 113.411,45.662 C113.358,45.675 113.291,45.663 113.211,45.627 C113.131,45.592 113.065,45.594 113.011,45.632 C112.771,45.553 112.551,45.483 112.351,45.421 C112.151,45.360 111.985,45.250 111.851,45.093 C111.798,45.052 111.738,44.979 111.671,44.874 C111.605,44.769 111.571,44.703 111.571,44.676 C111.518,44.235 111.551,43.741 111.671,43.194 C111.791,42.647 111.878,42.167 111.931,41.755 C111.905,41.761 111.851,41.793 111.771,41.851 C111.691,41.909 111.625,41.958 111.571,41.996 C111.331,42.264 111.138,42.481 110.991,42.647 C110.845,42.813 110.705,42.971 110.571,43.121 C110.438,43.271 110.345,43.379 110.291,43.444 C110.211,43.489 110.098,43.581 109.951,43.721 C109.805,43.860 109.651,44.008 109.491,44.164 C109.331,44.320 109.185,44.460 109.051,44.583 C108.918,44.707 108.811,44.791 108.731,44.835 C108.651,44.907 108.525,45.008 108.351,45.140 C108.178,45.273 108.005,45.398 107.831,45.517 C107.658,45.636 107.505,45.744 107.371,45.841 C107.238,45.938 107.158,46.002 107.131,46.035 C106.971,46.151 106.751,46.274 106.471,46.403 C106.191,46.533 105.985,46.479 105.851,46.243 L105.851,46.083 C105.851,45.816 105.885,45.582 105.951,45.380 C106.018,45.179 106.345,44.852 106.931,44.400 C107.278,44.135 107.625,43.857 107.971,43.566 C108.318,43.275 108.678,42.961 109.051,42.623 C109.425,42.286 109.838,41.906 110.291,41.484 C110.745,41.062 111.265,40.559 111.851,39.973 C111.878,39.941 111.998,39.814 112.211,39.592 C112.425,39.371 112.585,39.208 112.691,39.104 C112.718,39.072 112.785,38.997 112.891,38.879 C112.998,38.762 113.118,38.635 113.251,38.498 C113.385,38.362 113.511,38.227 113.631,38.093 C113.751,37.960 113.838,37.860 113.891,37.795 C113.998,37.771 114.051,37.705 114.051,37.599 C114.265,37.284 114.471,36.958 114.671,36.619 C114.871,36.281 115.065,35.944 115.251,35.609 C115.305,35.544 115.398,35.383 115.531,35.126 C115.665,34.869 115.745,34.712 115.771,34.652 C115.825,34.560 115.938,34.361 116.111,34.055 C116.285,33.750 116.398,33.551 116.451,33.459 C116.478,33.427 116.565,33.300 116.711,33.080 C116.858,32.861 116.945,32.722 116.971,32.662 C117.025,32.597 117.138,32.404 117.311,32.085 C117.485,31.766 117.598,31.575 117.651,31.509 C117.678,31.477 117.731,31.391 117.811,31.253 C117.891,31.115 117.978,30.969 118.071,30.814 C118.165,30.660 118.251,30.514 118.331,30.376 C118.411,30.238 118.465,30.153 118.491,30.120 C118.518,30.061 118.578,29.954 118.671,29.800 C118.765,29.645 118.825,29.552 118.851,29.519 C118.905,29.454 119.038,29.271 119.251,28.969 C119.465,28.668 119.611,28.442 119.691,28.290 C119.718,28.284 119.751,28.250 119.791,28.188 C119.831,28.126 119.865,28.091 119.891,28.085 C119.971,27.934 120.098,27.713 120.271,27.420 C120.445,27.128 120.545,26.952 120.571,26.892 C120.571,26.866 120.558,26.809 120.531,26.721 C120.505,26.634 120.491,26.577 120.491,26.550 C120.438,26.562 120.338,26.592 120.191,26.638 C120.045,26.684 119.945,26.713 119.891,26.725 C119.838,26.737 119.745,26.732 119.611,26.708 C119.478,26.685 119.398,26.676 119.371,26.682 C119.318,26.668 119.171,26.667 118.931,26.681 C118.691,26.695 118.545,26.695 118.491,26.680 C118.411,26.672 118.238,26.657 117.971,26.637 C117.705,26.617 117.545,26.600 117.491,26.585 C117.465,26.565 117.431,26.538 117.391,26.507 C117.351,26.476 117.331,26.448 117.331,26.421 C117.278,26.407 117.231,26.363 117.191,26.292 C117.151,26.221 117.131,26.173 117.131,26.146 L117.131,25.866 L117.131,25.626 C117.158,25.594 117.211,25.548 117.291,25.490 C117.371,25.432 117.438,25.397 117.491,25.385 L122.251,24.314 C122.278,24.309 122.378,24.200 122.551,23.987 C122.725,23.775 122.865,23.603 122.971,23.472 C123.105,23.309 123.311,23.030 123.591,22.633 C123.871,22.237 124.118,21.908 124.331,21.647 C124.411,21.522 124.478,21.428 124.531,21.362 C124.585,21.297 124.625,21.248 124.651,21.215 C124.705,21.150 124.825,20.976 125.011,20.694 C125.198,20.412 125.305,20.242 125.331,20.182 C125.385,20.090 125.471,19.964 125.591,19.803 C125.711,19.643 125.838,19.475 125.971,19.298 C126.105,19.122 126.225,18.961 126.331,18.817 C126.438,18.673 126.505,18.585 126.531,18.552 L127.891,16.886 C127.918,16.880 127.965,16.863 128.031,16.835 C128.098,16.807 128.145,16.789 128.171,16.783 C128.198,16.777 128.278,16.773 128.411,16.769 C128.465,16.784 128.558,16.843 128.691,16.946 C128.825,17.050 128.905,17.125 128.931,17.172 C128.958,17.273 128.971,17.350 128.971,17.403 C128.971,17.430 128.965,17.478 128.951,17.548 C128.938,17.618 128.931,17.666 128.931,17.692 C128.905,17.752 128.851,17.924 128.771,18.208 C128.691,18.493 128.638,18.678 128.611,18.764 C128.585,18.797 128.531,18.889 128.451,19.040 C128.371,19.192 128.305,19.300 128.251,19.365 C127.958,19.885 127.651,20.387 127.331,20.872 C127.011,21.358 126.691,21.850 126.371,22.348 C126.345,22.408 126.291,22.506 126.211,22.644 C126.131,22.782 126.065,22.884 126.011,22.949 C125.985,23.009 125.951,23.082 125.911,23.171 C125.871,23.260 125.851,23.319 125.851,23.345 C125.851,23.452 125.905,23.493 126.011,23.469 L134.931,21.463 L135.251,21.711 C135.305,21.806 135.425,22.006 135.611,22.310 L135.411,22.555 C135.118,22.648 134.858,22.733 134.631,22.810 C134.405,22.888 134.178,22.959 133.951,23.023 C133.725,23.088 133.531,23.138 133.371,23.174 L131.171,23.668 C131.118,23.680 130.971,23.740 130.731,23.847 C130.491,23.955 130.345,24.014 130.291,24.026 L129.851,24.125 L129.091,24.296 L128.331,24.467 L127.891,24.566 C127.758,24.596 127.538,24.659 127.231,24.754 C126.925,24.850 126.605,24.942 126.271,25.030 C125.938,25.119 125.618,25.211 125.311,25.306 C125.005,25.402 124.785,25.465 124.651,25.495 L124.331,25.887 C124.278,25.979 124.145,26.202 123.931,26.557 C123.718,26.912 123.518,27.243 123.331,27.552 C123.251,27.730 123.145,27.887 123.011,28.024 C122.878,28.160 122.745,28.324 122.611,28.513 C122.585,28.546 122.505,28.671 122.371,28.887 C122.238,29.104 122.145,29.245 122.091,29.310 L120.891,30.780 C120.785,30.938 120.658,31.133 120.511,31.366 C120.365,31.599 120.238,31.781 120.131,31.911 C119.971,32.107 119.818,32.322 119.671,32.555 C119.525,32.788 119.425,32.937 119.371,33.002 C119.265,33.133 119.071,33.370 118.791,33.713 C118.511,34.056 118.218,34.408 117.911,34.770 C117.605,35.133 117.311,35.485 117.031,35.828 C116.751,36.171 116.558,36.409 116.451,36.539 C116.425,36.599 116.371,36.697 116.291,36.835 C116.211,36.973 116.158,37.072 116.131,37.131 C116.078,37.197 115.958,37.364 115.771,37.632 C115.585,37.901 115.478,38.065 115.451,38.124 C115.398,38.243 115.305,38.457 115.171,38.767 C115.038,39.077 114.891,39.410 114.731,39.766 C114.571,40.122 114.418,40.463 114.271,40.789 C114.125,41.116 114.025,41.338 113.971,41.457 C113.811,41.892 113.705,42.330 113.651,42.768 C113.598,43.207 113.651,43.435 113.811,43.452 C113.838,43.473 113.985,43.507 114.251,43.554 C114.518,43.601 114.945,43.551 115.531,43.406 C116.118,43.261 116.798,42.928 117.571,42.407 C117.758,42.339 117.978,42.202 118.231,41.998 C118.485,41.795 118.738,41.618 118.991,41.468 C119.245,41.318 119.485,41.244 119.711,41.246 C119.741,41.246 119.768,41.256 119.796,41.262 C119.800,41.213 119.805,41.162 119.811,41.103 C119.811,41.050 119.864,40.918 119.971,40.707 C120.077,40.497 120.144,40.362 120.171,40.302 C120.171,40.276 120.191,40.165 120.231,39.969 C120.271,39.774 120.304,39.646 120.331,39.586 C120.384,39.441 120.471,39.235 120.591,38.968 C120.711,38.701 120.811,38.452 120.891,38.220 C120.917,38.081 120.957,37.979 121.011,37.913 C121.037,37.854 121.144,37.690 121.331,37.421 C121.517,37.153 121.637,36.986 121.691,36.920 C121.744,36.829 121.837,36.681 121.971,36.477 C122.104,36.274 122.184,36.143 122.211,36.084 C122.317,35.873 122.371,35.754 122.371,35.728 C122.504,35.484 122.631,35.283 122.751,35.122 C122.871,34.962 123.024,34.754 123.211,34.499 C123.264,34.460 123.357,34.333 123.491,34.116 C123.624,33.899 123.704,33.761 123.731,33.702 C123.837,33.545 124.064,33.214 124.411,32.709 C124.464,32.644 124.611,32.518 124.851,32.330 C125.091,32.143 125.237,32.030 125.291,31.991 C125.344,31.926 125.484,31.781 125.711,31.556 C125.937,31.332 126.077,31.188 126.131,31.122 C126.184,31.057 126.271,30.970 126.391,30.863 C126.511,30.756 126.597,30.684 126.651,30.645 C127.024,30.348 127.431,30.063 127.871,29.791 C128.311,29.519 128.757,29.331 129.211,29.229 L129.571,29.148 C129.597,29.142 129.651,29.150 129.731,29.172 C129.811,29.194 129.864,29.216 129.891,29.236 C130.077,29.248 130.197,29.341 130.251,29.515 L130.251,30.115 L130.251,30.715 C130.251,30.742 130.231,30.827 130.191,30.969 C130.151,31.112 130.104,31.215 130.051,31.280 C129.997,31.426 129.911,31.659 129.791,31.979 C129.671,32.300 129.597,32.489 129.571,32.548 C129.517,32.667 129.431,32.847 129.311,33.087 C129.191,33.328 129.104,33.480 129.051,33.545 C128.997,33.611 128.877,33.751 128.691,33.966 C128.504,34.182 128.397,34.319 128.371,34.378 C128.344,34.411 128.297,34.482 128.231,34.590 C128.164,34.698 128.091,34.821 128.011,34.959 C127.931,35.097 127.857,35.227 127.791,35.349 C127.724,35.471 127.691,35.545 127.691,35.571 C127.637,35.663 127.544,35.811 127.411,36.014 C127.277,36.218 127.197,36.336 127.171,36.368 C127.144,36.401 127.057,36.474 126.911,36.587 C126.764,36.700 126.677,36.773 126.651,36.805 C126.571,36.903 126.431,37.074 126.231,37.319 C126.031,37.564 125.817,37.819 125.591,38.083 C125.364,38.348 125.151,38.602 124.951,38.847 C124.751,39.092 124.611,39.264 124.531,39.362 C124.397,39.446 124.244,39.573 124.071,39.745 C123.897,39.918 123.731,40.089 123.571,40.258 C123.491,40.329 123.317,40.528 123.051,40.855 C122.784,41.181 122.611,41.394 122.531,41.492 L122.531,41.572 L122.531,41.652 L122.731,41.807 C122.784,41.821 122.897,41.829 123.071,41.830 C123.244,41.831 123.357,41.826 123.411,41.814 L124.291,41.616 C124.397,41.592 124.597,41.561 124.891,41.521 C124.971,41.503 125.191,41.373 125.551,41.132 C125.911,40.891 126.171,40.727 126.331,40.637 C126.357,40.631 126.464,40.554 126.651,40.405 C126.704,40.393 126.831,40.351 127.031,40.280 C127.231,40.208 127.357,40.153 127.411,40.114 C127.811,39.891 128.171,39.637 128.491,39.351 C128.811,39.066 129.131,38.834 129.451,38.655 C129.477,38.649 129.557,38.578 129.691,38.441 C129.754,38.377 129.806,38.326 129.851,38.283 L129.851,38.005 C129.851,37.952 129.871,37.815 129.911,37.592 C129.951,37.370 129.984,37.216 130.011,37.129 C130.037,37.097 130.071,37.030 130.111,36.927 C130.151,36.825 130.184,36.757 130.211,36.724 C130.211,36.698 130.244,36.591 130.311,36.402 C130.377,36.214 130.451,36.017 130.531,35.813 C130.611,35.608 130.684,35.418 130.751,35.243 C130.817,35.068 130.864,34.951 130.891,34.892 C130.891,34.838 130.911,34.767 130.951,34.678 C130.991,34.589 131.024,34.528 131.051,34.496 C131.077,34.437 131.184,34.273 131.371,34.004 C131.557,33.735 131.677,33.568 131.731,33.503 C131.757,33.444 131.817,33.337 131.911,33.182 C132.004,33.028 132.064,32.935 132.091,32.902 C132.091,32.875 132.137,32.805 132.231,32.690 C132.324,32.576 132.384,32.503 132.411,32.470 C132.464,32.405 132.577,32.239 132.751,31.973 C132.924,31.708 133.037,31.543 133.091,31.477 C133.171,31.379 133.311,31.207 133.511,30.962 C133.711,30.717 133.924,30.463 134.151,30.198 C134.377,29.934 134.584,29.688 134.771,29.459 C134.957,29.231 135.091,29.067 135.171,28.969 C135.197,28.910 135.331,28.760 135.571,28.519 C135.811,28.279 135.957,28.139 136.011,28.100 C136.064,28.062 136.171,27.984 136.331,27.868 C136.544,27.660 136.797,27.457 137.091,27.257 C137.384,27.058 137.597,26.917 137.731,26.833 C137.971,26.726 138.157,26.637 138.291,26.567 C138.424,26.497 138.557,26.427 138.691,26.357 C138.824,26.287 138.904,26.249 138.931,26.243 C138.957,26.211 139.037,26.160 139.171,26.089 C139.304,26.020 139.384,25.968 139.411,25.935 L139.771,25.855 L140.091,25.783 C140.224,25.779 140.417,25.769 140.671,25.752 C140.924,25.735 141.077,25.735 141.131,25.749 C141.157,25.743 141.237,25.765 141.371,25.815 C141.504,25.865 141.597,25.911 141.651,25.952 L142.171,26.355 C142.224,26.397 142.291,26.468 142.371,26.570 C142.451,26.672 142.491,26.750 142.491,26.803 C142.517,26.824 142.551,26.916 142.591,27.080 C142.631,27.245 142.664,27.364 142.691,27.438 C142.717,27.566 142.751,27.771 142.791,28.055 C142.831,28.340 142.851,28.522 142.851,28.602 L142.851,29.122 L142.851,29.602 C142.851,29.656 142.831,29.793 142.791,30.015 C142.751,30.238 142.711,30.467 142.671,30.702 C142.631,30.938 142.591,31.160 142.551,31.369 C142.511,31.578 142.491,31.710 142.491,31.763 C142.491,31.817 142.497,31.955 142.511,32.178 C142.524,32.402 142.517,32.544 142.491,32.603 C142.491,32.630 142.404,32.836 142.231,33.221 C142.057,33.607 141.917,33.906 141.811,34.116 C141.784,34.176 141.724,34.289 141.631,34.456 C141.537,34.624 141.444,34.805 141.351,34.999 C141.257,35.194 141.171,35.380 141.091,35.558 C141.011,35.736 140.971,35.838 140.971,35.865 C140.944,36.111 140.931,36.261 140.931,36.314 C140.931,36.394 140.944,36.578 140.971,36.865 C140.971,36.892 140.991,36.920 141.031,36.951 C141.071,36.982 141.104,37.008 141.131,37.029 C141.184,37.044 141.324,37.045 141.551,37.034 C141.777,37.023 141.917,37.012 141.971,37.000 L142.930,36.784 C142.958,36.739 142.985,36.704 143.010,36.686 C143.037,36.654 143.124,36.560 143.270,36.408 C143.417,36.254 143.517,36.146 143.570,36.080 C143.677,36.030 143.930,35.819 144.330,35.449 C144.730,35.079 145.184,34.651 145.690,34.163 C146.196,33.676 146.710,33.188 147.230,32.697 C147.750,32.207 148.196,31.800 148.570,31.476 C148.623,31.411 148.816,31.267 149.150,31.045 C149.483,30.824 149.843,30.589 150.230,30.342 C150.616,30.095 150.976,29.874 151.310,29.679 C151.643,29.484 151.836,29.381 151.890,29.369 C151.943,29.357 152.136,29.300 152.470,29.199 C152.803,29.097 153.050,29.028 153.210,28.992 C153.690,28.884 154.163,28.978 154.630,29.273 C155.096,29.568 155.290,30.084 155.210,30.822 C155.236,30.816 155.303,30.808 155.410,30.797 C155.516,30.787 155.583,30.778 155.610,30.772 C155.956,30.695 156.350,30.500 156.790,30.187 C157.230,29.875 157.916,29.454 158.850,28.924 C158.903,28.859 159.043,28.787 159.270,28.709 C159.496,28.632 159.636,28.587 159.690,28.575 C159.716,28.543 159.863,28.496 160.130,28.436 L160.730,28.301 L161.250,28.184 C161.463,28.136 161.570,28.126 161.570,28.152 C161.596,28.146 161.716,28.186 161.930,28.271 C162.143,28.357 162.316,28.411 162.450,28.434 C162.450,28.488 162.483,28.527 162.550,28.552 C162.616,28.577 162.676,28.663 162.730,28.811 C162.836,28.974 162.943,29.170 163.050,29.399 C163.156,29.629 163.236,29.764 163.290,29.805 C163.290,29.912 163.343,29.953 163.450,29.929 L163.610,29.893 L163.810,29.848 C164.236,29.619 164.710,29.333 165.230,28.989 C165.750,28.646 166.303,28.221 166.890,27.716 C166.916,27.710 167.010,27.642 167.170,27.513 C167.330,27.384 167.503,27.245 167.690,27.096 C167.876,26.948 168.050,26.808 168.210,26.679 C168.370,26.550 168.463,26.469 168.490,26.436 C168.623,26.326 168.816,26.156 169.070,25.925 C169.323,25.695 169.476,25.561 169.530,25.522 L169.690,25.486 L169.850,25.450 C169.930,25.486 170.036,25.548 170.170,25.638 C170.303,25.728 170.370,25.800 170.370,25.853 C170.396,26.087 170.410,26.244 170.410,26.324 C170.410,26.378 170.403,26.479 170.390,26.628 C170.376,26.778 170.370,26.867 170.370,26.893 L170.210,27.249 C170.130,27.401 170.003,27.622 169.830,27.914 C169.656,28.207 169.556,28.383 169.530,28.442 C169.503,28.475 169.416,28.574 169.270,28.740 C169.123,28.907 169.036,29.020 169.010,29.079 C168.983,29.112 168.950,29.172 168.910,29.261 C168.870,29.350 168.850,29.409 168.850,29.435 C168.850,29.462 168.843,29.496 168.830,29.539 C168.816,29.582 168.810,29.618 168.810,29.644 C168.810,29.671 168.823,29.721 168.850,29.795 C168.850,30.489 169.096,30.846 169.590,30.868 C170.083,30.891 170.630,30.781 171.230,30.540 C171.830,30.298 172.390,30.012 172.910,29.682 C173.430,29.352 173.716,29.180 173.770,29.168 C173.823,29.156 173.956,29.080 174.170,28.938 C174.383,28.797 174.516,28.707 174.570,28.668 L174.770,28.623 L174.930,28.507 C174.983,28.576 175.096,28.730 175.270,28.971 C175.443,29.212 175.583,29.361 175.690,29.417 L175.690,29.497 L175.690,29.577 C175.636,29.642 175.536,29.725 175.390,29.824 ZM122.971,26.353 C123.025,26.287 123.051,26.228 123.051,26.175 C123.051,26.121 123.025,26.074 122.971,26.033 C122.918,25.991 122.891,26.064 122.891,26.250 C122.891,26.384 122.918,26.418 122.971,26.353 ZM121.231,28.724 C121.245,28.761 121.251,28.793 121.251,28.819 C121.278,28.760 121.331,28.688 121.411,28.603 C121.491,28.519 121.545,28.447 121.571,28.387 C121.678,28.230 121.818,28.019 121.991,27.753 C122.165,27.488 122.305,27.269 122.411,27.098 C122.518,26.928 122.585,26.826 122.611,26.793 L122.611,26.633 C122.585,26.640 122.531,26.671 122.451,26.729 C122.371,26.787 122.305,26.836 122.251,26.874 L121.931,27.266 C121.851,27.418 121.725,27.640 121.551,27.932 C121.378,28.225 121.278,28.400 121.251,28.459 C121.225,28.545 121.211,28.602 121.211,28.628 C121.211,28.655 121.218,28.687 121.231,28.724 ZM120.891,29.220 C120.945,29.208 120.971,29.189 120.971,29.162 C120.971,29.136 120.945,29.102 120.891,29.060 C120.838,29.019 120.811,29.052 120.811,29.158 C120.811,29.265 120.838,29.286 120.891,29.220 ZM123.071,39.290 C123.244,39.118 123.357,39.013 123.411,38.974 C123.544,38.837 123.711,38.680 123.911,38.501 C124.111,38.323 124.224,38.231 124.251,38.225 C124.331,38.127 124.464,37.971 124.651,37.755 C124.837,37.540 125.044,37.306 125.271,37.055 C125.497,36.804 125.704,36.572 125.891,36.356 C126.077,36.141 126.211,35.984 126.291,35.886 C126.317,35.854 126.391,35.757 126.511,35.596 C126.631,35.436 126.764,35.260 126.911,35.067 C127.057,34.874 127.184,34.699 127.291,34.541 C127.397,34.384 127.464,34.276 127.491,34.216 C127.517,34.184 127.604,34.084 127.751,33.918 C127.897,33.752 127.984,33.652 128.011,33.619 C128.091,33.468 128.217,33.220 128.391,32.874 C128.564,32.528 128.664,32.326 128.691,32.266 C128.717,32.180 128.751,32.013 128.791,31.764 C128.831,31.515 128.851,31.364 128.851,31.310 C128.797,31.322 128.711,31.349 128.591,31.389 C128.471,31.429 128.397,31.452 128.371,31.458 C128.237,31.515 128.117,31.609 128.011,31.739 C127.931,31.811 127.764,31.982 127.511,32.252 C127.257,32.522 127.011,32.764 126.771,32.978 C126.637,33.142 126.504,33.258 126.371,33.328 C126.237,33.398 126.104,33.475 125.971,33.558 C125.864,33.582 125.811,33.648 125.811,33.754 C125.784,33.787 125.744,33.843 125.691,33.921 C125.637,34.000 125.557,34.118 125.451,34.275 C125.264,34.531 125.144,34.691 125.091,34.756 C125.037,34.822 124.904,34.998 124.691,35.286 C124.557,35.476 124.404,35.697 124.231,35.949 C124.057,36.202 123.891,36.439 123.731,36.662 C123.571,36.885 123.424,37.091 123.291,37.281 C123.157,37.471 123.077,37.582 123.051,37.615 C122.997,37.707 122.911,37.880 122.791,38.133 C122.671,38.387 122.544,38.655 122.411,38.939 C122.277,39.222 122.157,39.489 122.051,39.739 C121.944,39.990 121.877,40.172 121.851,40.284 L121.931,40.266 L122.051,40.239 C122.317,39.993 122.477,39.837 122.531,39.772 C122.717,39.623 122.897,39.463 123.071,39.290 ZM141.031,32.031 C141.204,31.739 141.291,31.566 141.291,31.513 C141.317,31.454 141.351,31.226 141.391,30.830 C141.431,30.435 141.464,30.128 141.491,29.908 L141.491,29.188 L141.491,28.548 C141.411,28.406 141.344,28.314 141.291,28.273 C141.264,28.226 141.211,28.151 141.131,28.049 C141.051,27.947 140.997,27.873 140.971,27.825 L140.811,27.701 C140.757,27.686 140.664,27.674 140.531,27.664 C140.397,27.654 140.317,27.639 140.291,27.618 L139.811,27.726 L139.411,27.815 L137.371,28.954 C137.317,28.993 137.251,29.041 137.171,29.099 C137.091,29.157 137.051,29.200 137.051,29.226 C136.997,29.265 136.917,29.350 136.811,29.480 C136.704,29.611 136.584,29.765 136.451,29.941 C136.317,30.118 136.191,30.280 136.071,30.427 C135.951,30.574 135.877,30.664 135.851,30.696 C135.824,30.729 135.757,30.797 135.651,30.901 C135.544,31.005 135.431,31.117 135.311,31.238 C135.191,31.358 135.084,31.469 134.991,31.570 C134.897,31.671 134.837,31.738 134.811,31.770 L134.451,32.211 C134.397,32.303 134.324,32.419 134.231,32.560 C134.137,32.702 134.037,32.844 133.931,32.988 C133.824,33.132 133.724,33.261 133.631,33.375 C133.537,33.490 133.477,33.564 133.451,33.596 C133.424,33.629 133.377,33.706 133.311,33.827 C133.244,33.949 133.171,34.079 133.091,34.217 C133.011,34.355 132.904,34.546 132.771,34.789 C132.744,34.822 132.711,34.862 132.671,34.911 C132.631,34.960 132.597,34.988 132.571,34.994 C132.571,35.101 132.537,35.201 132.471,35.296 C132.404,35.391 132.331,35.515 132.251,35.666 C132.171,35.817 132.064,36.021 131.931,36.278 C131.797,36.535 131.731,36.690 131.731,36.743 C131.677,37.048 131.631,37.292 131.591,37.474 C131.551,37.657 131.511,37.852 131.471,38.061 C131.431,38.270 131.397,38.431 131.371,38.544 L131.371,38.624 L131.371,38.704 C131.397,38.725 131.431,38.770 131.471,38.841 C131.511,38.912 131.544,38.958 131.571,38.979 C131.571,39.006 131.591,39.034 131.631,39.065 C131.671,39.096 131.704,39.122 131.731,39.143 C131.757,39.137 131.837,39.139 131.971,39.149 C132.104,39.159 132.197,39.172 132.251,39.186 C132.331,39.195 132.457,39.199 132.631,39.200 C132.804,39.201 132.904,39.199 132.931,39.193 C132.957,39.187 133.111,39.159 133.391,39.109 C133.671,39.060 133.877,39.020 134.011,38.990 C134.171,38.954 134.391,38.898 134.671,38.821 C134.951,38.745 135.117,38.701 135.171,38.689 C135.197,38.683 135.337,38.632 135.591,38.535 C135.844,38.438 136.037,38.361 136.171,38.304 C136.224,38.266 136.337,38.207 136.511,38.128 C136.684,38.049 136.797,38.003 136.851,37.991 C136.931,37.893 137.051,37.800 137.211,37.710 C137.237,37.704 137.304,37.656 137.411,37.565 C137.517,37.475 137.624,37.377 137.731,37.273 C137.837,37.169 137.937,37.074 138.031,36.986 C138.124,36.899 138.184,36.838 138.211,36.805 C138.237,36.799 138.271,36.772 138.311,36.723 C138.351,36.674 138.384,36.633 138.411,36.600 C138.464,36.535 138.551,36.403 138.671,36.202 C138.791,36.002 138.877,35.869 138.931,35.803 C138.984,35.711 139.097,35.513 139.271,35.207 C139.444,34.902 139.557,34.703 139.611,34.611 C139.637,34.578 139.671,34.517 139.711,34.428 C139.751,34.339 139.771,34.281 139.771,34.255 C139.771,34.201 139.791,34.077 139.831,33.881 C139.871,33.686 139.904,33.571 139.931,33.539 C139.957,33.480 140.071,33.334 140.271,33.102 C140.471,32.871 140.584,32.739 140.611,32.706 C140.717,32.549 140.857,32.324 141.031,32.031 ZM28.383,18.026 L28.383,16.782 L35.787,16.782 L35.787,18.772 C35.787,19.270 35.755,19.719 35.694,20.119 C35.631,20.522 35.524,20.881 35.366,21.194 C35.211,21.506 35.001,21.777 34.741,22.005 C34.478,22.233 34.147,22.422 33.748,22.568 C33.346,22.716 32.870,22.825 32.316,22.894 C31.761,22.966 31.115,23.000 30.374,23.000 L26.412,23.000 C25.508,23.000 24.747,22.944 24.129,22.833 C23.512,22.721 23.002,22.555 22.600,22.329 C22.201,22.103 21.890,21.819 21.673,21.477 C21.455,21.135 21.297,20.732 21.197,20.273 C21.097,19.812 21.039,19.289 21.024,18.711 C21.008,18.130 21.000,17.488 21.000,16.782 C21.000,16.077 21.008,15.435 21.024,14.854 C21.039,14.275 21.097,13.753 21.197,13.291 C21.297,12.832 21.455,12.429 21.673,12.087 C21.890,11.745 22.201,11.461 22.600,11.236 C23.002,11.010 23.512,10.843 24.129,10.732 C24.747,10.620 25.508,10.564 26.412,10.564 L30.366,10.564 C31.107,10.564 31.753,10.599 32.308,10.671 C32.862,10.740 33.338,10.846 33.740,10.989 C34.139,11.130 34.473,11.310 34.735,11.528 C35.001,11.745 35.211,12.002 35.366,12.297 C35.524,12.594 35.631,12.928 35.694,13.300 C35.755,13.673 35.787,14.087 35.787,14.543 L34.307,14.543 C34.307,13.923 34.241,13.429 34.108,13.066 C33.973,12.705 33.753,12.429 33.445,12.244 C33.138,12.058 32.733,11.939 32.229,11.885 C31.727,11.835 31.107,11.809 30.366,11.809 L26.412,11.809 C25.755,11.809 25.201,11.827 24.754,11.867 C24.305,11.907 23.935,11.983 23.641,12.103 C23.349,12.222 23.123,12.395 22.965,12.618 C22.805,12.841 22.689,13.135 22.619,13.504 C22.545,13.870 22.505,14.323 22.495,14.859 C22.484,15.395 22.479,16.037 22.479,16.782 C22.479,17.527 22.484,18.169 22.498,18.705 C22.511,19.241 22.553,19.695 22.626,20.061 C22.697,20.430 22.810,20.724 22.968,20.947 C23.126,21.170 23.349,21.342 23.641,21.462 C23.935,21.581 24.305,21.658 24.754,21.698 C25.201,21.737 25.755,21.756 26.412,21.756 L30.374,21.756 C30.950,21.756 31.444,21.740 31.861,21.708 C32.276,21.679 32.629,21.621 32.923,21.538 C33.214,21.456 33.451,21.342 33.629,21.196 C33.811,21.050 33.950,20.870 34.050,20.650 C34.150,20.430 34.218,20.164 34.255,19.856 C34.289,19.549 34.307,19.186 34.307,18.772 L34.307,18.026 L28.383,18.026 ZM39.730,10.814 L39.730,21.506 L49.088,21.506 L49.088,22.751 L38.251,22.751 L38.251,10.814 L39.730,10.814 ZM52.538,10.814 L52.538,22.751 L51.059,22.751 L51.059,10.814 L52.538,10.814 ZM72.002,9.758 C72.729,9.233 73.161,9.912 73.089,10.450 C73.017,10.988 72.760,12.526 71.188,12.288 C69.615,12.048 68.927,12.647 68.457,12.911 C67.988,13.176 68.233,13.838 68.837,13.894 C69.442,13.950 70.563,13.224 71.502,13.216 C72.441,13.208 72.251,14.280 71.420,15.292 C70.589,16.304 68.549,16.058 67.717,16.171 C66.887,16.283 66.968,17.320 67.790,17.183 C68.611,17.046 69.144,17.260 68.399,18.234 C67.654,19.207 66.246,18.959 65.552,18.847 C64.859,18.736 64.556,19.490 65.390,19.614 C66.222,19.738 65.685,20.494 65.017,20.621 C64.685,20.685 64.172,20.881 63.689,21.111 L62.879,22.666 L60.712,22.666 L54.506,10.730 L56.222,10.730 L61.891,21.666 L62.494,20.506 C62.445,20.360 62.375,20.184 62.288,19.954 C61.994,19.179 62.254,19.017 62.765,18.544 C63.277,18.070 62.566,17.649 62.329,17.154 C62.092,16.658 61.742,15.868 62.264,15.277 C62.786,14.686 63.589,15.400 63.838,15.754 C64.088,16.108 64.551,16.435 64.731,15.741 C64.911,15.048 63.588,14.277 62.678,13.696 C61.769,13.115 62.087,12.302 62.356,11.924 C62.624,11.546 62.853,11.354 62.722,10.727 C62.591,10.099 63.167,9.737 63.749,9.790 C64.331,9.843 64.736,11.267 65.009,11.884 C65.282,12.501 65.740,12.614 65.973,12.115 C66.206,11.615 65.487,11.004 65.098,10.116 C64.709,9.228 64.980,8.827 65.173,8.513 C65.365,8.200 65.773,8.095 65.638,7.514 C65.504,6.934 66.286,6.318 66.852,6.798 C67.418,7.276 67.042,8.590 67.069,9.066 C67.097,9.542 67.667,9.453 67.944,9.242 C68.222,9.031 67.987,8.512 67.818,8.046 C67.649,7.581 67.960,6.994 68.309,6.765 C68.658,6.538 69.148,6.559 69.711,6.303 C70.274,6.047 70.750,5.831 71.012,6.186 C71.273,6.542 71.116,6.575 71.517,7.345 C71.917,8.116 71.958,8.688 71.387,9.038 C70.817,9.388 70.002,9.834 70.316,10.242 C70.632,10.649 71.274,10.282 72.002,9.758 ZM86.172,21.506 L86.172,22.751 L74.350,22.751 L74.350,10.814 L86.172,10.814 L86.172,12.058 L75.828,12.058 L75.828,16.034 L85.678,16.034 L85.678,17.279 L75.828,17.279 L75.828,21.506 L86.172,21.506 ZM88.142,22.751 L88.142,10.814 L96.510,10.814 C97.411,10.814 98.173,10.846 98.791,10.912 C99.411,10.976 99.920,11.074 100.322,11.201 C100.727,11.331 101.037,11.493 101.255,11.684 C101.473,11.875 101.631,12.101 101.731,12.360 C101.831,12.620 101.891,12.909 101.909,13.230 C101.928,13.551 101.936,13.907 101.936,14.297 C101.936,14.793 101.902,15.231 101.831,15.605 C101.763,15.981 101.647,16.302 101.482,16.565 C101.316,16.830 101.098,17.040 100.827,17.199 C100.554,17.355 100.213,17.466 99.803,17.527 C100.213,17.591 100.541,17.700 100.788,17.854 C101.035,18.010 101.224,18.212 101.358,18.461 C101.492,18.711 101.579,19.005 101.623,19.347 C101.668,19.690 101.689,20.077 101.689,20.512 L101.689,22.751 L100.209,22.751 L100.209,20.512 C100.209,20.151 100.204,19.838 100.191,19.575 C100.179,19.316 100.133,19.090 100.060,18.905 C99.986,18.719 99.868,18.567 99.710,18.453 C99.550,18.339 99.324,18.252 99.033,18.191 C98.741,18.127 98.371,18.085 97.921,18.061 C97.472,18.037 96.918,18.026 96.264,18.026 L89.622,18.026 L89.622,22.751 L88.142,22.751 ZM89.622,16.782 L96.508,16.782 C97.165,16.782 97.720,16.772 98.169,16.748 C98.615,16.724 98.989,16.681 99.280,16.618 C99.571,16.557 99.797,16.469 99.958,16.355 C100.116,16.241 100.234,16.090 100.307,15.904 C100.381,15.718 100.426,15.493 100.439,15.233 C100.451,14.971 100.457,14.658 100.457,14.297 C100.457,13.960 100.451,13.668 100.439,13.427 C100.426,13.183 100.381,12.978 100.307,12.811 C100.234,12.647 100.115,12.514 99.958,12.416 C99.798,12.318 99.572,12.241 99.280,12.185 C98.989,12.132 98.615,12.098 98.169,12.082 C97.720,12.066 97.165,12.058 96.508,12.058 L89.622,12.058 L89.622,16.782 ZM105.123,22.751 L103.412,22.751 L110.154,10.814 L112.280,10.814 L119.000,22.751 L117.450,22.751 L115.913,20.016 L106.665,20.016 L105.123,22.751 ZM115.214,18.772 L111.297,11.801 L107.366,18.772 L115.214,18.772 ZM118.261,1.889 L17.739,1.889 C9.045,1.889 1.971,8.668 1.971,17.000 C1.971,25.332 9.045,32.111 17.739,32.111 L110.069,32.111 L110.069,34.000 L17.739,34.000 C7.958,34.000 0.000,26.373 0.000,17.000 C0.000,7.626 7.958,0.000 17.739,0.000 L118.261,0.000 C128.042,0.000 136.000,7.626 136.000,17.000 L134.029,17.000 C134.029,8.668 126.955,1.889 118.261,1.889 Z"
                        }))), r.default.createElement("a", {
                            className: "madeby_block",
                            target: "_blank",
                            href: "https://www.madebyvadim.com/",
                            title: "Designed by Vadim Sherbakov",
                            rel: "nofollow"
                        }, r.default.createElement("span", {
                            className: "madeby_block_title"
                        }, "Madebyvadim")))
                    }
                }]),
                t
        }();
        y.contextType = c.default;
        var w = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    i.TweenMax.from(n.link.current, 1, {
                        opacity: 0,
                        ease: Power2.easeOut
                    })
                }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.link = r.default.createRef(),
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("a", {
                            className: "selected_go_to_website",
                            ref: this.link,
                            href: "/"
                        }, "go to website")
                    }
                }]),
                t
        }();
        w.contextType = c.default;
        var g = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    n.context.windowWidth > 1023 ? i.TweenMax.staggerFrom([n.social_1.current, n.social_2.current, n.social_3.current, n.social_4.current], 1, {
                        opacity: 0,
                        ease: Power2.easeOut
                    }, .3) : i.TweenMax.staggerFrom([n.social_2.current, n.social_3.current], 1, {
                        opacity: 0,
                        ease: Power2.easeOut
                    }, .3)
                }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.social_1 = r.default.createRef(),
                    n.social_2 = r.default.createRef(),
                    n.social_3 = r.default.createRef(),
                    n.social_4 = r.default.createRef(),
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.context.global_info.filter(function(e) {
                            return "email" === e.key
                        })[0].value
                            , t = this.context.global_info.filter(function(e) {
                            return "vimeo" === e.key
                        })[0].value
                            , n = this.context.global_info.filter(function(e) {
                            return "facebook" === e.key
                        })[0].value
                            , a = this.context.global_info.filter(function(e) {
                            return "instagram" === e.key
                        })[0].value;
                        return r.default.createElement("ul", {
                            className: "contact_list bottom_level_mod"
                        }, this.context.windowWidth > 1023 ? r.default.createElement(r.default.Fragment, null, r.default.createElement("li", {
                            className: "contact_list_item",
                            ref: this.social_1
                        }, r.default.createElement("a", {
                            className: "contact_list_link",
                            href: "mailto:" + e
                        }, e))) : null, " ", this.context.windowWidth > 1023 || this.context.windowWidth < 1024 && !this.context.isOpen ? r.default.createElement(r.default.Fragment, null, r.default.createElement("li", {
                            className: "contact_list_item left_pos_mod",
                            ref: this.social_2
                        }, r.default.createElement("a", {
                            className: "contact_list_link",
                            target: "_blank",
                            href: t
                        }, r.default.createElement(p, {
                            className: "icon-vimeo social_mod"
                        }))), r.default.createElement("li", {
                            className: "contact_list_item right_pos_mod",
                            ref: this.social_3
                        }, r.default.createElement("a", {
                            className: "contact_list_link",
                            target: "_blank",
                            href: n
                        }, r.default.createElement(_, {
                            className: "icon-facebook social_mod"
                        }))), r.default.createElement("li", {
                            className: "contact_list_item right_pos_mod",
                            ref: this.social_4
                        }, r.default.createElement("a", {
                            className: "contact_list_link",
                            target: "_blank",
                            href: a
                        }, r.default.createElement(h, {
                            className: "icon-facebook social_mod"
                        })))) : null)
                    }
                }]),
                t
        }();
        g.contextType = c.default;
        var b = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    i.TweenMax.from(n.location.current, 1, {
                        opacity: 0,
                        ease: Power2.easeOut
                    })
                }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.location = r.default.createRef(),
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.context.global_info.filter(function(e) {
                            return "adress" === e.key
                        })[0].value
                            , t = this.context.global_info.filter(function(e) {
                            return "phone" === e.key
                        })[0].value
                            , n = this.context.global_info.filter(function(e) {
                            return "email" === e.key
                        })[0].value
                            , a = this.context.global_info.filter(function(e) {
                            return "phone_attr" === e.key
                        })[0].value
                            , o = this.context.global_info.filter(function(e) {
                            return "map_link" === e.key
                        })[0].value;
                        return r.default.createElement("div", {
                            className: "location_block " + (this.context.global_el.selected ? "selected_mod" : "") + " " + (this.context.isOpen ? "menu_open" : ""),
                            ref: this.location
                        }, this.context.windowWidth < 1024 && !this.context.isOpen ? r.default.createElement("span", {
                            className: "location_block_in"
                        }, r.default.createElement("a", {
                            className: "location_block_in_text",
                            href: o,
                            target: "_blank"
                        }, e), r.default.createElement("a", {
                            className: "location_block_in_link",
                            href: "tel:" + a
                        }, t), r.default.createElement("a", {
                            href: "mailto:" + n,
                            className: "location_block_in_link",
                            target: "_blank"
                        }, n)) : null, this.context.windowWidth > 1023 ? r.default.createElement("span", {
                            className: "location_block_in"
                        }, r.default.createElement("a", {
                            className: "location_block_in_text",
                            href: o,
                            target: "_blank"
                        }, e), r.default.createElement("a", {
                            className: "location_block_in_link",
                            href: "tel:" + a
                        }, t)) : null)
                    }
                }]),
                t
        }();
        b.contextType = c.default;
        var C = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {}
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n
            }
            return m(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "lang_control top_level_mod"
                        }, r.default.createElement("ul", {
                            className: "lang"
                        }, r.default.createElement("li", {
                            className: "lang_item"
                        }, r.default.createElement("div", {
                            className: "lang_link current_mod"
                        }, "eng")), r.default.createElement("li", {
                            className: "lang_item"
                        }, r.default.createElement("div", {
                            className: "lang_link"
                        }, "рус"))))
                    }
                }]),
                t
        }();
        C.contextType = c.default;
        var x = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e, t) {
                    n.context.animation_on && (n.state.close && i.TweenMax.staggerFrom([n.dot_1.current, n.dot_2.current, n.dot_3.current], .8, {
                        opacity: 0,
                        ease: Power2.easeOut
                    }, .1),
                        i.TweenMax.set(n.menu_trigger.current, {
                            opacity: 1
                        }),
                        i.TweenMax.fromTo(n.circle_1.current, 1, {
                            drawSVG: 0
                        }, {
                            drawSVG: 100,
                            ease: Power0.easeNone
                        }),
                        i.TweenMax.fromTo(n.circle_2.current, 1, {
                            drawSVG: 0
                        }, {
                            drawSVG: 100,
                            ease: Power0.easeNone
                        }),
                        i.TweenMax.from(n.menu_text.current, 1, {
                            xPercent: -50,
                            opacity: 0,
                            ease: Power2.easeOut,
                            onComplete: function() {
                                e()
                            }
                        }))
                }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.hoverHandler = function() {
                        var e = n;
                        n.isUnmounted || (n.state.close && !n.state.hover ? (n.letters.sub_letters_2_reversed.length || (n.letters.sub_letters_2_reversed = n.letters.sub_letters_2.concat([]),
                            n.letters.sub_letters_2_reversed.reverse()),
                            n.hover(),
                            i.TweenMax.staggerTo(n.letters.sub_letters_2, .3, {
                                opacity: 0,
                                xPercent: -500,
                                ease: Power2.easeOut
                            }, .05, function() {
                                i.TweenMax.staggerFromTo(e.letters.sub_letters_2_reversed, .3, {
                                    opacity: 0,
                                    xPercent: 500,
                                    ease: Power2.easeOut
                                }, {
                                    opacity: 1,
                                    xPercent: 0,
                                    ease: Power2.easeOut
                                }, .05, e.hover)
                            })) : n.state.hover || (n.letters.sub_letters_1_reversed.length || (n.letters.sub_letters_1_reversed = n.letters.sub_letters_1.concat([]),
                            n.letters.sub_letters_1_reversed.reverse()),
                            n.hover(),
                            console.log("hover"),
                            i.TweenMax.staggerTo(n.letters.sub_letters_1, .3, {
                                opacity: 0,
                                xPercent: -500,
                                ease: Power2.easeOut
                            }, .05, function() {
                                i.TweenMax.staggerFromTo(e.letters.sub_letters_1_reversed, .3, {
                                    opacity: 0,
                                    xPercent: 500,
                                    ease: Power2.easeOut
                                }, {
                                    opacity: 1,
                                    xPercent: 0,
                                    ease: Power2.easeOut
                                }, .05, e.hover)
                            })))
                    }
                    ,
                    n.hover = function() {
                        n.isUnmounted || n.setState({
                            hover: !n.state.hover
                        })
                    }
                    ,
                    n.state = {
                        hover: !1,
                        close: n.props.close
                    },
                    n.letters = {
                        sub_letters_1: [],
                        sub_letters_1_reversed: [],
                        sub_letters_2: [],
                        sub_letters_2_reversed: []
                    },
                    n.dots = [],
                    n.menu_trigger = r.default.createRef(),
                    n.circle_1 = r.default.createRef(),
                    n.circle_2 = r.default.createRef(),
                    n.dot_1 = r.default.createRef(),
                    n.dot_2 = r.default.createRef(),
                    n.dot_3 = r.default.createRef(),
                    n.menu_text = r.default.createRef(),
                    n
            }
            return m(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.isUnmounted = !1
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.isUnmounted = !0
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.isUnmounted || this.inAnim(e, !0)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.isUnmounted || (console.log("componentWillEnter"),
                            this.inAnim(e, !1))
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.context.isCloseWithoutAnimation || this.isUnmounted ? e() : i.TweenMax.to(this.menu_trigger.current, .4, {
                            opacity: 0,
                            delay: this.context.isOpen ? 0 : .5,
                            ease: Power2.easeOut,
                            onComplete: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = (this.props.data,
                            {
                                menu_trigger_text_one: "menu",
                                menu_trigger_text_two: "close"
                            });
                        return r.default.createElement("div", {
                            className: "menu_trigger menuTrigger " + (this.context.global_el.white_mode ? "" : "black_mod") + " " + (this.state.close ? "menu_open_mod close_mod" : ""),
                            ref: this.menu_trigger,
                            onClick: this.context.toggleOpen,
                            onMouseEnter: this.hoverHandler.bind(this)
                        }, r.default.createElement("div", {
                            className: "menu_trigger_in",
                            ref: this.menu_text
                        }, this.state.close ? r.default.createElement(r.default.Fragment, null, t.menu_trigger_text_two.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters.sub_letters_2[n] = t
                                },
                                key: n
                            }, t)
                        })) : r.default.createElement(r.default.Fragment, null, t.menu_trigger_text_one.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters.sub_letters_1[n] = t
                                },
                                key: n
                            }, t)
                        }))), r.default.createElement("div", {
                            className: "menu_trigger_decor"
                        }, r.default.createElement("svg", {
                            className: "icon-circle",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 52 53"
                        }, r.default.createElement("path", {
                            ref: this.circle_1,
                            d: "M3.13,35.325A25,25,0,0,0,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }), r.default.createElement("path", {
                            ref: this.circle_2,
                            d: "M3.13,17.674A25,25,0,0,1,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }), this.state.close ? r.default.createElement("g", null, r.default.createElement("circle", {
                            ref: this.dot_1,
                            cx: "37.516",
                            cy: "25.7",
                            r: "3.938"
                        }), r.default.createElement("circle", {
                            ref: this.dot_2,
                            cx: "25.699",
                            cy: "25.7",
                            r: "3.938"
                        }), r.default.createElement("circle", {
                            ref: this.dot_3,
                            cx: "13.883",
                            cy: "25.7",
                            r: "3.938"
                        })) : null)))
                    }
                }]),
                t
        }();
        x.contextType = c.default;
        var k = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.myElements = [],
                    n
            }
            return m(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.animation_on && (this.context.global_el.location,
                            this.context.global_el.contact_list)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return this.props.data !== e.data
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "wrapper_el"
                        }, r.default.createElement(s.default, {
                            dataClass: "top_level_mod",
                            delay: 0,
                            key: "top_level_mod"
                        }), r.default.createElement(l.default, {
                            component: "div",
                            transitionMode: "out-in"
                        }, this.context.global_el.awwwards && r.default.createElement(v, null), (this.context.global_el.location || this.context.global_el.vadim && this.context.isOpen) && r.default.createElement(b, null), (this.context.global_el.contact_list || this.context.global_el.vadim && this.context.isOpen) && r.default.createElement(g, null), this.context.global_el.lang && r.default.createElement(C, null), this.context.global_el.selected && r.default.createElement(w, null), this.context.global_el.vadim && !this.context.isOpen && r.default.createElement(y, null)), r.default.createElement(l.default, {
                            component: "div",
                            transitionMode: "out-in"
                        }, this.context.global_el.menu && r.default.createElement(x, {
                            close: this.context.isOpen,
                            key: this.context.isOpen ? 1 : 2
                        })))
                    }
                }]),
                t
        }();
        k.contextType = c.default,
            t.default = k
    },
    29: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = s(o)
            , l = n(7)
            , i = n(4)
            , c = (n(69),
            s(n(15)),
            s(n(11)),
            s(n(6)));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.hoverHandler = function() {
                    var e = n;
                    if (!n.state.hover) {
                        e.hover(),
                            i.TweenMax.to(n.btn_g_line.current, .5, {
                                scaleX: 0,
                                x: 1.15 * e.context.rem,
                                transformOrigin: "100% 50%",
                                ease: Power2.easeOut,
                                onComplete: function() {
                                    i.TweenMax.to(e.btn_g_line.current, .5, {
                                        scaleX: 1,
                                        x: 0,
                                        transformOrigin: "100% 50%",
                                        ease: Power2.easeIn
                                    })
                                }
                            });
                        var t = i.TweenMax.fromTo(n.btn_g_center_circle.current, .5, {
                            opacity: 1,
                            scale: 0
                        }, {
                            opacity: 1,
                            scale: 1,
                            delay: .5,
                            ease: Power0.easeNone,
                            onComplete: function() {
                                t.reverse()
                            },
                            onReverseComplete: function() {
                                t.restart()
                            }
                        })
                    }
                }
                    ,
                    n.leaveHandler = function() {
                        var e = n;
                        n.state.hover && i.TweenMax.fromTo(n.btn_g_center_circle.current, .5, {
                            opacity: 1,
                            scale: 1
                        }, {
                            opacity: 1,
                            scale: 0,
                            onComplete: function() {
                                e.hover()
                            }
                        })
                    }
                    ,
                    n.hover = function() {
                        n.setState({
                            hover: !n.state.hover
                        })
                    }
                    ,
                    n.btn_g_line = r.default.createRef(),
                    n.btn_g_circle_1 = r.default.createRef(),
                    n.btn_g_circle_2 = r.default.createRef(),
                    n.btn_g_center_circle = r.default.createRef(),
                    n.myElements = [],
                    n.state = {
                        hover: !1,
                        delay: n.props.delay ? n.props.delay : 1.8
                    },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this
                            , t = e.context.second_loader_play ? this.state.delay + 1.5 : this.state.delay;
                        this.context.animation_on && (i.TweenMax.from(this.btn_g_line.current, 1, {
                            scaleX: 0,
                            transformOrigin: "100% 0",
                            delay: t
                        }),
                            i.TweenMax.fromTo(this.btn_g_circle_2.current, 1, {
                                drawSVG: 0
                            }, {
                                drawSVG: 100,
                                delay: t,
                                ease: Power0.easeNone
                            }),
                            i.TweenMax.fromTo(this.btn_g_circle_1.current, 1, {
                                drawSVG: 0
                            }, {
                                drawSVG: 100,
                                delay: t,
                                ease: Power0.easeNone
                            }),
                            i.TweenMax.staggerFromTo(this.myElements, 1, {
                                cycle: {
                                    x: function(e) {
                                        return 10 * e * e
                                    },
                                    y: function(t) {
                                        return .8 * e.myElements.length - t > 0 ? 20 * (.8 * e.myElements.length - t) : 0
                                    }
                                },
                                "-webkit-filter": "blur(10px)",
                                filter: "blur(10px)",
                                scaleX: 2,
                                opacity: 0
                            }, {
                                x: 0,
                                y: 0,
                                "-webkit-filter": "blur(0)",
                                filter: "blur(0)",
                                scaleX: 1,
                                opacity: 1,
                                delay: t,
                                ease: Power2.easeOut
                            }, .005))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props.dataInner.split("")
                            , n = "btn_g_decor " + (this.props.blockClass || "")
                            , a = this.context.global_info.filter(function(e) {
                            return "work_email" === e.key
                        })[0].value;
                        return r.default.createElement(r.default.Fragment, null, "vacancies_mod" === this.props.blockClass ? r.default.createElement(r.default.Fragment, null, r.default.createElement("a", {
                            className: "btn_g anim_mod " + (this.props.blockClass || ""),
                            href: "mailto:" + a,
                            target: "_blank"
                        }, r.default.createElement("span", {
                            className: "btn_g_title " + (this.props.blockClass || ""),
                            onMouseEnter: this.hoverHandler.bind(this),
                            onMouseLeave: this.leaveHandler.bind(this)
                        }, t.map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.myElements[n] = t
                                },
                                key: n
                            }, t)
                        }), r.default.createElement("span", {
                            className: n
                        }, r.default.createElement("span", {
                            className: "btn_g_line",
                            ref: this.btn_g_line
                        }), r.default.createElement("span", {
                            className: "btn_g_center_circle",
                            ref: this.btn_g_center_circle
                        }), r.default.createElement("span", {
                            className: "btn_g_circle_w"
                        }, r.default.createElement("svg", {
                            className: "icon-circle btn_g_mod",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 53 53"
                        }, r.default.createElement("path", {
                            ref: this.btn_g_circle_1,
                            d: "M3.13,35.325A25,25,0,0,0,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }), r.default.createElement("path", {
                            ref: this.btn_g_circle_2,
                            d: "M3.13,17.674A25,25,0,0,1,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }))))))) : r.default.createElement(r.default.Fragment, null, r.default.createElement(l.Link, {
                            className: "btn_g anim_mod " + (this.props.blockClass || ""),
                            to: "/works"
                        }, r.default.createElement("span", {
                            className: "btn_g_title " + (this.props.blockClass || ""),
                            onMouseEnter: this.hoverHandler.bind(this),
                            onMouseLeave: this.leaveHandler.bind(this)
                        }, t.map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.myElements[n] = t
                                },
                                key: n
                            }, t)
                        }), r.default.createElement("span", {
                            className: n
                        }, r.default.createElement("span", {
                            className: "btn_g_line",
                            ref: this.btn_g_line
                        }), r.default.createElement("span", {
                            className: "btn_g_center_circle",
                            ref: this.btn_g_center_circle
                        }), r.default.createElement("span", {
                            className: "btn_g_circle_w"
                        }, r.default.createElement("svg", {
                            className: "icon-circle btn_g_mod",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 53 53"
                        }, r.default.createElement("path", {
                            ref: this.btn_g_circle_1,
                            d: "M3.13,35.325A25,25,0,0,0,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }), r.default.createElement("path", {
                            ref: this.btn_g_circle_2,
                            d: "M3.13,17.674A25,25,0,0,1,51.53,26.5",
                            fill: "none",
                            stroke: "#2fe0b8"
                        }))))))))
                    }
                }]),
                t
        }();
        u.contextType = c.default,
            t.default = u
    },
    31: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n(218);
        Object.defineProperty(t, "TransitionSwitch", {
            enumerable: !0,
            get: function() {
                return r(a).default
            }
        });
        var o = n(210);
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "TransitionRoute", {
            enumerable: !0,
            get: function() {
                return r(o).default
            }
        })
    },
    36: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = f(o)
            , l = (n(7),
            f(n(15)))
            , i = f(n(142))
            , c = n(19)
            , s = f(n(29))
            , u = f(n(6))
            , d = n(4);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function m(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function p(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function _(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var h = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "back"), r.default.createElement("path", {
                d: "M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm0-30a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm8 16H14c-1.1 0-1.36.64-.59 1.41l2.83 2.83a1.87 1.87 0 0 1 .22 2.61 1.87 1.87 0 0 1-2.6-.22L7 17.69a2 2 0 0 1 0-2.83L13.89 8a1.87 1.87 0 0 1 2.6-.22 1.87 1.87 0 0 1-.22 2.61l-2.84 2.83c-.78.78-.51 1.41.59 1.41H24a1.87 1.87 0 0 1 2 1.68A1.87 1.87 0 0 1 24 18z",
                fill: "#2fe0b8"
            }))
        };
        h.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32"
        };
        var v = function(e) {
            function t(e) {
                m(this, t);
                var n = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    var t = void 0;
                    t = n.context.second_loader_play ? 4.2 : 1.1,
                        n.context.animation_on ? d.TweenMax.from(n.vacancy_back.current, .5, {
                            xPercent: -250,
                            opacity: 0,
                            delay: t,
                            ease: Power2.easeOut,
                            onComplete: e,
                            force3D: !0
                        }) : e()
                }
                    ,
                    n.state = {
                        hover: !1
                    },
                    n.vacancy_back = r.default.createRef(),
                    n
            }
            return _(t, r.default.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        d.TweenMax.to(this.vacancy_back.current, .5, {
                            xPercent: -250,
                            opacity: 0,
                            ease: Power2.easeOut,
                            onComplete: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        this.props.data;
                        return r.default.createElement("div", {
                            className: "vacancy_back",
                            ref: this.vacancy_back,
                            onClick: function(t) {
                                return e.context.ActiveVacancies({
                                    index: !1
                                })
                            }
                        }, r.default.createElement(h, {
                            className: "icon-back vacancy_mod"
                        }))
                    }
                }]),
                t
        }();
        v.contextType = u.default;
        var y = function(e) {
            function t(e) {
                m(this, t);
                var n = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    n.context.animation_on ? d.TweenMax.fromTo(n.work_us_vacancies_content.current, 1.5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: 1.1,
                        ease: Power2.easeOut,
                        onComplete: e
                    }) : e()
                }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.state = {
                        hover: !1
                    },
                    n.letters = {
                        sub_letters: [],
                        sub_sub_letters: []
                    },
                    n.work_us_vacancies_content = r.default.createRef(),
                    n
            }
            return _(t, r.default.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        d.TweenMax.fromTo(this.work_us_vacancies_content.current, .5, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: Power2.easeIn,
                            onComplete: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.data;
                        return r.default.createElement("div", {
                            className: "work_us_vacancies_content anim_mod",
                            ref: this.work_us_vacancies_content
                        }, r.default.createElement(i.default, {
                            className: "work_us_vacancies_block",
                            markdown: e.text
                        }), r.default.createElement(s.default, {
                            dataInner: "Send resume",
                            blockClass: "vacancies_mod",
                            delay: 1
                        }))
                    }
                }]),
                t
        }();
        y.contextType = u.default;
        var w = function(e) {
            function t(e) {
                m(this, t);
                var n = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.getRandomInt = function(e, t) {
                    return Math.floor(Math.random() * (t - e)) + e
                }
                    ,
                    n.Click = function(e) {
                        n.context.vacancies ? n.context.ActiveVacancies({
                            index: !1
                        }) : n.context.ActiveVacancies({
                            index: n.props.index + 1
                        })
                    }
                    ,
                    n.state = {
                        sub_content_active: !1
                    },
                    n.work_us_vacancies_item = r.default.createRef(),
                    n
            }
            return _(t, r.default.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = void 0;
                        e = this.context.second_loader_play ? .5 : 1,
                        this.context.animation_on && d.TweenMax.from(this.work_us_vacancies_item.current, .9, {
                            xPercent: -101,
                            delay: e + .05 * this.props.index,
                            ease: Power2.easeOut
                        })
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this;
                        this.context.vacancies && !this.context.vacancies_old ? this.context.vacancies === this.props.index + 1 ? d.TweenMax.to(this.work_us_vacancies_item.current, .7, {
                            yPercent: -100 * e.props.index - 117.4,
                            delay: .7,
                            ease: Power2.easeInOut,
                            onComplete: function() {
                                e.context.ActiveVacanciesOld({
                                    index: e.props.index + 1
                                })
                            }
                        }) : d.TweenMax.to(this.work_us_vacancies_item.current, .7, {
                            xPercent: -101,
                            ease: Power2.easeIn
                        }) : this.context.vacancies_old && !this.context.vacancies && (this.context.vacancies_old === this.props.index + 1 ? d.TweenMax.to(this.work_us_vacancies_item.current, .9, {
                            xPercent: 0,
                            yPercent: 0,
                            delay: .5,
                            ease: Power2.easeOut,
                            onComplete: function() {
                                e.context.ActiveVacanciesOld({
                                    index: !1
                                })
                            }
                        }) : d.TweenMax.to(this.work_us_vacancies_item.current, .9, {
                            xPercent: 0,
                            yPercent: 0,
                            delay: 1.4 + .05 * e.props.index,
                            ease: Power2.easeOut
                        }))
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return e.active !== this.props.active
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.data;
                        return r.default.createElement("div", {
                            className: "work_us_vacancies_item",
                            key: this.props.index,
                            ref: this.work_us_vacancies_item
                        }, r.default.createElement("h2", {
                            className: "work_us_vacancies_link",
                            onClick: this.Click.bind(this)
                        }, e.title, r.default.createElement("span", {
                            className: "work_us_vacancies_link_num"
                        }, this.props.index < 9 ? "0" + (this.props.index + 1) : this.props.index + 1), r.default.createElement("span", {
                            className: "work_us_vacancies_link_ico"
                        }, r.default.createElement("span", {
                            className: "work_us_vacancies_link_ico_sub"
                        }))))
                    }
                }]),
                t
        }();
        w.contextType = u.default;
        var g = function(e) {
            function t(e) {
                m(this, t);
                var n = p(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    var t = n
                        , a = void 0;
                    a = t.context.second_loader_play ? 0 : .7,
                        n.context.animation_on ? (d.TweenMax.set(n.section.current, {
                            opacity: 1
                        }),
                            d.TweenMax.staggerFromTo(n.letters, .7, {
                                cycle: {
                                    x: function() {
                                        return -50 * t.getRandomInt(0, t.letters.length)
                                    }
                                },
                                "-webkit-filter": "blur(10px)",
                                filter: "blur(10px)",
                                opacity: 0
                            }, {
                                delay: a,
                                x: 0,
                                "-webkit-filter": "blur(0)",
                                filter: "blur(0)",
                                opacity: 1,
                                ease: Power3.easeOut
                            }, .01),
                            d.TweenMax.from(n.page_bg.current, .9, {
                                opacity: 0,
                                scale: 1.2,
                                xPercent: -30,
                                delay: a,
                                ease: Power2.easeOut,
                                onComplete: e
                            }),
                        n.context.loaded_GL || d.TweenMax.delayedCall(a, function() {
                            t.context.toggleloaded_GL()
                        })) : (n.context.loaded_GL || t.context.toggleloaded_GL(),
                            e())
                }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.oldActive = function() {
                        n.setState({
                            active: n.context.vacancies
                        }),
                            console.log("active", n.state.active)
                    }
                    ,
                    n.state = {
                        active: !1
                    },
                    n.letters = [],
                    n.page_bg = r.default.createRef(),
                    n.section = r.default.createRef(),
                    n
            }
            return _(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.loader_hide || this.context.toggleLoaderHide(),
                        this.context.isOpen && (this.context.toggleCloseWithoutAnimation(),
                            this.context.toggleOpen()),
                        this.context.loader_play || this.context.toggleLoaderPlay(),
                            this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !0,
                                selected: !1,
                                lang: !1,
                                menu: !0,
                                vadim: !1,
                                contact_list: !0,
                                white_mode: !0
                            })
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.context.ActiveVacancies({
                            index: !1
                        }),
                            e()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props.data
                            , n = this.props.dataList;
                        return r.default.createElement("section", {
                            className: "section",
                            ref: this.section
                        }, r.default.createElement("div", {
                            className: "title_bg works_mod"
                        }, "Work with us"), r.default.createElement("div", {
                            className: "work_us_wrap"
                        }, r.default.createElement("div", {
                            className: "work_us_title_wrap anim_mod"
                        }, r.default.createElement("div", {
                            className: "work_us_img_wrap"
                        }, r.default.createElement("div", {
                            className: "image_title_wrap_sub",
                            ref: this.page_bg
                        }, r.default.createElement(c.Picture, {
                            className: "work_us_img ",
                            alt: "Work with us",
                            sources: [{
                                srcSet: t.image.sm.split(":")[1] + ", " + t.image.sm2x.split(":")[1] + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: t.image.lg.split(":")[1] + ", " + t.image.lg2x.split(":")[1] + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        }))), r.default.createElement(l.default, {
                            component: "div",
                            transitionMode: "simultaneous"
                        }, this.context.vacancies && r.default.createElement(v, null)), r.default.createElement("div", {
                            className: "work_us_title anim_mod"
                        }, r.default.createElement("h2", {
                            className: "section_title work_us_mod"
                        }, t.title.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters[n] = t
                                },
                                key: "letter_" + n
                            }, t)
                        })))), r.default.createElement("div", {
                            className: "work_us_content_wrap"
                        }, n.length ? r.default.createElement("div", {
                            className: "work_us_vacancies_list"
                        }, n.map(function(t, a) {
                            return r.default.createElement(w, {
                                data: t,
                                index: a,
                                key: a,
                                amount: n.length,
                                active: e.context.vacancies
                            })
                        })) : r.default.createElement("div", {
                            className: "work_us_no_vacancies"
                        }, "We are full at the moment, but if you are an exceptional talent, plese send us your resume at ", r.default.createElement("a", {
                            href: "mailto:job@spot.fm"
                        }, "job@spot.fm")), r.default.createElement(l.default, {
                            component: "div",
                            transitionMode: "simultaneous"
                        }, this.context.vacancies && r.default.createElement(y, {
                            data: n[this.context.vacancies - 1]
                        })))))
                    }
                }]),
                t
        }();
        g.contextType = u.default,
            t.default = g
    },
    37: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = f(o)
            , l = (f(n(15)),
            f(n(167)))
            , i = n(19)
            , c = f(n(29))
            , s = f(n(6))
            , u = n(4)
            , d = f(n(151));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.getRandomInt = function(e, t) {
                    return Math.floor(Math.random() * (t - e)) + e
                }
                    ,
                    e.inAnim = function(t) {
                        var n = .5
                            , a = e;
                        n = a.context.second_loader_play ? 0 : .7,
                            e.context.animation_on ? (u.TweenMax.set(e.section.current, {
                                opacity: 1
                            }),
                                u.TweenMax.delayedCall(n + .3, function() {
                                    u.TweenMax.staggerFrom(a.about_text_array.lines, 1, {
                                        opacity: 0,
                                        ease: Power0.none
                                    }, .15),
                                    a.props.data.customers.length && u.TweenMax.fromTo(a.slider.current, 1, {
                                        opacity: 0
                                    }, {
                                        opacity: 1,
                                        delay: n + .5,
                                        ease: Power2.easeOut
                                    })
                                }),
                                u.TweenMax.from(e.about_text.current, .01, {
                                    opacity: 0,
                                    delay: n + .3,
                                    ease: Power0.none
                                }),
                                u.TweenMax.from(e.image.current, 1, {
                                    opacity: 0,
                                    scale: 1.2,
                                    delay: n,
                                    ease: ExpoScaleEase.config(1.2, 1, Power2.easeOut),
                                    onComplete: t
                                }),
                                u.TweenMax.staggerFromTo(e.letters, .7, {
                                    cycle: {
                                        x: function() {
                                            return -50 * a.getRandomInt(0, a.letters.length)
                                        }
                                    },
                                    "-webkit-filter": "blur(10px)",
                                    filter: "blur(10px)",
                                    opacity: 0
                                }, {
                                    x: 0,
                                    "-webkit-filter": "blur(0)",
                                    filter: "blur(0)",
                                    opacity: 1,
                                    delay: n,
                                    ease: Power3.easeOut
                                }, .01),
                            e.context.loaded_GL || u.TweenMax.delayedCall(n, function() {
                                a.context.toggleloaded_GL()
                            })) : (e.context.loaded_GL || a.context.toggleloaded_GL(),
                                t())
                    }
                    ,
                    e.letters = [],
                    e.clients = [],
                    e.slider = r.default.createRef(),
                    e.section = r.default.createRef(),
                    e.image = r.default.createRef(),
                    e.about_text = r.default.createRef(),
                    e.about_text_array = null,
                    e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        u.TweenMax.delayedCall(.3, function() {
                            e.about_text_array = new d.default(e.about_text.current,{
                                type: "lines",
                                linesClass: "title_line"
                            })
                        }),
                        e.context.loader_hide || e.context.toggleLoaderHide(),
                        this.context.isOpen && (this.context.toggleCloseWithoutAnimation(),
                            this.context.toggleOpen()),
                        this.context.loader_play || this.context.toggleLoaderPlay(),
                            this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !0,
                                selected: !1,
                                lang: !1,
                                menu: !0,
                                vadim: !1,
                                contact_list: !0,
                                white_mode: !0
                            }),
                            window.addEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        u.TweenMax.fromTo(this.section.current, .7, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: Power2.easeIn,
                            onComplete: e
                        })
                    }
                }, {
                    key: "handleResize",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props.data;
                        return console.log(t.image.sm.split(":")),
                            r.default.createElement("section", {
                                className: "section anim_mod",
                                ref: this.section
                            }, r.default.createElement("div", {
                                className: "contacts_title_wrap"
                            }, r.default.createElement("div", {
                                className: "image_title_wrap"
                            }, r.default.createElement("div", {
                                className: "image_title_wrap_sub",
                                ref: this.image
                            }, r.default.createElement(i.Picture, {
                                className: "image_title",
                                alt: t.title,
                                sources: [{
                                    srcSet: t.image.sm.split(":")[1] + ", " + t.image.sm2x.split(":")[1] + " 2x",
                                    media: "(max-width: 799px)"
                                }, {
                                    srcSet: t.image.lg.split(":")[1] + ", " + t.image.lg2x.split(":")[1] + " 2x",
                                    media: "(min-width: 800px)"
                                }]
                            }))), r.default.createElement("h2", {
                                className: "section_title half_mod"
                            }, t.title.split("").map(function(t, n) {
                                return r.default.createElement("span", {
                                    className: "letter",
                                    ref: function(t) {
                                        return e.letters[n] = t
                                    },
                                    key: n
                                }, t)
                            }))), r.default.createElement("div", {
                                className: "about_content anim_mod"
                            }, r.default.createElement("div", {
                                className: "about_text ",
                                ref: this.about_text
                            }, t.text), r.default.createElement(c.default, {
                                dataInner: "Selected works",
                                delay: 1
                            }), t.customers.length && this.context.loaded_GL ? r.default.createElement("div", {
                                className: "about_logos_slider",
                                ref: this.slider
                            }, r.default.createElement(l.default, {
                                autoplay: !0,
                                dots: !1,
                                arrows: !1,
                                infinite: !0,
                                speed: 1e3,
                                slidesToShow: 7,
                                slidesToScroll: 1,
                                responsive: [{
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 4
                                    }
                                }, {
                                    breakpoint: 481,
                                    settings: {
                                        slidesToShow: 3
                                    }
                                }]
                            }, t.customers.map(function(t, n) {
                                return r.default.createElement("div", {
                                    className: "about_logos_item",
                                    key: n
                                }, r.default.createElement("span", {
                                    className: "about_logos_link",
                                    ref: function(t) {
                                        return e.clients[n] = t
                                    }
                                }, r.default.createElement("img", {
                                    className: "about_logos_img",
                                    src: t.image,
                                    alt: "logo"
                                })))
                            }))) : null))
                    }
                }]),
                t
        }();
        m.contextType = s.default,
            t.default = m
    },
    38: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = u(o)
            , l = (u(n(15)),
            u(n(29)),
            u(n(188)))
            , i = n(19)
            , c = u(n(6))
            , s = n(4);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function(e) {
            function t() {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.inAnim = function(t) {
                    var n = e
                        , a = void 0;
                    a = n.context.second_loader_play ? 0 : .7,
                        e.context.animation_on ? (s.TweenMax.set(e.section.current, {
                            opacity: 1
                        }),
                            s.TweenMax.from(e.image.current, 1.6, {
                                opacity: 0,
                                delay: a,
                                ease: ExpoScaleEase.config(1.2, 1, Power2.easeOut),
                                onComplete: function() {
                                    s.TweenMax.to(n.map_w.current, .6, {
                                        opacity: 1,
                                        ease: ExpoScaleEase.config(1.2, 1, Power2.easeOut)
                                    })
                                }
                            }),
                            s.TweenMax.staggerFromTo(e.letters, .7, {
                                cycle: {
                                    x: function() {
                                        return -50 * n.getRandomInt(0, n.letters.length)
                                    }
                                },
                                "-webkit-filter": "blur(10px)",
                                filter: "blur(10px)",
                                opacity: 0
                            }, {
                                delay: a + .5,
                                x: 0,
                                "-webkit-filter": "blur(0)",
                                filter: "blur(0)",
                                opacity: 1,
                                ease: Power3.easeOut
                            }, .01),
                            s.TweenMax.staggerFrom(e.address_el_title, .6, {
                                opacity: 0,
                                xPercent: -100,
                                delay: a,
                                ease: Power2.easeOut
                            }, .25),
                            s.TweenMax.staggerFrom(e.address_el, .6, {
                                opacity: 0,
                                x: 200,
                                ease: Power2.easeOut,
                                delay: a + .5
                            }, .25),
                            s.TweenMax.staggerFrom(e.form_el, .8, {
                                opacity: 0,
                                ease: Power2.easeOut,
                                delay: a + .5
                            }, .25),
                        e.context.loaded_GL || s.TweenMax.delayedCall(a, function() {
                            n.context.toggleloaded_GL()
                        })) : (t(),
                        e.context.loaded_GL || n.context.toggleloaded_GL())
                }
                    ,
                    e.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    e.change = function(t) {
                        var n = t.target.name
                            , a = t.target.value;
                        e.setState(function(e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n,
                                e
                        }({}, n, a), function() {
                            e.validateField(n, a)
                        })
                    }
                    ,
                    e.onSubmit = function(t) {
                        t.preventDefault();
                        localStorage.getItem("lang");
                        var n = e.props.host + "/en-us/api/forms/contacts/"
                            , a = JSON.stringify({
                            name: e.state.user_name,
                            email: e.state.user_email,
                            subject: e.state.subject,
                            a1bd3c6c: e.state.a1bd3c6c
                        });
                        console.log(a),
                            fetch(n, {
                                method: "post",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: a
                            }).then(function(t) {
                                console.log(t);
                                var n = e;
                                s.TweenMax.staggerTo([n.form.current, n.form_success.current], .5, {
                                    cycle: {
                                        opacity: [0, 1]
                                    },
                                    ease: Power1.easeOut
                                }, 0, function() {
                                    n.setState({
                                        user_name: "",
                                        user_email: "",
                                        subject: "",
                                        a1bd3c6c: ""
                                    }),
                                        s.TweenMax.staggerTo([n.form.current, n.form_success.current], .5, {
                                            cycle: {
                                                opacity: [1, 0]
                                            },
                                            ease: Power1.easeOut,
                                            delay: 1.5
                                        }, 0)
                                })
                            }).catch(function(e) {
                                console.log("Request failure: ", e)
                            })
                    }
                    ,
                    e.letters = [],
                    e.address_el_title = [],
                    e.address_el = [],
                    e.image = r.default.createRef(),
                    e.section = r.default.createRef(),
                    e.form_success = r.default.createRef(),
                    e.form = r.default.createRef(),
                    e.form_el = [],
                    e.map_w = r.default.createRef(),
                    e.state = {
                        map: !1,
                        user_name: "",
                        user_email: "",
                        subject: "",
                        a1bd3c6c: "",
                        formErrors: {
                            user_name: "",
                            user_email: "",
                            subject: ""
                        },
                        user_name_valid: !1,
                        user_email_valid: !1,
                        subject_valid: !1,
                        form_valid: !1
                    },
                    e
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.loader_hide || this.context.toggleLoaderHide(),
                        this.context.isOpen && (this.context.toggleOpen(),
                            this.context.toggleCloseWithoutAnimation()),
                        this.context.loader_play || this.context.toggleLoaderPlay(),
                            this.context.GlobalELUpdate({
                                awwwards: !1,
                                location: !1,
                                selected: !1,
                                lang: !1,
                                menu: !0,
                                vadim: !0,
                                contact_list: !1,
                                white_mode: !1
                            })
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        s.TweenMax.to(this.section.current, .5, {
                            opacity: 0,
                            zIndex: 1,
                            onComplete: e
                        })
                    }
                }, {
                    key: "validateField",
                    value: function(e, t) {
                        var n = this.state.formErrors
                            , a = this.state.user_email_valid
                            , o = this.state.user_name_valid
                            , r = this.state.subject_valid;
                        switch (e) {
                            case "user_email":
                                a = t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
                                    n.user_email = a ? "" : " is invalid";
                                break;
                            case "user_name":
                                o = t.length >= 3,
                                    n.user_name = o ? "" : " is too short";
                                break;
                            case "subject":
                                r = t.length >= 3,
                                    n.subject = r ? "" : " is too short"
                        }
                        this.setState({
                            user_name_valid: o,
                            user_email_valid: a,
                            subject_valid: r,
                            formErrors: n
                        }, this.validateForm)
                    }
                }, {
                    key: "validateForm",
                    value: function() {
                        this.setState({
                            form_valid: this.state.user_name_valid && this.state.user_email_valid && this.state.subject_valid
                        })
                    }
                }, {
                    key: "errorClass",
                    value: function(e) {
                        return 0 === e.length ? "" : "error_mod"
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = {
                            pageTitle: "Contacts",
                            selectedWorksTitle: "Show on Google maps"
                        }
                            , n = this.props.data
                            , a = this.context.global_info.filter(function(e) {
                            return "adress" === e.key
                        })[0].value
                            , o = this.context.global_info.filter(function(e) {
                            return "phone" === e.key
                        })[0].value
                            , c = this.context.global_info.filter(function(e) {
                            return "email" === e.key
                        })[0].value
                            , s = (this.context.global_info.filter(function(e) {
                            return "vimeo" === e.key
                        })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "facebook" === e.key
                            })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "phone_attr" === e.key
                            })[0].value);
                        this.context.global_info.filter(function(e) {
                            return "honeypot_field" === e.key
                        })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "instagram" === e.key
                            })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "map_link" === e.key
                            })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "work_email" === e.key
                            })[0].value;
                        return r.default.createElement("section", {
                            className: "section",
                            ref: this.section
                        }, r.default.createElement("div", {
                            className: "contacts_title_wrap"
                        }, r.default.createElement("div", {
                            className: "image_title_wrap anim_mod contact_mod"
                        }, r.default.createElement("div", {
                            className: "image_title_wrap_sub",
                            ref: this.image
                        }, r.default.createElement("div", {
                            className: "map_w",
                            ref: this.map_w
                        }, r.default.createElement(l.default, null)), r.default.createElement(i.Picture, {
                            className: "image_title ",
                            alt: t.pageTitle,
                            sources: [{
                                srcSet: n.image.sm.split(":")[1] + ", " + n.image.sm2x.split(":")[1] + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: n.image.lg.split(":")[1] + ", " + n.image.lg2x.split(":")[1] + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        }))), r.default.createElement("h2", {
                            className: "section_title contact_mod anim_mod"
                        }, t.pageTitle.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters[n] = t
                                },
                                key: n
                            }, t)
                        }))), r.default.createElement("div", {
                            className: "contacts_content anim_mod"
                        }, r.default.createElement("div", {
                            className: "address_col"
                        }, r.default.createElement("ul", {
                            className: "address_list"
                        }, r.default.createElement("li", {
                            className: "address_item"
                        }, r.default.createElement("span", {
                            className: "address_title",
                            ref: function(t) {
                                return e.address_el_title[0] = t
                            }
                        }, "address"), r.default.createElement("span", {
                            className: "address_data",
                            ref: function(t) {
                                return e.address_el[0] = t
                            }
                        }, "Russia, ", a)), r.default.createElement("li", {
                            className: "address_item"
                        }, r.default.createElement("span", {
                            className: "address_title",
                            ref: function(t) {
                                return e.address_el_title[1] = t
                            }
                        }, "tel"), r.default.createElement("span", {
                            className: "address_data",
                            ref: function(t) {
                                return e.address_el[1] = t
                            }
                        }, r.default.createElement("a", {
                            className: "address_link",
                            href: "tel:" + s
                        }, o))), r.default.createElement("li", {
                            className: "address_item"
                        }, r.default.createElement("span", {
                            className: "address_title",
                            ref: function(t) {
                                return e.address_el_title[2] = t
                            }
                        }, "e-mail"), r.default.createElement("span", {
                            className: "address_data",
                            ref: function(t) {
                                return e.address_el[2] = t
                            }
                        }, r.default.createElement("a", {
                            className: "address_link",
                            href: "mailto:" + c
                        }, c))))), r.default.createElement("div", {
                            className: "contacts_form_col anim_mod"
                        }, r.default.createElement("div", {
                            className: "contacts_form_success",
                            ref: this.form_success
                        }, r.default.createElement("span", {
                            className: "contacts_form_success_title accent_mod"
                        }, "Thank you!"), r.default.createElement("span", {
                            className: "contacts_form_success_title"
                        }, "Our mennager will contact you shortly")), r.default.createElement("h3", {
                            className: "contact_form_title",
                            ref: function(t) {
                                return e.form_el[0] = t
                            }
                        }, "For a project, job or offerings, please do not hesitate to contact us via this form:"), r.default.createElement("form", {
                            className: "contact_form",
                            ref: this.form
                        }, r.default.createElement("input", {
                            className: "form_field test_mod",
                            type: "text",
                            name: "a1bd3c6c",
                            value: this.state.a1bd3c6c,
                            onChange: function(t) {
                                return e.change(t)
                            }
                        }), r.default.createElement("div", {
                            className: "contact_form_controller",
                            ref: function(t) {
                                return e.form_el[1] = t
                            }
                        }, r.default.createElement("dl", {
                            className: "form_cell form_cell_v1_mod"
                        }, r.default.createElement("dt", {
                            className: "form_cell_title form_v1_mod"
                        }, r.default.createElement("label", {
                            htmlFor: "user_name"
                        })), r.default.createElement("dd", {
                            className: "form_field_wrap form_v1_mod"
                        }, r.default.createElement("input", {
                            className: "form_field default_mod " + this.errorClass(this.state.formErrors.user_name),
                            type: "text",
                            name: "user_name",
                            placeholder: "name",
                            value: this.state.user_name,
                            onChange: function(t) {
                                return e.change(t)
                            }
                        })))), r.default.createElement("div", {
                            className: "contact_form_controller",
                            ref: function(t) {
                                return e.form_el[2] = t
                            }
                        }, r.default.createElement("dl", {
                            className: "form_cell form_cell_v1_mod"
                        }, r.default.createElement("dt", {
                            className: "form_cell_title form_v1_mod"
                        }, r.default.createElement("label", {
                            htmlFor: "user_email"
                        })), r.default.createElement("dd", {
                            className: "form_field_wrap form_v1_mod"
                        }, r.default.createElement("input", {
                            className: "form_field default_mod " + this.errorClass(this.state.formErrors.user_email),
                            type: "email",
                            name: "user_email",
                            placeholder: "e-mail",
                            value: this.state.user_email,
                            onChange: function(t) {
                                return e.change(t)
                            }
                        })))), r.default.createElement("div", {
                            className: "contact_form_controller",
                            ref: function(t) {
                                return e.form_el[3] = t
                            }
                        }, r.default.createElement("dl", {
                            className: "form_cell form_cell_v1_mod"
                        }, r.default.createElement("dt", {
                            className: "form_cell_title form_v1_mod"
                        }, r.default.createElement("label", {
                            htmlFor: "subject"
                        })), r.default.createElement("dd", {
                            className: "form_field_wrap form_v1_mod"
                        }, r.default.createElement("input", {
                            className: "form_field default_mod " + this.errorClass(this.state.formErrors.subject),
                            type: "text",
                            name: "subject",
                            placeholder: "subject",
                            value: this.state.subject,
                            onChange: function(t) {
                                return e.change(t)
                            }
                        }))))), this.context.windowWidth > 1023 && !this.context.isOpen ? r.default.createElement("div", {
                            className: "contact_form_submit " + (this.state.form_valid ? "" : "disabled_mod"),
                            ref: function(t) {
                                return e.form_el[4] = t
                            },
                            onClick: function(t) {
                                return e.onSubmit(t)
                            }
                        }, "Send form") : null)), this.context.windowWidth < 1024 && !this.context.isOpen ? r.default.createElement("div", {
                            className: "contact_form_submit " + (this.state.form_valid ? "" : "disabled_mod"),
                            ref: function(t) {
                                return e.form_el[4] = t
                            },
                            onClick: function(t) {
                                return e.onSubmit(t)
                            }
                        }, "Send form") : null)
                    }
                }]),
                t
        }();
        d.contextType = c.default,
            t.default = d
    },
    39: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = u(o)
            , l = n(7)
            , i = u(n(11))
            , c = (u(n(15)),
            u(n(6)))
            , s = n(4);
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function d(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function f(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function m(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var p = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "vimeo"), r.default.createElement("path", {
                d: "M18 9a9 9 0 1 1-9-9 9 9 0 0 1 9 9zM9.79 8c1.22-.73 1.87.3 1.25 1.46s-1.19 1.93-1.49 1.93-.55-.81-.88-2.17-.35-3.95-1.81-3.66S3.66 8 3.66 8l.43.57s.9-.71 1.19-.35 1.44 4.61 1.82 5.4 1.25 1.6 2.25.95 4.34-3.5 4.94-6.86S10.27 5 9.79 8z",
                fill: "#484747"
            }))
        };
        p.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18"
        };
        var _ = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("title", null, "facebook"), r.default.createElement("path", {
                d: "M18 9a9 9 0 1 1-9-9 9 9 0 0 1 9 9zm-6.57-1.53H9.77V6.39a.44.44 0 0 1 .46-.5h1.17V4.1H9.79A2 2 0 0 0 7.6 6.28v1.19h-1v1.84h1v5.22h2.17V9.31h1.46z",
                fill: "#484747"
            }))
        };
        _.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 17.99 17.99"
        };
        var h = function(e) {
            return r.default.createElement("svg", e, r.default.createElement("path", {
                d: "M9 18a9 9 0 1 1 9-9 9 9 0 0 1-9 9zm4.873-11.427a2.448 2.448 0 0 0-2.446-2.446h-4.8a2.449 2.449 0 0 0-2.451 2.446v4.805a2.449 2.449 0 0 0 2.446 2.446h4.8a2.448 2.448 0 0 0 2.446-2.446zm-2.728-.529a.581.581 0 0 1 .458-.232.592.592 0 0 1 .591.591.58.58 0 0 1-.236.46 1.071 1.071 0 0 0-.813-.819zm.458.95a.582.582 0 0 0 .355-.131 1.052 1.052 0 0 1 .047.231v3.8a1.1 1.1 0 0 1-1.1 1.1h-3.8a1.1 1.1 0 0 1-1.1-1.1v-3.8A1.1 1.1 0 0 1 7.109 6h3.8a1.055 1.055 0 0 1 .239.048.58.58 0 0 0-.133.359.592.592 0 0 0 .585.587zm-2.608.013a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3.152a1.154 1.154 0 1 1 1.154-1.154 1.156 1.156 0 0 1-1.154 1.154z",
                fill: "#484747"
            }))
        };
        h.defaultProps = {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 18 18"
        };
        var v = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.getRandomInt = function(e, t) {
                    return Math.floor(Math.random() * (t - e)) + e
                }
                    ,
                    n.state = {
                        hover: !1,
                        path: n.props.item
                    },
                    n.letters = {
                        sub_letters: [],
                        sub_sub_letters: []
                    },
                    n.main_menu_circle = r.default.createRef(),
                    n
            }
            return m(t, r.default.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.isUnmounted = !1,
                            "menu_btn bottom_level_mod" !== this.props.dataClass ? s.TweenMax.staggerFromTo(this.letters.sub_letters, .7, {
                                cycle: {
                                    x: function() {
                                        return -50 * e.getRandomInt(0, e.letters.sub_letters.length - 1)
                                    }
                                },
                                "-webkit-filter": "blur(10px)",
                                filter: "blur(10px)",
                                opacity: 0
                            }, {
                                cycle: {
                                    delay: function() {
                                        return .22 * (e.props.index + 1)
                                    }
                                },
                                x: 0,
                                "-webkit-filter": "blur(0)",
                                filter: "blur(0)",
                                opacity: 1,
                                ease: Power3.easeOut
                            }, .01) : s.TweenMax.staggerFromTo(this.letters.sub_letters, .7, {
                                cycle: {
                                    y: function() {
                                        return 10 * e.getRandomInt(0, e.letters.sub_letters.length - 1)
                                    }
                                },
                                "-webkit-filter": "blur(10px)",
                                filter: "blur(10px)",
                                opacity: 0
                            }, {
                                cycle: {
                                    delay: function() {
                                        return .22 * (e.props.index + 1)
                                    }
                                },
                                y: 0,
                                "-webkit-filter": "blur(0)",
                                filter: "blur(0)",
                                opacity: 1,
                                ease: Power3.easeOut
                            }, .01)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.isUnmounted = !0
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return !1
                    }
                }, {
                    key: "hoverHandler",
                    value: function(e) {
                        var t = this;
                        if (!this.isUnmounted) {
                            if (this.state.hover)
                                return !1;
                            this.setState({
                                hover: !0
                            }),
                                this.letters.sub_sub_letters.forEach(function(e, n, a) {
                                    console.log(t.letters.sub_sub_letters.length - 1);
                                    var o = t.getRandomInt(0, t.letters.sub_sub_letters.length - 1);
                                    s.TweenMax.to(e, .7, {
                                        delay: .05 * o,
                                        rotationX: 100,
                                        z: -200 * t.context.rem,
                                        transformOrigin: 4 === t.props.index ? "50% 0% -6rem" : "50% 85% -60rem",
                                        ease: Power4.easeIn,
                                        onComplete: function() {
                                            s.TweenMax.fromTo(e, .7, {
                                                rotationX: -90,
                                                z: -200 * t.context.rem,
                                                transformOrigin: 4 === t.props.index ? "50% 50% -26rem" : "50% 50% -60rem"
                                            }, {
                                                transformOrigin: 4 === t.props.index ? "50% 50% -26rem" : "50% 50% -60rem",
                                                z: 0,
                                                rotationX: 0,
                                                ease: Power4.easeOut,
                                                onComplete: function() {
                                                    this.isUnmounted || n === t.letters.sub_sub_letters.length - 1 && t.setState({
                                                        hover: !1
                                                    })
                                                }
                                            })
                                        }
                                    })
                                })
                        }
                    }
                }, {
                    key: "onMouseOut",
                    value: function(e) {}
                }, {
                    key: "LinkClick",
                    value: function(e) {
                        var t = this;
                        this.props.active ? this.context.toggleOpen() : s.TweenMax.to(this.main_menu_circle.current, .7, {
                            scale: 1,
                            ease: s.ExpoScaleEase.config(1, 2, Power1.easeIn),
                            onComplete: function() {
                                i.default.push(t.props.item.path)
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = this.props.item;
                        return r.default.createElement("div", {
                            className: "" + this.props.dataClass,
                            onClick: this.LinkClick.bind(this),
                            onMouseEnter: this.hoverHandler.bind(this),
                            ref: this.link
                        }, t.name.split("").map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters.sub_letters[n] = t
                                },
                                key: n
                            }, r.default.createElement("span", {
                                className: "sub_letter",
                                ref: function(t) {
                                    return e.letters.sub_sub_letters[n] = t
                                }
                            }, t))
                        }), r.default.createElement("span", {
                            ref: this.main_menu_circle,
                            className: "main_menu_circle mod_" + (this.props.index + 1)
                        }))
                    }
                }]),
                t
        }();
        v.contextType = c.default;
        var y = function(e) {
            function t(e) {
                d(this, t);
                var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.inAnim = function(e) {
                    n.context.windowWidth < 1024 ? (s.TweenMax.from(n.main_menu_info.current, .8, {
                        opacity: 0,
                        delay: .5,
                        ease: Power2.easeOut,
                        onComplete: e
                    }),
                        s.TweenMax.from(n.menu_circle.current, 1.2, {
                            scale: 0,
                            ease: s.ExpoScaleEase.config(1, 2, Power2.easeOut)
                        }),
                        s.TweenMax.from(n.menu_in.current, .6, {
                            opacity: 0,
                            delay: .5,
                            ease: Power2.easeIn
                        }),
                        s.TweenMax.from(n.main_menu_social.current, .6, {
                            opacity: 0,
                            delay: .5,
                            ease: Power2.easeIn
                        })) : s.TweenMax.from(n.menu_circle.current, 1.2, {
                        scale: 0,
                        ease: s.ExpoScaleEase.config(1, 2, Power2.easeOut),
                        onComplete: e
                    })
                }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.hoverHandler = function(e) {}
                    ,
                    n.menu = r.default.createRef(),
                    n.menu_in = r.default.createRef(),
                    n.btn_g_line = r.default.createRef(),
                    n.btn_g_circle_1 = r.default.createRef(),
                    n.btn_g_circle_2 = r.default.createRef(),
                    n.menu_circle = r.default.createRef(),
                    n.work_link = r.default.createRef(),
                    n.main_menu_social = r.default.createRef(),
                    n.main_menu_info = r.default.createRef(),
                    n.letters = [{
                        sub_letters: [],
                        sub_sub_letters: []
                    }, {
                        sub_letters: [],
                        sub_sub_letters: []
                    }, {
                        sub_letters: [],
                        sub_sub_letters: []
                    }, {
                        sub_letters: [],
                        sub_sub_letters: []
                    }],
                    n
            }
            return m(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        this.context.isCloseWithoutAnimation ? (this.context.toggleCloseWithoutAnimation(),
                            e()) : (this.context.windowWidth > 1023 ? s.TweenMax.to([this.menu_in.current, this.work_link.current], .6, {
                            opacity: 0,
                            ease: Power2.easeIn
                        }) : (s.TweenMax.to(this.menu_in.current, .6, {
                            opacity: 0,
                            ease: Power2.easeIn
                        }),
                            s.TweenMax.to(this.main_menu_social.current, .6, {
                                opacity: 0,
                                ease: Power2.easeIn
                            })),
                            s.TweenMax.to(this.menu_circle.current, 1, {
                                scale: 0,
                                ease: s.ExpoScaleEase.config(1, 2, Power2.easeIn),
                                onComplete: e
                            }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = function(e) {
                            return (0,
                                l.matchPath)(location.pathname, {
                                path: e,
                                exact: !0
                            })
                        }
                            , t = this.context.global_info.filter(function(e) {
                            return "adress" === e.key
                        })[0].value
                            , n = this.context.global_info.filter(function(e) {
                            return "phone" === e.key
                        })[0].value
                            , a = this.context.global_info.filter(function(e) {
                            return "email" === e.key
                        })[0].value
                            , o = this.context.global_info.filter(function(e) {
                            return "vimeo" === e.key
                        })[0].value
                            , i = this.context.global_info.filter(function(e) {
                            return "facebook" === e.key
                        })[0].value
                            , c = this.context.global_info.filter(function(e) {
                            return "phone_attr" === e.key
                        })[0].value
                            , s = (this.context.global_info.filter(function(e) {
                            return "honeypot_field" === e.key
                        })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "instagram" === e.key
                            })[0].value);
                        this.context.global_info.filter(function(e) {
                            return "map_link" === e.key
                        })[0].value,
                            this.context.global_info.filter(function(e) {
                                return "work_email" === e.key
                            })[0].value;
                        return r.default.createElement("div", {
                            className: "menu",
                            ref: this.menu
                        }, r.default.createElement("div", {
                            className: "menu_circle_w"
                        }, r.default.createElement("div", {
                            ref: this.menu_circle,
                            className: "menu_circle " + (this.context.windowWidth > this.context.windowHeight ? "" : "vert_mod")
                        })), r.default.createElement("div", {
                            className: "menu_in",
                            ref: this.menu_in
                        }, r.default.createElement("nav", {
                            className: "main_menu"
                        }, r.default.createElement("ul", {
                            className: "main_menu_list"
                        }, [{
                            name: "home",
                            path: "/"
                        }, {
                            name: "about us",
                            path: "/about"
                        }, {
                            name: "works",
                            path: "/works"
                        }, {
                            name: "contacts",
                            path: "/contacts"
                        }].map(function(t, n) {
                            return r.default.createElement("li", {
                                className: "main_menu_item " + (e(t.path) ? "active_mod" : ""),
                                key: n
                            }, r.default.createElement(v, {
                                item: t,
                                index: n,
                                active: e(t.path),
                                dataClass: "main_menu_link"
                            }))
                        })), this.context.windowWidth < 1024 ? r.default.createElement(r.default.Fragment, null, r.default.createElement("ul", {
                            className: "main_menu_info",
                            ref: this.main_menu_info
                        }, r.default.createElement("li", {
                            className: "main_menu_info_item"
                        }, t), r.default.createElement("li", {
                            className: "main_menu_info_item"
                        }, r.default.createElement("a", {
                            className: "main_menu_info_link",
                            href: "tel:" + c
                        }, n)), r.default.createElement("li", {
                            className: "main_menu_info_item"
                        }, r.default.createElement("a", {
                            className: "main_menu_info_link",
                            href: "mailto:" + a
                        }, a))), r.default.createElement("ul", {
                            className: "main_menu_social",
                            ref: this.main_menu_social
                        }, r.default.createElement("li", {
                            className: "main_menu_social_item"
                        }, r.default.createElement("a", {
                            className: "main_menu_social_link",
                            target: "_blank",
                            href: o
                        }, r.default.createElement(p, {
                            className: "icon-vimeo social_mod"
                        }))), r.default.createElement("li", {
                            className: "main_menu_social_item"
                        }, r.default.createElement("a", {
                            className: "main_menu_social_link",
                            target: "_blank",
                            href: i
                        }, r.default.createElement(_, {
                            className: "icon-facebook social_mod"
                        }))), r.default.createElement("li", {
                            className: "main_menu_social_item"
                        }, r.default.createElement("a", {
                            className: "main_menu_social_link",
                            target: "_blank",
                            href: s
                        }, r.default.createElement(h, {
                            className: "icon-facebook social_mod"
                        }))))) : null)), r.default.createElement("div", {
                            className: "menu_w_btn " + (e("/vacancies") ? "active_mod" : ""),
                            ref: this.work_link
                        }, r.default.createElement(v, {
                            item: {
                                name: "work with us",
                                path: "/vacancies"
                            },
                            index: 4,
                            active: e("/vacancies"),
                            dataClass: "menu_btn bottom_level_mod"
                        })))
                    }
                }]),
                t
        }();
        y.contextType = c.default,
            t.default = y
    },
    45: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = p(o)
            , l = (n(7),
            p(n(15)))
            , i = n(4)
            , c = p(n(204))
            , s = p(n(29))
            , u = (p(n(39)),
            p(n(28)),
            p(n(6)))
            , d = p(n(198))
            , f = p(n(67))
            , m = p(n(66));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function _(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function h(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function v(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        ((function(e) {
                function t(e) {
                    _(this, t);
                    var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.toggleNext = function() {
                        n.setState({
                            index: n.state.index < n.state.images.length - 1 ? n.state.index + 1 : 0
                        })
                    }
                        ,
                        n.image_slider = r.default.createRef(),
                        n.state = {
                            index: 0
                        },
                        n
                }
                return v(t, o.Component),
                    a(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillAppear",
                        value: function(e) {
                            this.context.animation_on ? i.TweenMax.to(this.image_slider.current, .6, {
                                opacity: 0,
                                ease: Power3.easeInOut,
                                onComplete: e
                            }) : e()
                        }
                    }, {
                        key: "componentWillEnter",
                        value: function(e) {
                            this.context.animation_on ? i.TweenMax.to(this.image_slider.current, .6, {
                                opacity: 0,
                                ease: Power3.easeInOut,
                                onComplete: e
                            }) : e()
                        }
                    }, {
                        key: "componentWillLeave",
                        value: function(e) {
                            i.TweenMax.to(this.image_slider.current, .6, {
                                opacity: 0,
                                ease: Power3.easeInOut,
                                onComplete: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.default.createElement("div", {
                                className: "image_slider",
                                ref: this.image_slider
                            }, r.default.createElement(l.default, {
                                component: "div",
                                transitionMode: "simultaneous"
                            }, r.default.createElement(IntroImgSliderImg, {
                                data: this.state.images[this.state.index],
                                toggle: this.toggleNext.bind(this),
                                key: this.state.index
                            })))
                        }
                    }]),
                    t
            }
        )()).contextType = u.default;
        var y = function(e) {
            function t(e) {
                _(this, t);
                var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.loader_video = r.default.createRef(),
                    n.state = {
                        autoPlay: !1
                    },
                    n
            }
            return v(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.context.loader_play,
                            i.TweenMax.fromTo(this.loader_video.current, 3, {
                                yPercent: 50
                            }, {
                                delay: .3,
                                yPercent: 0,
                                ease: Power3.easeInOut
                            }),
                            i.TweenMax.delayedCall(.3, function() {
                                e.setState({
                                    autoPlay: !0
                                })
                            })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "loader_video_w_w",
                            ref: this.loader_video
                        }, r.default.createElement(c.default, {
                            className: "loader_video",
                            playing: this.state.autoPlay && !this.context.isOpen,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            url: [{
                                src: m.default,
                                type: "video/webm"
                            }, {
                                src: f.default,
                                type: "video/mp4"
                            }]
                        }))
                    }
                }]),
                t
        }();
        y.contextType = u.default;
        var w = function(e) {
            function t(e) {
                _(this, t);
                var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.EndVideo = function() {
                    n.setState({
                        video_end: !n.state.video_end
                    })
                }
                    ,
                    n.loader_video_w = r.default.createRef(),
                    n.loader_video_b = r.default.createRef(),
                    n.loader_video = r.default.createRef(),
                    n.state = {
                        video_end: !1
                    },
                    n
            }
            return v(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.animation_on && i.TweenMax.staggerFromTo([this.loader_video_w.current, this.loader_video_b.current], 3, {
                            cycle: {
                                yPercent: [50, -100]
                            }
                        }, {
                            delay: .3,
                            cycle: {
                                yPercent: [0, 0]
                            },
                            ease: Power3.easeInOut
                        }, 0, function() {})
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            className: "loader_video_w anim_mod",
                            ref: this.loader_video_w
                        }, r.default.createElement("div", {
                            className: "loader_video_b",
                            ref: this.loader_video_b
                        }, r.default.createElement(y, {
                            toggele: this.EndVideo.bind(this),
                            video: this.props.video
                        })))
                    }
                }]),
                t
        }();
        w.contextType = u.default;
        var g = function(e) {
            function t(e) {
                _(this, t);
                var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.glitch = function(e) {
                    var t = n
                        , a = [Power3.easeOut, Power3.easeIn, Power3.easeInOut]
                        , o = t.getRandomInt(-2, 2)
                        , r = t.getRandomInt(-2, 2);
                    i.TweenMax.set(n.section_title_sub, {
                        opacity: 1
                    }),
                        i.TweenMax.to(n.section_title.current, t.getRandomInt(.2, .5), {
                            x: o,
                            y: r,
                            "-webkit-filter": "blur(.01em)",
                            filter: "blur(.01em)",
                            ease: a[t.getRandomInt(0, 2)],
                            delay: e,
                            onComplete: function() {
                                t.unmonted || t.glitch(0)
                            }
                        }),
                        i.TweenMax.to(n.section_title_sub[0], .2, {
                            x: t.getRandomInt(-2, 2),
                            y: t.getRandomInt(-2, 2),
                            delay: e,
                            ease: a[t.getRandomInt(0, 2)]
                        }),
                        i.TweenMax.to(n.section_title_sub[1], .2, {
                            x: t.getRandomInt(-2, 2),
                            y: t.getRandomInt(-2, 2),
                            delay: e,
                            ease: a[t.getRandomInt(0, 2)]
                        }),
                        i.TweenMax.to(n.section_title_sub[2], .2, {
                            x: t.getRandomInt(-2, 2),
                            y: t.getRandomInt(-2, 2),
                            delay: e,
                            ease: a[t.getRandomInt(0, 2)]
                        })
                }
                    ,
                    n.getRandomInt = function(e, t) {
                        return Math.floor(Math.random() * (t - e)) + e
                    }
                    ,
                    n.letters = [],
                    n.section_title_sub = [],
                    n.section_title = r.default.createRef(),
                    n
            }
            return v(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.unmonted = !1,
                        this.context.animation_on && i.TweenMax.staggerFromTo(this.letters, 1, {
                            cycle: {
                                x: function() {
                                    return -50 * e.getRandomInt(0, e.letters.length)
                                }
                            },
                            "-webkit-filter": "blur(10px)",
                            filter: "blur(10px)",
                            opacity: 0
                        }, {
                            delay: 2.5,
                            x: 0,
                            "-webkit-filter": "blur(0)",
                            filter: "blur(0)",
                            opacity: 1,
                            ease: Power3.easeOut
                        }, .01, function() {
                            e.glitch(2)
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.unmonted = !0
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = {
                            pageTitleOne: "Moscow based",
                            pageTitleTwo: "production company",
                            selectedWorksTitle: "Selected works"
                        }
                            , n = t.pageTitleOne.split("")
                            , a = t.pageTitleTwo.split("");
                        return r.default.createElement("h1", {
                            className: "section_title intro_mod",
                            ref: this.section_title
                        }, n.map(function(t, n) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters[n] = t
                                },
                                key: n
                            }, t)
                        }), r.default.createElement("br", null), a.map(function(t, a) {
                            return r.default.createElement("span", {
                                className: "letter",
                                ref: function(t) {
                                    return e.letters[a + n.length] = t
                                },
                                key: a + n.length
                            }, t)
                        }), ["red_mod", "green_mod", "blue_mod"].map(function(t, o) {
                            return r.default.createElement("span", {
                                className: "section_title_sub " + t,
                                key: "intro_" + o,
                                ref: function(t) {
                                    return e.section_title_sub[o] = t
                                }
                            }, n.map(function(e, t) {
                                return r.default.createElement("span", {
                                    className: "letter",
                                    key: "intro_1_" + t
                                }, e)
                            }), r.default.createElement("br", null), a.map(function(e, t) {
                                return r.default.createElement("span", {
                                    className: "letter",
                                    key: "intro_1_" + t
                                }, e)
                            }))
                        }))
                    }
                }]),
                t
        }();
        g.contextType = u.default;
        var b = function(e) {
            function t() {
                _(this, t);
                var e = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.getRandomInt = function(e, t) {
                    return Math.floor(Math.random() * (t - e)) + e
                }
                    ,
                    e.inAnim = function(t, n) {
                        e.context.animation_on ? (i.TweenMax.set(e.section.current, {
                            opacity: 1
                        }),
                        n || i.TweenMax.fromTo(e.section.current, .7, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            delay: .7,
                            ease: Power2.easeIn,
                            onComplete: t
                        })) : t()
                    }
                    ,
                    e.state = {
                        sub_loaded: !1,
                        loader_hide: !1
                    },
                    e.letters = [],
                    e.section = r.default.createRef(),
                    e
            }
            return v(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.isOpen && (this.context.toggleCloseWithoutAnimation(),
                            this.context.toggleOpen()),
                            this.context.GlobalELUpdate({
                                awwwards: !0,
                                location: !0,
                                selected: !1,
                                lang: !1,
                                menu: !0,
                                vadim: !1,
                                contact_list: !0,
                                white_mode: !0
                            })
                    }
                }, {
                    key: "componentWillAppear",
                    value: function(e) {
                        this.inAnim(e, !0)
                    }
                }, {
                    key: "componentWillEnter",
                    value: function(e) {
                        this.inAnim(e, !1)
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        i.TweenMax.fromTo(this.section.current, .7, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: Power2.easeIn,
                            onComplete: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            pageTitleOne: "Moscow based",
                            pageTitleTwo: "production company",
                            selectedWorksTitle: "Selected works"
                        };
                        e.pageTitleOne.split(""),
                            e.pageTitleTwo.split("");
                        return r.default.createElement("section", {
                            className: "section",
                            ref: this.section
                        }, r.default.createElement("div", {
                            className: "intro_block"
                        }, r.default.createElement("div", {
                            className: "intro_block_descr"
                        }, this.context.start && r.default.createElement(g, null), this.context.start && !this.context.loader_hide && r.default.createElement(d.default, null), r.default.createElement(l.default, {
                            component: "div",
                            transitionMode: "simultaneous"
                        }, this.context.loader_play && r.default.createElement(w, {
                            video: this.props.data.video
                        })), " ", this.context.loader_play && r.default.createElement(s.default, {
                            blockClass: "home_mod",
                            delay: this.context.second_loader_play ? -2.5 : 3,
                            dataInner: e.selectedWorksTitle
                        }))))
                    }
                }]),
                t
        }();
        b.contextType = u.default,
            t.default = b
    },
    46: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = {
            data: {
                host: ["https://api.spot.film"],
                main: [],
                works: [],
                selected: [],
                aboutus: [],
                contacts: [],
                vacancies: [],
                vacancies_list: [],
                config: []
            },
            loaded_state: !1,
            load: function() {
                var e = this
                    , t = "en-us";
                t ? console.log("lang", t) : "ru" === (t = window.navigator.language.split("-"))[0] ? (t = "ru",
                    localStorage.setItem("lang", "ru")) : (t = "en",
                    localStorage.setItem("lang", "en")),
                    console.log("process", "production");
                var n = "https://api.spot.film"
                    , a = [n + "/" + t + "/api/pages/main", n + "/" + t + "/api/works", n + "/" + t + "/api/pages/aboutus", n + "/" + t + "/api/pages/contacts", n + "/" + t + "/api/pages/vacancies", n + "/" + t + "/api/vacancies", n + "/" + t + "/api/config/"];
                Promise.all(a.map(function(e) {
                    return fetch(e).then(function(e) {
                        return e.json()
                    })
                })).then(function(t) {
                    e.data.main = t[0],
                        e.data.works = t[1],
                        e.data.aboutus = t[2],
                        e.data.contacts = t[3],
                        e.data.vacancies = t[4],
                        e.data.vacancies_list = t[5],
                        e.data.config = t[6],
                        e.loaded_state = !0,
                        console.log("fetch", e.data)
                })
            },
            loaded: function() {
                return this.loaded_state
            },
            all: function() {
                return console.log(this.data),
                    this.data
            },
            config: function() {
                return this.data.config
            },
            get: function(e) {
                return this.players.find(function(t) {
                    return t.number === e
                })
            }
        };
        t.default = a
    },
    48: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
            , o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , r = n(1)
            , l = d(r)
            , i = n(31)
            , c = (d(n(15)),
            n(4),
            d(n(11)),
            d(n(27)))
            , s = d(n(24))
            , u = d(n(6));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    loaded: !1,
                    all_data: !1
                },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
                o(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return l.default.createElement(i.TransitionSwitch, {
                            transitionMode: "in-out",
                            deferLeavingComponentRemoval: !1
                        }, l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/selected/" + this.props.slug + "-project/:id",
                            render: function(t) {
                                return l.default.createElement(c.default, a({}, t, {
                                    data: e.props.data.works,
                                    slug: e.props.slug
                                }))
                            },
                            key: "single-selected-project"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/selected/:id",
                            render: function(t) {
                                return l.default.createElement(s.default, a({}, t, {
                                    data: e.props.data,
                                    slug: e.props.slug
                                }))
                            },
                            key: "selected-project"
                        }))
                    }
                }]),
                t
        }();
        f.contextType = u.default,
            t.default = f
    },
    49: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = f(o)
            , l = n(7)
            , i = n(19)
            , c = n(4)
            , s = (f(n(11)),
            f(n(6)))
            , u = f(n(67))
            , d = f(n(66));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    loaded: !1,
                    sec_line: !1
                },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        c.TweenMax.delayedCall(10, function() {
                            e.setState({
                                sec_line: !0
                            })
                        }),
                            console.log("Preload", this.props.url, this.state.sec_line)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        console.log("Preload Update", this.props.url, this.state.sec_line)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this
                            , t = function(e) {
                            return (0,
                                l.matchPath)(location.pathname, {
                                path: e,
                                exact: !0
                            })
                        };
                        return r.default.createElement("div", {
                            className: "preload"
                        }, t("/") ? r.default.createElement(r.default.Fragment, null, r.default.createElement("video", {
                            className: "loader_video",
                            ref: this.loader_video,
                            playsInline: !0,
                            muted: !0,
                            preload: "auto"
                        }, r.default.createElement("source", {
                            src: d.default,
                            type: "video/webm"
                        }), r.default.createElement("source", {
                            src: u.default,
                            type: "video/mp4"
                        }))) : null, !t("/") && this.state.sec_line ? r.default.createElement(r.default.Fragment, null, r.default.createElement("video", {
                            className: "loader_video",
                            ref: this.loader_video,
                            playsInline: !0,
                            muted: !0,
                            preload: "auto"
                        }, r.default.createElement("source", {
                            src: d.default,
                            type: "video/webm"
                        }), r.default.createElement("source", {
                            src: u.default,
                            type: "video/mp4"
                        }))) : null, t("/works") ? r.default.createElement(r.default.Fragment, null, this.props.data.works.map(function(t, n) {
                            return r.default.createElement("div", {
                                key: "li_" + n
                            }, t.images.length && t.images[0].image ? r.default.createElement("img", {
                                className: "works_block_img",
                                src: t.images[0].image,
                                alt: t.title,
                                key: "wbi_" + e.props.index
                            }) : null)
                        })) : null, !t("/works") && this.state.sec_line ? r.default.createElement(r.default.Fragment, null, this.props.data.works.map(function(t, n) {
                            return r.default.createElement("div", {
                                key: "li_" + n
                            }, t.images.length && t.images[0].image ? r.default.createElement("img", {
                                className: "works_block_img",
                                src: t.images[0].image,
                                alt: t.title,
                                key: "wbi_" + e.props.index
                            }) : null, !t.images.length && t.videos.length && t.videos[0].thumbnail ? r.default.createElement("img", {
                                className: "works_block_img",
                                src: t.videos[0].thumbnail,
                                key: "wbi_" + e.props.index,
                                alt: t.title
                            }) : null)
                        })) : null, this.state.sec_line ? r.default.createElement(r.default.Fragment, null, r.default.createElement(i.Picture, {
                            alt: "contacts",
                            sources: [{
                                srcSet: this.props.data.contacts.image.sm + ", " + this.props.data.contacts.image.sm2x + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: this.props.data.contacts.image.lg + ", " + this.props.data.contacts.image.lg2x + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        }), r.default.createElement(i.Picture, {
                            alt: "about us",
                            sources: [{
                                srcSet: this.props.data.aboutus.image.sm + ", " + this.props.data.aboutus.image.sm2x + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: this.props.data.aboutus.image.lg + ", " + this.props.data.aboutus.image.lg2x + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        }), r.default.createElement(i.Picture, {
                            alt: "Work with us",
                            sources: [{
                                srcSet: this.props.data.vacancies.image.sm + ", " + this.props.data.vacancies.image.sm2x + " 2x",
                                media: "(max-width: 799px)"
                            }, {
                                srcSet: this.props.data.vacancies.image.lg + ", " + this.props.data.vacancies.image.lg2x + " 2x",
                                media: "(min-width: 800px)"
                            }]
                        })) : null)
                    }
                }]),
                t
        }();
        m.contextType = s.default,
            t.default = m
    },
    50: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
            , o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , r = n(1)
            , l = _(r)
            , i = n(31)
            , c = (n(4),
            _(n(11)),
            _(n(45)))
            , s = _(n(27))
            , u = _(n(38))
            , d = _(n(37))
            , f = _(n(24))
            , m = _(n(36))
            , p = _(n(6));
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    loaded: !1,
                    all_data: !1
                },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
                o(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return l.default.createElement(i.TransitionSwitch, {
                            transitionMode: "in-out",
                            deferLeavingComponentRemoval: !1
                        }, l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/",
                            render: function(t) {
                                return l.default.createElement(c.default, a({
                                    data: e.context.all_data.main
                                }, t))
                            },
                            key: "home"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/project/:id",
                            render: function(t) {
                                return l.default.createElement(s.default, a({
                                    data: e.context.all_data.works
                                }, t))
                            },
                            key: "single-project"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/contacts",
                            render: function(t) {
                                return l.default.createElement(u.default, a({
                                    data: e.context.all_data.contacts,
                                    host: e.props.data.host
                                }, t))
                            },
                            key: "contacts"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/about",
                            render: function(t) {
                                return l.default.createElement(d.default, a({
                                    data: e.context.all_data.aboutus
                                }, t))
                            },
                            key: "about"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/works",
                            render: function(t) {
                                return l.default.createElement(f.default, a({
                                    data: e.context.all_data.works
                                }, t))
                            },
                            key: "works"
                        }), l.default.createElement(i.TransitionRoute, {
                            exact: !0,
                            path: "/vacancies",
                            render: function(t) {
                                return l.default.createElement(m.default, a({
                                    data: e.context.all_data.vacancies,
                                    dataList: e.context.all_data.vacancies_list
                                }, t))
                            },
                            key: "vacancies"
                        }))
                    }
                }]),
                t
        }();
        h.contextType = p.default,
            t.default = h
    },
    51: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = s(o)
            , l = (n(7),
            n(4))
            , i = s(n(11))
            , c = s(n(6));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.logo_w_bg = r.default.createRef(),
                    n.logo = r.default.createRef(),
                    n.logo_svg = r.default.createRef(),
                    n.logo_circle = r.default.createRef(),
                    n.logo_circle_sub = r.default.createRef(),
                    n.logo_circle_sub_white = r.default.createRef(),
                    n.logo_circle_3 = r.default.createRef(),
                    n.circles = {
                        circles_1: [],
                        circles_2: [],
                        circles_4: []
                    },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.context.animation_on) {
                            var t = new TimelineMax({
                                delay: 1,
                                onComplete: function() {
                                    if (e.context.loaded) {
                                        l.TweenMax.set([e.logo_w_bg.current, e.logo_circle_sub_white.current], {
                                            opacity: 0
                                        }),
                                            l.TweenMax.to(e.logo_circle_sub.current, .3, {
                                                opacity: 0,
                                                ease: Power2.easeOut
                                            }),
                                            l.TweenMax.to(e.logo_svg.current, .3, {
                                                opacity: 0,
                                                ease: Power2.easeOut
                                            });
                                        var n = e.context.windowWidth > e.context.windowHeight ? e.context.windowWidth / (4.4 * e.context.rem) : e.context.windowHeight / (4.4 * e.context.rem);
                                        n = e.context.windowWidth > 1023 ? Math.ceil(1.4 * n) : 25,
                                            l.TweenMax.to(e.logo_circle.current, 1, {
                                                scale: n,
                                                force3D: !0,
                                                transformOrigin: "50% 50%",
                                                ease: ExpoScaleEase.config(1, n, Power2.easeInOut),
                                                onComplete: function() {
                                                    e.context.toggleSecondLoaderPlay()
                                                }
                                            }),
                                            l.TweenMax.delayedCall(1.1, function() {
                                                e.context.toggleStart()
                                            })
                                    } else
                                        t.seek(0).play()
                                }
                            });
                            t.staggerFrom(this.circles.circles_1, .6, {
                                scale: 0,
                                transformOrigin: "50% 50%",
                                ease: Power2.easeOut
                            }, .05).staggerFrom(this.circles.circles_2, .6, {
                                scale: 0,
                                transformOrigin: "50% 50%",
                                ease: Power2.easeOut
                            }, .05, .2).from(this.logo_circle_3.current, .6, {
                                scale: 0,
                                transformOrigin: "50% 50%",
                                ease: Power2.easeOut
                            }, .4).staggerFrom(this.circles.circles_4, .6, {
                                scale: 0,
                                transformOrigin: "50% 50%",
                                ease: Power2.easeOut
                            }, .05, .6).from(e.logo_circle_sub.current, .7, {
                                scale: 0,
                                transformOrigin: "50% 50%",
                                ease: Elastic.easeOut.config(1, .3)
                            }, "-=.2").addLabel("end")
                        }
                    }
                }, {
                    key: "componentWillLeave",
                    value: function(e) {
                        l.TweenMax.delayedCall(1, function() {
                            e()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return r.default.createElement("div", {
                            className: "logo_second_w " + this.props.dataClass + " " + (this.context.windowWidth < 1024 ? "mobile_mod" : "")
                        }, r.default.createElement("div", {
                            className: "logo_second_bg",
                            ref: this.logo_w_bg
                        }), r.default.createElement("div", {
                            className: "logo_second " + this.props.dataClass,
                            ref: this.logo
                        }, r.default.createElement("div", {
                            className: "selected_circle",
                            ref: this.logo_circle
                        }, r.default.createElement("div", {
                            className: "selected_circle_sub",
                            ref: this.logo_circle_sub
                        }), r.default.createElement("div", {
                            className: "selected_circle_sub_white",
                            ref: this.logo_circle_sub_white
                        }), r.default.createElement("div", {
                            className: "selected_circle_sub_back"
                        })), r.default.createElement("svg", {
                            className: "logo_second_img",
                            ref: this.logo_svg,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 43.98"
                        }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                            id: "letter_circle"
                        }, r.default.createElement("path", {
                            d: "M30.41,27.79a2.769,2.769,0,0,1,.64-.08,4.27,4.27,0,0,1,3.22,1.27c.48.49.68.33,1.05-.06,1.04-1.12,2.1-2.2,3.16-3.29.59-.61.6-.62-.07-1.13a11.46,11.46,0,0,0-10.79-1.84,6.69,6.69,0,0,0-4.89,6.31,5.57,5.57,0,0,0,2.84,5.31,14,14,0,0,0,2.58,1.14,23,23,0,0,1,2.42.91c.86.4,1.1.83,1,1.29s-.57.73-1.39.73a5.87,5.87,0,0,1-4.1-1.66c-.34-.34-.49-.31-.76,0-1.1,1.24-2.22,2.46-3.33,3.69-.5.54-.5.55.1,1A13.27,13.27,0,0,0,30,44h.69A8.6,8.6,0,0,0,37,41c2-2.38,2.64-7.27-1.74-9.61a12.386,12.386,0,0,0-1.69-.77c-1.09-.39-2.19-.77-3.27-1.18-.39-.15-.74-.38-.71-.88S30.01,27.89,30.41,27.79Z",
                            fill: "#020202"
                        }), r.default.createElement("path", {
                            d: "M54.02,22.77a10.62,10.62,0,0,0-4.1-.75H41.6c-.82,0-.74-.11-.74.73V33c0,3.42.01,6.86-.03,10.33,0,.53.13.68.66.68h5.57c.48,0,.7-.06.7-.65V37.54c-.01-.52.15-.63.64-.63a17,17,0,0,0,3.46-.18c4.17-.71,6.49-3.6,6.28-7.85A6.44,6.44,0,0,0,54.02,22.77Zm-3.66,8.12a5.12,5.12,0,0,1-2.3.26c-.3,0-.3-.17-.3-.38h.01v-2.7c-.01-.22.04-.36.3-.36a7.822,7.822,0,0,1,2.08.13,1.37,1.37,0,0,1,1.12,1.31A1.54,1.54,0,0,1,50.36,30.89Z",
                            fill: "#020202"
                        }), r.default.createElement("path", {
                            d: "M75.89,23a12.76,12.76,0,0,0-6-1c-5.83.37-9.78,4.13-10.36,9.44C59,36.27,61.08,41.1,66.08,43.1a12.71,12.71,0,0,0,6.58.73,10.62,10.62,0,0,0,9.43-10.91A10.26,10.26,0,0,0,75.89,23ZM74.32,35.16a3.86,3.86,0,0,1-3.95,2.39,4,4,0,0,1-3.45-3.21,4.33,4.33,0,0,1-.18-1.32c0-2.41,1.13-4.06,3.13-4.52a3.86,3.86,0,0,1,4.54,2.36A5.47,5.47,0,0,1,74.32,35.16Z",
                            fill: "#020202"
                        }), r.default.createElement("path", {
                            d: "M99.34,22H91.5l-.04.01h-8c-.44,0-.6.09-.6.58v5.25c-.01.46.11.6.58.6h4c.41-.01.62.09.56.54a3.838,3.838,0,0,0,0,.49V43.25c0,.91-.08.77.78.77H93.9c1,0,1,0,1-1V29.16c0-.57.16-.72.72-.72h3.8c.45.01.59-.11.59-.59V22.68C100.02,22.14,99.87,22,99.34,22Z",
                            fill: "#020202"
                        }))), [{
                            cx: "26.592",
                            cy: "24.474"
                        }, {
                            cx: "36.568",
                            cy: "29.925"
                        }, {
                            cx: "26.592",
                            cy: "37.425"
                        }, {
                            cx: "35.333",
                            cy: "42.551"
                        }].map(function(t, n) {
                            return r.default.createElement("circle", {
                                cx: t.cx,
                                cy: t.cy,
                                r: "7.8",
                                key: "letter_circle_1" + n,
                                ref: function(t) {
                                    return e.circles.circles_1[n] = t
                                },
                                clipPath: "url(" + i.default.location.pathname + "#letter_circle)",
                                fill: "#020202"
                            })
                        }), [{
                            cx: "47.76",
                            cy: "22.793",
                            r: "10"
                        }, {
                            cx: "42.5",
                            cy: "44.472",
                            r: "15"
                        }, {
                            cx: "56.092",
                            cy: "32.971",
                            r: "7.5"
                        }].map(function(t, n) {
                            return r.default.createElement("circle", {
                                cx: t.cx,
                                cy: t.cy,
                                r: t.r,
                                key: "letter_circle_1" + n,
                                clipPath: "url(" + i.default.location.pathname + "#letter_circle)",
                                ref: function(t) {
                                    return e.circles.circles_2[n] = t
                                },
                                fill: "#020202"
                            })
                        }), r.default.createElement("circle", {
                            ref: this.logo_circle_3,
                            clipPath: "url(" + i.default.location.pathname + "#letter_circle)",
                            cx: "71.092",
                            cy: "33.023",
                            r: "15",
                            fill: "#020202"
                        }), [{
                            cx: "85.483",
                            cy: "25.29",
                            r: "5"
                        }, {
                            cx: "91.483",
                            cy: "22.37",
                            r: "5"
                        }, {
                            cx: "97.017",
                            cy: "29.023",
                            r: "9"
                        }, {
                            cx: "88.483",
                            cy: "33.793",
                            r: "6"
                        }, {
                            cx: "94.435",
                            cy: "41.978",
                            r: "5"
                        }, {
                            cx: "87.435",
                            cy: "43.615",
                            r: "5"
                        }].map(function(t, n) {
                            return r.default.createElement("circle", {
                                cx: t.cx,
                                cy: t.cy,
                                r: t.r,
                                key: "letter_circle_1" + n,
                                ref: function(t) {
                                    return e.circles.circles_4[n] = t
                                },
                                clipPath: "url(" + i.default.location.pathname + "#letter_circle)",
                                fill: "#020202"
                            })
                        }))))
                    }
                }]),
                t
        }();
        u.contextType = c.default,
            t.default = u
    },
    6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(1));
        t.default = a.default.createContext({
            rem: null,
            animation_on: !1,
            IsSelected: !1,
            all_data: null,
            selected_data: !1,
            global_el: null,
            global_info: null,
            selected_slug: null,
            isOpen: !1,
            isCloseWithoutAnimation: !1,
            loaded: !1,
            start: !1,
            loaded_GL: !1,
            loader_play: !1,
            loader_hide: !1,
            second_loader_play: !1,
            work_active: !1,
            work_list_loaded: !1,
            back_work: !1,
            work_active_transform: !1,
            single_work_active: !1,
            mobile_footer: !1,
            vacancies: null,
            windowWidth: null,
            windowHeight: null,
            MobileFooterSwitch: function() {},
            toggleOpen: function() {},
            toggleCloseWithoutAnimation: function() {},
            toggleLoaded: function() {},
            toggleStart: function() {},
            toggleloaded_GL: function() {},
            toggleLoaderPlay: function() {},
            toggleLoaderHide: function() {},
            toggleSecondLoaderPlay: function() {},
            ActiveWork: function() {},
            toggleWorkListLoaded: function() {},
            BackWork: function() {},
            ActiveWorkTransform: function() {},
            SingleActiveWork: function() {},
            ActiveVacancies: function() {},
            ActiveVacanciesOld: function() {},
            GlobalELUpdate: function() {}
        })
    },
    64: function(e, t, n) {
        e.exports = n.p + "i/project_img_3.jpg"
    },
    65: function(e, t, n) {
        e.exports = n.p + "i/project_img_2.jpg"
    },
    66: function(e, t, n) {
        e.exports = n.p + "videos/V2.webm"
    },
    67: function(e, t, n) {
        e.exports = n.p + "videos/V2.mp4"
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = s(o)
            , l = (n(7),
            n(4))
            , i = s(n(11))
            , c = s(n(6));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.mouseClick = function(e) {
                    i.default.push("/")
                }
                    ,
                    n.logo_circle = r.default.createRef(),
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.PureComponent),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.context.animation_on && l.TweenMax.from(this.logo_circle.current, 1, {
                            xPercent: -50,
                            yPercent: -50,
                            delay: this.props.delay,
                            ease: Power2.easeOut
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement(r.default.Fragment, null, this.context.selected_slug ? r.default.createElement("a", {
                            className: "logo " + this.props.dataClass,
                            href: "/"
                        }, r.default.createElement("span", {
                            className: "logo_in"
                        }, r.default.createElement("svg", {
                            className: "logo_img " + this.props.dataClass + " " + (this.context.isOpen ? "menu_open_mod" : "") + " " + (this.context.global_el.white_mode ? "" : "black_mod"),
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 43.98"
                        }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                            id: "clip-path-logo-" + this.props.dataClass
                        }, r.default.createElement("circle", {
                            ref: this.logo_circle,
                            cx: "11.999",
                            cy: "2.014",
                            r: "100",
                            fill: "#fff"
                        }))), r.default.createElement("path", {
                            clipPath: "url(" + i.default.location.pathname + "#clip-path-logo-" + this.props.dataClass + ")",
                            d: "M21.48,11A10.86,10.86,0,0,1,10.74,22,10.86,10.86,0,0,1,0,11,10.86,10.86,0,0,1,10.74,0,10.86,10.86,0,0,1,21.48,11ZM82.09,32.92a10.62,10.62,0,0,1-9.43,10.91,12.71,12.71,0,0,1-6.58-.73c-5-2-7.08-6.83-6.55-11.66.58-5.31,4.53-9.07,10.36-9.44a12.76,12.76,0,0,1,6,1A10.26,10.26,0,0,1,82.09,32.92ZM40.86,33q0-5.13,0-10.25c0-.84-.08-.73.74-.73h8.32a10.62,10.62,0,0,1,4.1.75,6.44,6.44,0,0,1,4.12,6.11c.21,4.25-2.11,7.14-6.28,7.85a17,17,0,0,1-3.46.18c-.49,0-.65.11-.64.63,0,1.94,0,3.88,0,5.82,0,.59-.22.65-.7.65-1.86,0-3.72,0-5.57,0-.53,0-.66-.15-.66-.68C40.87,39.86,40.86,36.42,40.86,33ZM30,44a13.27,13.27,0,0,1-7.91-2.62c-.6-.45-.6-.46-.1-1,1.11-1.23,2.23-2.45,3.33-3.69.27-.31.42-.34.76,0a5.87,5.87,0,0,0,4.1,1.66c.82,0,1.29-.27,1.39-.73s-.14-.89-1-1.29a23,23,0,0,0-2.42-.91,14,14,0,0,1-2.58-1.14,5.57,5.57,0,0,1-2.84-5.31,6.69,6.69,0,0,1,4.89-6.31A11.46,11.46,0,0,1,38.41,24.5c.67.51.66.52.07,1.13-1.06,1.09-2.12,2.17-3.16,3.29-.37.39-.57.55-1.05.06a4.27,4.27,0,0,0-3.22-1.27,2.77,2.77,0,0,0-.64.08c-.4.1-.79.27-.82.77s.32.73.71.88c1.08.41,2.18.79,3.27,1.18a12.39,12.39,0,0,1,1.69.77C39.64,33.73,39,38.62,37,41A8.6,8.6,0,0,1,30.69,44C30.45,44,30.2,44,30,44ZM91.5,22c2.61,0,5.22,0,7.84,0,.53,0,.68.14.67.68,0,1.72,0,3.45,0,5.17,0,.48-.14.6-.59.59-1.26,0-2.53,0-3.8,0-.56,0-.72.15-.72.72,0,4.62,0,9.24,0,13.86,0,1,0,1-1,1H88.78c-.86,0-.78.14-.78-.77q0-6.89,0-13.78a3.84,3.84,0,0,1,0-.49c.06-.45-.15-.55-.56-.54-1.32,0-2.64,0-4,0-.47,0-.59-.14-.58-.6,0-1.75,0-3.5,0-5.25,0-.49.16-.58.6-.58,2.66,0,5.33,0,8,0ZM66.92,34.34a4,4,0,0,0,3.45,3.21,3.86,3.86,0,0,0,3.95-2.39,5.47,5.47,0,0,0,.09-4.3,3.86,3.86,0,0,0-4.54-2.36c-2,.46-3.13,2.11-3.13,4.52a4.33,4.33,0,0,0,.18,1.32ZM47.76,30.77c0,.21,0,.38.3.38a5.12,5.12,0,0,0,2.3-.26,1.54,1.54,0,0,0,.91-1.74,1.37,1.37,0,0,0-1.12-1.31,7.82,7.82,0,0,0-2.08-.13c-.26,0-.31.14-.3.36,0,.44,0,.87,0,1.31s0,.93,0,1.39Z",
                            fill: "#fff"
                        })))) : r.default.createElement("div", {
                            className: "logo " + this.props.dataClass,
                            onClick: this.mouseClick
                        }, r.default.createElement("span", {
                            className: "logo_in"
                        }, r.default.createElement("svg", {
                            className: "logo_img " + this.props.dataClass + " " + (this.context.isOpen ? "menu_open_mod" : "") + " " + (this.context.global_el.white_mode ? "" : "black_mod"),
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 100 43.98"
                        }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                            id: "clip-path-logo-" + this.props.dataClass
                        }, r.default.createElement("circle", {
                            ref: this.logo_circle,
                            cx: "11.999",
                            cy: "2.014",
                            r: "100",
                            fill: "#fff"
                        }))), r.default.createElement("path", {
                            clipPath: "url(" + i.default.location.pathname + "#clip-path-logo-" + this.props.dataClass + ")",
                            d: "M21.48,11A10.86,10.86,0,0,1,10.74,22,10.86,10.86,0,0,1,0,11,10.86,10.86,0,0,1,10.74,0,10.86,10.86,0,0,1,21.48,11ZM82.09,32.92a10.62,10.62,0,0,1-9.43,10.91,12.71,12.71,0,0,1-6.58-.73c-5-2-7.08-6.83-6.55-11.66.58-5.31,4.53-9.07,10.36-9.44a12.76,12.76,0,0,1,6,1A10.26,10.26,0,0,1,82.09,32.92ZM40.86,33q0-5.13,0-10.25c0-.84-.08-.73.74-.73h8.32a10.62,10.62,0,0,1,4.1.75,6.44,6.44,0,0,1,4.12,6.11c.21,4.25-2.11,7.14-6.28,7.85a17,17,0,0,1-3.46.18c-.49,0-.65.11-.64.63,0,1.94,0,3.88,0,5.82,0,.59-.22.65-.7.65-1.86,0-3.72,0-5.57,0-.53,0-.66-.15-.66-.68C40.87,39.86,40.86,36.42,40.86,33ZM30,44a13.27,13.27,0,0,1-7.91-2.62c-.6-.45-.6-.46-.1-1,1.11-1.23,2.23-2.45,3.33-3.69.27-.31.42-.34.76,0a5.87,5.87,0,0,0,4.1,1.66c.82,0,1.29-.27,1.39-.73s-.14-.89-1-1.29a23,23,0,0,0-2.42-.91,14,14,0,0,1-2.58-1.14,5.57,5.57,0,0,1-2.84-5.31,6.69,6.69,0,0,1,4.89-6.31A11.46,11.46,0,0,1,38.41,24.5c.67.51.66.52.07,1.13-1.06,1.09-2.12,2.17-3.16,3.29-.37.39-.57.55-1.05.06a4.27,4.27,0,0,0-3.22-1.27,2.77,2.77,0,0,0-.64.08c-.4.1-.79.27-.82.77s.32.73.71.88c1.08.41,2.18.79,3.27,1.18a12.39,12.39,0,0,1,1.69.77C39.64,33.73,39,38.62,37,41A8.6,8.6,0,0,1,30.69,44C30.45,44,30.2,44,30,44ZM91.5,22c2.61,0,5.22,0,7.84,0,.53,0,.68.14.67.68,0,1.72,0,3.45,0,5.17,0,.48-.14.6-.59.59-1.26,0-2.53,0-3.8,0-.56,0-.72.15-.72.72,0,4.62,0,9.24,0,13.86,0,1,0,1-1,1H88.78c-.86,0-.78.14-.78-.77q0-6.89,0-13.78a3.84,3.84,0,0,1,0-.49c.06-.45-.15-.55-.56-.54-1.32,0-2.64,0-4,0-.47,0-.59-.14-.58-.6,0-1.75,0-3.5,0-5.25,0-.49.16-.58.6-.58,2.66,0,5.33,0,8,0ZM66.92,34.34a4,4,0,0,0,3.45,3.21,3.86,3.86,0,0,0,3.95-2.39,5.47,5.47,0,0,0,.09-4.3,3.86,3.86,0,0,0-4.54-2.36c-2,.46-3.13,2.11-3.13,4.52a4.33,4.33,0,0,0,.18,1.32ZM47.76,30.77c0,.21,0,.38.3.38a5.12,5.12,0,0,0,2.3-.26,1.54,1.54,0,0,0,.91-1.74,1.37,1.37,0,0,0-1.12-1.31,7.82,7.82,0,0,0-2.08-.13c-.26,0-.31.14-.3.36,0,.44,0,.87,0,1.31s0,.93,0,1.39Z",
                            fill: "#fff"
                        })))))
                    }
                }]),
                t
        }();
        u.contextType = c.default,
            t.default = u
    },
    80: function(e, t, n) {
        e.exports = n.p + "i/project_img_1.jpg"
    },
    88: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = u(o)
            , l = n(7)
            , i = u(n(46))
            , c = u(n(11))
            , s = u(n(6));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                n.setPosts = function(e) {
                    n.setState({
                        posts: e.items
                    })
                }
                    ,
                    n.toggleOpen = function() {
                        console.log("toggleOpen", !n.state.isOpen),
                            n.setState(function(e) {
                                return {
                                    isOpen: !e.isOpen
                                }
                            })
                    }
                    ,
                    n.toggleCloseWithoutAnimation = function() {
                        console.log("toggleCloseWithoutAnimation", !n.state.isCloseWithoutAnimation),
                            n.setState(function(e) {
                                return {
                                    isCloseWithoutAnimation: !e.isCloseWithoutAnimation
                                }
                            })
                    }
                    ,
                    n.toggleLoaded = function() {
                        console.log("toggleLoaded", !n.state.loaded),
                            n.setState(function(e) {
                                return {
                                    loaded: !e.loaded
                                }
                            })
                    }
                    ,
                    n.toggleStart = function() {
                        console.log("toggleStart", !n.state.start),
                            n.setState(function(e) {
                                return {
                                    start: !e.start
                                }
                            })
                    }
                    ,
                    n.toggleloaded_GL = function() {
                        console.log("toggleloaded_GL", !n.state.loaded_GL),
                            n.setState(function(e) {
                                return {
                                    loaded_GL: !e.loaded_GL
                                }
                            })
                    }
                    ,
                    n.toggleLoaderPlay = function() {
                        console.log("toggleLoaderPlay", !n.state.loader_play),
                            n.setState(function(e) {
                                return {
                                    loader_play: !e.loader_play
                                }
                            })
                    }
                    ,
                    n.toggleLoaderHide = function() {
                        console.log("toggleLoaderHide", !n.state.loader_hide),
                            n.setState(function(e) {
                                return {
                                    loader_hide: !e.loader_hide
                                }
                            })
                    }
                    ,
                    n.toggleSecondLoaderPlay = function() {
                        console.log("toggleSecondLoaderPlay", !n.state.second_loader_play),
                            n.setState(function(e) {
                                return {
                                    second_loader_play: !e.second_loader_play
                                }
                            })
                    }
                    ,
                    n.ActiveVacancies = function(e) {
                        console.log("ActiveVacancies", e),
                            n.setState({
                                vacancies: e.index
                            })
                    }
                    ,
                    n.ActiveWork = function(e) {
                        console.log("ActiveWork", e),
                            n.setState({
                                work_active: e.index
                            })
                    }
                    ,
                    n.toggleWorkListLoaded = function(e) {
                        console.log("toggleWorkListLoaded", !n.state.work_list_loaded),
                            n.setState(function(e) {
                                return {
                                    work_list_loaded: !e.work_list_loaded
                                }
                            })
                    }
                    ,
                    n.BackWork = function(e) {
                        console.log("BackWork", e),
                            n.setState({
                                back_work: e
                            })
                    }
                    ,
                    n.ActiveWorkTransform = function(e) {
                        console.log("ActiveWorkTransform", e),
                            n.setState({
                                work_active_transform: e
                            })
                    }
                    ,
                    n.SingleActiveWork = function(e) {
                        console.log("SingleActiveWork", e),
                            n.setState({
                                single_work_active: e.index
                            })
                    }
                    ,
                    n.ActiveVacanciesOld = function(e) {
                        console.log("ActiveVacanciesOld", e),
                            n.setState({
                                vacancies_old: e.index
                            })
                    }
                    ,
                    n.GlobalELUpdate = function(e) {
                        console.log("GlobalELUpdate", e),
                            n.setState({
                                global_el: e
                            })
                    }
                    ,
                    n.MobileFooterSwitch = function(e) {
                        n.setState(function(e) {
                            return {
                                mobile_footer: !e.mobile_footer
                            }
                        })
                    }
                    ,
                    n.LoadedCheck = function() {
                        var e = n;
                        if (n.state.IsSelected)
                            n.state.selected_data && !e.state.loaded ? (e.setState({
                                loaded: !0
                            }),
                                console.log("toggleLoaded", !n.state.loaded)) : n.state.selected_data && e.state.loaded ? (TweenMax.ticker.removeEventListener("tick", n.LoadedCheck),
                                console.log("tik end", e.state.time)) : e.setState({
                                time: e.state.time + 16
                            });
                        else {
                            i.default.loaded() && !e.state.loaded ? (e.setState({
                                all_data: i.default.all(),
                                global_info: i.default.config(),
                                loaded: !0
                            }),
                                console.log("toggleLoaded", !n.state.loaded)) : i.default.loaded() && e.state.loaded ? (TweenMax.ticker.removeEventListener("tick", n.LoadedCheck),
                                console.log("tik end", e.state.time)) : e.setState({
                                time: e.state.time + 16
                            })
                        }
                    }
                ;
                return n.handleResize = n.handleResize.bind(n),
                    n.state = {
                        windowWidth: window.outerWidth,
                        windowHeight: window.innerHeight,
                        IsSelected: function(e) {
                            return (0,
                                l.matchPath)(location.pathname, {
                                path: e,
                                exact: !1
                            })
                        }("/selected"),
                        selected_data: !1,
                        selected_slug: null,
                        all_data: null,
                        loaded: !1,
                        start: !1,
                        loaded_GL: !1,
                        loader_play: !1,
                        loader_hide: !1,
                        second_loader_play: !0,
                        isOpen: !1,
                        isCloseWithoutAnimation: !1,
                        work_active: !1,
                        work_list_loaded: !1,
                        back_work: !1,
                        work_active_transform: !1,
                        single_work_active: !1,
                        vacancies: !1,
                        vacancies_old: !1,
                        mobile_footer: !0,
                        global_info: !1,
                        global_el: {
                            awwwards: !0,
                            location: !0,
                            selected: !1,
                            lang: !1,
                            menu: !0,
                            vadim: !1,
                            contact_list: !0,
                            white_mode: !0
                        },
                        animation_on: !0,
                        rem: .56 * window.outerWidth > window.innerHeight ? window.innerHeight / 1080 * 10 : window.outerWidth / 1920 * 10,
                        time: 0
                    },
                    console.log(window.innerHeight / window.outerWidth, "production"),
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.handleResize(),
                            window.addEventListener("resize", this.handleResize),
                            this.state.IsSelected) {
                            var t = void 0;
                            !function(e) {
                                return (0,
                                    l.matchPath)(location.pathname, {
                                    path: e,
                                    exact: !0
                                })
                            }("/selected/:id") ? (console.log("test2", c.default.location.pathname.split("/").slice(2, 3)[0].split("-").slice(0, 1)[0]),
                                t = c.default.location.pathname.split("/").slice(2, 3)[0].split("-").slice(0, 1)[0]) : (console.log("test", c.default.location.pathname.split("/").slice(-1)[1]),
                                t = c.default.location.pathname.split("/").slice(-1)[0]);
                            var n = "en-us";
                            n ? console.log("lang", n) : "ru" === (n = window.navigator.language.split("-"))[0] ? (n = "ru",
                                localStorage.setItem("lang", "ru")) : (n = "en",
                                localStorage.setItem("lang", "en"));
                            var a = "https://api.spot.film"
                                , o = [a + "/" + n + "/api/pages/private/" + t, a + "/" + n + "/api/config/"];
                            Promise.all(o.map(function(e) {
                                return fetch(e).then(function(e) {
                                    return e.json()
                                })
                            })).then(function(n) {
                                e.setState({
                                    selected_data: n[0],
                                    global_info: n[1],
                                    selected_slug: t
                                }),
                                    console.log("selected_data fetch", n[0], n[1], t)
                            })
                        } else
                            i.default.load();
                        TweenMax.ticker.addEventListener("tick", this.LoadedCheck)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.setState({
                            windowWidth: window.outerWidth,
                            windowHeight: window.innerHeight,
                            rem: .56 * window.outerWidth > window.innerHeight ? window.innerHeight / 1080 * 10 : window.outerWidth / 1920 * 10
                        }),
                            console.log("aspectRatio", window.outerWidth / window.innerHeight),
                            document.documentElement.style.setProperty("--vh", this.state.windowHeight + "px"),
                            document.documentElement.style.setProperty("--rem", this.state.rem + "px")
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement(s.default.Provider, {
                            value: {
                                rem: this.state.rem,
                                all_data: this.state.all_data,
                                IsSelected: this.state.IsSelected,
                                selected_data: this.state.selected_data,
                                animation_on: this.state.animation_on,
                                global_el: this.state.global_el,
                                global_info: this.state.global_info,
                                isOpen: this.state.isOpen,
                                isCloseWithoutAnimation: this.state.isCloseWithoutAnimation,
                                selected_slug: this.state.selected_slug,
                                loaded: this.state.loaded,
                                start: this.state.start,
                                loaded_GL: this.state.loaded_GL,
                                loader_play: this.state.loader_play,
                                loader_hide: this.state.loader_hide,
                                second_loader_play: this.state.second_loader_play,
                                work_active: this.state.work_active,
                                work_list_loaded: this.state.work_list_loaded,
                                back_work: this.state.back_work,
                                work_active_transform: this.state.work_active_transform,
                                single_work_active: this.state.single_work_active,
                                vacancies: this.state.vacancies,
                                vacancies_old: this.state.vacancies_old,
                                windowWidth: this.state.windowWidth,
                                windowHeight: this.state.windowHeight,
                                mobile_footer: this.state.mobile_footer,
                                toggleOpen: this.toggleOpen,
                                toggleCloseWithoutAnimation: this.toggleCloseWithoutAnimation,
                                toggleLoaded: this.toggleLoaded,
                                toggleStart: this.toggleStart,
                                toggleloaded_GL: this.toggleloaded_GL,
                                toggleLoaderPlay: this.toggleLoaderPlay,
                                toggleLoaderHide: this.toggleLoaderHide,
                                toggleSecondLoaderPlay: this.toggleSecondLoaderPlay,
                                ActiveWork: this.ActiveWork,
                                toggleWorkListLoaded: this.toggleWorkListLoaded,
                                BackWork: this.BackWork,
                                ActiveWorkTransform: this.ActiveWorkTransform,
                                SingleActiveWork: this.SingleActiveWork,
                                ActiveVacancies: this.ActiveVacancies,
                                ActiveVacanciesOld: this.ActiveVacanciesOld,
                                GlobalELUpdate: this.GlobalELUpdate,
                                MobileFooterSwitch: this.MobileFooterSwitch
                            }
                        }, this.props.children)
                    }
                }]),
                t
        }();
        t.default = d
    },
    89: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                    t
            }
        }()
            , o = n(1)
            , r = p(o)
            , l = (n(79),
            n(7))
            , i = (n(31),
            p(n(46)),
            n(19),
            p(n(15)))
            , c = (n(4),
            p(n(11)),
            p(n(45)),
            p(n(27)),
            p(n(38)),
            p(n(37)),
            p(n(24)),
            p(n(36)),
            p(n(39)))
            , s = p(n(51))
            , u = p(n(50))
            , d = (p(n(49)),
            p(n(48)))
            , f = p(n(28))
            , m = p(n(6));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = function(e) {
            function t(e) {
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    IsSelected: function(e) {
                        return (0,
                            l.matchPath)(location.pathname, {
                            path: e,
                            exact: !1
                        })
                    }("/selected")
                },
                    n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o.Component),
                a(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "componentWillUnmount",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        var e = ["simultaneous", "out-in", "in-out"];
                        return r.default.createElement(r.default.Fragment, null, r.default.createElement(i.default, {
                            className: "logo_second_main",
                            component: "div",
                            transitionMode: e[0]
                        }, this.context.second_loader_play && this.context.animation_on && r.default.createElement(s.default, null)), r.default.createElement(i.default, {
                            className: "menu_w",
                            component: "div",
                            transitionMode: e[1]
                        }, this.context.isOpen && r.default.createElement(c.default, null)), this.context.loaded_GL && r.default.createElement(f.default, null), this.context.start && !this.context.IsSelected && r.default.createElement(u.default, {
                            data: this.context.all_data
                        }), this.context.start && this.context.IsSelected && r.default.createElement(d.default, {
                            data: this.context.selected_data,
                            slug: this.context.selected_slug
                        }))
                    }
                }]),
                t
        }();
        _.contextType = m.default,
            t.default = _
    }
});
