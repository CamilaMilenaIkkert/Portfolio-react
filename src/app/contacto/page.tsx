"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_phone: "",
        user_email: "",
        user_message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                "service_s961ey8",
                "template_yjp9y76",
                formData,
                "XpkhrdG1-uEeWv7b9"
            )
            .then(
                () => {
                    setIsSent(true);
                    setFormData({
                        user_name: "",
                        user_phone: "",
                        user_email: "",
                        user_message: "",
                    });
                    setTimeout(() => {
                        setIsSent(false);
                    }, 3000);
                },
                (error) => {
                    console.error("Error al enviar el formulario:", error);
                }
            );
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Contáctame</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="user_name"
                    placeholder="Nombre y Apellido"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="tel"
                    name="user_phone"
                    placeholder="Teléfono"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <textarea
                    name="user_message"
                    placeholder="¿Por qué deseas contactarte?"
                    value={formData.user_message}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Enviar
                </button>
            </form>
            {isSent && <p className="text-green-500 mt-4">¡Mensaje enviado correctamente!</p>}
        </div>
    );
};

export default ContactForm;


