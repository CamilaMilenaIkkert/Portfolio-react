const SocialLinks = () => {
    return (
        <div className="flex gap-4">
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="mailto:tu-email@gmail.com">
                <img src="/mail.svg" alt="Email" className="w-6 h-6" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
            </a>
        </div>
    );
};

export default SocialLinks;
