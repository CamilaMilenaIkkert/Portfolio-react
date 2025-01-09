"use client";
"use strict";
exports.__esModule = true;
var button_1 = require("./ui/button");
var image_1 = require("next/image");
var react_1 = require("react");
var BackToTopButton = function () {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    react_1.useEffect(function () {
        var toggleVisibility = function () {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return function () { return window.removeEventListener("scroll", toggleVisibility); };
    }, []);
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (react_1["default"].createElement(button_1.Button, { onClick: scrollToTop, className: "fixed bottom-5 right-5 sm:right-12 z-50  p-3 shadow-lg transition-opacity duration-300 " + (isVisible ? "opacity-100" : "opacity-0"), "aria-label": "Back to the top" },
        react_1["default"].createElement(image_1["default"], { src: "/toTopButton.svg", alt: "Back to the top", width: 30, height: 30 })));
};
exports["default"] = BackToTopButton;
