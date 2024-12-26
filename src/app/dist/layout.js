"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./global.css");
var Header_1 = require("@/components/Header");
var Footer_1 = require("@/components/Footer");
exports.metadata = {
    title: "Portfolio Personal",
    description: "Portfolio personal creado con next.js"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "es" },
        React.createElement("body", { className: "flex flex-col align-center m-0 min-h-screen bg-background text-foreground font-body" },
            React.createElement(Header_1["default"], null),
            React.createElement("main", { className: "my-16" }, children),
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;
