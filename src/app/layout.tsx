import type { Metadata } from "next";
import "./global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/backToTopButton";
import { Amatic_SC, Playwrite_DE_Grund } from 'next/font/google';


const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-amatic',
})

const playwrite_de_grund = Playwrite_DE_Grund({
  weight: '300',
  variable: '--font-playwrite',
})

export const metadata: Metadata = {
  title: "Camila Ikkert",
  description: "Portfolio personal creado con next.js",
  icons: {
    icon: "/icon.svg"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${amatic.variable} ${playwrite_de_grund.variable}`}>
            <body className="flex flex-col align-center m-0 min-h-screen bg-[#121212] tracking-wider">
              <Header />
              <main className="my-16">{children}</main>
              <Footer />
              <BackToTopButton/>
            </body>
          </html>
          );
}