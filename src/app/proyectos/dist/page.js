"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var ProjectsPage = function () {
    var projects = [
        {
            title: 'Proyecto 1',
            description: 'Mi primera página web, desarrollada con HTML y CSS. Es un ecommerce sencillo que marcó el inicio de mis estudios en desarrollo web.',
            imageUrl: '/proyecto1.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Farmacia-Raspo',
            repoUrl2: 'https://app.netlify.com/sites/farmacia-raspo/overview'
        },
        {
            title: 'Proyecto 2',
            description: 'Proyecto desarrollado principalmente en JavaScript como respaldo para un curso de programación en este lenguaje.',
            imageUrl: '/proyecto2.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/E-commerce',
            repoUrl2: 'https://app.netlify.com/sites/e-commerce-ejemplo/overview'
        },
        {
            title: 'Proyecto 3',
            description: 'Juego desarrollado principalmente en JavaScript, creado como parte de un curso donde aprendí los fundamentos del lenguaje.',
            imageUrl: '/proyecto3.png',
            repoUrl1: 'https://github.com/CamilaMilenaIkkert/Atrapa-al-raton',
            repoUrl2: 'https://app.netlify.com/sites/juego-raton/overview'
        },
    ];
    return (React.createElement("section", { className: "flex items-center flex-col min-h-screen " },
        React.createElement("div", { className: "mb-16 md:w-[60%] sm:w-[100%] mx-auto bg-background p-8 rounded-[12px]" },
            React.createElement("h1", { className: "text-[4rem] font-title text-accent mb-4" }, "Mis Proyectos"),
            React.createElement("p", { className: "font-body text-primaryText" },
                "En esta p\u00E1gina puedes explorar algunos de los proyectos que he realizado. Estos proyectos se encuentran cargados en GitHub y Netlify, y muestran el avance en mis estudios desde mis comienzos. ",
                React.createElement("br", null),
                " Para ver el proyecto haz click en el link de GitHub o de Netlify.")),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6" }, projects.map(function (project, index) { return (React.createElement(card_1.Card, { key: index, className: "mt-6 w-96" },
            React.createElement(card_1.CardHeader, { className: "h-80" },
                React.createElement("img", { src: project.imageUrl, alt: project.title, className: "w-full h-48 object-cover rounded-lg" })),
            React.createElement(card_1.CardContent, { className: "text-center" },
                React.createElement(card_1.CardTitle, { className: 'text-accent font-title text-[2rem]' }, project.title),
                React.createElement(card_1.CardDescription, { className: 'text-primaryText mt-2' }, project.description)),
            React.createElement(card_1.CardFooter, { className: "pt-0 flex gap-3" },
                React.createElement(link_1["default"], { href: project.repoUrl1, target: "_blank", className: "inline-block" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "flex items-center gap-4 text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl" },
                        "Link GitHub",
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-4 w-4" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" })))),
                React.createElement(link_1["default"], { href: project.repoUrl2, target: "_blank" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "flex items-center gap-4 text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl" },
                        "Link Netlify",
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-4 w-4" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); }))));
};
exports["default"] = ProjectsPage;
