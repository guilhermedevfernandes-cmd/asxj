
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15297c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="relative w-40 h-16 mb-4">
              <Image
                src="/logo-branca.png"
                alt="AS&ASJ Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Excelência e desempenho em diamantes industriais e superabrasivos desde 1981.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FECD28]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                  <a href="#inicio" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#FECD28]">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#15297c]" />
                <a href="tel:+5599999999998" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  (99) 9999-9998
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#15297c]" />
                <a href="mailto:contato@asasj.com.br" className="text-gray-300 hover:text-[#15297c] transition-colors">
                  contato@asasj.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} AS&ASJ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
