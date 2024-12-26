import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer className="bg-foreground text-secondary p-4 text-center mt-auto">
            <div className="container mx-auto flex flex-col items-center">
            <SocialLinks />
                <p className="mt-4">© 2024 Camila Ikkert. Todos los derechos reservados.</p>
                
            </div>
        </footer>
    );
};

export default Footer;
