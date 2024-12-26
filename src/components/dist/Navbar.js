"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Navbar = function () {
    return (React.createElement("nav", { className: "flex flex-row items-center" },
        React.createElement("div", { className: "flex items-center justify-center" },
            React.createElement("div", { className: "flex flex-row justify-between mt-20" },
                React.createElement(link_1["default"], { href: "/proyectos", className: "px-6 py-2 text-secondary text-xl font-bold hover:scale-110 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out" }, "Proyectos"),
                React.createElement(link_1["default"], { href: "/contacto", className: "px-6 py-2 text-secondary text-xl font-bold hover:scale-110 hover:text-white hover:shadow-md transition-all duration-300 ease-in-out" }, "Contacto")))));
};
exports["default"] = Navbar;
