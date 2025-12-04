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
  type: string;
  features: string[];
}

const pcdProducts: Product[] = [
  {
    code: "PCD Padrão",
    title: "PCD Padrão",
    description: "Discos inteiros ou cortados de diamante policristalino (PCD) para usinagem de materiais não ferrosos. Ideal para aplicações que exigem alta precisão e durabilidade.",
    type: "PCD - Polycrystalline Diamond",
    features: [
      "Excelente resistência ao desgaste",
      "Alta estabilidade térmica",
      "Aresta de corte extremamente afiada",
      "Acabamento superficial superior"
    ]
  }
  // Adicione mais produtos PCD aqui conforme o catálogo
];

const pcbnProducts: Product[] = [
  {
    code: "PCBN Padrão",
    title: "PCBN Padrão",
    description: "Discos inteiros ou cortados de nitreto cúbico de boro policristalino (PCBN) para usinagem de materiais ferrosos endurecidos. Desempenho superior em altas temperaturas.",
    type: "PCBN - Polycrystalline Cubic Boron Nitride",
    features: [
      "Desempenho excepcional em altas temperaturas",
      "Vida útil muito superior ao carbeto",
      "Estabilidade em corte contínuo e interrompido",
      "Ideal para materiais ferrosos endurecidos"
    ]
  }
  // Adicione mais produtos PCBN aqui conforme o catálogo
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

  // Determina o caminho da imagem baseado no código do produto
  const getImagePath = (code: string, type: string) => {
    // Usa as imagens da pasta FOTOS PRODUTOS PCD
    if (type.includes("PCD")) {
      return `/FOTOS PRODUTOS PCD/Imagem PCD e PCBN.png`;
    } else if (type.includes("PCBN")) {
      return `/FOTOS PRODUTOS PCD/Imagem PCD e PCBN.png`;
    }
    return null;
  };

  const imagePath = getImagePath(product.code, product.type);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#15297c]/5 to-[#15297c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Product Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
            <div className="text-center p-4">
              <div className="relative w-20 h-20 mx-auto mb-3 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
                <ImageIcon className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 font-semibold mb-1">Imagem não disponível</p>
              <p className="text-xs text-gray-400">{product.code}</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="relative p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold border bg-blue-100 text-blue-800 border-blue-300">
            {product.type}
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
          <a
            href="https://wa.me/5511988575232?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#15297c] text-white rounded-lg hover:bg-[#0f1f5a] transition-colors duration-300 font-medium group"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function PCDPage() {
  const [selectedSeries, setSelectedSeries] = useState<"PCD" | "PCBN">("PCD");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentProducts = selectedSeries === "PCD" ? pcdProducts : pcbnProducts;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#15297c] via-[#0f1f5a] to-[#15297c] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/PCD cabeçalho.png"
            alt="Fundo PCD"
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
              PCD & PCBN
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Soluções de Alto Desempenho para Usinagem Industrial
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Alta precisão</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Máxima durabilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Alto desempenho</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Oferecemos materiais de corte em <strong>PCD (Polycrystalline Diamond)</strong> e <strong>PCBN (Polycrystalline Cubic Boron Nitride)</strong> para aplicações que exigem alta precisão, durabilidade e estabilidade térmica. Indicados para indústrias como automotiva, aeroespacial, metalmecânica, hidráulica, madeira, plásticos e compósitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Series Selector */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-100 p-2 rounded-2xl inline-flex gap-2 w-full">
              <button
                onClick={() => setSelectedSeries("PCD")}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  selectedSeries === "PCD"
                    ? "bg-[#15297c] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span>PCD</span>
                </div>
                <p className="text-xs mt-1 opacity-80">Diamante Policristalino</p>
              </button>
              <button
                onClick={() => setSelectedSeries("PCBN")}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  selectedSeries === "PCBN"
                    ? "bg-[#15297c] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Zap className="w-5 h-5" />
                  <span>PCBN</span>
                </div>
                <p className="text-xs mt-1 opacity-80">Nitreto Cúbico de Boro Policristalino</p>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Series Description */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeries}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto text-center"
            >
              {selectedSeries === "PCD" ? (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    PCD – Diamante Policristalino
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Discos inteiros ou cortados de diamante policristalino (PCD). Ideal para usinagem de materiais não ferrosos, o PCD garante excelente resistência ao desgaste, alta estabilidade térmica, aresta de corte extremamente afiada e acabamento superficial superior.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Aplicações:</strong> Alumínio (inclusive alto teor de silício), cobre, plásticos, MDF, madeira, cerâmicas verdes, compósitos e MMC.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    PCBN – Nitreto Cúbico de Boro Policristalino
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Discos inteiros ou cortados de nitreto cúbico de boro policristalino (PCBN). Recomendado para materiais ferrosos endurecidos, o PCBN oferece desempenho excepcional em altas temperaturas, vida útil muito superior ao carbeto e estabilidade em corte contínuo e interrompido.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Aplicações:</strong> Aços endurecidos, ferros fundidos, sinterizados, superligas (ex.: Inconel), componentes automotivos e peças de alta resistência ao desgaste.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSeries}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {currentProducts.map((product, index) => (
                <ProductCard key={product.code} product={product} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Por que escolher nossos materiais?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Alta precisão e repetibilidade</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Redução de custos com retrabalho e setup</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Desempenho superior em processos críticos</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-3 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Suporte técnico especializado para escolha do grau ideal</h3>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale com um especialista
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Precisa de ajuda para escolher o PCD ou PCBN ideal para sua aplicação?
            </p>
            <a
              href="https://wa.me/5511988575232?text=Olá! Gostaria de saber mais sobre PCD e PCBN."
              target="_blank"
              rel="noopener noreferrer"
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
