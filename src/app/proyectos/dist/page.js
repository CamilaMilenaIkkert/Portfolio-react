"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var ProjectsPage = function () {
    var projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción breve del proyecto 1. Aquí puedes explicar de qué trata el proyecto.',
            imageUrl: '/proyecto1.jpg',
            repoUrl1: 'https://github.com/usuario/proyecto2',
            repoUrl2: 'https://'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción breve del proyecto 2. Aquí puedes explicar de qué trata el proyecto.',
            imageUrl: '/proyecto2.jpg',
            repoUrl1: 'https://github.com/usuario/proyecto2',
            repoUrl2: 'https://'
        },
    ];
    return (React.createElement("div", { className: "container mx-auto p-6" },
        React.createElement("section", { className: "mb-16 md:w-[60%] mx-auto bg-accent p-8 rounded-[24px] bg-opacity-50" },
            React.createElement("h1", { className: "text-xl font-bold text-black mb-4" }, "Mis Proyectos"),
            React.createElement("p", { className: "text-lg text-primary" },
                "En esta p\u00E1gina puedes explorar algunos de los proyectos que he realizado. Estos proyectos se encuentran cargados en GitHub y Netlify, y muestran el avance en mis estudios desde mis comienzos. ",
                React.createElement("br", null),
                " Para ver el proyecto haz click en el link de GitHub o de Netlify.")),
        React.createElement("section", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, projects.map(function (project, index) { return (React.createElement(card_1.Card, { key: index, className: "mt-6 w-96" },
            React.createElement(card_1.CardHeader, { className: "h-80" },
                React.createElement("img", { src: project.imageUrl, alt: project.title, className: "w-full h-48 object-cover rounded-lg" })),
            React.createElement(card_1.CardContent, { className: "text-center" },
                React.createElement(card_1.CardTitle, { className: 'text-black font-title font-semibold' }, project.title),
                React.createElement(card_1.CardDescription, { className: 'text-primary mt-2' }, project.description)),
            React.createElement(card_1.CardFooter, { className: "pt-0 flex gap-3" },
                React.createElement(link_1["default"], { href: project.repoUrl1, target: "_blank", className: "inline-block" },
                    React.createElement(button_1.Button, { variant: "ghost", className: "text-black flex items-center gap-4" },
                        "Link GitHub",
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-4 w-4" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" })))),
                React.createElement(link_1["default"], { href: project.repoUrl2, target: "_blank" },
                    React.createElement(button_1.Button, { variant: "ghost", className: " text-black flex items-center gap-2" },
                        "Link Netlify",
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2, stroke: "currentColor", className: "h-4 w-4" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" }))))))); }))));
};
exports["default"] = ProjectsPage;
