"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { Sparkles, Zap, Shield, TrendingUp, ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface Product {
  code: string;
  title: string;
  description: string;
  strength: string;
  features: string[];
}

const naturalDiamondProducts: Product[] = [
  {
    code: "NS-1-P",
    title: "NS-1-P",
    description: "Diamante natural de alta qualidade, selecionado criteriosamente para aplicações industriais que exigem características únicas de tenacidade e forma cristalina. Ideal para ferramentas de dressagem e aplicações especiais.",
    strength: "Força alta",
    features: [
      "Alta qualidade",
      "Tenacidade excepcional",
      "Forma cristalina única",
      "Aplicações industriais",
      "Dressagem de rebolos"
    ]
  },
  {
    code: "NS-1-S",
    title: "NS-1-S",
    description: "Diamante natural selecionado, caracterizado por excelente estabilidade térmica e propriedades cristalográficas superiores. Desenvolvido para aplicações que requerem máxima precisão e confiabilidade.",
    strength: "Força alta",
    features: [
      "Estabilidade térmica superior",
      "Propriedades cristalográficas únicas",
      "Máxima precisão",
      "Alta confiabilidade",
      "Aplicações críticas"
    ]
  },
  {
    code: "NS-100-P",
    title: "NS-100-P",
    description: "Diamante natural premium da série NS, representando o mais alto nível de qualidade e desempenho. Caracterizado por cristais bem formados, livres de inclusões e com propriedades térmicas excepcionais.",
    strength: "Força extremamente alta",
    features: [
      "Qualidade premium",
      "Cristais bem formados",
      "Livres de inclusões",
      "Propriedades térmicas excepcionais",
      "Aplicações de alta tecnologia"
    ]
  }
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  
  const MAX_DESCRIPTION_LENGTH = 150;
  const shouldTruncate = product.description.length > MAX_DESCRIPTION_LENGTH;
  const truncatedDescription = shouldTruncate 
    ? product.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
    : product.description;

  const getStrengthColor = (strength: string) => {
    if (strength.includes("extremamente")) return "bg-red-100 text-red-800 border-red-300";
    if (strength.includes("alta") && !strength.includes("extremamente")) return "bg-orange-100 text-orange-800 border-orange-300";
    if (strength.includes("intermediária") || strength.includes("intermediaria")) return "bg-blue-100 text-blue-800 border-blue-300";
    if (strength.includes("Friável") || strength.includes("Friavel")) return "bg-purple-100 text-purple-800 border-purple-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  // Determina o caminho da imagem baseado no código do produto
  const getImagePath = (code: string) => {
    if (code.startsWith("NS")) {
      return `/Diamante Naturais/${code}.png`;
    }
    return null;
  };

  const imagePath = getImagePath(product.code);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#15297c]/5 to-[#15297c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Placeholder - Substitua por imagem real quando disponível */}
      <div className="relative w-full h-48 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden group-hover:from-gray-100 group-hover:via-gray-150 group-hover:to-gray-250 transition-all duration-300">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={`${product.code} - ${product.title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="relative w-20 h-20 mx-auto mb-3 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                <ImageIcon className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 font-semibold mb-1">Imagem do produto</p>
              <p className="text-xs text-gray-400">{product.code}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="relative p-6">
        {/* Logo EID */}
        <div className="relative w-20 h-20 mb-4">
          <Image
            src="/Logo da eid.png"
            alt="Logo EID"
            fill
            className="object-contain brightness-0 opacity-70"
          />
        </div>
        
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.code}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStrengthColor(product.strength)}`}>
            {product.strength}
          </span>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 leading-relaxed">
            {isExpanded ? product.description : truncatedDescription}
          </p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-sm font-medium text-[#15297c] hover:text-[#0f1f5a] transition-colors"
            >
              {isExpanded ? "Ler menos" : "Ler mais"}
            </button>
          )}
        </div>

        <div className="space-y-2 mb-4">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-2 bg-[#15297c] text-white rounded-lg hover:bg-[#0f1f5a] transition-colors duration-300 font-medium group">
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function DiamanteNaturaisPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#15297c] via-[#0f1f5a] to-[#15297c] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/foto de fundo overlay diamante natural.webp"
            alt="Fundo Diamante Natural"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15297c]/95 via-[#15297c]/85 to-[#15297c]/75" />
        </div>
        
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Diamante Natural
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Diamante natural selecionado para aplicações industriais que exigem características únicas de tenacidade, forma cristalina e propriedades térmicas superiores
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Alta estabilidade térmica</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Tenacidade excepcional</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Propriedades cristalográficas únicas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diamante Natural - Excelência em Qualidade Natural
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Os diamantes naturais compreendem diamantes de origem geológica, criteriosamente selecionados e classificados para aplicações industriais específicas que se beneficiam das características únicas dos cristais naturais. Formados sob condições extremas de pressão e temperatura no interior da Terra ao longo de bilhões de anos, os diamantes naturais apresentam propriedades cristalográficas, térmicas e mecânicas distintas que os tornam insubstituíveis em determinadas aplicações críticas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa seleção inclui diamantes naturais em diversas classes de qualidade, formas cristalinas e faixas granulométricas, desde pedras de dressagem monocristalinas até pós de diamante natural para aplicações especiais. A AS&ASJ mantém parcerias com fornecedores internacionais certificados, garantindo procedência, qualidade e conformidade com regulamentações internacionais para diamantes de uso industrial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {naturalDiamondProducts.map((product, index) => (
              <ProductCard key={product.code} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Especificações Técnicas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicações Principais</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Dressagem de rebolos de retificação convencionais
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Ferramentas especiais de corte para materiais não-metálicos
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Aplicações que exigem alta condutividade térmica
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Processos onde a tenacidade do cristal é crítica
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vantagens do Diamante Natural</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Propriedades cristalográficas únicas e superiores
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Alta condutividade térmica natural
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Tenacidade excepcional dos cristais naturais
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Estabilidade térmica em altas temperaturas
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#15297c] to-[#0f1f5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Precisa de mais informações?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Entre em contato conosco e descubra a solução perfeita para sua aplicação
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D98C3C] text-white font-semibold rounded-lg hover:bg-[#D98C3C]/90 transition-colors duration-300 shadow-lg"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

