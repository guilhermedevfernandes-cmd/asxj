
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15297c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="relative w-32 sm:w-40 h-12 sm:h-16 mb-3 sm:mb-4">
              <Image
                src="/logo-branca.png"
                alt="AS&ASJ Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Excelência e desempenho em diamantes industriais e superabrasivos desde 1981.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#D98C3C]">Links Rápidos</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                  <a href="#inicio" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-[#D98C3C]">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#15297c] flex-shrink-0" />
                <a href="tel:+5599999999998" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors break-all">
                  (99) 9999-9998
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#15297c] flex-shrink-0" />
                <a href="mailto:contato@asasj.com.br" className="text-sm sm:text-base text-gray-300 hover:text-[#15297c] transition-colors break-all">
                  contato@asasj.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            &copy; {currentYear} AS&ASJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
