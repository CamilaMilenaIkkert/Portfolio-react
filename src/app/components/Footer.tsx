import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6">
            <div className="container mx-auto flex flex-col items-center">
                <p className="mb-4">© 2024 Mi Portafolio. Todos los derechos reservados.</p>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;
