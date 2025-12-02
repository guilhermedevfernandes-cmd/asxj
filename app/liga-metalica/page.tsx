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

const esnProducts: Product[] = [
  {
    code: "ESN 050",
    title: "ESN 050",
    description: "Cristal blocado de baixo custo e corte livre. Seu formato irregular proporciona ótimas características de corte e penetração. Solução perfeita para ligantes de baixa temperatura.",
    strength: "Força intermediária",
    features: ["Baixo custo", "Corte livre", "Formato irregular", "Ideal para baixa temperatura"]
  },
  {
    code: "ESN 200",
    title: "ESN 200",
    description: "Este é outro material de resistência média e ótimo custo-benefício. Possui uma proporção menor de cristais cubo-octaédricos do que o ESN 300, mas ainda assim é um produto bem formado, com alta estabilidade térmica, que tende a funcionar extremamente bem em uma ampla variedade de aplicações onde é necessário um grão resistente.",
    strength: "Força intermediária",
    features: ["Resistência média", "Ótimo custo-benefício", "Alta estabilidade térmica", "Bem formado", "Ampla variedade de aplicações"]
  },
  {
    code: "ESN 300",
    title: "ESN 300",
    description: "Grão de resistência média e uso geral, com alta proporção de cristais cubo-octaédricos. Diamante sintético forte e versátil, ideal para aplicações de média a alta exigência.",
    strength: "Força intermediária",
    features: ["Uso geral", "Alta proporção cubo-octaédrica", "Corte de granito e mármore", "Materiais refratários"]
  },
  {
    code: "ESN 500",
    title: "ESN 500",
    description: "Produto de alta resistência e boa estabilidade térmica. Com alta porcentagem de cristais cubo-octaédricos perfeitamente formados, oferece excelente custo-benefício.",
    strength: "Força alta",
    features: ["Alta resistência", "Boa estabilidade térmica", "Cristais bem formados", "Corte livre e longa durabilidade"]
  },
  {
    code: "ESN 600",
    title: "ESN 600",
    description: "Cristais altamente formados e praticamente livres de inclusões. Ideal para aplicações que exigem grãos de alta resistência, como corte e perfuração de pedras muito duras.",
    strength: "Força alta",
    features: ["Cristais altamente formados", "Livres de inclusões", "Alta resistência", "Granito e materiais refratários"]
  },
  {
    code: "ESN 700",
    title: "ESN 700",
    description: "Contém cristais cubo-octaédricos bem definidos e livres de inclusões. Alta estabilidade térmica e grande resistência fazem deste o produto ideal para aplicações exigentes.",
    strength: "Força extremamente alta",
    features: ["Cristais bem definidos", "Livres de inclusões", "Alta estabilidade térmica", "Aplicações exigentes"]
  },
  {
    code: "ESN 770",
    title: "ESN 770",
    description: "Representa o nível máximo de resistência da série ESN. Apresenta cristais cubo-octaédricos uniformes, com estabilidade térmica excepcional e livres de inclusões visíveis.",
    strength: "Força extremamente alta",
    features: ["Máxima resistência", "Cristais uniformes", "Estabilidade térmica excepcional", "Alto desempenho"]
  }
];

const mbProducts: Product[] = [
  {
    code: "MB 200 - UM",
    title: "MB 200 - UM",
    description: "Abrasivo de granulometria micrométrica da série MB, desenvolvido para aplicações que exigem precisão e acabamento de superfície de alta qualidade. Ideal para processos de polimento e lapidação em materiais diversos.",
    strength: "Granulometria micrométrica",
    features: [
      "Granulometria controlada",
      "Alta precisão",
      "Acabamento de superfície superior",
      "Aplicações diversas"
    ]
  },
  {
    code: "MB 300 - UM",
    title: "MB 300 - UM",
    description: "Abrasivo de granulometria micrométrica da série MB, oferecendo excelente desempenho em operações de polimento e acabamento. Desenvolvido para aplicações que requerem controle dimensional preciso e superfícies livres de defeitos.",
    strength: "Granulometria micrométrica",
    features: [
      "Granulometria controlada",
      "Alta precisão",
      "Acabamento de superfície superior",
      "Aplicações diversas"
    ]
  },
  {
    code: "MB 400 – UM",
    title: "MB 400 – UM",
    description: "Abrasivo de granulometria micrométrica da série MB, representando o mais alto nível de refinamento para operações de polimento e lapidação. Ideal para aplicações que exigem acabamentos especulares e tolerâncias dimensionais extremamente apertadas.",
    strength: "Granulometria micrométrica",
    features: [
      "Granulometria controlada",
      "Alta precisão",
      "Acabamento de superfície superior",
      "Aplicações diversas"
    ]
  }
];

const edaProducts: Product[] = [
  {
    code: "EDA 2010",
    title: "EDA 2010",
    description: "Cristais de diamante irregulares. Grão abrasivo de corte livre e econômico, com boas propriedades térmicas. Revestido com 56% de níquel, adequado para liga resinoide.",
    strength: "Força intermediária",
    features: ["Corte livre", "Econômico", "Boas propriedades térmicas", "Revestimento de níquel"]
  },
  {
    code: "EDA 2050",
    title: "EDA 2050",
    description: "Produto de formato cristalino irregular, porém consistente. Grão para liga metálica de corte rápido, com excelentes propriedades de retenção na liga.",
    strength: "Força intermediária",
    features: ["Corte rápido", "Excelente retenção", "Ferramentas eletrolíticas", "Liga metálica"]
  },
  {
    code: "EDA 2125",
    title: "EDA 2125",
    description: "Cristal mundialmente reconhecido, caracterizado por formato bem definido e blocoso. Propriedades de corte rápido o tornam um abrasivo versátil para ampla variedade de aplicações.",
    strength: "Força alta",
    features: ["Formato bem definido", "Corte rápido", "Versátil", "Equilíbrio durabilidade/acabamento"]
  },
  {
    code: "EDA 2215",
    title: "EDA 2215",
    description: "Abrasivo de diamante sintético especialmente desenvolvido, processado para gerar cristal resistente e bem formado. Projetado para alto desempenho em vidro e cerâmica.",
    strength: "Força alta",
    features: ["Cristal resistente", "Bem formado", "Alto desempenho", "Vidro e cerâmica"]
  },
  {
    code: "EDA 2300",
    title: "EDA 2300",
    description: "Grão de alto desempenho para liga metálica, adequado para ferramentas com liga metálica e eletrolíticas. Altamente resistente a fraturas por impacto.",
    strength: "Força extremamente alta",
    features: ["Alto desempenho", "Resistente a impacto", "Cerâmica e vidro", "Concreto reforçado"]
  },
  {
    code: "EDA 2360",
    title: "EDA 2360",
    description: "Cristal cubo-octaédrico de alta resistência e tenacidade, com faces bem desenvolvidas. Força de impacto significativamente aprimorada para retificação e polimento.",
    strength: "Força extremamente alta",
    features: ["Alta tenacidade", "Faces bem desenvolvidas", "Retificação e polimento", "Vidro e cerâmica"]
  },
  {
    code: "EDA 2395",
    title: "EDA 2395",
    description: "Abrasivo de resistência excepcional, com cristais bem definidos em forma cubo-octaédrica, livres de inclusões. Alta estabilidade térmica e resistência ao impacto.",
    strength: "Força extremamente alta",
    features: ["Resistência excepcional", "Livres de inclusões", "Alta estabilidade térmica", "Acabamento de bordas finas"]
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
    // Os arquivos estão nomeados exatamente como o código do produto (ex: "ESN 050.png")
    if (code.startsWith("ESN")) {
      return `/ESN/${code}.png`;
    } else if (code.startsWith("EDA")) {
      // EDA 2215: tenta primeiro sem espaço (novo), se não existir usa com espaço
      if (code === "EDA 2215") {
        // Primeiro tenta o arquivo sem espaço (novo)
        return `/EDA/EDA2215.png`;
      }
      return `/EDA/${code}.png`;
    } else if (code.startsWith("MB")) {
      return `/MB/${code}.png`;
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
            onError={(e) => {
              // Fallback: se EDA2215.png não existir, tenta EDA 2215.png
              if (product.code === "EDA 2215" && imagePath.includes("EDA2215")) {
                const target = e.target as HTMLImageElement;
                target.src = "/EDA/EDA 2215.png";
              }
            }}
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

export default function LigaMetalicaPage() {
  const [selectedSeries, setSelectedSeries] = useState<"ESN" | "EDA" | "MB">("ESN");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentProducts = selectedSeries === "ESN" ? esnProducts : selectedSeries === "EDA" ? edaProducts : mbProducts;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#15297c] via-[#0f1f5a] to-[#15297c] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/arquivos novos atualizacao/foto de fundo liga metalica .jpg"
            alt="Fundo Liga Metálica"
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
              Liga Metálica
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Diamantes sintéticos de alta qualidade para aplicações de serração e perfuração
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Alta estabilidade térmica</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Elevada resistência</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Desempenho superior</span>
              </div>
            </div>
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
                onClick={() => setSelectedSeries("ESN")}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  selectedSeries === "ESN"
                    ? "bg-[#15297c] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src="/Logo da eid.png"
                    alt="Logo EID"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Série ESN</span>
                </div>
                <p className="text-xs mt-1 opacity-80">Para ligantes metálicos</p>
              </button>
              <button
                onClick={() => setSelectedSeries("EDA")}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  selectedSeries === "EDA"
                    ? "bg-[#15297c] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src="/Logo da eid.png"
                    alt="Logo EID"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>Série EDA</span>
                </div>
                <p className="text-xs mt-1 opacity-80">Para ligantes metálicos e eletrolíticos</p>
              </button>
              <button
                onClick={() => setSelectedSeries("MB")}
                className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex flex-col items-center ${
                  selectedSeries === "MB"
                    ? "bg-[#15297c] text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <div className="relative w-16 h-16 mb-2">
                  <Image
                    src="/Logo da eid.png"
                    alt="Logo EID"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Série MB</span>
                </div>
                <p className="text-xs mt-1 opacity-80">Abrasivos de Granulometria Micrométrica</p>
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
              {selectedSeries === "ESN" ? (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Série ESN - Diamantes Sintéticos para Ligantes Metálicos
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Nossa série ESN é composta por diamantes sintéticos ideais para aplicações de serração e perfuração. 
                    Graças ao baixo e uniforme teor de inclusões metálicas, os cristais apresentam alta estabilidade térmica 
                    e elevada resistência das partículas. Disponível nos tamanhos: 16/18, 18/20, 20/25, 20/30, 25/30, 30/35, 
                    30/40, 35/40, 35/45, 40/45, 40/50, 45/50, 45/60, 50/60 e 50/70. Para opções com revestimento, visite também nossa página de "Revestimentos".
                  </p>
                </div>
              ) : selectedSeries === "EDA" ? (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Série EDA - Diamantes para Ligantes Metálicos e Eletrolíticos
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A série EDA é formada por diamantes sintéticos desenvolvidos para ligantes metálicos e eletrolíticos. 
                    Utilizados na usinagem de materiais não ferrosos, os produtos da EID foram criados para oferecer o melhor 
                    desempenho em cada tipo de aplicação. Disponível nos tamanhos: 60/70, 70/80, 80/100, 100/120, 120/140, 
                    140/170, 170/200, 200/230, 270/325, 325/400 e 400/500.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Série MB - Abrasivos de Granulometria Micrométrica
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A série MB é composta por abrasivos de granulometria micrométrica desenvolvidos para aplicações que exigem precisão extrema e acabamento de superfície de alta qualidade. Estes produtos são ideais para processos de polimento, lapidação e acabamento em diversos materiais, oferecendo controle dimensional preciso e superfícies livres de defeitos.
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

