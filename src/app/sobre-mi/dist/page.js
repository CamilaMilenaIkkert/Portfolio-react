"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var image_1 = require("next/image");
var SobreMi = function () {
    var _a = react_1.useState(""), text = _a[0], setText = _a[1];
    var phrases = ["<Frontend developer./>", "<Estudiante./>", "<Creativa./>"];
    var typingSpeed = 100;
    react_1.useEffect(function () {
        var currentPhraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;
        var type = function () {
            var currentPhrase = phrases[currentPhraseIndex];
            var updatedText = isDeleting
                ? currentPhrase.substring(0, charIndex - 1)
                : currentPhrase.substring(0, charIndex + 1);
            setText(updatedText);
            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, 1000);
            }
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type, 500);
            }
            else {
                charIndex += isDeleting ? -1 : 1;
                setTimeout(type, typingSpeed);
            }
        };
        type();
    }, []);
    return (react_1["default"].createElement("section", { className: "flex items-center flex-col min-h-screen text-primaryText" },
        react_1["default"].createElement("div", { className: "my-28 text-white font-title uppercase" },
            react_1["default"].createElement("h1", { className: "md:text-6xl sm:text-4xl" },
                text,
                react_1["default"].createElement("span", { className: "blinking-cursor" }, "|"))),
        react_1["default"].createElement("div", { className: "bg-surface my-20 md:flex-row md:w-[75vw]  md:py-[50px] md:px-[30px] rounded-[24px] flex items-center shadow-xl sm:flex-col sm:w-[100%] sm:p-8" },
            react_1["default"].createElement(image_1["default"], { src: "/profile-1.jpeg", alt: "Pofile image", width: 280, height: 300, className: "md:w-[280px] md:h-[300px] object-cover md:ml-[-60px] md:mr-[30px] md:rounded-[24px] shadow-xl sm:w-[45vw] sm:h-[45vw] sm:rounded-[50%] sm:py-0 opacity-80" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "font-title text-[4rem] font-bold text-accent sm:mx-8 sm:text-[3rem]" }, "Sobre m\u00ED"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", { className: "mt-4 text-primary font-body sm:p-8" },
                        "Soy estudiante de Desarrollo de Software Libre en la Universidad Nacional del Litoral. Me apasiona aprender constantemente nuevas tecnolog\u00EDas que complementen mi formaci\u00F3n acad\u00E9mica y me permitan crecer tanto a nivel personal como profesional. Me destaco por ser una persona dedicada y detallista en cada tarea o proyecto que realizo, siempre priorizando la responsabilidad de cumplir con las entregas en tiempo y forma.",
                        react_1["default"].createElement("br", null),
                        "Aspiro a poder encontrar un espacio colaborativo que me permita seguir adquiriendo conocimientos mientras contribuyo con mi creatividad y habilidades al logro de objetivos comunes.")))),
        react_1["default"].createElement("div", { className: "mt-12 md:w-[70%] rounded-[15px] bg-surface shadow-xl p-16 sm:w-[100%]" },
            react_1["default"].createElement("h3", { className: "text-[4rem] text-accent font-title sm:text-[3rem]" }, "Mis estudios"),
            react_1["default"].createElement("ul", { className: "mt-4 list-disc list-item text-lg md:ml-24 sm:ml-8" },
                react_1["default"].createElement("li", null, "Farmacia - Universidad Nacional de Rosario(UNR) - [2017 - 2021]"),
                react_1["default"].createElement("li", null,
                    "Cursos [2021 - 2022]:",
                    react_1["default"].createElement("ol", { className: "list-circle ml-8" },
                        react_1["default"].createElement("li", null, "Programaci\u00F3n desde cero con l\u00F3gica de programaci\u00F3n (Egg)"),
                        react_1["default"].createElement("li", null, "Argentina programa I (L\u00F3gica de programaci\u00F3n)"),
                        react_1["default"].createElement("li", null, "Desarrollo web (HTML, CSS, JS, jQuery / CoderHouse)"),
                        react_1["default"].createElement("li", null, "Frontend (React, node, VUE / Codo a Codo - Ciudad de Buenos Aires)"))),
                react_1["default"].createElement("li", null, "Desarrollo de Softwrare Libre - Universidad Nacional del Litoral(UNL) - [2023 - 2025]"))),
        react_1["default"].createElement("div", { className: "mt-12 md:w-[85vw] rounded-[15px] bg-surface shadow-xl p-16 sm:w-[100%]" },
            react_1["default"].createElement("h3", { className: "text-[4rem] text-accent font-title sm:text-[3rem]" }, "Mi recorrido de aprendizaje"),
            react_1["default"].createElement("p", { className: "mt-4 text-lg font-body" },
                "Desde que comenc\u00E9 a interesarme por la programaci\u00F3n, estudi\u00E9 en numerosos cursos y tambi\u00E9n de manera autodidacta. Mis primeros acercamientos fueron a trav\u00E9s de freeCodeCamp con HTML y CSS, para luego reforzar esos conocimientos con cursos en CoderHouse, donde aprend\u00ED HTML, CSS, JavaScript y jQuery, junto con otras tecnolog\u00EDas o nociones \u00FAtiles para el desarrollo web, como SEO, Sass, GitHub y la aplicaci\u00F3n de librer\u00EDas en general. ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                "Adem\u00E1s de estos cursos, tambi\u00E9n particip\u00E9 en uno de l\u00F3gica de programaci\u00F3n que me brind\u00F3 herramientas para aprender de manera m\u00E1s sencilla a organizar las instrucciones de un algoritmo para un programa. ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                "Tambi\u00E9n he realizado cursos de testing y frontend con tecnolog\u00EDas como React y Node.js en el programa Codo a Codo de la Ciudad de Buenos Aires. Esto despert\u00F3 a\u00FAn m\u00E1s mi inter\u00E9s por aprender sobre frontend, lo que, de manera autodidacta, me ha llevado a profundizar en herramientas como Next.js, Tailwind CSS y otras librer\u00EDas de dise\u00F1o. ",
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                "Finalmente, gracias a mi carrera, he podido profundizar en otras \u00E1reas, tales como administraci\u00F3n con Linux, bases de datos con MySQL, y servidores con Apache y PHP.")),
        react_1["default"].createElement("div", { className: "mt-8 flex justify-center items-center" },
            react_1["default"].createElement(button_1.Button, { className: "text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl", variant: "secondary", onClick: function () { return window.open('/cv.pdf', '_blank'); } }, "Descargar CV"))));
};
exports["default"] = SobreMi;
