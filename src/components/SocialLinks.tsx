const SocialLinks = () => {
    return (
        <div className="flex gap-8 mt-4">
            <a href="https://www.linkedin.com/in/camila-milena-ikkert/" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 " />
            </a>
            <a href="https://github.com/CamilaMilenaIkkert" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" className="w-8 h-8 " />
            </a>
            <a href="https://wa.me/3476393938" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 " />
            </a>
        </div>
    );
};

export default SocialLinks;
