"use strict";
exports.__esModule = true;
var SocialLinks_1 = require("./SocialLinks");
var Footer = function () {
    return (React.createElement("footer", { className: "absolute bottom-0 left-0 w-full bg-foreground text-secondary p-4 text-center" },
        React.createElement("div", { className: "container mx-auto flex flex-col items-center" },
            React.createElement(SocialLinks_1["default"], null),
            React.createElement("p", { className: "mt-4" }, "\u00A9 2024 Camila Ikkert. Todos los derechos reservados."))));
};
exports["default"] = Footer;
