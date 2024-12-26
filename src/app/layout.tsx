import type { Metadata } from "next";
import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio Personal",
  description: "Portfolio personal creado con next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
            <body className="flex flex-col align-center m-0 min-h-screen bg-background text-foreground font-body">
              <Header />
              <main className="my-16">{children}</main>
              <Footer />
            </body>
          </html>
          );
}