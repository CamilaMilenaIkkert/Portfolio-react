import Image from "next/image";
const SocialLinks = () => {
    return (
        <div className="flex gap-8 mt-4">
            <a href="https://www.linkedin.com/in/camila-milena-ikkert/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40}>
            </Image>
            </a>
            <a href="https://github.com/CamilaMilenaIkkert" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={40} height={40}>
            </Image>
            </a>
            <a href="https://wa.me/3476393938" target="_blank" rel="noopener noreferrer" >
            <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40}>
            </Image>
            </a>
        </div>
    );
};

export default SocialLinks;
