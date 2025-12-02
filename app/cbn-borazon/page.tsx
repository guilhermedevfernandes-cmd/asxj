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

const cbnProducts: Product[] = [
  {
    code: "EBN 2000",
    title: "EBN 2000",
    description: "Abrasivo CBN (Nitreto de Boro Cúbico) da série EBN, desenvolvido para aplicações de retificação de materiais ferrosos. Oferece excelente desempenho em operações de alta velocidade e alta precisão.",
    strength: "Força intermediária",
    features: [
      "Retificação de materiais ferrosos",
      "Alta velocidade",
      "Alta precisão",
      "Excelente desempenho"
    ]
  },
  {
    code: "EBN 5000",
    title: "EBN 5000",
    description: "Abrasivo CBN de alta qualidade da série EBN, ideal para aplicações que exigem acabamento superior e controle dimensional preciso. Desenvolvido para retificação de aços endurecidos e materiais ferrosos.",
    strength: "Força alta",
    features: [
      "Alta qualidade",
      "Acabamento superior",
      "Controle dimensional preciso",
      "Aços endurecidos"
    ]
  },
  {
    code: "EBN 6000",
    title: "EBN 6000",
    description: "Abrasivo CBN de alto desempenho da série EBN, oferecendo excelente vida útil e consistência em operações de retificação. Ideal para aplicações que exigem alta produtividade e qualidade.",
    strength: "Força alta",
    features: [
      "Alto desempenho",
      "Excelente vida útil",
      "Alta produtividade",
      "Consistência"
    ]
  },
  {
    code: "EBN 8000",
    title: "EBN 8000",
    description: "Abrasivo CBN premium da série EBN, representando o mais alto nível de qualidade e desempenho. Desenvolvido para aplicações mais exigentes que requerem máxima precisão e acabamento especular.",
    strength: "Força extremamente alta",
    features: [
      "Qualidade premium",
      "Máxima precisão",
      "Acabamento especular",
      "Aplicações exigentes"
    ]
  },
  {
    code: "EBN A",
    title: "EBN A",
    description: "Abrasivo CBN da série EBN tipo A, desenvolvido para aplicações gerais de retificação. Oferece bom equilíbrio entre desempenho e custo-benefício para uma ampla variedade de aplicações.",
    strength: "Força intermediária",
    features: [
      "Aplicações gerais",
      "Bom custo-benefício",
      "Versatilidade",
      "Ampla variedade de aplicações"
    ]
  },
  {
    code: "EBN AA",
    title: "EBN AA",
    description: "Abrasivo CBN de alta qualidade da série EBN tipo AA, oferecendo excelente desempenho em retificação de precisão. Ideal para aplicações que exigem acabamento superior e tolerâncias apertadas.",
    strength: "Força alta",
    features: [
      "Alta qualidade",
      "Retificação de precisão",
      "Acabamento superior",
      "Tolerâncias apertadas"
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
    return "bg-blue-100 text-blue-800 border-blue-300";
  };

  // Determina o caminho da imagem baseado no código do produto
  const getImagePath = (code: string) => {
    if (code.startsWith("EBN")) {
      return `/CBN/${code}.png`;
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
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#15297c] text-white rounded-lg hover:bg-[#0f1f5a] transition-colors duration-300 font-medium group">
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function CBNBorazonPage() {
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
              CBN - Borazon
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Nitreto de Boro Cúbico (CBN) para retificação de materiais ferrosos e aplicações de alta precisão
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Alta estabilidade térmica</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Excelente para materiais ferrosos</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Alta precisão e acabamento</span>
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
              CBN - Borazon - Excelência em Retificação de Materiais Ferrosos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              O Nitreto de Boro Cúbico (CBN), também conhecido como Borazon, é um superabrasivo sintético 
              especialmente desenvolvido para a retificação de materiais ferrosos. Com dureza superior ao 
              diamante em aplicações com aços e ligas ferrosas, o CBN oferece excelente desempenho em 
              operações de alta velocidade e alta precisão.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nossa linha de produtos CBN (série EBN) é desenvolvida para oferecer o melhor desempenho em 
              cada tipo de aplicação, desde retificação de precisão até operações de alta produtividade. 
              Os abrasivos CBN são ideais para retificação de aços endurecidos, aços rápidos, aços ferramenta 
              e outras ligas ferrosas que exigem acabamento superior e controle dimensional preciso.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Tamanhos disponíveis:</strong> 20/30, 30/40, 40/45, 45/50, 50/60, 60/70, 70/80, 80/100, 100/120, 120/140, 140/170, 170/200, 200/230, 230/270, 270/325, 325/400 e 400/500.
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
            {cbnProducts.map((product, index) => (
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
                    Retificação de aços endurecidos
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Retificação de aços rápidos e aços ferramenta
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Retificação de precisão de componentes automotivos
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Operações de alta velocidade e alta produtividade
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vantagens do CBN</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Dureza superior ao diamante em materiais ferrosos
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Alta estabilidade térmica e química
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Excelente vida útil e consistência
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#15297c] rounded-full mr-2" />
                    Acabamento superior e controle dimensional preciso
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

