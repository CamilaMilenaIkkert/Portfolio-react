"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("@/components/ui/button");
var SobreMi = function () {
    return (react_1["default"].createElement("section", { className: "flex flex-col justify-center items-center min-h-screen" },
        react_1["default"].createElement("div", { className: "bg-accent md:flex-row md:w-[75vw] md:max-w-[850px] md:py-[50px] md:px-[30px] rounded-[24px] flex items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:flex-col sm:w-[100%] sm:p-16" },
            react_1["default"].createElement("img", { src: "/profile-1.jpeg", alt: "Mi imagen", className: "md:max-w-[280px] md:w-[35vw] md:h-[300px] object-cover md:ml-[-60px] md:mr-[30px] md:rounded-[24px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:w-[45vw] sm:h-[45vw] sm:rounded-[50%] sm:ml-8 sm:py-0" }),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "font-title text-lg font-bold text-black" }, "Sobre m\u00ED"),
                react_1["default"].createElement("p", { className: " mt-4 text-primary font-body tracking-wide" },
                    "Soy estudiante de Desarrollo de Software Libre en la Universidad Nacional del Litoral. Me apasiona aprender constantemente nuevas tecnolog\u00EDas que complementen mi formaci\u00F3n acad\u00E9mica y me permitan crecer tanto a nivel personal como profesional. Me destaco por ser una persona dedicada y detallista en cada tarea o proyecto que realizo, siempre priorizando la responsabilidad de cumplir con las entregas en tiempo y forma.",
                    react_1["default"].createElement("br", null),
                    "Aspiro a poder encontrar un espacio colaborativo que me permita seguir adquiriendo conocimientos mientras contribuyo con mi creatividad y habilidades al logro de objetivos comunes."))),
        react_1["default"].createElement("div", { className: "mt-12 md:w-[70%] rounded-[15px] bg-opacity-40 bg-secondary p-16 sm:w-[100%]" },
            react_1["default"].createElement("h3", { className: "text-xl font-bold text-black font-title" }, "Mis estudios"),
            react_1["default"].createElement("ul", { className: "mt-4 list-disc list-item text-xl text-primary tracking-wide" },
                react_1["default"].createElement("li", null, "Farmacia - Universidad Nacional de Rosario(UNR) - [2017 - 2021]"),
                react_1["default"].createElement("li", null,
                    "Cursos [2021 - 2022]:",
                    react_1["default"].createElement("ol", { className: "list-circle ml-16 text-lg text-primary" },
                        react_1["default"].createElement("li", null, "Programaci\u00F3n desde cero con l\u00F3gica de programaci\u00F3n (Egg)"),
                        react_1["default"].createElement("li", null, "Argentina programa I (L\u00F3gica de programaci\u00F3n)"),
                        react_1["default"].createElement("li", null, "Desarrollo web (HTML, CSS, JS, jQuery / CoderHouse)"),
                        react_1["default"].createElement("li", null, "Tester (Codo a Codo - Ciudad de Buenos Aires)"),
                        react_1["default"].createElement("li", null, "Frontend (React / Codo a Codo - Ciudad de Buenos Aires)"))),
                react_1["default"].createElement("li", null, "Desarrollo de Softwrare Libre - Universidad Nacional del Litoral(UNL) - [2023 - 2025]"))),
        react_1["default"].createElement("div", { className: "mt-12 md:w-[70%] rounded-[15px] bg-opacity-40 bg-secondary p-16 sm:w-[100%]" },
            react_1["default"].createElement("h3", { className: "text-xl font-bold text-black font-title" }, "Mi recorrido de aprendizaje"),
            react_1["default"].createElement("p", { className: "mt-4 text-lg text-primary font-body tracking-wide" },
                "Desde que comenc\u00E9 a interesarme por la programaci\u00F3n, estudi\u00E9 en numerosos cursos y tambi\u00E9n de manera autodidacta. Mis primeros acercamientos fueron a trav\u00E9s de freeCodeCamp con HTML y CSS, para luego reforzar esos conocimientos con cursos en CoderHouse, donde aprend\u00ED HTML, CSS, JavaScript y jQuery, junto con otras tecnolog\u00EDas o nociones \u00FAtiles para el desarrollo web, como SEO, Sass, GitHub y la aplicaci\u00F3n de librer\u00EDas en general. ",
                react_1["default"].createElement("br", null),
                "Adem\u00E1s de estos cursos, tambi\u00E9n particip\u00E9 en uno de l\u00F3gica de programaci\u00F3n que me brind\u00F3 herramientas para aprender de manera m\u00E1s sencilla a organizar las instrucciones de un algoritmo para un programa. ",
                react_1["default"].createElement("br", null),
                "Tambi\u00E9n he realizado cursos de testing y frontend con tecnolog\u00EDas como React y Node.js en el programa Codo a Codo de la Ciudad de Buenos Aires. Esto despert\u00F3 a\u00FAn m\u00E1s mi inter\u00E9s por aprender sobre frontend, lo que, de manera autodidacta, me ha llevado a profundizar en herramientas como Next.js, Tailwind CSS y otras librer\u00EDas de dise\u00F1o. ",
                react_1["default"].createElement("br", null),
                "Finalmente, gracias a mi carrera, he podido profundizar en otras \u00E1reas, tales como administraci\u00F3n con Linux, bases de datos con MySQL, y servidores con Apache y PHP. ",
                react_1["default"].createElement("br", null))),
        react_1["default"].createElement("div", { className: "mt-8 flex justify-center items-center" },
            react_1["default"].createElement(button_1.Button, { className: "text-white bg-black hover:bg-accent-dark hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-[0_15px_40px_5px_rgba(0,0,0,0.3)]", variant: "secondary", onClick: function () { return window.open('/cv.pdf', '_blank'); } }, "Descargar CV"))));
};
exports["default"] = SobreMi;
