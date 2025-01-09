"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var button_1 = require("@/components/ui/button");
var Navbar = function () {
    return (React.createElement("nav", { className: "flex flex-row items-center p-5" },
        React.createElement("div", { className: "flex items-center justify-center" },
            React.createElement("div", { className: "flex flex-row justify-between mt-20" },
                React.createElement(link_1["default"], { href: "/proyectos" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "text-primaryText md:text-[1.75rem] sm:text-[1.5rem] font-title flex items-center hover:scale-105 transition ease-in duration-300 hover:bg-altBackground" }, "Proyectos")),
                React.createElement(link_1["default"], { href: "/contacto" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "text-primaryText md:text-[1.75rem] sm:text-[1.5rem] font-title flex items-center hover:scale-105 transition ease-in duration-300  hover:bg-altBackground" }, "Contacto"))))));
};
exports["default"] = Navbar;
