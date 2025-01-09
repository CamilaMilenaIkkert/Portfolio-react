"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar_1 = require("./Navbar");
var image_1 = require("next/image");
var link_1 = require("next/link");
var Header = function () {
    return (react_1["default"].createElement("header", { className: "h-auto md:p-3 sm:p-8 flex items-center w-[100%] shadow-xl" },
        react_1["default"].createElement("div", { className: "container flex justify-between items-center ml-8" },
            react_1["default"].createElement(link_1["default"], { href: "/" },
                react_1["default"].createElement(image_1["default"], { src: "/CI-light-sinFondo.png", alt: 'Logo', width: 120, height: 100 })),
            react_1["default"].createElement(Navbar_1["default"], null))));
};
exports["default"] = Header;
