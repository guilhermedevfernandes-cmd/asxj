"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Sparkles, Zap, Shield, TrendingUp, ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface Product {
  code: string;
  title: string;
  description: string;
  strength: string;
  features: string[];
}

const resinoideProducts: Product[] = [
  {
    code: "EDA 2021",
    title: "EDA 2021",
    description: "Cristal friável, geralmente imperfeito e irregular, com superfícies ásperas e predominantemente translúcido. Adequado para uma ampla variedade de aplicações, tanto para a retificação úmida quanto seca de carboneto de tungstênio.",
    strength: "Friável",
    features: [
      "Cristal friável",
      "Superfícies ásperas",
      "Aplicações econômicas",
      "Retificação úmida e seca",
      "Disponível com níquel (30% ou 56%)",
      "Disponível com cobre (50%)"
    ]
  },
  {
    code: "EFRD-S",
    title: "EFRD-S",
    description: "Nova geração de diamante para uso em rebolos de ligante resinoide e vitrificado. Desenvolvido para alcançar arestas de corte em nível micron, apresentando fraturamento microcontrolado e autocorte, resultando em um cristal autoafiável que gera uma ação de corte livre e alta retenção no ligante.",
    strength: "Friável",
    features: [
      "Nova geração",
      "Arestas de corte em nível micron",
      "Fraturamento microcontrolado",
      "Cristal autoafiável",
      "Alta retenção no ligante",
      "Acabamento de superfície premium"
    ]
  },
  {
    code: "EDA 2023",
    title: "EDA 2023",
    description: "Produto desenvolvido para alcançar arestas de corte em nível micron, apresentando fraturamento microcontrolado e autocorte. Cristal autoafiável que gera uma ação de corte livre e alta retenção no ligante, proporcionando longa vida útil, corte rápido e acabamento de superfície premium.",
    strength: "Força intermediária",
    features: [
      "Arestas de corte em nível micron",
      "Fraturamento microcontrolado",
      "Cristal autoafiável",
      "Alta retenção no ligante",
      "Corte livre em baixas temperaturas",
      "Acabamento premium"
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="relative w-20 h-20 mx-auto mb-3 bg-white/80 rounded-lg flex items-center justify-center shadow-sm">
              <ImageIcon className="w-10 h-10 text-gray-400" />
            </div>
            <p className="text-xs text-gray-500 font-semibold mb-1">Imagem do produto</p>
            <p className="text-xs text-gray-400">{product.code}</p>
          </div>
        </div>
        {/* 
        TODO: Quando tiver as imagens, descomente e ajuste o caminho:
        Coloque as imagens em: /public/products/liga-resinoide/
        Nome dos arquivos: eda-2021.jpg, efrd-s.jpg, eda-2023.jpg
        
        <Image
          src={`/products/liga-resinoide/${product.code.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}.jpg`}
          alt={`${product.code} - ${product.title}`}
          fill
          className="object-cover"
          priority={index < 3}
        />
        */}
      </div>
      
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.code}</h3>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStrengthColor(product.strength)}`}>
              {product.strength}
            </span>
          </div>
          <div className="p-3 bg-[#15297c]/10 rounded-lg group-hover:bg-[#15297c] transition-colors duration-300">
            <Sparkles className="w-6 h-6 text-[#15297c] group-hover:text-white transition-colors duration-300" />
          </div>
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
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#15297c] text-white rounded-lg hover:bg-[#0f1f5a] transition-colors duration-300 font-medium group">
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function LigaResinoidePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#15297c] via-[#0f1f5a] to-[#15297c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Liga Resinoide
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Diamantes para rebolos de ligante resinoide e aplicações de retificação de metais não ferrosos
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Estrutura mosaico multicristalina</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Corte rápido e longa vida útil</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Superfície áspera e formato uniforme</span>
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
              Liga Resinoide - Excelência em Retificação
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A linha de ligante resinoide é utilizada em rebolos de diamante resinoide e em uma ampla gama de aplicações 
              de retificação de metais não ferrosos. Todos os produtos apresentam uma estrutura mosaico multicristalina, 
              superfície áspera e formato uniforme.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As bordas afiadas geradas durante o corte, a retificação, o lapidamento e o acabamento oferecem características 
              únicas e consistentes, resultando em um produto de longa vida útil e corte rápido em toda a nossa linha.
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
            {resinoideProducts.map((product, index) => (
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tamanhos Disponíveis</h3>
                <p className="text-gray-700 mb-2">
                  Nossa linha EDA ligante resinoide está disponível nos tamanhos:
                </p>
                <p className="text-gray-600">
                  50/60, 60/70, 70/80, 80/100, 100/120, 120/140, 140/170, 170/200, 200/230, 
                  230/270, 270/325, 325/400 e 400/500.
                </p>
                <p className="text-gray-600 mt-2">
                  Versão micras: 20-40, 15-25, 10-20, 4-8.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Revestimentos</h3>
                <p className="text-gray-700 mb-2">
                  Revestimento tradicional em níquel disponível em 30%, 56%, 60% ou em qualquer outra 
                  porcentagem personalizada, conforme a necessidade do cliente.
                </p>
                <p className="text-gray-600">
                  Consulte a página de "revestimentos" para informações adicionais e demais tipos de revestimento.
                </p>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FECD28] text-[#15297c] font-semibold rounded-lg hover:bg-[#FECD28]/90 transition-colors duration-300 shadow-lg"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

