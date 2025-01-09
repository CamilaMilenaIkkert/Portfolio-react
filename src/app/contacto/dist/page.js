"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react"); // Importa useState desde React
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("zod");
var emailjs_com_1 = require("emailjs-com");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var FormSchema = zod_2.z.object({
    user_name: zod_2.z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    user_phone: zod_2.z.string().min(7, { message: "El número de teléfono debe ser válido." }),
    user_email: zod_2.z.string().email({ message: "Debe ser un correo electrónico válido." }),
    user_message: zod_2.z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." })
});
var ContactForm = function () {
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(FormSchema),
        defaultValues: {
            user_name: "",
            user_phone: "",
            user_email: "",
            user_message: ""
        }
    });
    var _a = react_1.useState(false), isSent = _a[0], setIsSent = _a[1];
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, emailjs_com_1["default"].send("service_s961ey8", "template_yjp9y76", data, "XpkhrdG1-uEeWv7b9")];
                case 1:
                    response = _a.sent();
                    console.log("Correo enviado:", response);
                    setIsSent(true);
                    form.reset();
                    setTimeout(function () {
                        setIsSent(false);
                    }, 3000);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error al enviar el formulario:", error_1);
                    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("section", { className: "flex items-center flex-col min-h-screen text-primaryText font-body" },
        React.createElement(form_1.Form, __assign({}, form),
            React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "md:min-w-[540px] sm:w-auto p-16 bg-background rounded-[12px] shadow-lg my-8" },
                React.createElement(form_1.FormField, { control: form.control, name: "user_name", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: "my-8" },
                            React.createElement(form_1.FormLabel, { className: "text-accent font-title text-2xl" }, "Nombre y Apellido"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(input_1.Input, __assign({ placeholder: "Tu nombre aqu\u00ED" }, field))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: "user_phone", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: "my-8" },
                            React.createElement(form_1.FormLabel, { className: "text-accent font-title text-2xl" }, "Tel\u00E9fono"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(input_1.Input, __assign({ placeholder: "Tu n\u00FAmero de tel\u00E9fono" }, field))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: "user_email", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: "my-8" },
                            React.createElement(form_1.FormLabel, { className: "text-accent font-title text-2xl" }, "Email"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(input_1.Input, __assign({ placeholder: "tu@email.com" }, field))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(form_1.FormField, { control: form.control, name: "user_message", render: function (_a) {
                        var field = _a.field;
                        return (React.createElement(form_1.FormItem, { className: "my-8" },
                            React.createElement(form_1.FormLabel, { className: "text-accent font-title text-2xl" }, "Mensaje"),
                            React.createElement(form_1.FormControl, null,
                                React.createElement(textarea_1.Textarea, __assign({ placeholder: "\u00BFPor qu\u00E9 deseas contactarte?" }, field))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                React.createElement(button_1.Button, { type: "submit", className: "text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 mt-8 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl" }, "Enviar"))),
        isSent && React.createElement("p", { className: "text-green-500 mt-4" }, "\u00A1Mensaje enviado correctamente!")));
};
exports["default"] = ContactForm;
