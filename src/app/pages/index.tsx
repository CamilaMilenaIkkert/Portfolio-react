import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto my-8">
                <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
                <p className="mb-4">Hola, soy [Tu Nombre], desarrolladora frontend especializada en React y Next.js...</p>
                <div>
                    <a href="/cv.pdf" className="text-blue-600 underline">Descargar CV</a>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
