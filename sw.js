if (!self.define) {
    let e, i = {};
    const a = (a, s) => (a = new URL(a + ".js", s).href, i[a] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = a, e.onload = i, document.head.appendChild(e)
        } else e = a, importScripts(a), i()
    })).then((() => {
        let e = i[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e
    })));
    self.define = (s, c) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[n]) return;
        let o = {};
        const r = e => a(e, n),
            f = {
                module: {
                    uri: n
                },
                exports: o,
                require: r
            };
        i[n] = Promise.all(s.map((e => f[e] || r(e)))).then((e => (c(...e), o)))
    }
}
define(["./workbox-442d81da"], (function(e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "css/pripol.css",
        revision: "e709ced87c1a2e8cdcc470b05d03ea32"
    }, {
        url: "css/style.css",
        revision: "181c46a5154b6789d254ea4b47ea5782"
    }, {
        url: "images/favicons/192.png",
        revision: "e5b8e38b33e5b16cc0284c9afbd64c39"
    }, {
        url: "images/favicons/android-chrome-512x512.png",
        revision: "0416cf7e5a7f36d222bee45d5f3e3612"
    }, {
        url: "images/favicons/apple-touch-icon.png",
        revision: "b79a827037525266b30e0bb56c4ee04e"
    }, {
        url: "images/favicons/browserconfig.xml",
        revision: "cb6af0c64d0e500e36499806550df354"
    }, {
        url: "images/favicons/favicon-16x16.png",
        revision: "d22601bdf9de0dd059a6fc4d2f50c693"
    }, {
        url: "images/favicons/favicon-32x32.png",
        revision: "a18fd2ed5306e0ec205c76dfdc3e6785"
    }, {
        url: "images/favicons/favicon.ico",
        revision: "5f22de05daeb1c03d90714a74e56665b"
    }, {
        url: "images/favicons/mstile-150x150.png",
        revision: "3b0df17ffe7c3c3d755452c13916a2ec"
    }, {
        url: "images/favicons/safari-pinned-tab.svg",
        revision: "777d49785b8908a6bc6e99f6ad40e01c"
    }, {
        url: "images/jett.png",
        revision: "5b5994e7a777adfef292e8b7c0df02e2"
    }, {
        url: "images/phoenix.png",
        revision: "0060e058fba9385e3f63a1bb37c66003"
    }, {
        url: "images/tool.png",
        revision: "4efb175ae8168988eff7d60425f00d62"
    }, {
        url: "images/vallogo-blck.png",
        revision: "48f70fdab6b96a76e75fe76edd1dce9a"
    }, {
        url: "images/vallogo.png",
        revision: "b85e482815cd74b25dcc6ca79f40c257"
    }, {
        url: "images/vallogo2.png",
        revision: "e40eadc80becb0585b5706ce10f7821a"
    }, {
        url: "images/valorant.ico",
        revision: "53f281f1c4b5fe2bf0e46ca36b53a330"
    }, {
        url: "index.html",
        revision: "feb06343e4b76bb2456086b331759719"
    }, {
        url: "js/login.js",
        revision: "bd29160b0fe369afb38f326a3e2eb639"
    }, {
        url: "manifest.json",
        revision: "8783a289883dd455ee8783b9b9e49629"
    }, {
        url: "pripol.html",
        revision: "1c2b3b8ac48bddec8d1acd19d6757c86"
    }, {
        url: "tofservice.html",
        revision: "75cc176510c35dcdea7a0dfdea0399d9"
    }, {
        url: "weapons/favicons/192.png",
        revision: "e5b8e38b33e5b16cc0284c9afbd64c39"
    }, {
        url: "weapons/favicons/android-chrome-512x512.png",
        revision: "0416cf7e5a7f36d222bee45d5f3e3612"
    }, {
        url: "weapons/favicons/apple-touch-icon.png",
        revision: "b79a827037525266b30e0bb56c4ee04e"
    }, {
        url: "weapons/favicons/browserconfig.xml",
        revision: "cb6af0c64d0e500e36499806550df354"
    }, {
        url: "weapons/favicons/favicon-16x16.png",
        revision: "d22601bdf9de0dd059a6fc4d2f50c693"
    }, {
        url: "weapons/favicons/favicon-32x32.png",
        revision: "a18fd2ed5306e0ec205c76dfdc3e6785"
    }, {
        url: "weapons/favicons/favicon.ico",
        revision: "5f22de05daeb1c03d90714a74e56665b"
    }, {
        url: "weapons/favicons/mstile-150x150.png",
        revision: "3b0df17ffe7c3c3d755452c13916a2ec"
    }, {
        url: "weapons/favicons/safari-pinned-tab.svg",
        revision: "777d49785b8908a6bc6e99f6ad40e01c"
    }, {
        url: "weapons/index.html",
        revision: "4fcf4876cc90328cf0bb7a32770f0558"
    }, {
        url: "weapons/style-weapons.css",
        revision: "f11600f1e54ed356a83a2b2e5e13fd57"
    }, {
        url: "weapons/valbackgrnd.png",
        revision: "8cc95a7a5a6951fa052eaa99913bb8c4"
    }, {
        url: "weapons/weapons.js",
        revision: "5ed2c459688fabe891d8a16d612a2e13"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/, /^source/]
    })
}));

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
})
//# sourceMappingURL=sw.js.map
