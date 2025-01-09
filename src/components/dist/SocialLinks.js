"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var SocialLinks = function () {
    return (React.createElement("div", { className: "flex gap-8 mt-4" },
        React.createElement("a", { href: "https://www.linkedin.com/in/camila-milena-ikkert/", target: "_blank", rel: "noopener noreferrer" },
            React.createElement(image_1["default"], { src: "/linkedin.svg", alt: "LinkedIn", width: 40, height: 40 })),
        React.createElement("a", { href: "https://github.com/CamilaMilenaIkkert", target: "_blank", rel: "noopener noreferrer" },
            React.createElement(image_1["default"], { src: "/github.svg", alt: "GitHub", width: 40, height: 40 })),
        React.createElement("a", { href: "https://wa.me/3476393938", target: "_blank", rel: "noopener noreferrer" },
            React.createElement(image_1["default"], { src: "/whatsapp.svg", alt: "WhatsApp", width: 40, height: 40 }))));
};
exports["default"] = SocialLinks;
