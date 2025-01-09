"use client";
"use strict";
exports.__esModule = true;
var button_1 = require("./ui/button");
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
    return (react_1["default"].createElement(button_1.Button, { onClick: scrollToTop, className: "fixed bottom-5 right-5 z-50 bg-gray-800 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 " + (isVisible ? "opacity-100" : "opacity-0"), "aria-label": "Back to the top" },
        react_1["default"].createElement("svg", { viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: "w-6 h-6" },
            react_1["default"].createElement("path", { d: "M540.535,1000.535 C540.145,1000.926 539.512,1000.926 539.121,1000.535 L535,996.414 L535,1007 C535,1007.55 534.552,1008 534,1008 C533.447,1008 533,1007.55 533,1007 L533,996.414 L528.879,1000.535 C528.488,1000.926 527.854,1000.926 527.465,1000.535 C527.074,1000.146 527.074,999.512 527.465,999.121 L533.121,993.465 C533.361,993.225 533.689,993.15 534,993.205 C534.311,993.15 534.639,993.225 534.879,993.465 L540.535,999.121 C540.926,999.512 540.926,1000.146 540.535,1000.535 L540.535,1000.535 Z M546,985 L522,985 C519.791,985 518,986.791 518,989 L518,1013 C518,1015.21 519.791,1017 522,1017 L546,1017 C548.209,1017 550,1015.21 550,1013 L550,989 C550,986.791 548.209,985 546,985 L546,985 Z" }))));
};
exports["default"] = BackToTopButton;
