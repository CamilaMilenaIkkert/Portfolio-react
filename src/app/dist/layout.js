"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./global.css");
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
var backToTopButton_1 = require("@/components/backToTopButton");
var google_1 = require("next/font/google");
var amatic = google_1.Amatic_SC({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-amatic'
});
var playwrite_de_grund = google_1.Playwrite_DE_Grund({
    weight: '300',
    variable: '--font-playwrite'
});
exports.metadata = {
    title: "Camila Ikkert",
    description: "Portfolio personal creado con next.js",
    icons: {
        icon: "/icons/icon.svg"
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "es", className: amatic.variable + " " + playwrite_de_grund.variable },
        React.createElement("body", { className: "flex flex-col align-center m-0 min-h-screen bg-[#121212] tracking-wider" },
            React.createElement(Header_1["default"], null),
            React.createElement("main", { className: "my-16" }, children),
            React.createElement(Footer_1["default"], null),
            React.createElement(backToTopButton_1["default"], null))));
}
exports["default"] = RootLayout;
