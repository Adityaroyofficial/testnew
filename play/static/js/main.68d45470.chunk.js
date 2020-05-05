
(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        27: function(e, a, t) {
            e.exports = t(60)
        },
        32: function(e, a, t) {},
        33: function(e, a, t) {},
        60: function(e, a, t) {
            "use strict";
            t.r(a);
            var r = t(0),
                n = t.n(r),
                i = t(26),
                s = t.n(i),
                c = (t(32), t(33), t(8)),
                o = t.n(c),
                u = t(11),
                d = t(1),
                l = t(2),
                f = t(4),
                m = t(3),
                p = t(6),
                h = t(5),
                b = t(13),
                g = t(15),
                w = t(10),
                j = t(35),
                v = t(38),
                y = "https://igzeo4fh0b.execute-api.ap-south-1.amazonaws.com/api/",
                k = function() {
                    var e = Object(u.a)(o.a.mark(function e(a) {
                        var t;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, v.get("".concat(y, "get/").concat(a));
                                case 4:
                                    return t = e.sent, e.abrupt("return", t ? t.data : void 0);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(a) {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function(e, a) {
                    var t = e.reduce(function(e, a) {
                            return Object(g.a)({}, e, Object(b.a)({}, a.qId, a.aId))
                        }, {}),
                        r = a.reduce(function(e, a) {
                            return Object(g.a)({}, e, Object(b.a)({}, a.qId, a.aId))
                        }, {});
                    return Object.keys(r).filter(function(e) {
                        return r[e] === t[e]
                    }).length
                },
                E = function() {
                    var e = Object(u.a)(o.a.mark(function e(a) {
                        var t, r, n;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = N(), e.next = 3, v.post("".concat(y, "saveUserDetails"), {
                                        questions: a,
                                        name: t
                                    });
                                case 3:
                                    if (!(r = e.sent)) {
                                        e.next = 8;
                                        break
                                    }
                                    return n = r.data, W(n.userId), e.abrupt("return", n);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(a) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = function() {
                    var e = Object(u.a)(o.a.mark(function e(a, t) {
                        var r;
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, v.post("".concat(y, "saveFriendsScores/").concat(a), {
                                        scores: {
                                            score: t,
                                            name: N()
                                        }
                                    });
                                case 2:
                                    if (!(r = e.sent)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", r.data);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    }));
                    return function(a, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    return (new w.a).get("userName")
                },
                W = function(e) {
                    return (new w.a).set("completed_quiz_id", e, {
                        path: "/",
                        expires: new Date((new Date).getTime() + 3e10)
                    })
                },
                C = function(e) {
                    return (new w.a).get("completed_".concat(e))
                },
                S = function(e, a) {
                    (new w.a).set("completed_".concat(e), a, {
                        path: "/",
                        expires: new Date((new Date).getTime() + 3e10)
                    })
                },
                O = function(e) {
                    var a = e.color,
                        t = e.showLogout;
                    return n.a.createElement("div", {
                        className: "text-center justify-center text-white flex",
                        style: {
                            background: a
                        }
                    }, n.a.createElement("div", {
                        className: "flex flex-1 justify-center items-center"
                    }, n.a.createElement("div", {
                        className: "flex-1"
                    }), n.a.createElement("div", {
                        className: "flex justify-center items-center "
                    }, n.a.createElement(z, null), n.a.createElement("a", {
                        href: "/",
                        className: "flex-1 p-1 text-base tracking-wide leading-loose hover:no-underline hover:text-white hover:font-semibold"
                    }, "2019 Friendship Dare", " "), n.a.createElement(z, null)), n.a.createElement("div", {
                        className: "flex-1 text-right"
                    }, t && n.a.createElement("button", {
                        className: "mr-3 text-lg",
                        onClick: function() {
                            ! function() {
                                var e = new w.a;
                                e.remove("completed_quiz_id", {
                                    path: "/"
                                }), e.remove("userName", {
                                    path: "/"
                                }), window.location.href = "/"
                            }()
                        }
                    }, " ", "Logout", " "))))
                },
                z = function() {
                    return n.a.createElement("span", {
                        className: "px-3 pt-1"
                    }, n.a.createElement("svg", {
                        style: {
                            height: "26px",
                            width: "26px"
                        },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-heart"
                    }, n.a.createElement("path", {
                        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    })))
                },
                D = t(7),
                I = function(e) {
                    var a = e.setColor;
                    return n.a.createElement("div", {
                        className: "flex pb-3"
                    }, ["#000000", "#fc4d21", "#f27f00", "#172c6f", "#b14e00", "#99003b", "#ff4a40"].map(function(e, t) {
                        return n.a.createElement(F, {
                            key: t,
                            color: e,
                            setColor: function(t) {
                                return a(e)
                            }
                        })
                    }))
                },
                F = function(e) {
                    var a = e.color,
                        t = e.setColor;
                    return n.a.createElement("div", {
                        className: "rounded-full h-8 w-8 mr-2 color-hovered",
                        onClick: t,
                        style: {
                            background: a
                        }
                    })
                },
                Q = function(e) {
                    var a = e.title;
                    return n.a.createElement("h3", {
                        className: "text-2xl font-semibold"
                    }, a)
                },
                A = function(e) {
                    var a = e.title;
                    return n.a.createElement("h4", {
                        className: "text-xl font-medium leading-relaxed"
                    }, a)
                },
                L = function(e) {
                    var a = e.text,
                        t = e.onClick,
                        r = e.color;
                    return n.a.createElement("button", {
                        className: "w-full p-2 font-semibold tracking-wide text-lg md:text-xl text-white text-center rounded-lg",
                        style: {
                            background: r
                        },
                        onClick: t
                    }, " ", a)
                },
                M = function(e) {
                    var a = e.text,
                        t = e.onClick,
                        r = e.color;
                    return n.a.createElement("button", {
                        className: "p-2 px-3 font-semibold tracking-wide text-white text-center rounded-lg",
                        style: {
                            background: r
                        },
                        onClick: t
                    }, " ", a)
                },
                T = function(e) {
                    var a = e.rows,
                        t = e.name;
                    return !!t && (a = a.sort(function(e, a) {
                        return a.score - e.score
                    }), n.a.createElement(n.a.Fragment, null, n.a.createElement(Q, {
                        title: "Who Knows ".concat(t, " Best?")
                    }), n.a.createElement("div", {
                        className: "table-responsive mt-3 rounded shadow border"
                    }, n.a.createElement("table", {
                        className: "table table-bordered"
                    }, n.a.createElement("thead", {
                        className: "thead-light"
                    }, n.a.createElement("tr", null, n.a.createElement("th", {
                        scope: "col"
                    }, "Name"), n.a.createElement("th", {
                        scope: "col"
                    }, "Score"))), n.a.createElement("tbody", null, a.map(function(e, a) {
                        return n.a.createElement("tr", {
                            key: a
                        }, n.a.createElement("td", null, e.name), n.a.createElement("td", null, e.score))
                    }))))))
                },
                H = function(e) {
                    var a = e.size,
                        t = e.active;
                    return Array.from(Array(parseInt(a)), function(e, a) {
                        return a + 1
                    }).map(function(e) {
                        var a = parseInt(t) === e ? "bg-green-700 text-white rounded-lg" : "";
                        return a += " p-1 m-1 text-gray-700 tracking-tight font-semibold", n.a.createElement("div", {
                            key: e,
                            className: a
                        }, e)
                    })
                },
                _ = [{
                    id: 1,
                    question: "What do you put in WhatsApp status often?",
                    answer: "What does {user} put in WhatsApp status often?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Memes",
                        url: "b1f24a708a717d4215fe6a6c25433234.jpg"
                    }, {
                        name: "Motivational Quotes",
                        url: "e6790af35f8fce95b45ac78fbfb71807.jpg"
                    }, {
                        name: "Love Songs",
                        url: "728774758b2e6f422c83092cff29397e.jpg"
                    }, {
                        name: "Others",
                        url: "75434e4ed8714f541f4ffb1a508ed59a.jpg"
                    }]
                }, {
                    id: 2,
                    question: "Do have rings in hands?",
                    answer: "Does {user} have rings in hands?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Yes",
                        url: "47413f6829db78fe4f4be2175808cf2e.png"
                    }, {
                        name: "No",
                        url: "000c7e7ce074562f22d08011b735a261.png"
                    }]
                }, {
                    id: 3,
                    question: "What Would You Choose?",
                    answer: "What would {user} choose?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Rose",
                        url: "83b315ffa0af22df5310682211785de3.jpg"
                    }, {
                        name: "Jasmine",
                        url: "cde015a2ef4bb7edf147c87829367c12.jpg"
                    }, {
                        name: "Sun Flower",
                        url: "ea09423bb55056d2f2586e9fd2958052.jpg"
                    }, {
                        name: "Lily",
                        url: "7d591af5ca95294a207f20eb7ec4c34e.jpg"
                    }, {
                        name: "Iris",
                        url: "5a06a1ad564120c687fea7134b307451.jpg"
                    }, {
                        name: "Marigold",
                        url: "fa3fc49a6c1aa628b097871442550c07.jpg"
                    }, {
                        name: "Lotus",
                        url: "adf338bcf18c5fb22421d58ed055f05c.jpg"
                    }, {
                        name: "Daisy",
                        url: "1d5a3f8418d39083862dcaf862a2f25a.jpg"
                    }]
                }, {
                    id: 4,
                    question: "Which Super Hero Do You Like?",
                    answer: "Which Super Hero Does {user} Like?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Captain America",
                        url: "2b11182d186167a123cbd6097912d9ed.jpg"
                    }, {
                        name: "Spiderman",
                        url: "7a9c83d0554af8eed1772d981bd251cb.jpg"
                    }, {
                        name: "Superman",
                        url: "cb0b15dc7d739b4c259f56bdb5e7fc66.jpg"
                    }, {
                        name: "Deadpool",
                        url: "90cca53c417f883e6feed2df9f81cf32.jpg"
                    }, {
                        name: "Iron Man",
                        url: "8d6686daea6544915817798d315684ab.png"
                    }, {
                        name: "Hulk",
                        url: "25098a055530289a857b310d7b32b675.png"
                    }, {
                        name: "Thor",
                        url: "420c2f93dadf5fd76bfcbe860af71df2.png"
                    }, {
                        name: "Ant Man",
                        url: "da674ef7be18c0bc121b5362c14bcaa8.jpg"
                    }]
                }, {
                    id: 5,
                    question: "How you like to travel in your day to day life?",
                    answer: "How {user} like to travel in your day to day life?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Cycle",
                        url: "ff28f5da5fd01b332b5fc446460e70d1.jpg"
                    }, {
                        name: "Car",
                        url: "468536156dd4a213c9827a8ae6da390a.jpg"
                    }, {
                        name: "Bike",
                        url: "36c0199b3189dd0eeb64e18b16e07df6.jpg"
                    }, {
                        name: "Bus",
                        url: "6ce2c49439106e9fe90767646a7a4bea.jpg"
                    }, {
                        name: "Plane",
                        url: "936752b96d491f16d8ecab77107652b0.jpg"
                    }, {
                        name: "Train",
                        url: "1d71f1c43fb11680129e1b2d6a894901.jpg"
                    }]
                }, {
                    id: 6,
                    question: "What exercise do you like?",
                    answer: "What exercise does {user} like?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Dance",
                        url: "e99de7e2835c73acfe74a1b945c3b407.jpg"
                    }, {
                        name: "Yoga",
                        url: "5a5b47790f9aa0912cc56e845d7213ad.jpg"
                    }, {
                        name: "Gym",
                        url: "9ed51e5b7f34fb682642e80c6db4f4bb.jpg"
                    }, {
                        name: "Running",
                        url: "a324890828e67a47cef902025ab54e26.jpg"
                    }, {
                        name: "Swimming",
                        url: "cbb8ef98d6004d835e9310bfedd2ba16.jpg"
                    }]
                }, {
                    id: 7,
                    question: "Do you wear Glasses?",
                    answer: "Does {user} wear Glasses?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Yes",
                        url: "8a9af719f8380c3e1d123f79b11ee254.png"
                    }, {
                        name: "No",
                        url: "53aaa4afbf61577af6ccadc7b9ccace9.png"
                    }]
                }, {
                    id: 8,
                    question: "What is your favorite drink?",
                    answer: "What is {user} favorite drink?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Tea",
                        url: "fe9bc30671e558969b5e3ee84dc83424.jpg"
                    }, {
                        name: "Coffee",
                        url: "673d848dd60f135d4858d10416d45d4c.jpg"
                    }, {
                        name: "Juice",
                        url: "5dc84dc3f12471372c3a14d9a2fe4f12.jpg"
                    }, {
                        name: "Milk",
                        url: "cc2dd939407ce6c96f144a45a521cf70.jpg"
                    }, {
                        name: "Alcohol",
                        url: "613c8209c65f6a455caf5bcc331ae8f2.jpg"
                    }, {
                        name: "Water",
                        url: "36710c274dcfdbe725116fd56102a30f.jpg"
                    }]
                }, {
                    id: 9,
                    question: "Do you like beer or vodka?",
                    answer: "Does {user} like beer or vodka?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Beer",
                        url: "fec95f40d6097f2f8fea7b495d625b38.jpg"
                    }, {
                        name: "Vodka",
                        url: "ceeb8143c3f2e4dd673a38705f48fffb.jpg"
                    }]
                }, {
                    id: 10,
                    question: "What are you good at?",
                    answer: "What are {user} good at?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Swimming",
                        url: "263602dc058bf029e91b23f8d6f5e892.jpg"
                    }, {
                        name: "Cycling",
                        url: "4c668c3ffda8b1c15aeb9269bcbfcd24.jpg"
                    }]
                }, {
                    id: 11,
                    question: "Which type of shopping do you like?",
                    answer: "Which type of shopping does {user} like?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Online",
                        url: "b97e0cbdfea2d91dfc8f876cb0516505.jpg"
                    }, {
                        name: "Traditional",
                        url: "9f436028f8bb8581188eccfe3878b204.jpg"
                    }]
                }, {
                    id: 12,
                    question: "Would you rather watch\u2026?",
                    answer: "Would {user} rather watch\u2026?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Action",
                        url: "638e54f18bd8f8b7c0a118a49fdb2097.jpg"
                    }, {
                        name: "Romance",
                        url: "509c199e455c1039a39266b3e45bf8b4.jpg"
                    }, {
                        name: "Science Fiction",
                        url: "c11633a33f20ed7cb04c161ed3cb1cc7.jpg"
                    }, {
                        name: "Fantacy",
                        url: "20bba48959deb945cbad4d3f0127b975.jpg"
                    }]
                }, {
                    id: 13,
                    question: "What type of games do you like?",
                    answer: "What type of games does {user} like?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Indoor Game",
                        url: "935975447861d8e7fc97885ba4adfae6.jpg"
                    }, {
                        name: "Outdoor Game",
                        url: "b8f84c9f89b0fc8845686d8bb5b2529c.jpg"
                    }, {
                        name: "Mobile Game",
                        url: "1f312d24e5e54adcf517a44cfa370e98.jpg"
                    }, {
                        name: "Video Game",
                        url: "68bdda03aecebddae1c80e5f6b049ec3.jpg"
                    }]
                }, {
                    id: 14,
                    question: "What is your Favorite dessert?",
                    answer: "What is {user} Favorite dessert?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Cake",
                        url: "66310142f4dfcae0a6ec48f5555832ea.jpg"
                    }, {
                        name: "Pies",
                        url: "a336f38b472436ba012d0e0f3313e77a.jpg"
                    }, {
                        name: "Cookies",
                        url: "75414df74b38be247eda6fc592ad492e.jpg"
                    }, {
                        name: "Doughnuts",
                        url: "7d7d5e83175dcba24c0839a5360f605b.jpg"
                    }, {
                        name: "Marshmellow",
                        url: "4a51957bd07cbece55534a0d9e910f4f.jpg"
                    }, {
                        name: "cupcakes",
                        url: "41787bfa41fc5f978a05eb783973b28b.jpg"
                    }]
                }, {
                    id: 15,
                    question: "Which one do you like: beard or shaved?",
                    answer: "Which one does {user} like: beard or shaved?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Beard",
                        url: "d789d96db6f68ec6eee91d9e0347a103.jpg"
                    }, {
                        name: "Shaved",
                        url: "68793b55a9e2d716b5c8436124b4ab92.jpg"
                    }]
                }, {
                    id: 16,
                    question: "What would you rather choose?",
                    answer: "What would {user} rather choose?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Paragliding",
                        url: "c56a33163cdfbdd443dbdd2664bcb1f8.jpg"
                    }, {
                        name: "Rafting",
                        url: "85a963888d9608e6dbb59b4e4959f510.jpg"
                    }, {
                        name: "Skiing",
                        url: "fd86a7d474798fad9b2a98ff7df14e5e.jpg"
                    }, {
                        name: "Skydiving",
                        url: "2f529fd5dfa74f019df6d5f27f5f221a.jpg"
                    }, {
                        name: "Bungee Jumping",
                        url: "f6c9e398c2919ccea264145880d32f95.jpg"
                    }]
                }, {
                    id: 17,
                    question: "What do you use the most?",
                    answer: "What does {user} use the most?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Facebook",
                        url: "ae5e2a2914a1a237804585454c056943.jpg"
                    }, {
                        name: "Instagram",
                        url: "b5e58a2253e9b86395e255774976df22.jpg"
                    }, {
                        name: "Snapchat",
                        url: "7372c623fd2d5c94c152b0292254e24c.png"
                    }, {
                        name: "TikTok",
                        url: "ac453c437c873baa67386a7cf39fd311.jpg"
                    }, {
                        name: "Whatsapp",
                        url: "dfbde31420e3daee541c2e63e12fa8ff.jpg"
                    }, {
                        name: "Skype",
                        url: "bf7cb669e1b252fdf161a37cfa573b4f.png"
                    }]
                }, {
                    id: 18,
                    question: "Do you love school life or college life?",
                    answer: "Does {user} love school life or college life?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "School Life",
                        url: "b3d3331cbe0824249498c471a2e8b74e.jpg"
                    }, {
                        name: "College Life",
                        url: "a2212e104bd3f37c08d7c4f82ee4fccc.jpg"
                    }]
                }, {
                    id: 19,
                    question: "What type of weather do you prefer?",
                    answer: "What type of weather does {user} prefer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Winter",
                        url: "b67a629c0048bc70ccb8bf6b2a66da94.jpg"
                    }, {
                        name: "Summer",
                        url: "d516bbb3b2ae8706d4d7a9608f0af25e.jpg"
                    }, {
                        name: "Rainy",
                        url: "5b9ff17ddf1f9cbfac93d0e2815b3ab2.jpg"
                    }, {
                        name: "Autumn/Fall",
                        url: "58ec75466322655200f45a6943f0f62e.jpg"
                    }]
                }, {
                    id: 20,
                    question: "What do you prefer?",
                    answer: "What Does {user} prefer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Tea",
                        url: "d88982658fa355b03a6dfadae1b066cc.jpg"
                    }, {
                        name: "Coffee",
                        url: "4844e6e0bfec15546284af606c23875a.jpg"
                    }]
                }, {
                    id: 21,
                    question: "If your house is on fire, what is the one thing you will take with you?",
                    answer: "If {user} house is on fire, what is the one thing {user} will take with ?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Laptop",
                        url: "78502117f0c9d52fdb4ed9fcd81afac7.jpg"
                    }, {
                        name: "Mobile",
                        url: "85745ed3a26f940b08eecb59c44dff83.jpg"
                    }, {
                        name: "Documents",
                        url: "adeddfa55de2cfe1d235406a3be87349.jpg"
                    }, {
                        name: "Wallet",
                        url: "a8a17462597aa1f49481c3abda4fa17d.jpg"
                    }]
                }, {
                    id: 22,
                    question: "What is your Favourite Ice-Cream?",
                    answer: "Which is {user} Favourite Ice-Cream?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Chocolate",
                        url: "f54cd8928a4b30410c4aa54b0de95df3.jpg"
                    }, {
                        name: "Vanilla",
                        url: "587ade7471cc70af0f1c41c938d2c5c7.jpg"
                    }, {
                        name: "Butterscotch",
                        url: "3f68c95b509bbc74c2ff6f81c62c37ed.jpg"
                    }, {
                        name: "Strawberry",
                        url: "27363c541feb577f6bce95b58f89356d.jpg"
                    }, {
                        name: "Coffee",
                        url: "dd11ccef0a0685c4a4b5b2e381aee0bc.jpg"
                    }, {
                        name: "Mango",
                        url: "fcf74f1df792caee5bac91f18e1f1b71.jpg"
                    }]
                }, {
                    id: 23,
                    question: "What is more important to you?",
                    answer: "What is more important to {user}?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Love",
                        url: "15545cb8da6d32d3ebb2e9abfffe6b1c.jpg"
                    }, {
                        name: "Money",
                        url: "f530c9511961f42e8df16814fb4f98b9.jpg"
                    }]
                }, {
                    id: 24,
                    question: "Which one do you like?",
                    answer: "Which one does {user} like?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Sweet",
                        url: "c56ebb7a7f8ac1eb5df2ad8bdb6f3735.jpg"
                    }, {
                        name: "Spicy",
                        url: "584149bcd3e5258b260e8d99b1d4cf8b.jpg"
                    }]
                }, {
                    id: 25,
                    question: "What do you like the most?",
                    answer: "What does {user} like the most?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Kiss",
                        url: "0ba438c98002fbb1293d1de2444e7be5.jpg"
                    }, {
                        name: "Hug",
                        url: "eccc7d8fd1a46dce246f8130b69e4062.jpg"
                    }]
                }, {
                    id: 26,
                    question: "You would like to watch..",
                    answer: "What Does {user} like to watch..?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Movies At Home",
                        url: "cbe10dfc5464e30c413c92fc4c158423.jpg"
                    }, {
                        name: "Movies At Theatre",
                        url: "9a4995226496de20117fa03bbaeab0ac.jpg"
                    }]
                }, {
                    id: 27,
                    question: "Which one will you choose?",
                    answer: "Which one {user} will choose?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Mountains",
                        url: "2568625ee597c1512383f60e50f73cbe.jpg"
                    }, {
                        name: "Beach",
                        url: "de1607b725d106e4b5dd1e17620693d4.jpg"
                    }, {
                        name: "glacier",
                        url: "a9c38d901463eff6aecf1ff78639f2a3.jpg"
                    }, {
                        name: "Jungle",
                        url: "c7c2552cac46ba06d9e57854651339d1.jpg"
                    }]
                }, {
                    id: 28,
                    question: "If you win a lottery what will you buy?",
                    answer: "If {user} win a lottery what will He/She buy?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Private Plane",
                        url: "4d9c3de08c8320421695535cf72f673d.jpg"
                    }, {
                        name: "Villa",
                        url: "f42e9bd78dc72415693362d906e14ebf.jpg"
                    }, {
                        name: "Disney Land",
                        url: "ad6c58e5a2e3a32cf077412fb4d1ccdb.jpg"
                    }, {
                        name: "Diamonds",
                        url: "e187c1e0064d2d165cc79a2f3dc73e57.jpg"
                    }]
                }, {
                    id: 29,
                    question: "Who would you choose?",
                    answer: "Who would {user} choose?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Obama",
                        url: "09a0d92954b77e961bcd37c9b4218ca4.jpg"
                    }, {
                        name: "Trump",
                        url: "4c0f8810d4153f89bb357acd63786f9d.jpg"
                    }]
                }, {
                    id: 30,
                    question: "What kind of hair do you like?",
                    answer: "What Does {user} like Long hair or short hair?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Short Hair",
                        url: "09c70233f0b846491fb73f870c4109db.jpg"
                    }, {
                        name: "Long Hair",
                        url: "4bc7324083925c7449138c65c67cabc2.jpg"
                    }]
                }, {
                    id: 31,
                    question: "Do you like veg or non-veg?",
                    answer: "What Does {user} like veg or non-veg?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Veg",
                        url: "22162ae3e3d96618814531d80db5ef95.jpg"
                    }, {
                        name: "Non-Veg",
                        url: "22004451b154d506cd689228e21cb503.jpg"
                    }]
                }, {
                    id: 32,
                    question: "What would you prefer?",
                    answer: "What Does {user} prefer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Tattoo",
                        url: "7b2122418d74acbfbbbad0b72bb497d0.jpg"
                    }, {
                        name: "No Tattoo",
                        url: "275816c60b3d35087e9828c523591eee.jpg"
                    }]
                }, {
                    id: 33,
                    question: "Do you prefer rain or snow?",
                    answer: "What Does {user} prefer rain or snow?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Rain",
                        url: "3b7d9030add7059386a24ef0e5c29398.jpg"
                    }, {
                        name: "Snow",
                        url: "0cbeea2b1f124ce7069a16b0419eb43f.jpg"
                    }]
                }, {
                    id: 34,
                    question: "Which one you Drink Most?",
                    answer: "Which one {user} Drink Most?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Cold Coffee",
                        url: "aed65d20563ba69177fd9fd7811125c7.png"
                    }, {
                        name: "Tea",
                        url: "3a44e7fcdc720172586f5b477c7c268d.png"
                    }, {
                        name: "Hot Coffee",
                        url: "05eb5bbe17ca4bc7298ffbc8f7292b34.png"
                    }, {
                        name: "Cold Drink",
                        url: "6de159d4b19eee9cbddcaad3e29a6cde.png"
                    }]
                }, {
                    id: 35,
                    question: "Do you like singing or dancing?",
                    answer: "What Does {user} like singing or dancing?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Singing",
                        url: "be06323c15a8f8e8c70db38f40396b19.jpg"
                    }, {
                        name: "Dancing",
                        url: "9c41a9189b13428aa66736b70746145d.jpg"
                    }]
                }, {
                    id: 36,
                    question: "Do You have a Crush in School/College?",
                    answer: "Does {user} have a Crush in School/College?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Yes",
                        url: "f14395160f2fb2a30de30cc500df1f57.png"
                    }, {
                        name: "No",
                        url: "87950cdd02a400ad690662e29a7ef675.png"
                    }]
                }, {
                    id: 37,
                    question: "Which life is best?",
                    answer: "Which life does {user} Like?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Single",
                        url: "298c90060cd05e6a48d3582ba80375a3.png"
                    }, {
                        name: "Commited",
                        url: "d41f6cd086eac6e1fb4620900f520af9.png"
                    }, {
                        name: "One Side Love",
                        url: "6b0461f981df7f3b0cbbf342c6f9838e.png"
                    }, {
                        name: "Married",
                        url: "6d869eef61cc0587393fc25d8fd0ec57.png"
                    }]
                }, {
                    id: 38,
                    question: "Your Level of Laziness?",
                    answer: "What is {user}'s Level of Laziness?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Very Lazy",
                        url: "77bff193c5308f9f88101c011ef1945c.png"
                    }, {
                        name: "Fully Active",
                        url: "7e3360fe2f6d6a2e478550af10c74297.png"
                    }]
                }, {
                    id: 39,
                    question: "If you meets a genie, what would be your wish?",
                    answer: "If {user} meets a genie, what would be his/her wish?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "1 Billion dollar",
                        url: "4c0fddf3c26a6db08e2f2acc2cd16ddf.jpg"
                    }, {
                        name: "Luxury car",
                        url: "45b5ad7503bae1d145c299ffd6e828fd.jpg"
                    }, {
                        name: "King/Queen of world",
                        url: "9667bbf387f945ccf5ac31147fa02421.jpg"
                    }, {
                        name: "Your Love",
                        url: "dbc8a995ba0522f8448fe4912574325e.jpg"
                    }]
                }, {
                    id: 40,
                    question: "Do you want his/her wife/husband to be the Hottest or the Smartest?",
                    answer: "Does {user} want his/her wife/husband to be the Hottest or the Smartest?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Hot",
                        url: "4303d06376ce58402671f7d543d66f47.jpg"
                    }, {
                        name: "Smart",
                        url: "8b441095f98c2373ca8d7f5763c1fc04.jpg"
                    }]
                }, {
                    id: 41,
                    question: "What is Your idea of a perfect evening?",
                    answer: "What is {user} idea of a perfect evening?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Candle Light Dinner",
                        url: "d226e9d221f1a0b93d1a70a71d531d7e.jpg"
                    }, {
                        name: "A football game",
                        url: "ec33a0486af391d23b608ebb05447447.jpg"
                    }, {
                        name: "Movie with friends",
                        url: "d52cd98991e2df21fe632feb3b82c937.jpg"
                    }, {
                        name: "Hit a club",
                        url: "f7ea4dfd3ea77585bcc921ffc86e1637.jpg"
                    }]
                }, {
                    id: 42,
                    question: "Which fast food restaurant does you prefer the most",
                    answer: "Which fast food restaurant does {user} prefer the most",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Dominos",
                        url: "e3c34bfaacd2e623d35023c094e66edf.png"
                    }, {
                        name: "McDonalds",
                        url: "d0aefc2fa4c88c499ae05ab58f3c122e.jpg"
                    }, {
                        name: "Pizza Hut",
                        url: "fc938f987c586ef0196cf01472aebe0e.jpg"
                    }, {
                        name: "Burger King",
                        url: "a9ae511a704777cd466e3a6f2b98671a.jpg"
                    }]
                }, {
                    id: 43,
                    question: "Where would You like to go with your soulmate?",
                    answer: "Where would {user} like to go with His/her soulmate?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Dubai",
                        url: "8332dfa7714282eaa643d9a10e793de7.jpg"
                    }, {
                        name: "Paris",
                        url: "d4800f91d595c0606394464af71c5455.jpg"
                    }, {
                        name: "Bahamas",
                        url: "a1adce8df3d3188456895db3638a8eba.jpg"
                    }, {
                        name: "Taaj Mahal",
                        url: "48990579c8c5368d6e79eb7978319521.jpg"
                    }]
                }, {
                    id: 44,
                    question: "Which animal do you dream to pet?",
                    answer: "Which animal does {user} dream to pet?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Cat",
                        url: "4ca97cf6525b2777f583483d58a46166.jpg"
                    }, {
                        name: "Dog",
                        url: "97f545638ce407465eb7988a23e34966.jpg"
                    }, {
                        name: "Rabbit",
                        url: "fbe6e6b7b93fceadbd31a742c5a34fe7.jpg"
                    }, {
                        name: "Hamster",
                        url: "04b9114f10c4742792a9916117208a56.jpg"
                    }]
                }, {
                    id: 45,
                    question: "In freetime, where would you go?",
                    answer: "In freetime, where would {user} go?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Gym",
                        url: "17efef50a34a799815029b6ce8b17549.jpg"
                    }, {
                        name: "Sleeping",
                        url: "0400c52b3185d484b9db5bd6ca52028d.jpg"
                    }, {
                        name: "Shopping",
                        url: "c77b1c7bf395964e7115faa8dce87aed.jpg"
                    }, {
                        name: "Cooking",
                        url: "4252994927f2cb061eedcfc70fb26eb1.jpg"
                    }, {
                        name: "Reading",
                        url: "476d5ec06a014230ac077874de66ee67.jpg"
                    }, {
                        name: "Swimming",
                        url: "0f3b6d23efa9e125e26c7e62700e0598.jpeg"
                    }]
                }, {
                    id: 46,
                    question: "Your favourite TV series is?",
                    answer: "What is {user} favourite TV series?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Game of thrones",
                        url: "3e1782846166b32af754e68e2886257b.jpg"
                    }, {
                        name: "Sacred Game",
                        url: "ed0b0b5993814d960368f862edf90047.jpg"
                    }, {
                        name: "F.R.I.E.N.D.S",
                        url: "8a2927e11fe23e4310876a2816d4e3d4.jpg"
                    }, {
                        name: "Mirzapur",
                        url: "7e4f4335ffbfefc2639b385a4199a773.jpg"
                    }]
                }, {
                    id: 47,
                    question: "Who is your favourite cricketer?",
                    answer: "Who is {user} favourite cricketer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "VIrat Kohli",
                        url: "3282cf3d2a201fe0e56e3a45cb0af6e6.jpg"
                    }, {
                        name: "Ab Devillier",
                        url: "128065652914d9d5dab8117816f24b1f.jpg"
                    }, {
                        name: "Sachin Tendulkar",
                        url: "558fb17f9f1635b0896168b8ec1bcf00.jpg"
                    }, {
                        name: "Chris Gayle",
                        url: "fd0ad9623ef77965c7c3f5d4cf8b4047.jpg"
                    }, {
                        name: "MS Dhoni",
                        url: "4dfeeffb451774ebd2cadf4ea1a50bb4.jpeg"
                    }]
                }, {
                    id: 48,
                    question: "Which superpower would you choose?",
                    answer: "Which superpower would {user} choose?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Be invisible",
                        url: "8f9a099a0abcb8a7a65e93a498466181.jpg"
                    }, {
                        name: "Fly like Superman",
                        url: "5f25ec93da248b03f55aed496ce7cc4e.jpg"
                    }, {
                        name: "See Future",
                        url: "4c3413fb8c7b53d4137866dcc6f0542a.jpg"
                    }, {
                        name: "See Ghost",
                        url: "9da53edca72d4bfb4a3163adfb3bdda5.jpg"
                    }, {
                        name: "Read minds",
                        url: "a6acbe70134f20851163f4ccc80a67f2.jpg"
                    }]
                }, {
                    id: 49,
                    question: "Which life is best ?",
                    answer: "What {user} think. Which life is best ? ",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Single",
                        url: "b397bc672e49ee450289ada49d6f2eb5.jpg"
                    }, {
                        name: "committed",
                        url: "83ecf024ddc42aad707587ee125e60ad.jpg"
                    }, {
                        name: "Married",
                        url: "583609626b33c4769c0f01f234c85f8e.jpg"
                    }, {
                        name: "One Side Love",
                        url: "4ad96fecb99b84edae3fb05d2b73066b.jpg"
                    }]
                }, {
                    id: 50,
                    question: "If you get an opportunity for an adventurous journey, who would you prefer?",
                    answer: "If {user} get an opportunity for an adventurous journey, who would {user} prefer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Friends",
                        url: "5673e727890001b73a9934d1f31fe376.jpg"
                    }, {
                        name: "Soulmate",
                        url: "e8897f4254df5c092e8f3cf280288a61.jpg"
                    }, {
                        name: "Family",
                        url: "c3579be151fa09f970067e7d937da9a2.jpg"
                    }]
                }, {
                    id: 51,
                    question: "If you get a chance to act in a movie, what character do you prefer?",
                    answer: "If {user} get a chance to act in a movie, what character do {user} prefer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Hero",
                        url: "77a1e1f0f02f0a3261726520a759a852.jpg"
                    }, {
                        name: "Villain",
                        url: "b3c4e54a43c4bf6037c34891e5397270.jpg"
                    }, {
                        name: "Comedian",
                        url: "8b605e342ecd814830ea079df1d94323.jpg"
                    }]
                }, {
                    id: 52,
                    question: "If you are a character in Aladdin Movie, what do you want to become?",
                    answer: "If {user} are a character in Aladdin Movie, what does he/she want to become?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Aladdin",
                        url: "93d3d6b99f7688aa2d14a4a21ceebfb2.jpg"
                    }, {
                        name: "Genie",
                        url: "568b0c6dfe6688f81e432a29119e1cd6.png"
                    }, {
                        name: "Jafar",
                        url: "d16307f27e55a0460d7c087b10a4223f.jpg"
                    }, {
                        name: "Princess Jasmine",
                        url: "8081d6229b380ec29d09ba57f108a752.jpg"
                    }]
                }, {
                    id: 53,
                    question: "Which is your birth month?",
                    answer: "Which is {user} birth month?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "January",
                        url: "07df0a4d5a780e6aed261be9a27699db.jpeg"
                    }, {
                        name: "February",
                        url: "7abb9a1cbb189a9adecff82afda9aedc.png"
                    }, {
                        name: "March",
                        url: "283e4d0634791ce7f60d2a1d5a32f523.png"
                    }, {
                        name: "April",
                        url: "09e8401cc897b55975c9ea432fd03b8c.png"
                    }, {
                        name: "May",
                        url: "9030957123a11374df011152281b9010.png"
                    }, {
                        name: "June",
                        url: "d97c2b9ce7b1b77bd315cf69a477ef5b.png"
                    }, {
                        name: "July",
                        url: "170a3506e7b4f7455ec58c9804e9ad4d.png"
                    }, {
                        name: "August",
                        url: "99a9e0902908521a9ef92550805fa4e8.jpg"
                    }, {
                        name: "September",
                        url: "75cc6893849167738876f045352165a3.png"
                    }, {
                        name: "October",
                        url: "c2d2a69accd9b3e57c829e82d97e7f85.jpg"
                    }, {
                        name: "November",
                        url: "683c29ddd8169ff210a268a263abd5b4.jpg"
                    }, {
                        name: "December",
                        url: "56179e4da08e7b96bc3a2c6b8a64da22.jpg"
                    }]
                }, {
                    id: 54,
                    question: "What do you prefer as a gift on your birthday?",
                    answer: "What does {user} prefer as a gift on his/her birthday?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Rose Bouquet",
                        url: "d1a6ec72bf1d147ff4cf358d62b0001a.jpg"
                    }, {
                        name: "Giant Teddy Bear",
                        url: "1f42ff91b2e11bc0f3e9de09623dbd83.jpg"
                    }, {
                        name: "Chocolate",
                        url: "9ad412c881423ae40166375963c39296.jpg"
                    }, {
                        name: "Surprise Me",
                        url: "98c6fc5c6260fd7412f6c2450cd8e834.jpg"
                    }]
                }, {
                    id: 55,
                    question: "Who is your Favourite TikTok Star",
                    answer: "Who is {user}'s Favourite TikTok Star",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Gima Ashi",
                        url: "122fd2722b6c4f51b108c72d53606f12.jpg"
                    }, {
                        name: "Jannat Faisu",
                        url: "de7de2be1c25b178e0c1c726cc805eee.jpg"
                    }, {
                        name: "Khushi Vivek",
                        url: "3fe53fab258d9e73206c43ec500c1e0e.jpg"
                    }, {
                        name: "Awez",
                        url: "e90dc7e5431d6a4efc9f4454e94031e7.jpg"
                    }]
                }, {
                    id: 56,
                    question: "What is your Favourite OutFit?",
                    answer: "What is {user}'s Favourite OutFit?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Jeans",
                        url: "082280cd745a30e58a993d24f48e9fd4.jpg"
                    }, {
                        name: "Suit",
                        url: "8d0e127909f48caf92dab322a6ff5b9c.jpg"
                    }]
                }, {
                    id: 57,
                    question: "Which app do you like more?",
                    answer: "What app does {user} like more?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Pubg",
                        url: "8d4a641aad326d7bca3b96f0c26d07fb.jpg"
                    }, {
                        name: "TikTok",
                        url: "5281a635ed630f25d25cf81a5ce68e21.jpg"
                    }]
                }, {
                    id: 58,
                    question: "What is your Favourite Singer?",
                    answer: "What is {user}'s Favourite Singer?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Guru Randhawa",
                        url: "84a12c6dafcc8c7f5d0fe523db49acbb.jpg"
                    }, {
                        name: "B Praak",
                        url: "0f1fd8a101e5bf8a11ebf540e08c474f.jpg"
                    }, {
                        name: "Parmish Verma",
                        url: "c5a64e1ce846df12c133ca4aa634dc04.jpg"
                    }, {
                        name: "Singga",
                        url: "c6dc78e4f6a474426b6d57f230d0ebee.jpg"
                    }]
                }, {
                    id: 68,
                    question: "What Is Your Sleeping Style?",
                    answer: "What is {user}'s Sleeping Style?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Sleep on Stomach",
                        url: "6909ccee92e3a6b8bde7c6bd08425bad.jpg"
                    }, {
                        name: "Sleep on back",
                        url: "b4c1818aa0068d4ec3f4aab12049e94f.jpg"
                    }, {
                        name: "Sleep on side",
                        url: "14101e540f841a41c2ba59130b79437d.jpg"
                    }]
                }, {
                    id: 60,
                    question: "How do you like to Click Pictures?",
                    answer: "How {user} like to Click Pictures?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "Selfie",
                        url: "2a842c2f0a273f2e777fc48562e145f2.jpg"
                    }, {
                        name: "Pose",
                        url: "7b882ffba88cf23d64f8a279fc848f4a.jpg"
                    }]
                }, {
                    id: 61,
                    question: "What do you Like?",
                    answer: "What {user} Like to do?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Hard Work",
                        url: "c7640900b0338ae60227e92d800cb156.jpeg"
                    }, {
                        name: "Smart Work",
                        url: "b332950c138671d11c8a18ff5f302ed1.jpg"
                    }]
                }, {
                    id: 62,
                    question: "Which type of wedding do you like?",
                    answer: "Which type of wedding does {user} like?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Simple Marriage",
                        url: "fda6f6fa78474f287267ad84cad1f106.jpg"
                    }, {
                        name: "Court Marriage",
                        url: "79a80aeafaaf2dd6ec2c1dda2848ca75.jpg"
                    }, {
                        name: "Destination Marriage",
                        url: "85b1445d8020d2653236ad818f07394f.jpg"
                    }, {
                        name: "Live-in Relationship",
                        url: "85b27cf1396631b19da8dd22d30adffe.jpg"
                    }]
                }, {
                    id: 63,
                    question: "What did you wanted to be when you were a kid?",
                    answer: "What {user} wanted to be when He/She was a kid?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Doctor",
                        url: "2fbc1ffac9bd5c72408308e0133bded3.jpg"
                    }, {
                        name: "Singer",
                        url: "8fad4f03a97cbf19a2bbd6c1a2e28128.jpg"
                    }, {
                        name: "Anything Else",
                        url: "62a389464c73773ed2b9e3d7d9a97278.jpg"
                    }, {
                        name: "Engineer",
                        url: "7ee19b3e3019c465e458d74f9938eb39.jpg"
                    }, {
                        name: "Astronaut",
                        url: "25b9ee6913dfcde12b0c6a7ac4c3f4dc.jpg"
                    }, {
                        name: "Actor",
                        url: "d68edb90d9934e50d86a2c4db106bf53.jpg"
                    }, {
                        name: "Lawyer",
                        url: "63b5fa3c945a251f592dbdecd2f68e0d.jpg"
                    }, {
                        name: "Pilot",
                        url: "f576e37601aef9d540f3c0562df1228e.jpg"
                    }]
                }, {
                    id: 64,
                    question: "How Many EX GF/BF did you have?",
                    answer: "How Many EX GF/BF did {user} have?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "1",
                        url: "c848d99eaeef6478b6b3541f9dd56a51.jpg"
                    }, {
                        name: "2",
                        url: "3f3b0b2fa1d15db9a9b796dedee7b3c5.jpg"
                    }, {
                        name: "3",
                        url: "b360aae2b02f89943fe66bd3799ae36e.jpg"
                    }, {
                        name: "4",
                        url: "fff3104697a1eb398d3b3c5180977636.jpg"
                    }, {
                        name: "5+",
                        url: "e3fe004aa8871968c1712751b3778fa7.jpg"
                    }, {
                        name: "Zero",
                        url: "ec4c7c0854eeb2ebbf3fc7a5529c7932.jpg"
                    }]
                }, {
                    id: 65,
                    question: "In which subject you're best?",
                    answer: "In which subject {user} is best?",
                    hide: 0,
                    featured: 0,
                    images: [{
                        name: "English",
                        url: "490d4b644d176b33f6aa1096284c5e40.jpg"
                    }, {
                        name: "Science",
                        url: "e06ee4a2466eba7ac73cb28486863e1b.jpg"
                    }, {
                        name: "History",
                        url: "5e8b24e684be9b5ff04d1d5e1433146e.jpg"
                    }, {
                        name: "Maths",
                        url: "6c57ec6309946d7436a3bf6c0a82d124.jpg"
                    }, {
                        name: "Any Other",
                        url: "caa66f4fc1f4a442ee1e3a18c5bc32c7.jpg"
                    }]
                }, {
                    id: 66,
                    question: "Which of these describe your character?",
                    answer: "Which of these describe {user}'s character?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Serious",
                        url: "e83f891168ecf8a936db716a08037f2e.png"
                    }, {
                        name: "Funny",
                        url: "c97a553c4034f6e7d1cf5a1dc9e521d6.jpg"
                    }, {
                        name: "Friendly",
                        url: "f8f452b84780df71685c44a24072cf34.jpg"
                    }, {
                        name: "Kind",
                        url: "d76206a69238e4aebb401178ec4b6a2e.jpg"
                    }]
                }, {
                    id: 67,
                    question: "How you like to be greeted when you meet someone for the first time ?",
                    answer: "How {user}'s like to be greeted when he/she meet someone for the first time ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Hug",
                        url: "951e3125b322a750694f1dd7ef8d915c.jpg"
                    }, {
                        name: "Kiss",
                        url: "bdeb3798b73a8955c015ae51481fe8e0.jpg"
                    }, {
                        name: "Shake hand",
                        url: "d15bcbd0966705c7640c3a34359d7dff.jpg"
                    }, {
                        name: "Smile",
                        url: "49e4038d12016a87d62acef08b80dbe1.jpeg"
                    }]
                }, {
                    id: 68,
                    question: "Pick a Job",
                    answer: "What would {user} pick for a Job ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Artist",
                        url: "Artist.jpg"
                    }, {
                        name: "CEO",
                        url: "CEO.jpg"
                    }, {
                        name: "DJ",
                        url: "DJ.jpg"
                    }, {
                        name: "Pilot",
                        url: "Pilot.jpg"
                    }]
                }, {
                    id: 69,
                    question: "How tall are you?",
                    answer: "How tall is {user}?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Less than 5'2''",
                        url: "less-than-5_2.jpg"
                    }, {
                        name: "5'2'' to 5'6''",
                        url: "5_2-to-5_6.jpg"
                    }, {
                        name: "5'7'' to 5'10''",
                        url: "5_7-to-5_10.jpg"
                    }, {
                        name: "5'10'' above",
                        url: "5_10-above.jpg"
                    }]
                }, {
                    id: 70,
                    question: "How would your friends describe you ?",
                    answer: "How would you describe {user} ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Loyal",
                        url: "Loyal.jpg"
                    }, {
                        name: "Honest",
                        url: "Honest.jpg"
                    }, {
                        name: "Funny",
                        url: "Funny.jpg"
                    }, {
                        name: "Passionate",
                        url: "Passionate.jpg"
                    }]
                }, {
                    id: 71,
                    question: "Which is your favorite DC movie character ?",
                    answer: "Which is {user}'s favorite movie character ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Batman",
                        url: "Batman.jpg"
                    }, {
                        name: "Superman",
                        url: "Superman.jpg"
                    }, {
                        name: "Wonder Woman",
                        url: "Wonder-Woman.jpg"
                    }, {
                        name: "Joker",
                        url: "Joker.jpg"
                    }]
                }, {
                    id: 72,
                    question: "What's your current mood ?",
                    answer: "What is {user}'s current mood ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Annoyed",
                        url: "Annoyed.jpg"
                    }, {
                        name: "Happy",
                        url: "Happy.jpg"
                    }, {
                        name: "Calm",
                        url: "Calm.jpg"
                    }, {
                        name: "Sad",
                        url: "Sad.jpg"
                    }]
                }, {
                    id: 73,
                    question: "Which of these animals is the scariest ?",
                    answer: "Which of these animals {user} finds scariest ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Bear",
                        url: "Bear.jpg"
                    }, {
                        name: "Shark",
                        url: "Shark.jpg"
                    }, {
                        name: "Snake",
                        url: "Snake.jpg"
                    }, {
                        name: "Crocodile",
                        url: "Crocodile.jpg"
                    }]
                }, {
                    id: 74,
                    question: "Would you lie to your friends?",
                    answer: "Would {user} lie to his friends?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "All The Time",
                        url: "AllTheTime.png"
                    }, {
                        name: "Depends",
                        url: "Depends.png"
                    }, {
                        name: "Never",
                        url: "Never.png"
                    }, {
                        name: "Only If Necessary",
                        url: "OnlyIfNecessary.png"
                    }]
                }, {
                    id: 75,
                    question: "Do your trust your friends with your life ?",
                    answer: "Does {user} trust his friends with his life ?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Always",
                        url: "Always_.png"
                    }, {
                        name: "Never",
                        url: "Never_.png"
                    }, {
                        name: "No",
                        url: "No_.png"
                    }, {
                        name: "Yes",
                        url: "Yes_.png"
                    }]
                }, {
                    id: 76,
                    question: "What Motivates You ?",
                    answer: "What motivates {user}?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Competition",
                        url: "competition.jpg"
                    }, {
                        name: "Inner Peace",
                        url: "Inner Peace.jpg"
                    }, {
                        name: "Family",
                        url: "my family.jpg"
                    }, {
                        name: "Power",
                        url: "power.jpg"
                    }, {
                        name: "Success",
                        url: "success.jpg"
                    }]
                }, {
                    id: 77,
                    question: "What would make you most happy ?",
                    answer: "What would make {user} most happy?",
                    hide: 0,
                    featured: 1,
                    images: [{
                        name: "Less Work",
                        url: "less work.jpg"
                    }, {
                        name: "More Sleep",
                        url: "more sleep.jpg"
                    }, {
                        name: "More Time with Family",
                        url: "more time with family.jpg"
                    }, {
                        name: "More Wealth",
                        url: "more wealth.jpg"
                    }, {
                        name: "Travelling",
                        url: "travelling.jpg"
                    }]
                }],
                B = function() {
                    function e(a, t) {
                        Object(d.a)(this, e);
                        var r = Object(D.a)(_);
                        if (t) {
                            var n = t.map(function(e) {
                                return e.qId
                            });
                            r = r.filter(function(e) {
                                return n.includes(e.id)
                            })
                        }
                        a && (r = r.map(function(e) {
                            var t = JSON.stringify(e);
                            return t = t.replace(/{user}/g, a.charAt(0).toUpperCase() + a.slice(1)), JSON.parse(t)
                        }));
                        var i = P(r),
                            s = Object(D.a)(i);
                        t || (s = J(i)), this.featured = s.slice(0, 20), this.nonFeatured = [].concat(Object(D.a)(Y(i)), Object(D.a)(s.slice(20))), this.activeFeatured = -1, this.activeNonFeatured = -1
                    }
                    return Object(l.a)(e, [{
                        key: "getLength",
                        value: function() {
                            return this.featured.length
                        }
                    }, {
                        key: "getNextFeatured",
                        value: function() {
                            return this.activeFeatured += 1, this.activeFeatured >= this.featured.length && (this.activeFeatured = 0), this.featured[this.activeFeatured]
                        }
                    }, {
                        key: "getNextImages",
                        value: function() {
                            var e = this.activeFeatured + 1;
                            e >= this.featured.length && (e = 0);
                            var a = this.featured[e].images.map(function(e) {
                                    return e.url
                                }),
                                t = [];
                            try {
                                var r = this.activeNonFeatured + 1;
                                r >= this.nonFeatured.length && (r = 0), t = this.nonFeatured[r].images.map(function(e) {
                                    return e.url
                                })
                            } catch (n) {
                                t = []
                            }
                            return [].concat(Object(D.a)(a), Object(D.a)(t))
                        }
                    }, {
                        key: "getNextNonFeatured",
                        value: function() {
                            return this.activeNonFeatured += 1, this.activeNonFeatured >= this.nonFeatured.length && (this.activeNonFeatured = 0), this.nonFeatured[this.activeNonFeatured]
                        }
                    }]), e
                }(),
                P = function(e) {
                    for (var a = e.length - 1; a > 0; a--) {
                        var t = Math.floor(Math.random() * (a + 1)),
                            r = [e[t], e[a]];
                        e[a] = r[0], e[t] = r[1]
                    }
                    return e
                },
                J = function(e) {
                    return e.filter(function(e) {
                        return 1 === e.featured
                    })
                },
                Y = function(e) {
                    return e.filter(function(e) {
                        return 1 !== e.featured
                    })
                },
                G = function(e) {
                    for (var a = e.answers, t = e.imageClicked, r = [], i = 0; i < a.length; i += 2) {
                        var s = [];
                        a[i] && s.push(V(t, a[i].url, a[i].name, i)), a[i + 1] && s.push(V(t, a[i + 1].url, a[i + 1].name, i + 1)), r.push(s)
                    }
                    return r.map(function(e) {
                        return n.a.createElement("div", {
                            key: e[0].key,
                            className: "flex align-items justify-center mt-1"
                        }, e)
                    })
                },
                U = function(e) {
                    var a = e.url,
                        t = e.name,
                        r = e.id,
                        i = e.imageClicked;
                    return a && n.a.createElement("div", {
                        className: "img-".concat(r, " text-center p-2 m-3 image-hovered"),
                        onClick: function(e) {
                            return i(r)
                        }
                    }, n.a.createElement("img", {
                        className: "bg-center rounded-xlg shadow w-56 border",
                        src: "/images/".concat(a),
                        alt: t
                    }), n.a.createElement("div", {
                        className: "mt-3 text-lg"
                    }, t.toUpperCase()))
                },
                V = function(e, a, t, r) {
                    return n.a.createElement(U, {
                        imageClicked: e,
                        url: a,
                        name: t,
                        key: r + 1,
                        id: r + 1
                    })
                },
                R = t(16),
                K = function(e) {
                    function a() {
                        return Object(d.a)(this, a), Object(f.a)(this, Object(m.a)(a).apply(this, arguments))
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                a = e.quizId,
                                t = e.color,
                                r = e.requestedQuizId,
                                i = e.rows,
                                s = e.name,
                                c = C(r);
                            return n.a.createElement("div", {
                                className: "text-center max-w-3xl px-3 p-2 shadow bg-gray-100 border-2 border-gray-600 rounded-xlg mt-3"
                            }, n.a.createElement(X, {
                                quizId: a,
                                color: t
                            }), n.a.createElement(Z, {
                                score: c,
                                color: t,
                                requestedQuizId: r
                            }), n.a.createElement($, {
                                rows: i,
                                name: s
                            }))
                        }
                    }]), a
                }(n.a.Component),
                Z = function(e) {
                    function a() {
                        return Object(d.a)(this, a), Object(f.a)(this, Object(m.a)(a).apply(this, arguments))
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.score;
                            if (!e) return !1;
                            new window.JustGage({
                                id: "gauge",
                                value: e,
                                min: 0,
                                max: 20,
                                pointer: !0,
                                pointerOptions: {
                                    toplength: -15,
                                    bottomlength: 10,
                                    bottomwidth: 12,
                                    color: "#8e8e93",
                                    stroke: "#ffffff",
                                    stroke_width: 3,
                                    stroke_linecap: "round"
                                },
                                gaugeWidthScale: .8,
                                counter: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                a = this.props,
                                t = a.score,
                                r = a.color;
                            return !!t && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                className: "-mb-5"
                            }, n.a.createElement("div", {
                                className: "text-2xl font-bold"
                            }, "Your Score : ", t, "/20")), n.a.createElement("div", {
                                className: "w-full"
                            }, n.a.createElement("div", {
                                id: "gauge",
                                style: {
                                    height: "200px"
                                }
                            })), n.a.createElement("div", {
                                className: "w-full p-2 flex"
                            }, n.a.createElement("div", {
                                className: "flex-1 mr-3"
                            }, n.a.createElement(L, {
                                text: "Create your own quiz",
                                onClick: function() {
                                    return window.location.href = "/"
                                },
                                color: r
                            })), this.props.score && n.a.createElement("div", {
                                className: "flex-1"
                            }, n.a.createElement(L, {
                                text: "Try Again",
                                onClick: function() {
                                    var a;
                                    a = e.props.requestedQuizId, (new w.a).remove("completed_".concat(a), {
                                        path: "/"
                                    }), window.location.reload()
                                },
                                color: r
                            }))))
                        }
                    }]), a
                }(n.a.Component),
                X = function(e) {
                    var a = e.quizId,
                        t = e.color;
                    if (!a) return !1;
                    var r = "".concat(window.location.protocol, "//").concat(window.location.hostname, "//").concat(a);
                    return n.a.createElement(n.a.Fragment, null, n.a.createElement(Q, {
                        title: "Your Challenge is Ready"
                    }), n.a.createElement(A, {
                        title: "Share this link with your friends"
                    }), n.a.createElement("div", {
                        className: "mt-3"
                    }, n.a.createElement(R.CopyToClipboard, {
                        text: r
                    }, n.a.createElement("div", {
                        className: "border bg-white py-2 text-md md:text-lg rounded-xlg"
                    }, r))), n.a.createElement("div", {
                        className: "mt-3 mx-auto w-64",
                        "data-tooltip": "Copied"
                    }, n.a.createElement(R.CopyToClipboard, {
                        text: r,
                        onCopy: function() {
                            Object(D.a)(document.querySelectorAll("[data-tooltip]")).forEach(function(e) {
                                return e.classList.add("hover")
                            }), setTimeout(function() {
                                Object(D.a)(document.querySelectorAll("[data-tooltip]")).forEach(function(e) {
                                    return e.classList.remove("hover")
                                })
                            }, 1e3)
                        }
                    }, n.a.createElement(L, {
                        text: "Copy this link",
                        color: t
                    }))), n.a.createElement("div", {
                        className: "my-1 flex"
                    }, n.a.createElement(ae, {
                        color: "#1cb06d",
                        icon: n.a.createElement(te, null),
                        href: "https://api.whatsapp.com/send?text=\ud83e\udd1c ".concat(N(), " has sent you real *2019 Friendship Challenge* \ud83d\udc78\ud83e\udd34\ufe0f%0A*Accept this Challenge NOW* %0A\u203c\ufe0f\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\u203c\ufe0f %0A  ").concat(r)
                    }), n.a.createElement(ae, {
                        color: "linear-gradient(45deg,#f09433 0,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                        icon: "Add to Instagram Bio",
                        href: "https://www.instagram.com/accounts/edit/"
                    })), n.a.createElement(ee, {
                        url: r,
                        name: N()
                    }))
                },
                $ = function(e) {
                    var a = e.rows,
                        t = e.name;
                    return n.a.createElement("div", {
                        className: "mt-3"
                    }, n.a.createElement(T, {
                        rows: a,
                        name: t
                    }))
                },
                ee = function(e) {
                    function a() {
                        return Object(d.a)(this, a), Object(f.a)(this, Object(m.a)(a).apply(this, arguments))
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            setTimeout(function() {
                                var e = document.createElement("script");
                                e.setAttribute("src", "https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55bb64a351c52412"), document.body && document.body.appendChild(e);
                                var a = setInterval(function() {
                                    var e = window.addthis_config || {};
                                    Object.keys(e).length && clearInterval(a), e.data_track_addressbar = !1, e.data_track_clickback = !1
                                }, 500)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                a = e.url,
                                t = e.name,
                                r = "\ud83e\udd1c ".concat(t, " has sent you real 2019 Friendship Challenge \ud83d\udc78\ud83e\udd34\ufe0f. Accept this Challenge NOW \u203c\ufe0f\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\ud83d\udc47\u203c\ufe0f ");
                            return n.a.createElement("div", {
                                className: "addthis_inline_share_toolbox mt-3",
                                "data-url": a,
                                "data-title": r,
                                "data-description": r
                            })
                        }
                    }]), a
                }(n.a.Component),
                ae = function(e) {
                    var a = e.icon,
                        t = e.color,
                        r = e.href;
                    return n.a.createElement("a", {
                        className: " flex-1 m-2 p-2 border rounded-lg text-sm md:text-xl font-semibold leading-relaxed text-white",
                        style: {
                            background: t
                        },
                        href: r,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, a)
                },
                te = function() {
                    return n.a.createElement("div", {
                        className: "flex items-center justify-center"
                    }, n.a.createElement("svg", {
                        className: "mr-2",
                        xmlns: "http://www.w3.org/2000/svg",
                        x: "0px",
                        y: "0px",
                        width: "18",
                        height: "18",
                        viewBox: "0 0 90 90"
                    }, n.a.createElement("g", null, n.a.createElement("path", {
                        id: "WhatsApp",
                        d: "M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z",
                        fill: "#eeeeee"
                    }))), "Whatsapp Status")
                },
                re = function(e) {
                    function a(e) {
                        var t;
                        Object(d.a)(this, a), (t = Object(f.a)(this, Object(m.a)(a).call(this, e))).saveNewUserAnswers = t.saveNewUserAnswers.bind(Object(p.a)(t)), t.saveFriendAnswers = t.saveFriendAnswers.bind(Object(p.a)(t));
                        var r = t.props,
                            n = r.originalQuizId,
                            i = r.newAnswers;
                        if (n) {
                            var s = t.props.originalAnswers;
                            t.saveFriendAnswers(n, s, i)
                        } else t.saveNewUserAnswers(i);
                        return t.state = {
                            title: ""
                        }, t
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "saveNewUserAnswers",
                        value: function() {
                            var e = Object(u.a)(o.a.mark(function e(a) {
                                var t;
                                return o.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.setState({
                                                title: "Creating Quiz"
                                            }), e.next = 3, E(a);
                                        case 3:
                                            (t = e.sent) && this.setState({
                                                quizId: t.userId,
                                                rows: [],
                                                name: "You",
                                                saved: !0
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "saveFriendAnswers",
                        value: function() {
                            var e = Object(u.a)(o.a.mark(function e(a, t, r) {
                                var n, i;
                                return o.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.setState({
                                                title: "Calculating Scores"
                                            }), n = x(t, r), e.next = 4, q(a, n);
                                        case 4:
                                            return e.next = 6, k(a);
                                        case 6:
                                            i = e.sent, S(a, n), this.setState({
                                                rows: i ? i.scores : void 0,
                                                name: i ? i.name : void 0,
                                                saved: !0
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(a, t, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.saved ? n.a.createElement(K, Object.assign({}, this.props, {
                                quizId: this.state.quizId,
                                requestedQuizId: this.props.originalQuizId,
                                rows: this.state.rows,
                                name: this.state.name
                            })) : n.a.createElement("div", {
                                className: "max-w-3xl px-3 p-2 bg-gray-100 border-2 border-gray-600 rounded-xlg mt-3"
                            }, n.a.createElement(Q, {
                                title: "2019 Friendship Dare"
                            }), n.a.createElement("div", {
                                className: "flex justify-center mt-2"
                            }, n.a.createElement(I, {
                                setColor: this.props.setColor
                            })), n.a.createElement(A, {
                                title: "Please Wait!"
                            }), n.a.createElement(A, {
                                title: this.state.title
                            }), n.a.createElement("div", {
                                className: "mt-2 flex justify-center"
                            }, n.a.createElement("img", {
                                src: "https://i.imgur.com/fvoOJ5h.gif",
                                alt: "wait"
                            })))
                        }
                    }]), a
                }(n.a.Component),
                ne = function(e) {
                    function a(e) {
                        var t;
                        Object(d.a)(this, a), (t = Object(f.a)(this, Object(m.a)(a).call(this, e))).skipQuestion = t.skipQuestion.bind(Object(p.a)(t)), t.imageClicked = t.imageClicked.bind(Object(p.a)(t));
                        var r = t.props,
                            n = r.requestorName,
                            i = r.originalAnswers,
                            s = new B(n, i);
                        return t.state = {
                            active: 1,
                            questions: s,
                            activeQuestion: s.getNextFeatured(),
                            answers: [],
                            size: Math.min(s.getLength(), 20)
                        }, t
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "componentDidUpdate",
                        value: function() {
                            this.state.questions.getNextImages().forEach(function(e) {
                                (new Image).src = "/images/".concat(e)
                            })
                        }
                    }, {
                        key: "skipQuestion",
                        value: function() {
                            var e = this;
                            setTimeout(function() {
                                e.setState({
                                    activeQuestion: e.state.questions.getNextNonFeatured()
                                })
                            }, 150)
                        }
                    }, {
                        key: "imageClicked",
                        value: function(e) {
                            var a = this;
                            if (!this.state.processing) {
                                var t = "";
                                if (this.props.originalAnswers) {
                                    var r = this.props.originalAnswers.filter(function(e) {
                                        return e.qId === a.state.activeQuestion.id
                                    });
                                    t = r && r[0].aId === e ? "right" : "wrong"
                                } else t = "selected";
                                t && document.querySelector(".img-".concat(e)).classList.add(t), setTimeout(function() {
                                    a.setState({
                                        processing: !1
                                    }), t && document.querySelector(".img-".concat(e)).classList.remove(t), a.setState(function(t) {
                                        var r = t.active,
                                            n = t.answers,
                                            i = t.activeQuestion;
                                        return {
                                            activeQuestion: a.state.questions.getNextFeatured(),
                                            active: r + 1,
                                            answers: [].concat(Object(D.a)(n), [{
                                                qId: i.id,
                                                aId: e
                                            }])
                                        }
                                    })
                                }, 750), this.setState({
                                    processing: !0
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                a = e.originalQuizId,
                                t = e.originalAnswers;
                            if (this.state.active - 1 >= this.state.size) return n.a.createElement(re, Object.assign({
                                originalQuizId: a,
                                originalAnswers: t,
                                newAnswers: this.state.answers
                            }, this.props));
                            var r = this.props,
                                i = r.color,
                                s = r.setColor;
                            return n.a.createElement("div", {
                                className: "max-w-3xl px-3 p-2 bg-gray-100 border-2 border-gray-600 rounded-xlg mt-3"
                            }, n.a.createElement("div", {
                                className: "flex justify-center mt-2"
                            }, n.a.createElement(I, {
                                setColor: s
                            })), n.a.createElement("div", {
                                className: "text-center flex flex-wrap justify-center"
                            }, n.a.createElement(H, {
                                size: this.state.size,
                                active: this.state.active
                            })), !a && n.a.createElement("div", {
                                className: "flex justify-center"
                            }, n.a.createElement("div", {
                                className: "mt-3 w-1/2 flex justify-center"
                            }, n.a.createElement(M, {
                                text: "Skip this question",
                                color: i,
                                onClick: this.skipQuestion
                            }))), n.a.createElement("div", {
                                className: "text-center mt-3"
                            }, n.a.createElement(Q, {
                                title: this.props.requestorName ? this.state.activeQuestion.answer : this.state.activeQuestion.question
                            })), n.a.createElement("div", {
                                className: ""
                            }, n.a.createElement(G, {
                                answers: this.state.activeQuestion.images,
                                imageClicked: this.imageClicked
                            })))
                        }
                    }]), a
                }(n.a.Component),
                ie = function(e) {
                    function a(e) {
                        var t;
                        Object(d.a)(this, a), (t = Object(f.a)(this, Object(m.a)(a).call(this, e))).updateUserName = t.updateUserName.bind(Object(p.a)(t)), t.setUserName = t.setUserName.bind(Object(p.a)(t));
                        var r = new w.a;
                        return t.state = {
                            userName: r.get("userName") || "",
                            view: "StartView"
                        }, t
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "updateUserName",
                        value: function(e) {
                            this.setState({
                                userName: e.target.value
                            })
                        }
                    }, {
                        key: "setUserName",
                        value: function(e) {
                            if (!(null !== e.match(/[A-Za-z ]+/) && e.match(/[A-Za-z ]+/)[0] === e)) return Object(D.a)(document.querySelectorAll("[data-tooltip]")).forEach(function(e) {
                                return e.classList.add("hover")
                            }), void setTimeout(function() {
                                Object(D.a)(document.querySelectorAll("[data-tooltip]")).forEach(function(e) {
                                    return e.classList.remove("hover")
                                })
                            }, 1e3);
                            var a = e;
                            ["butt", "sex", "fuck", "shit", "tit", "pussy", "ass", "tits", "porn", "sexy", "xnxx", "xxx", "horny", "xvideo", "xvideos", "pornhub", "gangbang", "boobs", "dick", "cock", "milf", "cumshot", "anal"].map(function(e) {
                                return a = a.toLocaleLowerCase().replace(e, "")
                            }), (new w.a).set("userName", a || "", {
                                path: "/",
                                expires: new Date((new Date).getTime() + 3e10)
                            }), this.setState({
                                view: "QuestionView"
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return "QuestionView" === this.state.view ? n.a.createElement(ne, this.props) : n.a.createElement("div", {
                                className: "max-w-2xl px-3 p-2 border-2 bg-gray-100 border-gray-600 rounded-xlg mt-4"
                            }, n.a.createElement(se, this.props), n.a.createElement(ce, Object.assign({}, this.props, {
                                setUserName: this.setUserName,
                                updateUserName: this.updateUserName,
                                userName: this.state.userName
                            })), n.a.createElement("div", {
                                className: "text-center mt-4"
                            }, n.a.createElement(T, Object.assign({}, this.props, {
                                name: this.props.requestorName
                            }))))
                        }
                    }]), a
                }(n.a.Component),
                se = function(e) {
                    var a = e.setColor,
                        t = e.requestorName;
                    return t ? n.a.createElement("div", {
                        className: "text-center"
                    }, n.a.createElement(Q, {
                        title: "2019 Friendship Dare"
                    }), n.a.createElement("div", {
                        className: "mt-3"
                    }, n.a.createElement(A, {
                        title: n.a.createElement(n.a.Fragment, null, n.a.createElement("b", null, t), " has invited you to Friendship Dare Test")
                    }), n.a.createElement(A, {
                        title: n.a.createElement(n.a.Fragment, null, "Lets see, How well you know ", n.a.createElement("b", null, t, "?"))
                    }))) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                        className: "flex justify-center"
                    }, n.a.createElement(I, {
                        setColor: a
                    })), n.a.createElement(Q, {
                        title: "2019 Friendship Dare"
                    }))
                },
                ce = function(e) {
                    var a = e.color,
                        t = e.setUserName,
                        r = e.updateUserName,
                        i = e.userName;
                    return n.a.createElement("div", {
                        className: "mt-3 text-left"
                    }, n.a.createElement(A, {
                        title: "Enter your Full Name:"
                    }), n.a.createElement("input", {
                        type: "text",
                        name: "fname",
                        className: "form-control mt-1 focus:outline-0 focus:shadow-outline h-10 border-2 border-gray-500 rounded-lg px-2 block w-full appearance-none leading-normal",
                        placeholder: "Full Name",
                        value: i,
                        onChange: function(e) {
                            return r(e)
                        }
                    }), n.a.createElement("div", {
                        className: "mt-3 text-center",
                        "data-tooltip": "Enter valid name"
                    }, n.a.createElement(L, {
                        text: "\ud83d\udc49   Start  \ud83d\udc48",
                        color: a,
                        onClick: function(e) {
                            return t(i)
                        }
                    })))
                },
                oe = function(e) {
                    function a() {
                        return Object(d.a)(this, a), Object(f.a)(this, Object(m.a)(a).apply(this, arguments))
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            (window.adsbygoogle = window.adsbygoogle || []).push({})
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.a.createElement("div", {
                                className: "mt-2"
                            }, n.a.createElement("ins", {
                                className: "adsbygoogle",
                                style: {
                                    display: "inline-block",
                                    width: "300px",
                                    height: "50px"
                                },
                                "data-ad-client": "ca-pub-9429667863782963",
                                "data-ad-slot": "1340381933"
                            }))
                        }
                    }]), a
                }(n.a.Component),
                ue = function(e) {
                    function a() {
                        return Object(d.a)(this, a), Object(f.a)(this, Object(m.a)(a).apply(this, arguments))
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            (window.adsbygoogle = window.adsbygoogle || []).push({})
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.a.createElement("ins", {
                                className: "adsbygoogle",
                                style: {
                                    display: "block"
                                },
                                "data-ad-client": "ca-pub-9429667863782963",
                                "data-ad-slot": "6932427534",
                                "data-ad-format": "auto",
                                "data-full-width-responsive": "true"
                            })
                        }
                    }]), a
                }(n.a.Component),
                de = function(e) {
                    var a = e.href;
                    return n.a.createElement("div", {
                        class: "mx-1 md:mx-4"
                    }, n.a.createElement("div", {
                        className: "max-w-2xl mx-auto p-2 font-bold text-white rounded-lg antialiased leading-relaxed bg-blue-700",
                        style: {
                            background: "linear-gradient(45deg, rgb(240, 148, 51) 0px, rgb(230, 104, 60) 25%, rgb(220, 39, 67) 50%, rgb(204, 35, 102) 75%, rgb(188, 24, 136) 100%)"
                        }
                    }, "Know what your friends think about you? -", n.a.createElement("a", {
                        href: a,
                        style: {
                            "text-decoration": "underline"
                        }
                    }, "Click here")))
                },
                le = function(e) {
                    function a(e) {
                        var t;
                        return Object(d.a)(this, a), (t = Object(f.a)(this, Object(m.a)(a).call(this, e))).setColor = t.setColor.bind(Object(p.a)(t)), t.state = {
                            color: "#fc4d21"
                        }, t
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "setColor",
                        value: function(e) {
                            this.setState({
                                color: e
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, a = void 0;
                            return this.props.rquestedQuizId ? this.props.rquestedQuizId === this.props.completedQuizId ? a = n.a.createElement(K, {
                                color: this.state.color,
                                setColor: this.setColor,
                                quizId: this.props.completedQuizId,
                                name: "You",
                                rows: this.props.completedQuizDetails ? this.props.completedQuizDetails.scores : []
                            }) : this.props.requestedQuizDetails ? (e = this.props.rquestedQuizId, a = void 0 !== C(e) ? n.a.createElement(K, {
                                color: this.state.color,
                                setColor: this.setColor,
                                requestedQuizId: this.props.rquestedQuizId,
                                rows: this.props.requestedQuizDetails ? this.props.requestedQuizDetails.scores : [],
                                name: this.props.requestedQuizDetails ? this.props.requestedQuizDetails.name : ""
                            }) : n.a.createElement(ie, {
                                color: this.state.color,
                                setColor: this.setColor,
                                originalQuizId: this.props.rquestedQuizId,
                                originalAnswers: this.props.requestedQuizDetails ? this.props.requestedQuizDetails.questions : [],
                                requestorName: this.props.requestedQuizDetails ? this.props.requestedQuizDetails.name : "",
                                rows: this.props.requestedQuizDetails ? this.props.requestedQuizDetails.scores : []
                            })) : a = n.a.createElement("div", {
                                className: "max-w-3xl px-3 p-2 bg-gray-100 border-2 border-gray-600 rounded-xlg mt-3"
                            }, n.a.createElement("div", {
                                className: " flex flex-column item-center justify-center"
                            }, n.a.createElement(Q, {
                                title: "loading"
                            }), n.a.createElement("div", {
                                className: "my-5 flex-5 h-8 w-8 mx-auto"
                            }, n.a.createElement("img", {
                                className: "bg-cover mx-auto",
                                src: "/images/loadig.gif",
                                alt: "loading"
                            })))) : a = this.props.completedQuizId ? n.a.createElement(K, {
                                color: this.state.color,
                                setColor: this.setColor,
                                quizId: this.props.completedQuizId,
                                name: "You",
                                rows: this.props.completedQuizDetails ? this.props.completedQuizDetails.scores : []
                            }) : n.a.createElement(ie, {
                                color: this.state.color,
                                setColor: this.setColor
                            }), n.a.createElement(n.a.Fragment, null, n.a.createElement(O, {
                                color: this.state.color,
                                href: "/",
                                showLogout: this.props.completedQuizId
                            }), n.a.createElement(oe, null), n.a.createElement(de, {
                                href: "https://secret.quizplaying.com/?ref=guess"
                            }), n.a.createElement("div", {
                                className: "max-w-2xl mx-auto p-2"
                            }, a), n.a.createElement(ue, null), n.a.createElement("div", {
                                className: "max-w-2xl mx-auto p-2 font-semibold text-gray-700 antialiased leading-relaxed"
                            }, "Enter your Name, Create your Quiz and Share it with your friends on Facebook or Whatsapp. Once your friends attempt the quiz you will see the results on leaderboard."))
                        }
                    }]), a
                }(n.a.Component),
                fe = function(e) {
                    function a(e) {
                        var t;
                        return Object(d.a)(this, a), (t = Object(f.a)(this, Object(m.a)(a).call(this, e))).fetchQuizData = t.fetchQuizData.bind(Object(p.a)(t)), t.state = {
                            rquestedQuizId: e.requestedQuizId,
                            completedQuizId: e.completedQuizId
                        }, t.fetchQuizData(), t
                    }
                    return Object(h.a)(a, e), Object(l.a)(a, [{
                        key: "fetchQuizData",
                        value: function() {
                            var e = Object(u.a)(o.a.mark(function e() {
                                var a, t, r, n, i, s, c = this;
                                return o.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = this.props.requestedQuizId, t = this.props.completedQuizId, i = function(e) {
                                                return e.then(function(e) {
                                                    return {
                                                        v: e,
                                                        status: "fulfilled"
                                                    }
                                                }, function(e) {
                                                    return {
                                                        e: e,
                                                        status: "rejected"
                                                    }
                                                })
                                            }, s = [k(a), k(t)], Promise.all(s.map(i)).then(function(e) {
                                                r = e[0].v, n = e[1].v, void 0 === r && (a = void 0), void 0 === n && (t = void 0), c.setState({
                                                    rquestedQuizId: a,
                                                    completedQuizId: t,
                                                    requestedQuizDetails: r,
                                                    completedQuizDetails: n
                                                })
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return n.a.createElement(le, {
                                rquestedQuizId: this.state.rquestedQuizId,
                                requestedQuizDetails: this.state.requestedQuizDetails,
                                completedQuizId: this.state.completedQuizId,
                                completedQuizDetails: this.state.completedQuizDetails
                            })
                        }
                    }]), a
                }(n.a.Component);
            t(59), a.default = window.JustGage;
            s.a.render(n.a.createElement("div", {
                className: "text-center"
            }, n.a.createElement(fe, {
                completedQuizId: (new w.a).get("completed_quiz_id"),
                requestedQuizId: function() {
                    var e = (new j(window.location.href).pathname || "").replace("/quiz/", "").replace("/", "");
                    if (e) return e
                }()
            })), document.getElementById("root"))
        }
    },
    [
        [27, 1, 2]
    ]
]);