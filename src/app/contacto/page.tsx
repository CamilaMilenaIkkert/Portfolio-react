"use client";
import { useState } from "react"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
    user_name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    user_phone: z.string().min(7, { message: "El número de teléfono debe ser válido." }),
    user_email: z.string().email({ message: "Debe ser un correo electrónico válido." }),
    user_message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

const ContactForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            user_name: "",
            user_phone: "",
            user_email: "",
            user_message: "",
        },
    });

    const [isSent, setIsSent] = useState(false);


    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        try {
            const response = await emailjs.send(
                "service_s961ey8",
                "template_yjp9y76",
                data,
                "XpkhrdG1-uEeWv7b9"
            );
            console.log("Correo enviado:", response); 
            setIsSent(true);
            form.reset();
            setTimeout(() => {
                setIsSent(false);
            }, 3000);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
        }
    };
    return (
        <section className="flex items-center flex-col min-h-screen text-primaryText font-body">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="md:min-w-[540px] sm:w-auto p-16 bg-background rounded-[12px] shadow-lg my-8">
                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="user_name"
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="text-accent font-title text-2xl">Nombre y Apellido</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu nombre aquí" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Tel */}
                    <FormField
                        control={form.control}
                        name="user_phone"
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="text-accent font-title text-2xl">Teléfono</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tu número de teléfono" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="user_email"
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="text-accent font-title text-2xl">Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="tu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Message */}
                    <FormField
                        control={form.control}
                        name="user_message"
                        render={({ field }) => (
                            <FormItem className="my-8">
                                <FormLabel className="text-accent font-title text-2xl">Mensaje</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="¿Por qué deseas contactarte?" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit */}
                    <Button type="submit" className="text-accent bg-background text-[1rem] h-auto border-accent border hover:bg-accent hover:text-[#121212] hover:scale-110 py-2 px-4 mt-8 rounded-lg  transition-all duration-300 ease-in-out hover:shadow-xl">
                        Enviar
                    </Button>
                </form>
            </Form>
            {isSent && <p className="text-green-500 mt-4">¡Mensaje enviado correctamente!</p>}
        </section>
    );
};

export default ContactForm;
